# PhysObjectHeader_t
Datamap server-side.

|Prop|Type|Offset|External|
|---|:-:|:-:|--:|
|type|integer|0 \| 0x0||
|hEntity|ehandle|4 \| 0x4||
|fieldName|string|8 \| 0x8||
|nObjects|integer|12 \| 0xc||
|modelName|string|16 \| 0x10||
|bbox.mins|vector|20 \| 0x14||
|bbox.maxs|vector|32 \| 0x20||
|sphere.radius|float|44 \| 0x2c||
|iCollide|integer|48 \| 0x30||
