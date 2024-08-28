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

Here is a list of configuration fields with their types.

The configuration fields are taken from [v3.1.1](https://github.com/anyshake/observer/releases/tag/v3.1.1).

| Field                | Type     |
| :------------------- | :------- |
| `station_settings`   | `object` |
| `location_settings`  | `object` |
| `explorer_settings`  | `object` |
| `sensor_settings`    | `object` |
| `stream_settings`    | `object` |
| `ntpclient_settings` | `object` |
| `database_settings`  | `object` |
| `server_settings`    | `object` |
| `logger_settings`    | `object` |
| `services_settings`  | `object` |
