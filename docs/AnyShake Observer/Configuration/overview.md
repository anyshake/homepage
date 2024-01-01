---
sidebar_position: 1
---

# Overview

AnyShake Observer relies on the JSON format configuration file, here we introduce the JSON-based configuration.

## About JSON Format

JSON, or [JavaScript Object Notation](https://en.wikipedia.org/wiki/JSON), in short is objects in Javascript. One JSON file contains one and only one JSON object, beginning with `{` and ending with `}`.

## JSON Data Types

Here is a brief introduction of JSON data types. They will be referenced in the rest of docs.

 > boolean: `true` | `false`

Boolean value, has to be either true or false, without quotation mark.

 > number

Usually non-negative integers, without quotation mark.

 > string

Sequence of characters, surrounded by quotation mark.

 > array: `[]`

Array of elements. The type of its elements is usually the same, e.g., [string] is an array of strings.

 > object: `{}`

Object. It comes with a list of key value pairs.

*A key value pair usually ends with a comma `,`, but must not ends with a comma if it is the last element of the object.*

## Configuration Fields

Here is a list of configuration fields, with their types and descriptions.

The configuration fields are taken from [v2.5.1](https://github.com/anyshake/observer/releases/tag/v2.5.1).

| Field                | Type     | Description                                              |
| :------------------- | :------- | :------------------------------------------------------- |
| `station_settings`   | `object` | Define basic information of the station                  |
| `geophone_settings`  | `object` | Define geophone characteristics (EHZ, EHE, EHN)          |
| `adc_settings`       | `object` | Define the ADC characteristics of AnyShake Explorer      |
| `serial_settings`    | `object` | Set serial port name, baud rate, channel packet length   |
| `ntpclient_settings` | `object` | Define a available NTP server, required for time syncing |
| `archiver_settings`  | `object` | Set up database archiving feature                        |
| `server_settings`    | `object` | Define the embed server listening address and port       |
| `miniseed_settings`  | `object` | Set up MiniSEED data archiving feature                   |
| `seedlink_settings`  | `object` | Set up SeedLink streamer                                 |
