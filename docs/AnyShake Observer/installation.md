---
sidebar_position: 1
---

# Installation

## Platforms

AnyShake Observer is currently available on the following platforms, and some of these architectures provide Docker images (bolded):

 - Android (arm64)
 - MacOS (amd64 / arm64)
 - FreeBSD (x86 / amd64 / arm / arm64)
 - Windows 7 and later (x86 / amd64 / arm / arm64)
 - Linux (**x86** / **amd64** / **arm** / **arm64** / **ppc64le** / **riscv64** /  **s390x** / mips / mips64 / mips64le / mipsle / loong64)

In addition, the AnyShake Observer can work on at least Raspberry Pi 1 Model B+ (overclocked to 950 MHz, with 100 MB of Swap) with all services enabled!

### Using Docker (Recommended)

You can use the following command to pull the Docker image:

```bash
$ docker pull ghcr.io/anyshake/observer:latest
```

To get started with the Docker image, you need mount the configuration file to the container. **You may also need to mount the corresponding serial port if you use a hardware serial port to connect to AnyShake Explorer**, otherwise you do not need to do this.

```
$ docker run -d \
    --name observer \
    --network host \
    --restart always \
    --device /dev/ttyUSB0:/dev/ttyUSB0 \
    --volume /path/to/config.json:/config.json \
    ghcr.io/anyshake/observer:latest \
    --config /config.json
```

Replace `/path/to/config.json` with the path to your configuration file and `/dev/ttyUSB0` to the corresponding serial port.

### Manually Installation

#### Download

Pre-built packages can be found here:

 - [GitHub Release](https://github.com/anyshake/observer/releases)

All packages are in ZIP format. Download and unzip corresponding packages to your system.

#### Verify

Each `.zip` file has a corresponding `.dgst` file, which contains its MD5, SHA1, SHA2-256 and SHA2-512 digests respectively.

For example, if you downloaded the file `linux_amd64.zip`, the corresponding SHA digest file is `linux_amd64.zip.dgst`, you can verify the integrity of the downloaded file with the following command:

```bash
$ cat linux_amd64.zip.dgst
MD5 = dd3a79d4baf00bcf09ad3b325d5d516b
SHA1 = 2ca729cb62c1b8c86d1a45873da6ebced729ba17
SHA2-256 = 57e031589fa2b5f8c079cc6e66fa2d570b583856da4d2684b9620d1f5dc02807
SHA2-512 = 2eec353ba16a183bc7c557cf8e57f5b55cb754438e5d8b08c860b32c703004acb7a42d84c99d578a43d9b590b85caeb5b7656da626a6aa1d1abdf486df9a640d
$ echo "dd3a79d4baf00bcf09ad3b325d5d516b linux_amd64.zip" | md5sum -c
linux_amd64.zip: OK
```

#### Install

After unzip the package, you'll get the following files:

 - `LICENSE`: License file
 - `config.json`: AnyShake Observer configuration file
 - `observer.service`: systemd service file (Linux only)
 - `observer`: AnyShake Observer executable file (Linux only)
 - `observer.exe`: AnyShake Observer executable file (Windows only)

##### On Linux

These steps work on most Linux distributions, but for some embedded Linux systems, you may need to make some changes.

To use AnyShake Observer without root privileges, you need to add current user to `dialout` group:

```bash
$ sudo usermod -a -G dialout $USER
```

Create a directory in `/usr/local/etc` to store AnyShake Observer configuration file, copy `config.json` to it:

```bash
$ sudo mkdir -p /usr/local/etc/observer
$ sudo cp config.json /usr/local/etc/observer
```

Then copy `observer` to `/usr/local/bin`:

```bash
$ sudo cp observer /usr/local/bin
```

Finally, copy `observer.service` to `/lib/systemd/system`, reload and enable the service:

```bash
$ sudo cp observer.service /lib/systemd/system
$ sudo systemctl daemon-reload
$ sudo systemctl enable observer
```

##### On Windows

Just copy `config.json` and `observer.exe` to a same directory.
