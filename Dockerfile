FROM node:slim

# install make and python to compile nodejs/sqlite3 on arch architecture
RUN apt-get update || : && apt-get install -y build-essential python nano redis-server

# install wait tool (waiting for redis to be ready before starting scanner)
ENV WAIT_VERSION 2.7.3
ADD https://github.com/ufoscout/docker-compose-wait/releases/download/$WAIT_VERSION/wait /wait
RUN chmod +x /wait

ADD pimix-docker/package.json /home/package.json
ADD pimix-docker/startup.sh /home/startup.sh
RUN chmod +x /home/startup.sh

RUN mkdir /home/music
RUN mkdir /home/db

ADD /pimix-data/dist /home/pimix-data
ADD /pimix-player/app /home/pimix-player

ADD /pimix-data/migrations /home/pimix-data/migrations
ADD /pimix-data/seeders /home/pimix-data/seeders
ADD /pimix-data/config/config.json /home/pimix-data/config/config.json
ADD /pimix-ui/dist /home/pimix-ui
ADD /pimix-router/dist /home/pimix-router

COPY pimix-docker/redis.conf /etc/redis/redis.conf
# COPY ./redis.service /etc/systemd/system/redis.system
RUN adduser --system --group --no-create-home redis
RUN chown redis:redis /var/lib/redis
RUN chmod 770 /var/lib/redis

RUN cd /home && npm install

ENV NODE_ENV production

ENTRYPOINT [ "/home/startup.sh" ]