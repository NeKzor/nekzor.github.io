# CBeam
Class server-side.

|Prop|Type|Offset|
|---|:-:|:-:|
|m_nRenderFX|int|184 \| 0xb8|
|m_nRenderMode|int|185 \| 0xb9|
|m_nModelIndex|int|186 \| 0xba|
|m_clrRender|int|188 \| 0xbc|
|moveparent|int|220 \| 0xdc|
|m_vecOrigin|vector|700 \| 0x2bc|
|m_flFrameRate|float|860 \| 0x35c|
|m_flHDRColorScale|float|864 \| 0x360|
|m_nNumBeamEnts|int|876 \| 0x36c|
|m_nHaloIndex|int|880 \| 0x370|
|m_nBeamType|int|884 \| 0x374|
|m_nBeamFlags|int|888 \| 0x378|
|m_hAttachEntity|[m_hAttachEntity](#m_hAttachEntity)|892 \| 0x37c|
|m_nAttachIndex|[m_nAttachIndex](#m_nAttachIndex)|932 \| 0x3a4|
|m_fWidth|float|972 \| 0x3cc|
|m_fEndWidth|float|976 \| 0x3d0|
|m_fFadeLength|float|980 \| 0x3d4|
|m_fHaloScale|float|984 \| 0x3d8|
|m_fAmplitude|float|988 \| 0x3dc|
|m_fStartFrame|float|992 \| 0x3e0|
|m_fSpeed|float|996 \| 0x3e4|
|m_flFrame|float|1000 \| 0x3e8|
|m_nClipStyle|int|1004 \| 0x3ec|
|m_vecEndPos|vector|1008 \| 0x3f0|

## Recv

### m_hAttachEntity

|Prop|Type|Offset|
|---|:-:|:-:|
|000|int|0 \| 0x0|
|001|int|4 \| 0x4|
|002|int|8 \| 0x8|
|003|int|12 \| 0xc|
|004|int|16 \| 0x10|
|005|int|20 \| 0x14|
|006|int|24 \| 0x18|
|007|int|28 \| 0x1c|
|008|int|32 \| 0x20|
|009|int|36 \| 0x24|

### m_nAttachIndex

|Prop|Type|Offset|
|---|:-:|:-:|
|000|int|0 \| 0x0|
|001|int|4 \| 0x4|
|002|int|8 \| 0x8|
|003|int|12 \| 0xc|
|004|int|16 \| 0x10|
|005|int|20 \| 0x14|
|006|int|24 \| 0x18|
|007|int|28 \| 0x1c|
|008|int|32 \| 0x20|
|009|int|36 \| 0x24|
