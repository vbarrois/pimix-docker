# Start MixMe with docker
```sh
docker run \
  --privileged=true \
  --name mixme \
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

# Pimix Installation Guide

## Pi4 installation

### Install Raspberry Pi OS image
Install the last Raspberry Pi OS Lite using Raspberry Pi Imager (https://www.raspberrypi.org/software/) on your SD card

### Enable SSH
Pull the SD card out then plug it back in, use a file explorer to create an empty ssh file in the root of the boot disk

### First start

Eject the micro SD card, boot the Raspberry Pi and login over LAN
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
sudo rfkill unblock 0
sudo apt-get update -y
sudo apt-get upgrade -y
sudo apt-get purge openresolv dhcpcd5
sudo  apt-get install network-manager curl default-jre -y
curl -sSL https://get.docker.com | sh
sudo usermod -aG docker pi
echo fs.inotify.max_user_watches=524288 | sudo tee /etc/sysctl.d/40-max-user-watches.conf && sudo sysctl --system
sudo reboot
```
```sh
docker pull vbarrois/pimix:arm
```
```sh
docker run -ti --privileged=true -p 80:80 -p 81:81 -p 82:82 --device /dev/snd --env ALSA_CARD=Generic --name mixme -v /home:/home -v /var/run/dbus:/var/run/dbus vbarrois/mixme:x386.3.23
```
```sh
docker run -d --name Deemix --restart always -v /home/music:/Downloads -e PUID=1000 -e PGID=1000 -e ARL=1234567 -e UMASK_SET=022 -e DEEZUI=false -p 83:6595 registry.gitlab.com/bockiii/deemix-docker
sudo chown -R pi:pi /home/music
cd /home/pimix-player
java -jar pimix-player.jar
```

Now you can just upload your mp3 files with your prefered ftp-client directly into /home/music

### Set Pimix-Player as a Service

```sh
sudo nano /etc/systemd/system/pimix.service
```
Copy/paste the following content

```sh
[Unit]
Description=PIMIX
[Service]
User=pi
WorkingDirectory=/home/pimix-player
ExecStart=/home/pi/start-player
SuccessExitStatus=143
TimeoutStopSec=10
Restart=on-failure
RestartSec=5
[Install]
WantedBy=multi-user.target
```

```sh
sudo nano /home/pi/start-player
```

Copy/paste the following content

```sh
#!/bin/sh
cd /home/pimix-player
sudo /usr/bin/java -jar pimix-player.jar
```

```sh
sudo chown pi:pi /home/pi/start-player
sudo chmod u+x /home/pi/start-player
```

Start the service

```sh
sudo systemctl daemon-reload
sudo systemctl enable pimix.service
sudo systemctl start pimix
sudo systemctl status pimix
```

### Setup output volume
```sh
alsamixer
```

### Clean previous containers
```sh
docker system prune
```
### Bluetooth support
```sh
sudo apt-get install pulseaudio pulseaudio-module-bluetooth bluez-firmware bluez-tools
sudo usermod -a -G bluetooth pi
```

Edit java ```sound.properties``` file:
```sh
sudo nano /usr/lib/jvm/default-java/conf/sound.properties
```
Add the following lines:
```sh
javax.sound.sampled.Clip=com.sun.media.sound.DirectAudioDeviceProvider
javax.sound.sampled.Port=com.sun.media.sound.PortMixerProvider
javax.sound.sampled.SourceDataLine=com.sun.media.sound.DirectAudioDeviceProvider
javax.sound.sampled.TargetDataLine=com.sun.media.sound.DirectAudioDeviceProvider
```

Start Pulseaudio as a Service
```sh
sudo nano /etc/systemd/system/pulseaudio.service 
```
Add the following lines
```sh
[Unit]
Description=PulseAudio system server

[Service]
Type=notify
ExecStart=pulseaudio --daemonize=no --system --realtime --log-target=journal
ExecStop=pulseaudio -k

[Install]
WantedBy=multi-user.target
```
```sh
sudo systemctl --system enable pulseaudio.service
sudo systemctl --system start pulseaudio.service
```
Check status with:
```sh
systemctl --system status pulseaudio.service
```

Connect a Bluetooth device
```sh
sudo bluetoothctl
power on
agent on
default-agent
scan on
trust <address>
pair <address>
connect <address>
```

## Configure PIMIX as WIFI router

See https://www.raspberrypi.org/documentation/configuration/wireless/access-point-routed.md

### Install the access point and network management software

In order to work as an access point, the Raspberry Pi needs to have the ```hostapd``` access point software package installed:
```sh
sudo apt-get install hostapd
```

Enable the wireless access point service and set it to start when your Raspberry Pi boots:
```sh
sudo systemctl unmask hostapd
sudo systemctl enable hostapd
```

In order to provide network management services (DNS, DHCP) to wireless clients, the Raspberry Pi needs to have the ```dnsmasq``` software package installed:
```sh
sudo apt install dnsmasq
```

Finally, install ```netfilter-persistent``` and its plugin ```iptables-persistent```. This utilty helps by saving firewall rules and restoring them when the Raspberry Pi boots:
```sh
sudo DEBIAN_FRONTEND=noninteractive apt install -y netfilter-persistent iptables-persistent
```

### Configure the DHCP and DNS services for the wireless network

The DHCP and DNS services are provided by ```dnsmasq```. The default configuration file serves as a template for all possible configuration options, whereas we only need a few. It is easier to start from an empty file.

Rename the default configuration file and edit a new one:
```sh
sudo mv /etc/dnsmasq.conf /etc/dnsmasq.conf.orig
sudo nano /etc/dnsmasq.conf
```
Add the following to the file and save it:
```sh
interface=wlan0 # Listening interface
dhcp-range=192.168.4.2,192.168.4.20,255.255.255.0,24h
                # Pool of IP addresses served via DHCP
domain=wlan     # Local wireless DNS domain
address=/gw.wlan/192.168.4.1
                # Alias for this router
```

The Raspberry Pi will deliver IP addresses between 192.168.4.2 and 192.168.4.20, with a lease time of 24 hours, to wireless DHCP clients. You should be able to reach the Raspberry Pi under the name gw.wlan from wireless clients.

To ensure WiFi radio is not blocked on your Raspberry Pi, execute the following command:

```sh
sudo rfkill unblock wlan
```

### Configure the access point software

Create the hostapd configuration file, located at ```/etc/hostapd/hostapd.conf```, to add the various parameters for your wireless network.

```sh
sudo nano /etc/hostapd/hostapd.conf
```

Add the information below to the configuration file.

```sh
country_code=DE
interface=wlan0
ssid=PimixRouter
hw_mode=g
channel=7
macaddr_acl=0
auth_algs=1
ignore_broadcast_ssid=0
wpa=2
wpa_passphrase=ilovepimix
wpa_key_mgmt=WPA-PSK
wpa_pairwise=TKIP
rsn_pairwise=CCMP
```

To use the 5 GHz band, you can change the operations mode from ```hw_mode=g``` to ```hw_mode=a```. Possible values for hw_mode are:

- a = IEEE 802.11a (5 GHz)
- b = IEEE 802.11b (2.4 GHz)
- g = IEEE 802.11g (2.4 GHz)
- ad = IEEE 802.11ad (60 GHz)

## Docker build section -- ignore it !
```sh
docker pull vbarrois/pimix
```

### JAVA remote debugging
```sh
java -Xdebug -Xrunjdwp:transport=dt_socket,address=0.0.0.0:8000,server=y,suspend=y -Dfile.encoding=UTF-8 -jar pimix-player.jar
```
