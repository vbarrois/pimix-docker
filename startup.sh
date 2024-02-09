#!/bin/sh
service nginx start

redis-server&

cd /usr/src/pimix/pimix-data
npx --no-install sequelize-cli db:migrate 
npx --no-install sequelize-cli db:seed:all

cd /usr/src/pimix
npx concurrently -c "bgYellowBright,bgGreenBright,bgRedBright,bgWhiteBright,bgBlueBright,bgWhiteBright" "node pimix-data/pimix-cluster.js" "node pimix-data/scanner.js" "node pimix-data/wifi.js" "node pimix-router/router.js" "./start-player.sh"
