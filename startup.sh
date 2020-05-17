#!/bin/sh

redis-server&

cp -a /usr/src/pimix/pimix-player/. /home/pimix-player

cd /usr/src/pimix/pimix-data
npx sequelize-cli db:migrate 
npx sequelize-cli db:seed:all

/wait

cd /usr/src/pimix
npx concurrently -c "bgBlue.bold,bgMagenta.bold,bgRed,bgGray" "node pimix-router/router.js" "node pimix-data/data.js" "node pimix-data/scanner.js" "node pimix-ui/server.js"
