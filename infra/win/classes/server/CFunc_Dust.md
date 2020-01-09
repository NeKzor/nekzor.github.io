# CFunc_Dust
Class server-side.

|Prop|Type|Offset|
|---|:-:|:-:|
|m_nModelIndex|int|186 \| 0xba|
|m_Collision|[DT_CollisionProperty](#DT_CollisionProperty)|232 \| 0xe8|
|m_Color|int|864 \| 0x360|
|m_SpawnRate|int|868 \| 0x364|
|m_flSizeMin|float|872 \| 0x368|
|m_flSizeMax|float|876 \| 0x36c|
|m_SpeedMax|int|880 \| 0x370|
|m_LifetimeMin|int|884 \| 0x374|
|m_LifetimeMax|int|888 \| 0x378|
|m_DistMax|int|892 \| 0x37c|
|m_FallSpeed|float|896 \| 0x380|
|m_DustFlags|int|900 \| 0x384|

## Recv

### DT_CollisionProperty

|Prop|Type|Offset|
|---|:-:|:-:|
|m_vecMins|vector|8 \| 0x8|
|m_vecMaxs|vector|20 \| 0x14|
|m_usSolidFlags|int|32 \| 0x20|
|m_nSolidType|int|34 \| 0x22|
|m_triggerBloat|int|35 \| 0x23|
|m_nSurroundType|int|42 \| 0x2a|
|m_vecSpecifiedSurroundingMins|vector|44 \| 0x2c|
|m_vecSpecifiedSurroundingMaxs|vector|56 \| 0x38|
