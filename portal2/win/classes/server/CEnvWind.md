# CEnvWind

Class server-side.

|Prop|Type|Offset|
|---|:-:|:-:|
|m_EnvWindShared|[DT_EnvWindShared](#dt_envwindshared)|860 \| 0x35c|

## Recv

### DT_EnvWindShared

|Prop|Type|Offset|
|---|:-:|:-:|
|m_flStartTime|float|4 \| 0x4|
|m_iWindSeed|int|8 \| 0x8|
|m_iMinWind|int|12 \| 0xc|
|m_iMaxWind|int|16 \| 0x10|
|m_iMinGust|int|24 \| 0x18|
|m_iMaxGust|int|28 \| 0x1c|
|m_flMinGustDelay|float|32 \| 0x20|
|m_flMaxGustDelay|float|36 \| 0x24|
|m_flGustDuration|float|40 \| 0x28|
|m_iGustDirChange|int|44 \| 0x2c|
|m_iInitialWindDir|int|108 \| 0x6c|
|m_flInitialWindSpeed|float|112 \| 0x70|
