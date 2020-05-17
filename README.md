Pimix Installation Guide

Get the Raspbian Buster Lite image (https://www.raspberrypi.org/downloads/raspbian/)\\\
Burn the Buster image on SD with Balena Etcher (https://www.balena.io/etcher/)




```sh
docker build . -f pimix-docker/Dockerfile -t vbarrois/pimix:latest
```

```sh
docker run -ti --name pimix -v /home:/home -p 80:80 -p 82:82 -p 81:81 vbarrois/pimix:latest
```

```sh
docker tag local-image:tagname new-repo:tagname
docker push new-repo:tagname
```
