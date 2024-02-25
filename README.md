# Mixme
MixMe est bien plus qu'un simple lecteur de musique - c'est une plateforme privée collaborative conçue pour centraliser et diffuser votre musique .
Disponible via votre navigateur préféré, MixMe offre une expérience immersive où chaque utilisateur devient le DJ de sa propre bande-son.

## Centralisation de Votre Musique
Accédez à toute votre collection de MP3 depuis un seul et même emplacement, éliminant la fragmentation de vos fichiers musicaux. Plus de recherche fastidieuse à travers différents appareils - MixMe simplifie et centralise votre bibliothèque musicale.

## Interaction Collaborative
Offrant une plateforme participative, MixMe invite chaque utilisateur à contribuer à la sélection musicale. Participez en votant pour vos morceaux préférés, créez et gérez vos playlists personnalisées, et partagez vos découvertes musicales avec d'autres passionnés.

## Lecture Sans Interruption
Dites adieu aux interruptions entre les morceaux. MixMe assure une transition fluide et sans faille entre les chansons, créant ainsi une expérience d'écoute ininterrompue et immersive. Votre propre radio sans les pubs.

## Personnalisation Avancée
Configurez des filtres de lecture automatique pour affiner votre expérience musicale en fonction de vos préférences. De la création de favoris à la personnalisation de vos playlists, MixMe vous donne le contrôle total sur votre flux musical.

## Comment ça Marche
MixMe est accessible via votre réseau local, permettant à chaque utilisateur, famille, amis, connectés d'explorer, de voter et de contribuer à la playlist partagée. L'interface conviviale offre une navigation intuitive, rendant la découverte et la gestion de la musique aussi simple que quelques clics.

![image](https://github.com/vbarrois/pimix-docker/assets/13450645/c7dee780-4c92-4188-8732-5573d149b70e)

![image](https://github.com/vbarrois/pimix-docker/assets/13450645/d996cf5b-baed-4bed-b37a-0702eb233489)

![image](https://github.com/vbarrois/pimix-docker/assets/13450645/907c8184-3af7-45b0-90d8-6fa0158268b0)

![image](https://github.com/vbarrois/pimix-docker/assets/13450645/beed40ac-d053-49cc-aa04-f4f35af11d83)

![image](https://github.com/vbarrois/pimix-docker/assets/13450645/7103e252-5316-4387-9348-4228db86d7ef)


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
  -v /home/music:/downloads \
  -e PUID=1000 \
  -e PGID=1000 \
  -e UMASK_SET=022 \
  -e DEEMIX_SINGLE_USER=true \
  -p 83:6595 \
registry.gitlab.com/bockiii/deemix-docker
```
