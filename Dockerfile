FROM node:slim

ENV NODE_ENV production

# install make and python to compile nodejs/sqlite3 on arch architecture
RUN apt-get update || : && apt-get install -y build-essential python nano redis-server

# install wait tool (waiting for redis to be ready before starting scanner)
ENV WAIT_VERSION 2.7.3
ADD https://github.com/ufoscout/docker-compose-wait/releases/download/$WAIT_VERSION/wait /wait
RUN chmod +x /wait

RUN mkdir /usr/src/pimix

ADD pimix-docker/package.json /usr/src/pimix/package.json
ADD pimix-docker/startup.sh /usr/src/pimix/startup.sh
RUN chmod +x /usr/src/pimix/startup.sh

RUN mkdir /home/pimix-player
RUN mkdir /home/music
RUN mkdir /home/covers

RUN npm install webpack webpack-cli 

RUN mkdir /usr/src/pimix/tmp
ADD /pimix-data /usr/src/pimix/tmp/pimix-data
RUN cd /usr/src/pimix/tmp/pimix-data && npm install && rm -rf dist && npx webpack
RUN mv /usr/src/pimix/tmp/pimix-data/dist /usr/src/pimix/pimix-data
RUN rm -R /usr/src/pimix/tmp
ADD /pimix-data/migrations /usr/src/pimix/pimix-data/migrations
ADD /pimix-data/seeders /usr/src/pimix/pimix-data/seeders
ADD /pimix-docker/dbconfig.json /usr/src/pimix/pimix-data/config/config.json

RUN mkdir /usr/src/pimix/tmp
ADD /pimix-router /usr/src/pimix/tmp/pimix-router
RUN cd /usr/src/pimix/tmp/pimix-router && npm install && rm -rf dist && npx webpack
RUN mv /usr/src/pimix/tmp/pimix-router/dist /usr/src/pimix/pimix-router
RUN rm -R /usr/src/pimix/tmp

RUN mkdir /usr/src/pimix/tmp
ADD /pimix-ui /usr/src/pimix/tmp/pimix-ui

RUN cd /usr/src/pimix/tmp/pimix-ui && npm install && rm -rf dist && npx webpack --config webpack.server.config.js && npx webpack --config webpack.config.js
RUN mv /usr/src/pimix/tmp/pimix-ui/dist /usr/src/pimix/pimix-ui
RUN rm -R /usr/src/pimix/tmp

ADD /pimix-docker/redis.conf /etc/redis/redis.conf
ADD /pimix-player/app /usr/src/pimix/pimix-player

RUN adduser --system --group --no-create-home redis
RUN chown redis:redis /var/lib/redis
RUN chmod 770 /var/lib/redis

RUN cd /usr/src/pimix && npm install

ENV MUSIC_FOLDER /home/music
ENV COVER_FOLDER /home/covers

ENTRYPOINT [ "/usr/src/pimix/startup.sh" ]