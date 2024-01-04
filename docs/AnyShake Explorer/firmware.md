---
sidebar_position: 2
---

# Firmware

## Overview

The firmware is written in C++ and based on [Arduino](https://www.arduino.cc/) Framework.

## Quick Start Guide

**Please follow the [Quick Start Guide](https://github.com/anyshake/explorer/tree/master/firmware) to get started.**

Please note that we use PlatformIO for firmware development instead of the Arduino IDE or Keil uVision. PlatformIO is an open-source ecosystem for IoT development, and it supports a wide range of development platforms, frameworks, and libraries. We recommend you to use PlatformIO for firmware development.

## Customize Firmware

You can customize the firmware to fit your needs. The firmware is designed to work in approximately 100 Sps (Samples per second) by default, which means it will collect 100 samples per second from each sensor. By modifying the serial baud rate and channel packet length, you can change the sampling rate.
