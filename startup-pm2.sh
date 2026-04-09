#!/bin/sh

# Start nginx
service nginx start

# Start redis
redis-server &

# Run database migrations
cd /usr/src/pimix/pimix-data
npx --no-install sequelize-cli db:migrate
npx --no-install sequelize-cli db:seed:all

# Start all services with PM2
cd /usr/src/pimix
pm2-runtime start ecosystem.config.js
