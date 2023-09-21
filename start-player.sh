#!/bin/sh
cd /home/pimix-player

/usr/src/pimix/wait-for-it.sh 127.0.0.1:81 --strict --timeout=60
java -jar pimix-player.jar