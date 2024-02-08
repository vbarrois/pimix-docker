## Build distros
### Packaging the Pimix Release
```
~/projets
    .
    +-- pimix
    |   +-- pimix-data // REST API
    |   +-- pimix-router // Websocket router
    |   +-- pimix-ui // Deprecated
    |   +-- pimix-pwa // Personal Web Application
    |   +-- pimix-translate // Translation files
    |   +-- pimix-docker // Packager
    |   |   +-- dist
```
```sh
cd ~/projets/pimix
```
```sh
docker build . -f pimix-docker/Build -t vbarrois/pimix-builder:latest
```
```sh
sudo rm -rf pimix-docker/dist/*
```
```sh
docker system prune -f
```
```sh
docker run -ti --name pimix-build -v ~/projets/pimix/pimix-docker/dist:/home vbarrois/pimix-builder:latest
```
### Build the Pimix Image on linux/arm
```sh
cd ~/projets/pimix/pimix-docker
```
```sh
docker build . -f Arm -t vbarrois/pimix:<version>
```
```sh
docker tag vbarrois/pimix:<version> pimix:<version>
```
```sh
docker push vbarrois/pimix:arm
```

### Create cronjob to start pimix-player
```sh
crontab -e
```

### RTP Multicast config
```sh
sudo nano /etc/pulse/default.pa
```
```sh
load-module module-null-sink sink_name=rtp format=s16be channels=2 rate=44100 sink_properties="device.description='RTP Multicast Sink'"
load-module module-rtp-send source=rtp.monitor destination=192.168.188.101 port=5004 loop=1
```
```sh
pulseaudio -k
pulseaudio --start
```
