# Pimix Installation Guide

## Pi4 installation

### Burn Raspbian image
Download the Raspbian Buster Lite image (https://www.raspberrypi.org/downloads/raspbian/)

Burn the Buster image to the SD with Balena Etcher (https://www.balena.io/etcher/)

### Enable SSH
Pull the SD card out then plug it back in, use a file explorer to create an empty ssh file in the root of the boot disk

### Add WIFI Network
Create a file in the root of boot called: ```wpa_supplicant.conf```. Then paste the following into it (adjusting for your [ISO 3166 alpha-2 country code](https://en.wikipedia.org/wiki/List_of_ISO_3166_country_codes), network name and network password):

```
country=US
ctrl_interface=DIR=/var/run/wpa_supplicant GROUP=netdev
update_config=1

network={
    ssid="NETWORK-NAME"
    psk="NETWORK-PASSWORD"
}
```
### First start

Eject the micro SD card, boot the Raspberry Pi and login over Wifi
```sh
ssh-keygen -R raspberrypi.local
ssh pi@raspberry.local
```

### Software installation
```sh
sudo raspi-config
```
Select the options for changing the hostname and password. On a new image, it is also recommended to expand the file system (now under the Advanced options). Once the changes are made, reboot.

```sh
sudo apt-get update -y
sudo apt-get upgrade -y
sudo  apt-get install curl -y
curl -sSL https://get.docker.com | sh
sudo usermod -aG docker pi
sudo apt-get install default-jre -y
echo fs.inotify.max_user_watches=524288 | sudo tee /etc/sysctl.d/40-max-user-watches.conf && sudo sysctl --system
sudo reboot
```
```sh
docker run -d --name pimix -v /home:/home -p 80:80 -p 82:82 -p 81:81 vbarrois/pimix:arm
docker run -d --name Deezldr -v /home/music:/downloads -e PUID=1000 -e PGID=1000 -p 83:1730 bocki/deezloaderrmx
sudo chown -R pi:pi /home/music
cd /home/pimix-player
java -jar pimix-player.jar
```

Now you can just upload your mp3 files with your prefered ftp-client directly into /home/music

### Setup output volume
```sh
alsamixer
```

### Clean previous containers
```sh
docker system prune
```
### Bluetooth -- in dev
```sh
sudo apt-get install pulseaudio pulseaudio-module-bluetooth bluez-firmware bluez-tools
sudo usermod -a -G bluetooth pi
pulseaudio --start
sudo bluetoothctl
power on
agent on
default-agent
scan on
trust <address>
pair <address>
connect <address>
```

## Docker build section -- ignore it !
```sh
docker pull vbarrois/pimix
```

## Build distros
### Packaging the Pimix Release
```sh
docker build . -f pimix-docker/Build -t vbarrois/pimix-builder:latest
docker run -ti --name pimix-build -v ~/projects/pimix/pimix-docker/dist:/home/pimix-dist vbarrois/pimix-builder:latest    
```
### Build the Pimix Image on linux/arm
```sh
docker build . -f Arm -t vbarrois/pimix:arm
docker tag vbarrois/pimix:arm pimix:arm
docker push vbarrois/pimix:arm
```
