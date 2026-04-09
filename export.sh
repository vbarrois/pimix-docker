#!/bin/sh
cp -a /usr/src/pimix/. /home
rm /home/export.sh
# Fix permissions for all files
chmod -R a+r /home