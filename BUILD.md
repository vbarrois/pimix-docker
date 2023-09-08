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
```
```sh
docker build . -f pimix-docker/Build -t vbarrois/pimix-builder:latest
```
```sh
rm -rf pimix-docker/dist/*
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
docker build . -f Arm -t vbarrois/pimix:arm
```
```sh
docker tag vbarrois/pimix:arm pimix:arm
```
```sh
docker push vbarrois/pimix:arm
```
