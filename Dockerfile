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

ADD /pimix-data/package.json /usr/src/pimix/tmp/pimix-data/package.json
ADD /pimix-data/.eslintrc /usr/src/pimix/tmp/pimix-data/.eslintrc
ADD /pimix-data/webpack.config.js /usr/src/pimix/tmp/pimix-data/webpack.config.js
ADD /pimix-data/config /usr/src/pimix/tmp/pimix-data/config
ADD /pimix-data/src /usr/src/pimix/tmp/pimix-data/src
RUN cd /usr/src/pimix/tmp/pimix-data && npm install && rm -rf dist && npx webpack
RUN mv /usr/src/pimix/tmp/pimix-data/dist /usr/src/pimix/pimix-data
ADD /pimix-data/config /usr/src/pimix/pimix-data/config
ADD /pimix-data/migrations /usr/src/pimix/pimix-data/migrations
ADD /pimix-data/seeders /usr/src/pimix/pimix-data/seeders

ADD /pimix-router/package.json /usr/src/pimix/tmp/pimix-router/package.json
ADD /pimix-router/.eslintrc /usr/src/pimix/tmp/pimix-router/.eslintrc
ADD /pimix-router/tsconfig.json /usr/src/pimix/tmp/pimix-router/tsconfig.json
ADD /pimix-router/webpack.config.js /usr/src/pimix/tmp/pimix-router/webpack.config.js
ADD /pimix-router/src /usr/src/pimix/tmp/pimix-router/src
RUN cd /usr/src/pimix/tmp/pimix-router && npm install && rm -rf dist && npx webpack
RUN mv /usr/src/pimix/tmp/pimix-router/dist /usr/src/pimix/pimix-router

ADD /pimix-ui/package.json /usr/src/pimix/tmp/pimix-ui/package.json
ADD /pimix-ui/.babelrc /usr/src/pimix/tmp/pimix-ui/.babelrc
ADD /pimix-ui/tsconfig.json /usr/src/pimix/tmp/pimix-ui/tsconfig.json
ADD /pimix-ui/webpack.config.js /usr/src/pimix/tmp/pimix-ui/webpack.config.js
ADD /pimix-ui/webpack.server.config.js /usr/src/pimix/tmp/pimix-ui/webpack.server.config.js
ADD /pimix-ui/src /usr/src/pimix/tmp/pimix-ui/src
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