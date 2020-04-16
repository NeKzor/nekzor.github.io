# CFunc_Dust

Class client-side.

|Prop|Type|Offset|
|---|:-:|:-:|
|m_nModelIndex|int|848 \| 0x350|
|m_Collision|[DT_CollisionProperty](#dt_collisionproperty)|1040 \| 0x410|
|m_Color|int|2688 \| 0xa80|
|m_SpawnRate|int|2692 \| 0xa84|
|m_flSizeMin|float|2696 \| 0xa88|
|m_flSizeMax|float|2700 \| 0xa8c|
|m_SpeedMax|int|2704 \| 0xa90|
|m_LifetimeMin|int|2708 \| 0xa94|
|m_LifetimeMax|int|2712 \| 0xa98|
|m_DistMax|int|2716 \| 0xa9c|
|m_FallSpeed|float|2720 \| 0xaa0|
|m_DustFlags|int|2724 \| 0xaa4|

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
