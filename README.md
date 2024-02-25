![image](https://github.com/vbarrois/pimix-docker/assets/13450645/c7dee780-4c92-4188-8732-5573d149b70e)


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
  -e MIXMENAME=MyMixerName \
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

## optional Discord bot
```sh
  -e DISCORD_TOKEN=
  -e DISCORD_CLIENTID=
```

# Start Deemix container
```sh
docker run \
  -d \
  --name Deemix \
  -v /home/music:/Downloads \
  -e PUID=1000 \
  -e PGID=1000 \
  -e UMASK_SET=022 \
  -e DEEMIX_SINGLE_USER=true \
  -p 83:6595 \
registry.gitlab.com/bockiii/deemix-docker
```
