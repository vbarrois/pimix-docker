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
usermod -aG docker pi


```







```sh
docker build . -f pimix-docker/Dockerfile -t vbarrois/pimix:latest
```

```sh
docker run -ti --name pimix -v /home:/home -p 80:80 -p 82:82 -p 81:81 vbarrois/pimix:latest
```

```sh
docker tag vbarrois/pimix:latest pimix:latest
docker push vbarrois/pimix:latest
```
