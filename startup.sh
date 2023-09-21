#!/bin/sh

redis-server&

cp -a /usr/src/pimix/pimix-player /home/pimix-player

cd /usr/src/pimix/pimix-data
yarn add sequelize-cli
npx --no-install sequelize-cli db:migrate 
npx --no-install sequelize-cli db:seed:all

service nginx start

cd /usr/src/pimix
npx concurrently -c "bgYellowBright,bgGreenBright,bgRedBright,bgWhiteBright,bgBlueBright,bgWhiteBright" "node pimix-data/pimix-cluster.js" "node pimix-data/scanner.js" "node pimix-data/wifi.js" "node pimix-data/AI.js" "node pimix-router/router.js"
