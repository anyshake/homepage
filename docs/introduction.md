---
sidebar_position: 1
---

# Tutorial Introduction

Let's discover **AnyShake in less than 5 minutes**.

## What is AnyShake?

AnyShake is an open-source project that enables you to build a cost-effective seismograph.

## How AnyShake Works?

AnyShake utilizes geophone sensors. The [AnyShake Explorer](https://github.com/anyshake/explorer) collects voltage counts from these sensors, and the [AnyShake Observer](https://github.com/anyshake/observer) parses, verifies, streams, and archives this data.

Geophone sensors measure seismic waves. The AnyShake Explorer employs three geophone sensors to detect seismic activity in three directions (EHZ, EHE, EHN). Each geophone contains a coil and a magnet. As seismic waves pass through the geophone, the magnet moves, generating voltage in the coil. Geophones also have a natural frequency, akin to the resonant frequency of a spring-mass system along their working axis.

## Why Choose AnyShake?

Many homemade seismographs rely on the MPU6050, an accelerometer and gyroscope sensor not designed for seismic wave detection. Hence, it lacks the sensitivity required for accurate seismic measurements. AnyShake, however, uses velocity geophone sensors specifically designed for this purpose, offering greater sensitivity than the MPU6050.

Meanwhile, AnyShake aims to simplify the deployment process, making it easier for users to build their own seismographs. AnyShake Observer is written in Go, a compiled language that can be easily cross-compiled to run on a variety of platforms, which means that AnyShake can run on a wide range of devices, including Raspberry Pi, BeagleBone, and even your router.

## AnyShake at a Glance

Here are some demo sites for you to explore.

 - [AnyShake @ Beibei District, Chongqing, China](https://wolfx.rfotg.com)
 - [AnyShake @ Chongqing Institute of Engineering](https://dazu.rfotg.com)
 - [AnyShake @ Institute of Disaster Prevention](https://cidp.rfotg.com)

You can also build your own seismograph using AnyShake by following our tutorial.
