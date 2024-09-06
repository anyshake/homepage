---
sidebar_position: 7
---

# TCP Forwarder

The AnyShake Observer provides a forwarder service that binds to a specific host and port to forward data to other services. This is useful when you want to forward seismic data to other services. The message format is NMEA-like, here is an example:

```
$AS,SHAKE,00,EHZ,1724827695208,100,17005,17024,16971,17027,17027,17026,17018,16990,17043,16999,16990,17084,17027,16998,17061,17051,17054,17069,17005,17047,17005,17000,17001,16967,16963,17046,16987,17002,17025,16933,16977,16959,16983,17031,16985,17059,16972,16989,17041,17018,16947,17044,16973,17026,17045,17066,17037,16983,17041,17082,16973,17033,17022,16989,17039,17072,17028,17062,16989,17004,17045,17025,16998,17018,17017,17074,17020,17028,17058,16933,17023,17012,16993,17047,17014,17014,17060,17019,17018,17044,16974,17024,17025,17023,17085,17007,17013,17090,17041,17036,17038,17016,17066,16993,17047,17064,16975,17011,16985,17024,*63
$AS,SHAKE,00,EHE,1724827695208,100,-396,-409,-404,-369,-389,-366,-390,-386,-373,-400,-404,-371,-386,-401,-390,-381,-390,-390,-389,-385,-391,-398,-388,-390,-399,-408,-395,-393,-416,-406,-391,-396,-397,-398,-395,-378,-373,-401,-389,-393,-403,-400,-407,-375,-387,-382,-369,-407,-410,-396,-384,-382,-417,-420,-388,-404,-419,-402,-404,-412,-404,-414,-397,-397,-395,-395,-388,-399,-395,-423,-385,-399,-406,-404,-396,-406,-392,-400,-401,-370,-419,-410,-390,-403,-379,-406,-413,-394,-379,-394,-392,-413,-367,-380,-399,-394,-415,-365,-390,-381,*CB
$AS,SHAKE,00,EHN,1724827695208,100,140,173,164,154,140,162,168,170,151,171,161,141,164,171,165,162,163,178,159,165,158,169,177,154,164,171,166,162,169,146,166,146,165,153,159,144,154,148,143,161,147,176,141,149,156,145,169,151,161,174,156,132,172,175,139,157,154,160,160,162,164,171,156,156,158,162,132,153,159,166,153,166,169,168,152,182,172,160,150,164,162,167,151,165,152,151,155,154,155,162,155,146,156,163,154,167,158,141,161,147,*2A
```

## Message Format

In the example above, the message is divided into three lines by `\r\n`, each line starts with `$` and ends with a checksum. The message is divided into fields separated by commas.

| Field(s) | Example           | Description               |
| -------- | ----------------- | :------------------------ |
| 1        | `$AS`             | Network code              |
| 2        | `SHAKE`           | Station code              |
| 3        | `00`              | Location code             |
| 4        | `EHZ`             | Channel code              |
| 5        | `1724827695208`   | Timestamp in milliseconds |
| 6        | `100`             | Sample rate               |
| 7-106    | `17005,...,17024` | Samples 0-99              |
| 107      | `*63`             | Checksum in hexadecimal   |

## About Checksum

To calculate the message checksum, here are some example codes:

### C

