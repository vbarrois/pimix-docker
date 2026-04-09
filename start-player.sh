#!/bin/sh
cd /usr/src/pimix/pimix-player
java -Dfile.encoding=UTF-8 -Djava.library.path=natives/linux64/:natives/linux32/ -cp "pimix-player.jar:lib/*:pimix-wifi.jar" main.MixMe