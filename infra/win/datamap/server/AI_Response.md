# AI_Response
Datamap server-side.

|Prop|Type|Offset|External|
|---|:-:|:-:|--:|
|m_Type|character|0 \| 0x0||
|m_szResponseName|character|1 \| 0x1||
|m_szMatchingRule|character|65 \| 0x41||
|m_Params|[AI_ResponseParams](#AI_ResponseParams)|129 \| 0x81||

## Embedded

### AI_ResponseParams

|Prop|Type|Offset|External|
|---|:-:|:-:|--:|
|delay|integer|0 \| 0x0|
|respeakdelay|integer|4 \| 0x4|
|odds|short|12 \| 0xc|
|flags|short|14 \| 0xe|
|soundlevel|character|16 \| 0x10|
