---
sidebar_position: 1
title: Protocol v1 (Legacy)
slug: protocol-v1-legacy
---

This document describes the communication protocol used for device configuration and data transmission.

## Packet Structure

| Bit Range | Name      | Bytes | Remarks                 |
| :-------- | :-------- | :---- | :---------------------- |
| [65]      | PADDING   | 1     | Padding bytes, always 0 |
| [64:62]   | CHECKSUM  | 3     |                         |
| [61:42]   | CHANNEL_N | 20    |                         |
| [41:22]   | CHANNEL_E | 20    |                         |
| [21:2]    | CHANNEL_Z | 20    |                         |
| [1:0]     | HEADER    | 2     |                         |

The packet is fixed length of 66 bytes, sending interval is determined by sampling rate, using the following formula:

$$
\text{SEND INTERVAL} = \frac{5 \cdot 1000}{\text{SAMPLE RATE}}
$$

To get the current sampling rate in receiver end, calculate the time difference between two consecutive packets and using the following formula:

$$
\text{SAMPLE RATE} = \frac{5 \cdot 1000}{\text{TIME DIFFERENCE}}
$$

## HEADER

The packet header is a 2-byte field that marks the beginning of a packet.

It is set to `FC 1B` in this version of the protocol.

## CHANNEL_Z

The `CHANNEL_Z` field is a 20-byte field that holds 5 samples of Z-axis acceleration data in int32 format.

## CHANNEL_E

The `CHANNEL_E` field is a 20-byte field that holds 5 samples of E-axis acceleration data in int32 format.

## CHANNEL_N

The `CHANNEL_N` field is a 20-byte field that holds 5 samples of N-axis acceleration data in int32 format.

## XOR_CHECKSUM

The field is divided into 3 bytes, corresponding to the checksum of `CHANNEL_Z`, `CHANNEL_E` and `CHANNEL_N` respectively.

C example given below:

```cpp
void get_checksum(int32_t *z_samples, int32_t *e_samples, int32_t *n_samples, uint8_t *calc_checksum) {
    uint8_t* bytes = (uint8_t*)&z_samples;
    for (uint8_t i = 0; i < 5; i++) {
        calc_checksum[0] ^= bytes[i];
    }

    bytes = (uint8_t*)&e_samples;
    for (uint8_t i = 0; i < 5; i++) {
        calc_checksum[1] ^= bytes[i];
    }

    bytes = (uint8_t*)&n_samples;
    for (uint8_t i = 0; i < 5; i++) {
        calc_checksum[2] ^= bytes[i];
    }
}

int main() {
    int32_t channel_z_samples[] = { 10, 20, 30, 40, 50 };
    int32_t channel_e_samples[] = { 60, 70, 80, 90, 100 };
    int32_t channel_n_samples[] = { 110, 120, 130, 140, 150 };

    uint8_t calc_checksum[3];
    get_checksum(channel_z_samples, channel_e_samples, channel_n_samples, calc_checksum);

    // ... other parts ...
}
```

## PADDING

The `PADDING` field is a 1-byte field that is always set to 0 in this version of the protocol.
