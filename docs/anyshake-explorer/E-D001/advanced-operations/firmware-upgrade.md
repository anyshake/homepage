---
sidebar_position: 1
title: Firmware Upgrade
slug: firmware-upgrade
---
Update your AnyShake Explorer, to access the latest features and improved hardware performance.
:::warning
This tutorial is intended for **Windows** users only.
:::
## Install Drivers

### Download
- #### Download CH340 driver in [Microsoft Update Catalog](https://www.catalog.update.microsoft.com/Search.aspx?q=CH340).

- #### Download a driver dated before 2014 (for example, version 3.3.2011.11 from 2011 has proven to be stable in most cases).
 ![CH340 Drivers Download](img\firmware-upgrade\ch340-download-page.webp)
:::warning 
**Windows Update** may automatically update your driver. If you encounter problems with [**AnyShake Observer**](/docs/anyshake-observer/software-overview), try reinstalling an older version of the CH340 driver, or refer to [**Anyshake Observer Troubleshooting**](/docs/anyshake-observer/troubleshooting#step-2-block-windows-from-updating-the-driver-again) to block Windows Update from automatically updating the driver.
:::

### Install
- #### Unzip the `*.cab` driver file to a folder.
- #### In the folder, right click the `CH341SER.INF` installation file, then choose "Install" botton.
  ![Install Driver](img\firmware-upgrade\install-driver.webp)
- #### When prompted that the installation is complete, restart Windows.
### Verify
- #### Connect to the PC using an RS-232 to USB cable.
- #### Right click "Start Menu", open "Device Manager".
  ![Open Device Manager](img\firmware-upgrade\device-manager-f1.webp)
- #### In "Device Manager", locate "Ports (COM & LPT)" and expand the list. If you see "USB-SERIAL CH340 (COM*), the driver has been successfully installed.
  ![Verify CH340](img\firmware-upgrade\device-manager-f2.webp)

## Prepare to flash

### Download
- #### Download [Anyshake Explorer Files](https://github.com/anyshake/explorer/), switch branches you want.

### Install Extensions
- #### Install & Open VSCode.
- #### Install "PlatformIO IDE" extension in VSCode.

### Unzip
- #### Unzip "firmware" folder in Anyshake Explorer Files.
- #### Open "firmware" folder in VSCode.

### Flash Firmware
- #### Connect the AnyShake Explorer to your PC using an RS-232 to USB cable.
- #### After switching the jumper cap to Flash Mode, connect power to the AnyShake Explorer to enter Flash Mode.
  ![Jumper Caps Modes](img\firmware-upgrade\jumper-caps-modes.webp)
- #### Open `platformio.ini` in VSCode Explorer.
- #### Choose correct Ports(COMs)
  ![Ports chooser](img\firmware-upgrade\vscode-f1.webp)
- #### After that, click Upload.
  ![Upload Firmware](img\firmware-upgrade\vscode-f2.webp)

### Finish
- #### Disconnect the power from the Anyshake Explorer, then switch the jumper cap to Normal Mode.
- #### Enjoy the performance improvements brought by the new AnyShake Explorer firmware! 