```cpp
#include <stdint.h>
#include <stdio.h>
#include <stdlib.h>
#include <string.h>

uint8_t getChecksum(const char* message, size_t len, int* err) {
    uint8_t checksum = 0;
    *err = 0;
    char* fields[len];
    int field_count = 0;

    // Split the message into fields
    char* message_copy = strdup(message);
    char* token = strtok(message_copy, ",");
    while (token != NULL && field_count < len) {
        fields[field_count++] = token;
        token = strtok(NULL, ",");
    }

    // Minimum message fields length is 7 (only 1 sample)
    if (field_count < 7) {
        *err = 1;
        free(message_copy);
        return 0;
    }

    // Convert data fields to int32 and calculate checksum
    for (int i = 6; i < field_count - 1; i++) {
        int32_t data = atoi(fields[i]);
        uint8_t* bytes = (uint8_t*)&data;
        for (size_t j = 0; j < sizeof(int32_t); j++) {
            checksum ^= bytes[j];
        }
    }

    free(message_copy);
    return checksum;
}

int main() {
    const char* message =
        "$AS,SHAKE,00,EHZ,1724827695208,100,17005,17024,16971,17027,17027,"
        "17026,17018,16990,17043,16999,16990,17084,17027,16998,17061,17051,"
        "17054,17069,17005,17047,17005,17000,17001,16967,16963,17046,16987,"
        "17002,17025,16933,16977,16959,16983,17031,16985,17059,16972,16989,"
        "17041,17018,16947,17044,16973,17026,17045,17066,17037,16983,17041,"
        "17082,16973,17033,17022,16989,17039,17072,17028,17062,16989,17004,"
        "17045,17025,16998,17018,17017,17074,17020,17028,17058,16933,17023,"
        "17012,16993,17047,17014,17014,17060,17019,17018,17044,16974,17024,"
        "17025,17023,17085,17007,17013,17090,17041,17036,17038,17016,17066,"
        "16993,17047,17064,16975,17011,16985,17024,*63";

    // Find checksum index
    const char* checksum_pos = strchr(message, '*');
    if (!checksum_pos) {
        fprintf(stderr, "Checksum not found in message\n");
        return 1;
    }

    // Parse message checksum
    uint8_t msg_checksum;
    if (sscanf(checksum_pos + 1, "%2hhx", &msg_checksum) != 1) {
        fprintf(stderr, "Failed to parse message checksum\n");
        return 1;
    }

    int err;
    uint8_t calc_checksum = getChecksum(message, strlen(message), &err);
    if (err) {
        fprintf(stderr, "Error calculating checksum\n");
        return 1;
    }

    printf("Message checksum: 0x%02X, Calculated checksum: 0x%02X\n",
           msg_checksum, calc_checksum);
    return 0;
}

```

### Python

```python
from struct import pack


def get_checksum(message: str) -> int:
    fields = message.split(",")

    # Minimum message fields length is 7 (only 1 sample)
    if len(fields) < 7:
        raise ValueError("message fields length is less than 7")

    # Convert data fields to int32
    data_arr = []
    for field in fields[6:-1]:
        try:
            data = int(field)
        except ValueError as e:
            raise e
        data_arr.append(data)

    # Get message checksum by XOR operation
    checksum = 0
    for data in data_arr:
        bytes_data = pack('<i', data)  # int32 little-endian format
        for byte in bytes_data:
            checksum ^= byte

    return checksum


def main():
    message = "$AS,SHAKE,00,EHZ,1724827695208,100,17005,17024,16971,17027,17027,17026,17018,16990,17043,16999,16990,17084,17027,16998,17061,17051,17054,17069,17005,17047,17005,17000,17001,16967,16963,17046,16987,17002,17025,16933,16977,16959,16983,17031,16985,17059,16972,16989,17041,17018,16947,17044,16973,17026,17045,17066,17037,16983,17041,17082,16973,17033,17022,16989,17039,17072,17028,17062,16989,17004,17045,17025,16998,17018,17017,17074,17020,17028,17058,16933,17023,17012,16993,17047,17014,17014,17060,17019,17018,17044,16974,17024,17025,17023,17085,17007,17013,17090,17041,17036,17038,17016,17066,16993,17047,17064,16975,17011,16985,17024,*63"

    # Find checksum index
    checksum_index = message.find("*")
    if checksum_index == -1:
        raise ValueError("checksum not found in message")
    checksum_index += 1

    msg_checksum = int(message[checksum_index:checksum_index+2], 16)
    calc_checksum = get_checksum(message)
    print(f"Message checksum: 0x{msg_checksum:02X}, Calculated checksum: 0x{calc_checksum:02X}")


if __name__ == "__main__":
    main()

```

### JavaScript

