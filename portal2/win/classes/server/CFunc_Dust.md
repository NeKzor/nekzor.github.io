# CFunc_Dust
Class server-side.

|Prop|Type|Offset|
|---|:-:|:-:|
|m_nModelIndex|int|186 \| 0xba|
|m_Collision|[DT_CollisionProperty](#DT_CollisionProperty)|232 \| 0xe8|
|m_Color|int|860 \| 0x35c|
|m_SpawnRate|int|864 \| 0x360|
|m_flSizeMin|float|868 \| 0x364|
|m_flSizeMax|float|872 \| 0x368|
|m_SpeedMax|int|876 \| 0x36c|
|m_LifetimeMin|int|880 \| 0x370|
|m_LifetimeMax|int|884 \| 0x374|
|m_DistMax|int|888 \| 0x378|
|m_FallSpeed|float|892 \| 0x37c|
|m_DustFlags|int|896 \| 0x380|

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
