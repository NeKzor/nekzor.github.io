# CParticleSystem
Class client-side.

|Prop|Type|Offset|
|---|:-:|:-:|
|m_fEffects|int|232 \| 0xe8|
|m_angRotation|vector|288 \| 0x120|
|m_vecOrigin|vector|300 \| 0x12c|
|moveparent|int|316 \| 0x13c|
|m_hOwnerEntity|int|320 \| 0x140|
|m_iParentAttachment|int|992 \| 0x3e0|
|m_iEffectIndex|int|2688 \| 0xa80|
|m_nStopType|int|2692 \| 0xa84|
|m_bActive|int|2696 \| 0xa88|
|m_flStartTime|float|2700 \| 0xa8c|
|m_szSnapshotFileName|string|2704 \| 0xa90|
|m_vServerControlPoints|[m_vServerControlPoints](#m_vServerControlPoints)|2964 \| 0xb94|
|m_iServerControlPointAssignments|[m_iServerControlPointAssignments](#m_iServerControlPointAssignments)|3012 \| 0xbc4|
|m_hControlPointEnts|[m_hControlPointEnts](#m_hControlPointEnts)|3032 \| 0xbd8|
|m_iControlPointParents|[m_iControlPointParents](#m_iControlPointParents)|3284 \| 0xcd4|

## Recv

### m_vServerControlPoints

|Prop|Type|Offset|
|---|:-:|:-:|
|000|vector|0 \| 0x0|
|001|vector|12 \| 0xc|
|002|vector|24 \| 0x18|
|003|vector|36 \| 0x24|

### m_iServerControlPointAssignments

|Prop|Type|Offset|
|---|:-:|:-:|
|000|int|0 \| 0x0|
|001|int|1 \| 0x1|
|002|int|2 \| 0x2|
|003|int|3 \| 0x3|

### m_hControlPointEnts

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
|010|int|40 \| 0x28|
|011|int|44 \| 0x2c|
|012|int|48 \| 0x30|
|013|int|52 \| 0x34|
|014|int|56 \| 0x38|
|015|int|60 \| 0x3c|
|016|int|64 \| 0x40|
|017|int|68 \| 0x44|
|018|int|72 \| 0x48|
|019|int|76 \| 0x4c|
|020|int|80 \| 0x50|
|021|int|84 \| 0x54|
|022|int|88 \| 0x58|
|023|int|92 \| 0x5c|
|024|int|96 \| 0x60|
|025|int|100 \| 0x64|
|026|int|104 \| 0x68|
|027|int|108 \| 0x6c|
|028|int|112 \| 0x70|
|029|int|116 \| 0x74|
|030|int|120 \| 0x78|
|031|int|124 \| 0x7c|
|032|int|128 \| 0x80|
|033|int|132 \| 0x84|
|034|int|136 \| 0x88|
|035|int|140 \| 0x8c|
|036|int|144 \| 0x90|
|037|int|148 \| 0x94|
|038|int|152 \| 0x98|
|039|int|156 \| 0x9c|
|040|int|160 \| 0xa0|
|041|int|164 \| 0xa4|
|042|int|168 \| 0xa8|
|043|int|172 \| 0xac|
|044|int|176 \| 0xb0|
|045|int|180 \| 0xb4|
|046|int|184 \| 0xb8|
|047|int|188 \| 0xbc|
|048|int|192 \| 0xc0|
|049|int|196 \| 0xc4|
|050|int|200 \| 0xc8|
|051|int|204 \| 0xcc|
|052|int|208 \| 0xd0|
|053|int|212 \| 0xd4|
|054|int|216 \| 0xd8|
|055|int|220 \| 0xdc|
|056|int|224 \| 0xe0|
|057|int|228 \| 0xe4|
|058|int|232 \| 0xe8|
|059|int|236 \| 0xec|
|060|int|240 \| 0xf0|
|061|int|244 \| 0xf4|
|062|int|248 \| 0xf8|

### m_iControlPointParents

|Prop|Type|Offset|
|---|:-:|:-:|
|000|int|0 \| 0x0|
|001|int|1 \| 0x1|
|002|int|2 \| 0x2|
|003|int|3 \| 0x3|
|004|int|4 \| 0x4|
|005|int|5 \| 0x5|
|006|int|6 \| 0x6|
|007|int|7 \| 0x7|
|008|int|8 \| 0x8|
|009|int|9 \| 0x9|
|010|int|10 \| 0xa|
|011|int|11 \| 0xb|
|012|int|12 \| 0xc|
|013|int|13 \| 0xd|
|014|int|14 \| 0xe|
|015|int|15 \| 0xf|
|016|int|16 \| 0x10|
|017|int|17 \| 0x11|
|018|int|18 \| 0x12|
|019|int|19 \| 0x13|
|020|int|20 \| 0x14|
|021|int|21 \| 0x15|
|022|int|22 \| 0x16|
|023|int|23 \| 0x17|
|024|int|24 \| 0x18|
|025|int|25 \| 0x19|
|026|int|26 \| 0x1a|
|027|int|27 \| 0x1b|
|028|int|28 \| 0x1c|
|029|int|29 \| 0x1d|
|030|int|30 \| 0x1e|
|031|int|31 \| 0x1f|
|032|int|32 \| 0x20|
|033|int|33 \| 0x21|
|034|int|34 \| 0x22|
|035|int|35 \| 0x23|
|036|int|36 \| 0x24|
|037|int|37 \| 0x25|
|038|int|38 \| 0x26|
|039|int|39 \| 0x27|
|040|int|40 \| 0x28|
|041|int|41 \| 0x29|
|042|int|42 \| 0x2a|
|043|int|43 \| 0x2b|
|044|int|44 \| 0x2c|
|045|int|45 \| 0x2d|
|046|int|46 \| 0x2e|
|047|int|47 \| 0x2f|
|048|int|48 \| 0x30|
|049|int|49 \| 0x31|
|050|int|50 \| 0x32|
|051|int|51 \| 0x33|
|052|int|52 \| 0x34|
|053|int|53 \| 0x35|
|054|int|54 \| 0x36|
|055|int|55 \| 0x37|
|056|int|56 \| 0x38|
|057|int|57 \| 0x39|
|058|int|58 \| 0x3a|
|059|int|59 \| 0x3b|
|060|int|60 \| 0x3c|
|061|int|61 \| 0x3d|
|062|int|62 \| 0x3e|
