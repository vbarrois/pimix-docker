## Build distros

### Project Structure
```
~/projets/pimix
    +-- pimix-data      // REST API + Scanner + WiFi services
    +-- pimix-router    // WebSocket router
    +-- pimix-pwa       // Vue.js Progressive Web Application
    +-- pimix-player    // Java audio player
    +-- pimix-translate // Translation files
    +-- pimix-docker    // Docker packager
        +-- dist/       // Built artifacts
        +-- ecosystem.config.js  // PM2 process manager config
```

### Step 1: Build the artifacts
```sh
cd ~/projets/pimix
docker build . -f pimix-docker/Build -t vbarrois/pimix-builder:latest
```

### Step 2: Export artifacts to dist folder
```sh
sudo rm -rf pimix-docker/dist/*
docker system prune -f
docker run -ti --name pimix-build -v ~/projets/pimix/pimix-docker/dist:/home vbarrois/pimix-builder:latest
```

### Step 3: Build the final Docker image (PM2-based)
```sh
cd ~/projets/pimix/pimix-docker
docker build . -t vbarrois/pimix:<version>
```

### Alternative: Build using legacy Arm Dockerfile
```sh
docker build . -f Arm -t vbarrois/pimix:<version>
```

### Push to registry
```sh
docker tag vbarrois/pimix:<version> pimix:<version>
docker push vbarrois/pimix:<version>
```

## PM2 Process Management

The application uses PM2 to manage all services. You can monitor them with:
```sh
docker exec -it mixme pm2 status
docker exec -it mixme pm2 logs
docker exec -it mixme pm2 monit
```

### Services managed by PM2:
- **pimix-data**: REST API server (port 81)
- **pimix-scanner**: Music file scanner
- **pimix-wifi**: WiFi management service
- **pimix-router**: WebSocket router (port 82)
- **pimix-player**: Java audio player

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
