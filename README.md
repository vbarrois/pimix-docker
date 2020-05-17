```sh
docker build . -f pimix-docker/Dockerfile -t vbarrois/pimix:latest
```

```sh
docker run -ti --name pimix -v ~/pimix-player:/home/pimix-player -v ~/music:/home/music -p 80:80 -p 82:82 -p 81:81 vbarrois/pimix:latest
```

```sh
docker tag local-image:tagname new-repo:tagname
docker push new-repo:tagname
```
