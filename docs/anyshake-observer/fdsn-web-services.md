---
sidebar_position: 7
title: FDSN Web Services
slug: fdsn-web-services
---

Since 4.8.0, Observer provides FDSN **Station** and **DataSelect** services under `/fdsnws` on the normal web listener. They are disabled by default and are configured through Station Settings rather than Service Modules.

## Enable and Create an Access Key

1. Sign in as an administrator and enable **FDSN Web Service** in Station Settings. The switch applies immediately.
2. Open the FDSN access-key tab in Settings. Create a key with a descriptive remark and an expiration time, or explicitly choose no expiration.
3. Copy the secret when it is displayed. It is shown only once; only its SHA-256 hash is stored in the database.
4. Send it as `Authorization: Bearer <key>` when requesting data.

Keys can be revoked individually or in batches. The management view includes last-request time, client IP, and user-agent information. If a secret is lost, create another and revoke the old one. These keys are separate from Observer web-login sessions.

Built-in query pages are available at `/fdsnws`, `/fdsnws/station/1/`, and `/fdsnws/dataselect/1/`. Once the service is enabled, query pages and service-description endpoints do not require a key; **`query` endpoints do**. Use HTTPS or a private VPN when sending keys over a network.

## Station Metadata

Request StationXML, including instrument response:

```bash
export OBSERVER_FDSN_KEY='replace-with-your-access-key'
curl --fail-with-body --get \
    -H "Authorization: Bearer $OBSERVER_FDSN_KEY" \
    --data-urlencode 'level=response' \
    --data-urlencode 'format=xml' \
    'http://127.0.0.1:8073/fdsnws/station/1/query' \
    -o station.xml
```

The service uses the current hardware model, station identifiers, coordinates, channel definitions, and sample rate. It does not maintain a historical inventory of past configuration changes. `updatedafter`, `matchtimeseries`, and `includeavailability` are unsupported and return a client error. Review location information before distributing metadata.

## Archived Waveforms

DataSelect reads **database records**, not the daily MiniSEED directory. Enable [Archiver](service-modules/archiver.md) and query a period that has already been recorded:

```bash
curl --fail-with-body --get \
    -H "Authorization: Bearer $OBSERVER_FDSN_KEY" \
    --data-urlencode 'network=AS' \
    --data-urlencode 'station=SHAKE' \
    --data-urlencode 'location=00' \
    --data-urlencode 'channel=EHZ' \
    --data-urlencode 'starttime=2026-10-01T00:00:00' \
    --data-urlencode 'endtime=2026-10-01T00:01:00' \
    'http://127.0.0.1:8073/fdsnws/dataselect/1/query' \
    -o waveform.mseed
```

Replace station identifiers and UTC time range with your actual records. GET and bulk POST selections are supported. DataSelect accepts at most **100 selections** per request and limits the **sum of selected durations to one hour**; split larger requests. Bulk POST bodies are capped at 1 MiB. Stored data has quality `D`; `B` and `D` selections can return it, while other quality selections return no data. Packet data is trimmed to the requested sample boundaries.

## Errors

| Response | Check |
| --- | --- |
| `501` | The station's FDSN service is disabled. |
| `401` | Missing, invalid, expired, or revoked Bearer key. |
| `400` | Unsupported query parameters, invalid selection, or duration limits. |
| `204` by default | No matching metadata or archived samples; inspect station codes and UTC range. |
| `503` | Settings, database, or access-key validation is unavailable. Inspect backend logs. |

Enabling the module does not expose a separate Event service or make all internet-facing clients compatible with Bearer authentication; configure clients to send the required header.
