#!/bin/sh

redis-server&

cd /home/pimix-data
npx sequelize-cli db:migrate 
npx sequelize-cli db:seed:all

cd /home
npx concurrently -c "bgBlue.bold,bgMagenta.bold,bgRed,bgGray" "node pimix-router/router.js" "node pimix-data/data.js" "node pimix-data/scanner.js" "node pimix-ui/server.js"
