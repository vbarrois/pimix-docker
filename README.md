# Start MixMe with docker
```sh
docker run \
  --privileged=true \
  --name mixme \
  --restart always \
  -p 80:80 \
  -p 81:81 \
  -p 82:82 \
  -v /home:/home \
  --device /dev/snd \
  -e PULSE_SERVER=unix:${XDG_RUNTIME_DIR}/pulse/native \
  -v ${XDG_RUNTIME_DIR}/pulse/native:${XDG_RUNTIME_DIR}/pulse/native \
  -v ~/.config/pulse/cookie:/root/.config/pulse/cookie \
  --group-add $(getent group audio | cut -d: -f3) \
vbarrois/mixme:x386.latest
```
## optional MQTT credentials
```sh
  -e MQTT_BROKER=
  -e MQTT_USER=
  -e MQTT_PASSWORD=
```


# Start Deemix container
```sh
docker run \
  -d \
  --name Deemix \
  --restart always \ 
  -v /home/music:/Downloads \
  -e PUID=1000 \
  -e PGID=1000 \
  -e ARL=1234567 \
  -e UMASK_SET=022 \
  -e DEEZUI=false \
  -p 83:6595 \
registry.gitlab.com/bockiii/deemix-docker
```