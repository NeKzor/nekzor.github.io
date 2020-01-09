# CTEEffectDispatch
Class server-side.

|Prop|Type|Offset|
|---|:-:|:-:|
|baseclass|[DT_BaseTempEntity](#DT_BaseTempEntity)|0 \| 0x0|
|m_EffectData|[DT_EffectData](#DT_EffectData)|12 \| 0xc|

## Recv

### DT_BaseTempEntity

|Prop|Type|Offset|
|---|:-:|:-:|

### DT_EffectData

|Prop|Type|Offset|
|---|:-:|:-:|
|m_vOrigin.x|float|0 \| 0x0|
|m_vOrigin.y|float|4 \| 0x4|
|m_vOrigin.z|float|8 \| 0x8|
|m_vStart.x|float|12 \| 0xc|
|m_vStart.y|float|16 \| 0x10|
|m_vStart.z|float|20 \| 0x14|
|m_vNormal|vector|24 \| 0x18|
|m_vAngles|vector|36 \| 0x24|
|m_fFlags|int|48 \| 0x30|
|entindex|int|52 \| 0x34|
|m_flScale|float|56 \| 0x38|
|m_flMagnitude|float|60 \| 0x3c|
|m_flRadius|float|64 \| 0x40|
|m_nAttachmentIndex|int|68 \| 0x44|
|m_nSurfaceProp|int|72 \| 0x48|
|m_nMaterial|int|76 \| 0x4c|
|m_nDamageType|int|80 \| 0x50|
|m_nHitBox|int|84 \| 0x54|
|m_nOtherEntIndex|int|88 \| 0x58|
|m_nColor|int|92 \| 0x5c|
|m_iEffectName|int|96 \| 0x60|
