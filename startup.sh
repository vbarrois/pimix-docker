#!/bin/sh

redis-server&

cp -a /usr/src/pimix/pimix-player/. /home/pimix-player

cd /usr/src/pimix/pimix-data
npx sequelize-cli db:seed:all

cd /usr/src/pimix
npx concurrently -c "bgYellowBright,bgGreenBright,bgRedBright,bgBlueBright" "node pimix-router/router.js" "node pimix-data/data.js" "node pimix-data/scanner.js" "node pimix-ui/server.js"
