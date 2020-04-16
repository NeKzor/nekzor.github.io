# CPlayerLocalData

Datamap server-side.

|Prop|Type|Offset|External|
|---|:-:|:-:|--:|
|m_chAreaBits|character|4 \| 0x4||
|m_chAreaPortalBits|character|36 \| 0x24||
|m_iHideHUD|integer|60 \| 0x3c||
|m_flFOVRate|float|64 \| 0x40||
|m_bFOVSmooth|boolean|68 \| 0x44||
|m_vecOverViewpoint|vector|72 \| 0x48||
|m_bDucked|boolean|84 \| 0x54||
|m_bDucking|boolean|85 \| 0x55||
|m_bInDuckJump|boolean|86 \| 0x56||
|m_nDuckTimeMsecs|integer|88 \| 0x58||
|m_nDuckJumpTimeMsecs|integer|92 \| 0x5c||
|m_nJumpTimeMsecs|integer|96 \| 0x60||
|m_nStepside|integer|100 \| 0x64||
|m_flFallVelocity|float|104 \| 0x68||
|m_nOldButtons|integer|108 \| 0x6c||
|m_vecPunchAngle|vector|116 \| 0x74||
|m_vecPunchAngleVel|vector|128 \| 0x80||
|m_bDrawViewmodel|boolean|140 \| 0x8c||
|m_bWearingSuit|boolean|141 \| 0x8d||
|m_bPoisoned|boolean|142 \| 0x8e||
|m_flStepSize|float|144 \| 0x90||
|m_bAllowAutoMovement|boolean|148 \| 0x94||
|m_skybox3d|[sky3dparams_t](#sky3dparams_t)|152 \| 0x98||
|m_fog|[fogparams_t](#fogparams_t)|312 \| 0x138||
|m_audio|[audioparams_t](#audioparams_t)|388 \| 0x184||

## Embedded

### sky3dparams_t

|Prop|Type|Offset|External|
|---|:-:|:-:|--:|
|scale|integer|4 \| 0x4|
|origin|vector|8 \| 0x8|
|area|integer|20 \| 0x14|
|fog|[fogparams_t](#fogparams_t)|24 \| 0x18|

### fogparams_t

|Prop|Type|Offset|External|
|---|:-:|:-:|--:|
|dirPrimary|vector|4 \| 0x4|
|colorPrimary|color32|16 \| 0x10|
|colorSecondary|color32|20 \| 0x14|
|colorPrimaryLerpTo|color32|24 \| 0x18|
|colorSecondaryLerpTo|color32|28 \| 0x1c|
|start|float|32 \| 0x20|
|end|float|36 \| 0x24|
|farz|float|40 \| 0x28|
|maxdensity|float|44 \| 0x2c|
|startLerpTo|float|48 \| 0x30|
|endLerpTo|float|52 \| 0x34|
|maxdensityLerpTo|float|56 \| 0x38|
|lerptime|time|60 \| 0x3c|
|duration|float|64 \| 0x40|
|enable|boolean|68 \| 0x44|
|blend|boolean|69 \| 0x45|

### audioparams_t

|Prop|Type|Offset|External|
|---|:-:|:-:|--:|
|localSound|vector|4 \| 0x4|
|soundscapeIndex|integer|100 \| 0x64|
|localBits|integer|104 \| 0x68|
|entIndex|integer|108 \| 0x6c|

### fogparams_t

|Prop|Type|Offset|External|
|---|:-:|:-:|--:|
|dirPrimary|vector|4 \| 0x4|
|colorPrimary|color32|16 \| 0x10|
|colorSecondary|color32|20 \| 0x14|
|colorPrimaryLerpTo|color32|24 \| 0x18|
|colorSecondaryLerpTo|color32|28 \| 0x1c|
|start|float|32 \| 0x20|
|end|float|36 \| 0x24|
|farz|float|40 \| 0x28|
|maxdensity|float|44 \| 0x2c|
|startLerpTo|float|48 \| 0x30|
|endLerpTo|float|52 \| 0x34|
|maxdensityLerpTo|float|56 \| 0x38|
|lerptime|time|60 \| 0x3c|
|duration|float|64 \| 0x40|
|enable|boolean|68 \| 0x44|
|blend|boolean|69 \| 0x45|
