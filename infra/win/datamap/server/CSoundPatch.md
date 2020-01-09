# CSoundPatch
Datamap server-side.

|Prop|Type|Offset|External|
|---|:-:|:-:|--:|
|m_pitch|[CSoundEnvelope](#CSoundEnvelope)|0 \| 0x0||
|m_volume|[CSoundEnvelope](#CSoundEnvelope)|16 \| 0x10||
|m_soundlevel|integer|36 \| 0x24||
|m_shutdownTime|time|40 \| 0x28||
|m_iszSoundName|string|44 \| 0x2c||
|m_iszSoundScriptName|string|48 \| 0x30||
|m_hSoundScriptHash|integer|52 \| 0x34||
|m_nSoundEntryVersion|integer|56 \| 0x38||
|m_hEnt|ehandle|60 \| 0x3c||
|m_entityChannel|integer|64 \| 0x40||
|m_flags|integer|84 \| 0x54||
|m_baseFlags|integer|88 \| 0x58||
|m_isPlaying|integer|92 \| 0x5c||
|m_flScriptVolume|float|96 \| 0x60||
|m_Filter|[CCopyRecipientFilter](#CCopyRecipientFilter)|100 \| 0x64||
|m_flCloseCaptionDuration|float|128 \| 0x80||

## Embedded

### CSoundEnvelope

|Prop|Type|Offset|External|
|---|:-:|:-:|--:|
|m_current|float|0 \| 0x0|
|m_target|float|4 \| 0x4|
|m_rate|float|8 \| 0x8|
|m_forceupdate|boolean|12 \| 0xc|

### CSoundEnvelope

|Prop|Type|Offset|External|
|---|:-:|:-:|--:|
|m_current|float|0 \| 0x0|
|m_target|float|4 \| 0x4|
|m_rate|float|8 \| 0x8|
|m_forceupdate|boolean|12 \| 0xc|

### CCopyRecipientFilter

|Prop|Type|Offset|External|
|---|:-:|:-:|--:|
|m_Flags|integer|4 \| 0x4|
|m_Recipients|custom|8 \| 0x8|
