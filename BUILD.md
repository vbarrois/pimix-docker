## Build distros
### Packaging the Pimix Release
```
~/projets
    .
    +-- pimix
    |   +-- pimix-data
    |   +-- pimix-router
    |   +-- pimix-ui
    |   +-- pimix-docker
    |   |   +-- dist
```
```sh
cd ~/projets/pimix
docker build . -f pimix-docker/Build -t vbarrois/pimix-builder:latest
rm -rf pimix-docker/dist/*
docker system prune -f
docker run -ti --name pimix-build -v ~/projets/pimix/pimix-docker/dist:/home vbarrois/pimix-builder:latest
```
### Build the Pimix Image on linux/arm
```sh
cd ~/projets/pimix/pimix-docker
docker build . -f Arm -t vbarrois/pimix:arm
docker tag vbarrois/pimix:arm pimix:arm
docker push vbarrois/pimix:arm
```
