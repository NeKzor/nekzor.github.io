# CBaseServerVehicle
Datamap server-side.

|Prop|Type|Offset|External|
|---|:-:|:-:|--:|
|m_PassengerInfo|custom|4 \| 0x4||
|m_nNPCButtons|integer|52 \| 0x34||
|m_nPrevNPCButtons|integer|56 \| 0x38||
|m_flTurnDegrees|float|60 \| 0x3c||
|m_iCurrentExitAnim|integer|108 \| 0x6c||
|m_vecCurrentExitEndPoint|pos-vector|112 \| 0x70||
|m_savedViewOffset|vector|124 \| 0x7c||
|m_hExitBlocker|ehandle|136 \| 0x88||
|m_chPreviousTextureType|character|140 \| 0x8c||
|m_vehicleSounds|[vehiclesounds_t](#vehiclesounds_t)|144 \| 0x90||
|m_flVehicleVolume|float|384 \| 0x180||
|m_iSoundGear|integer|388 \| 0x184||
|m_flSpeedPercentage|float|392 \| 0x188||
|m_pStateSound|custom|396 \| 0x18c||
|m_pStateSoundFade|custom|400 \| 0x190||
|m_soundState|integer|404 \| 0x194||
|m_soundStateStartTime|time|408 \| 0x198||
|m_lastSpeed|float|412 \| 0x19c||

## Embedded

### vehiclesounds_t

|Prop|Type|Offset|External|
|---|:-:|:-:|--:|
|pGears|custom|4 \| 0x4|
|crashSounds|custom|24 \| 0x18|
|iszSound|string|44 \| 0x2c|
|iszStateSounds|string|80 \| 0x50|
|minStateTime|float|160 \| 0xa0|