```javascript
function getChecksum(message) {
    const fields = message.split(',');

    // Minimum message fields length is 7 (only 1 sample)
    if (fields.length < 7) {
        throw new Error("message fields length is less than 7");
    }

    // Convert data fields to int32 and calculate checksum
    let checksum = 0;
    for (let i = 6; i < fields.length - 1; i++) {
        let data = parseInt(fields[i], 10);
        if (isNaN(data)) {
            throw new Error("Invalid data field: " + fields[i]);
        }

        // Convert int32 to byte array and XOR
        let buffer = new ArrayBuffer(4);
        let view = new DataView(buffer);
        view.setInt32(0, data, true); // little-endian

        for (let j = 0; j < 4; j++) {
            checksum ^= view.getUint8(j);
        }
    }

    return checksum;
}

function main() {
    const message = "$AS,SHAKE,00,EHZ,1724827695208,100,17005,17024,16971,17027,17027,17026,17018,16990,17043,16999,16990,17084,17027,16998,17061,17051,17054,17069,17005,17047,17005,17000,17001,16967,16963,17046,16987,17002,17025,16933,16977,16959,16983,17031,16985,17059,16972,16989,17041,17018,16947,17044,16973,17026,17045,17066,17037,16983,17041,17082,16973,17033,17022,16989,17039,17072,17028,17062,16989,17004,17045,17025,16998,17018,17017,17074,17020,17028,17058,16933,17023,17012,16993,17047,17014,17014,17060,17019,17018,17044,16974,17024,17025,17023,17085,17007,17013,17090,17041,17036,17038,17016,17066,16993,17047,17064,16975,17011,16985,17024,*63";

    // Find checksum index
    const checksumIndex = message.indexOf('*');
    if (checksumIndex === -1) {
        throw new Error("checksum not found in message");
    }

    const msgChecksum = parseInt(message.substring(checksumIndex + 1, checksumIndex + 3), 16);
    const calcChecksum = getChecksum(message);

    console.log(`Message checksum: 0x${msgChecksum.toString(16).toUpperCase()}, Calculated checksum: 0x${calcChecksum.toString(16).toUpperCase()}`);
}

main();

```

### Go

```go
package main

import (
	"errors"
	"fmt"
	"strconv"
	"strings"
	"unsafe"
)

func getChecksum(message string) (checksum uint8, err error) {
	fields := strings.Split(message, ",")

	// Minimum message fields length is 7 (only 1 sample)
	if len(fields) < 7 {
		return 0, errors.New("message fields length is less than 7")
	}

	// Convert data fields to int32
	var dataArr []int32
	for _, field := range fields[6 : len(fields)-1] {
		data, err := strconv.Atoi(field)
		if err != nil {
			return 0, err
		}
		dataArr = append(dataArr, int32(data))
	}

	// Get message checksum by XOR operation
	for _, data := range dataArr {
		bytes := (*[4]byte)(unsafe.Pointer(&data))[:]
		for j := 0; j < int(unsafe.Sizeof(int32(0))); j++ {
			checksum ^= bytes[j]
		}
	}

	return checksum, nil
}

func main() {
	message := "$AS,SHAKE,00,EHZ,1724827695208,100,17005,17024,16971,17027,17027,17026,17018,16990,17043,16999,16990,17084,17027,16998,17061,17051,17054,17069,17005,17047,17005,17000,17001,16967,16963,17046,16987,17002,17025,16933,16977,16959,16983,17031,16985,17059,16972,16989,17041,17018,16947,17044,16973,17026,17045,17066,17037,16983,17041,17082,16973,17033,17022,16989,17039,17072,17028,17062,16989,17004,17045,17025,16998,17018,17017,17074,17020,17028,17058,16933,17023,17012,16993,17047,17014,17014,17060,17019,17018,17044,16974,17024,17025,17023,17085,17007,17013,17090,17041,17036,17038,17016,17066,16993,17047,17064,16975,17011,16985,17024,*63"

	// Find checksum index
	checksumIndex := strings.Index(message, "*")
	if checksumIndex == -1 {
		panic("checksum not found in message")
	}
	checksumIndex++
	msg_checksum, err := strconv.ParseUint(message[checksumIndex:checksumIndex+2], 16, 8)
	if err != nil {
		panic(err)
	}

	calc_checksum, err := getChecksum(message)
	if err != nil {
		panic(err)
	}

	fmt.Printf("Message checksum: 0x%02X, Calculated checksum: 0x%02X\n", msg_checksum, calc_checksum)
}
```

### Java

