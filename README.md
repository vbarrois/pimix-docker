```sh
docker build . -f Dockerfile -t pimix
```

```sh
docker run -ti -v pimix:/home -v /home/vbarrois/Musique/wbom:/home/music/wbom -p 80:80 -p 82:82 -p 81:81 pimix
```
