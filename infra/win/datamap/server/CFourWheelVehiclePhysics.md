# CFourWheelVehiclePhysics
Datamap server-side.

|Prop|Type|Offset|External|
|---|:-:|:-:|--:|
|m_controls.throttle|float|12 \| 0xc||
|m_controls.steering|float|16 \| 0x10||
|m_controls.brake|float|20 \| 0x14||
|m_controls.boost|float|24 \| 0x18||
|m_controls.handbrake|boolean|28 \| 0x1c||
|m_controls.handbrakeLeft|boolean|29 \| 0x1d||
|m_controls.handbrakeRight|boolean|30 \| 0x1e||
|m_controls.brakepedal|boolean|31 \| 0x1f||
|m_controls.bHasBrakePedal|boolean|32 \| 0x20||
|m_nSpeed|integer|40 \| 0x28||
|m_nLastSpeed|integer|44 \| 0x2c||
|m_nRPM|integer|48 \| 0x30||
|m_fLastBoost|float|52 \| 0x34||
|m_nBoostTimeLeft|integer|56 \| 0x38||
|m_nHasBoost|integer|60 \| 0x3c||
|m_maxThrottle|float|64 \| 0x40||
|m_flMaxRevThrottle|float|68 \| 0x44||
|m_flMaxSpeed|float|72 \| 0x48||
|m_actionSpeed|float|76 \| 0x4c||
|m_wheelCount|integer|96 \| 0x60||
|m_wheelPosition|vector|100 \| 0x64||
|m_wheelRotation|vector|148 \| 0x94||
|m_wheelBaseHeight|float|196 \| 0xc4||
|m_wheelTotalHeight|float|212 \| 0xd4||
|m_poseParameters|integer|228 \| 0xe4||
|m_actionValue|float|276 \| 0x114||
|m_actionScale|float|280 \| 0x118|actionScale|
|m_debugRadius|float|284 \| 0x11c||
|m_throttleRate|float|288 \| 0x120||
|m_throttleStartTime|float|292 \| 0x124||
|m_throttleActiveTime|float|296 \| 0x128||
|m_turboTimer|float|300 \| 0x12c||
|m_flVehicleVolume|float|304 \| 0x130||
|m_bIsOn|boolean|308 \| 0x134||
|m_bLastThrottle|boolean|309 \| 0x135||
|m_bLastBoost|boolean|310 \| 0x136||
|m_bLastSkid|boolean|311 \| 0x137||