```java
import java.nio.ByteBuffer;
import java.util.ArrayList;
import java.util.List;

public class Checksum {

    public static int getChecksum(String message) throws Exception {
        String[] fields = message.split(",");

        // Minimum message fields length is 7 (only 1 sample)
        if (fields.length < 7) {
            throw new Exception("Message fields length is less than 7");
        }

        // Convert data fields to int32
        List<Integer> dataArr = new ArrayList<>();
        for (int i = 6; i < fields.length - 1; i++) {
            try {
                int data = Integer.parseInt(fields[i]);
                dataArr.add(data);
            } catch (NumberFormatException e) {
                throw new Exception("Failed to parse field to integer", e);
            }
        }

        // Get message checksum by XOR operation
        int checksum = 0;
        for (int data : dataArr) {
            byte[] bytes = ByteBuffer.allocate(4).putInt(data).array();
            for (byte b : bytes) {
                checksum ^= Byte.toUnsignedInt(b);
            }
        }

        return checksum;
    }

    public static void main(String[] args) {
        String message = "$AS,SHAKE,00,EHZ,1724827695208,100,17005,17024,16971,17027,17027,17026,17018,16990,17043,16999,16990,17084,17027,16998,17061,17051,17054,17069,17005,17047,17005,17000,17001,16967,16963,17046,16987,17002,17025,16933,16977,16959,16983,17031,16985,17059,16972,16989,17041,17018,16947,17044,16973,17026,17045,17066,17037,16983,17041,17082,16973,17033,17022,16989,17039,17072,17028,17062,16989,17004,17045,17025,16998,17018,17017,17074,17020,17028,17058,16933,17023,17012,16993,17047,17014,17014,17060,17019,17018,17044,16974,17024,17025,17023,17085,17007,17013,17090,17041,17036,17038,17016,17066,16993,17047,17064,16975,17011,16985,17024,*63";

        // Find checksum index
        int checksumIndex = message.indexOf("*");
        if (checksumIndex == -1) {
            throw new RuntimeException("Checksum not found in message");
        }
        checksumIndex++;
        int msgChecksum = Integer.parseInt(message.substring(checksumIndex, checksumIndex + 2), 16);

        try {
            int calcChecksum = getChecksum(message);
            System.out.printf("Message checksum: 0x%02X, Calculated checksum: 0x%02X%n", msgChecksum, calcChecksum);
        } catch (Exception e) {
            e.printStackTrace();
        }
    }
}

```

### C#

```cs
using System;
using System.Collections.Generic;
using System.Linq;
using System.Text;

class Checksum
{
    static int GetChecksum(string message)
    {
        string[] fields = message.Split(',');

        // Minimum message fields length is 7 (only 1 sample)
        if (fields.Length < 7)
        {
            throw new Exception("Message fields length is less than 7");
        }

        // Convert data fields to int32
        List<int> dataArr = new List<int>();
        for (int i = 6; i < fields.Length - 1; i++)
        {
            if (int.TryParse(fields[i], out int data))
            {
                dataArr.Add(data);
            }
            else
            {
                throw new Exception("Failed to parse field to integer");
            }
        }

        // Get message checksum by XOR operation
        int checksum = 0;
        foreach (int data in dataArr)
        {
            byte[] bytes = BitConverter.GetBytes(data);
            for (int j = 0; j < bytes.Length; j++)
            {
                checksum ^= bytes[j];
            }
        }

        return checksum;
    }

    static void Main(string[] args)
    {
        string message = "$AS,SHAKE,00,EHZ,1724827695208,100,17005,17024,16971,17027,17027,17026,17018,16990,17043,16999,16990,17084,17027,16998,17061,17051,17054,17069,17005,17047,17005,17000,17001,16967,16963,17046,16987,17002,17025,16933,16977,16959,16983,17031,16985,17059,16972,16989,17041,17018,16947,17044,16973,17026,17045,17066,17037,16983,17041,17082,16973,17033,17022,16989,17039,17072,17028,17062,16989,17004,17045,17025,16998,17018,17017,17074,17020,17028,17058,16933,17023,17012,16993,17047,17014,17014,17060,17019,17018,17044,16974,17024,17025,17023,17085,17007,17013,17090,17041,17036,17038,17016,17066,16993,17047,17064,16975,17011,16985,17024,*63";

        // Find checksum index
        int checksumIndex = message.IndexOf('*');
        if (checksumIndex == -1)
        {
            throw new Exception("Checksum not found in message");
        }
        checksumIndex++;
        int msgChecksum = Convert.ToInt32(message.Substring(checksumIndex, 2), 16);

        try
        {
            int calcChecksum = GetChecksum(message);
            Console.WriteLine($"Message checksum: 0x{msgChecksum:X2}, Calculated checksum: 0x{calcChecksum:X2}");
        }
        catch (Exception ex)
        {
            Console.WriteLine(ex.Message);
        }
    }
}

```
