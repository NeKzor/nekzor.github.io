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
|m_flFrameRate|float|864 \| 0x360|
|m_flHDRColorScale|float|868 \| 0x364|
|m_nNumBeamEnts|int|880 \| 0x370|
|m_nHaloIndex|int|884 \| 0x374|
|m_nBeamType|int|888 \| 0x378|
|m_nBeamFlags|int|892 \| 0x37c|
|m_hAttachEntity|[m_hAttachEntity](#m_hattachentity)|896 \| 0x380|
|m_nAttachIndex|[m_nAttachIndex](#m_nattachindex)|936 \| 0x3a8|
|m_fWidth|float|976 \| 0x3d0|
|m_fEndWidth|float|980 \| 0x3d4|
|m_fFadeLength|float|984 \| 0x3d8|
|m_fHaloScale|float|988 \| 0x3dc|
|m_fAmplitude|float|992 \| 0x3e0|
|m_fStartFrame|float|996 \| 0x3e4|
|m_fSpeed|float|1000 \| 0x3e8|
|m_flFrame|float|1004 \| 0x3ec|
|m_nClipStyle|int|1008 \| 0x3f0|
|m_vecEndPos|vector|1012 \| 0x3f4|

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
