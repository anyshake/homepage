---
sidebar_position: 8
title: QuakeSense Service
slug: quakesense
---

QuakeSense monitors a realtime channel, applies the configured filter and trigger algorithm, and publishes detections through MQTT. It can also notify connected web dashboards. Local vibration and noise can trigger detections; tune thresholds for the installation.

| Setting | Key | Default | Meaning |
| --- | --- | --- | --- |
| Enable | `enabled` | `false` | Start detection and MQTT connection. |
| Enable Web Notifications | `web_notification_enabled` | `true` | Notify connected dashboards after successful trigger publication. |
| MQTT Broker | `mqtt_broker` | `tcp://broker.emqx.io:1883` | Broker URL. |
| MQTT Topic | `mqtt_topic` | `anyshake/quakesense/<random>` | Publication topic. |
| MQTT Username / Password | `mqtt_username`, `mqtt_password` | Empty | Broker credentials. |
| MQTT Client ID | `mqtt_client_id` | `anyshake-observer-<random>` | Unique broker client ID. |
| Monitor Channel | `monitor_channel` | `EHZ` | Channel matching Station Settings. |
| Filter Type | `filter_type` | `bandpass` | No filter, low-pass, band-pass, or high-pass; select in the UI. |
| Minimum / Maximum Frequency | `min_freq`, `max_freq` | `0.5`, `10.0` | Filter frequencies in Hz. |
| Trigger Method | `trigger_method` | `classic_sta_lta` | Classic, recursive, delayed STA/LTA, or Z-Detect; select in the UI. |
| STA / LTA Window | `sta_window`, `lta_window` | `4.0`, `30.0` | Window lengths in seconds. |
| Trigger On / Off | `trig_on`, `trig_off` | `1.0`, `0.4` | Trigger thresholds. |
| Throttle | `throttle_interval` | `10` | Minimum detection publication interval in seconds; zero disables throttling. |

Use a valid channel, an LTA window longer than STA, and filter cutoffs below the channel's Nyquist frequency. The detector needs to fill its history window after startup or a discontinuity before producing useful detections.

MQTT connectivity is required by this implementation, including when web notifications are desired. It connects to the broker before processing the realtime subscription. The default broker is public and unauthenticated: use your own broker and credentials for private station information, and assign each station a unique client ID and topic.

Messages are JSON, sent with QoS 0 and without retention. They contain `trigger_time` in Unix **milliseconds**, `channel_code`, `sample_rate`, station identifiers and description, location, trigger method, windows, thresholds, and filter settings. QoS 0 does not guarantee delivery.

See [Station Trigger with Node-RED](../../applications/station-trigger-nodered.md) for a subscriber flow and time conversion.
