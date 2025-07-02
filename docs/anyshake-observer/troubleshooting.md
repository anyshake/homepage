---
sidebar_position: 5
title: Troubleshooting
slug: troubleshooting
---

We summarized the common issues and solutions in the use of AnyShake Observer.

## I got error "A device attached to the system is not functioning" when starting AnyShake Observer

This is a common issue that only occurs on **Windows**, especially when using USB-to-Serial adapters based on the **CH340** chipset.

The problem is typically caused by **incompatible or unstable CH340 drivers** installed via Windows Update. To resolve this issue:

### Step 1: Roll back the CH340 driver

- Visit the Microsoft Update Catalog: [www.catalog.update.microsoft.com/Search.aspx?q=CH340](https://www.catalog.update.microsoft.com/Search.aspx?q=CH340)
- Download and install a driver dated **before 2014** (for example, version 3.1.2009.6 from 2009 has proven to be stable in most cases).
- After installation, **please restart your computer**.

### Step 2: Block Windows from updating the driver again

To prevent Windows from overwriting the working driver:

1. Open the **Group Policy Editor**: Press `Win + R`, type `gpedit.msc`, and press Enter.
2. Navigate to: Computer Configuration > Administrative Templates > System > Device Installation > Device Installation Restrictions`
3. Double-click **"Prevent installation of devices that match any of these device IDs"**.
4. Enable the policy and click **Show\...**
5. Find the **hardware ID** of your CH340 device:

    - In **Device Manager**, right-click the CH340 device → **Properties** → **Details** tab.
    - Under **Property**, select **Hardware Ids**.
    - Copy one of the listed IDs (e.g., `USB\VID_1A86&PID_7523`).

6. Paste this ID into the list in the policy editor and apply the changes.
7. Reboot your computer again to enforce the policy.

If you're unfamiliar with Group Policy or using **Windows Home Edition**, you can use Microsoft's official tool **"Show or Hide Updates"** to block the driver update:

- Download it from: [support.microsoft.com/kb/3073930](https://support.microsoft.com/kb/3073930)
