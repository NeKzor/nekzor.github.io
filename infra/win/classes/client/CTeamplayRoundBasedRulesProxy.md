# CTeamplayRoundBasedRulesProxy
Class client-side.

|Prop|Type|Offset|
|---|:-:|:-:|
|baseclass|[DT_GameRulesProxy](#DT_GameRulesProxy)|0 \| 0x0|
|teamplayroundbased_gamerules_data|[DT_TeamplayRoundBasedRules](#DT_TeamplayRoundBasedRules)|0 \| 0x0|

## Recv

### DT_GameRulesProxy

|Prop|Type|Offset|
|---|:-:|:-:|

### DT_TeamplayRoundBasedRules

|Prop|Type|Offset|
|---|:-:|:-:|
|m_iRoundState|int|40 \| 0x28|
|m_bInOvertime|int|44 \| 0x2c|
|m_bInSetup|int|45 \| 0x2d|
|m_bSwitchedTeamsThisRound|int|46 \| 0x2e|
|m_iWinningTeam|int|48 \| 0x30|
|m_bInWaitingForPlayers|int|56 \| 0x38|
|m_bAwaitingReadyRestart|int|57 \| 0x39|
|m_flRestartRoundTime|float|60 \| 0x3c|
|m_flMapResetTime|float|64 \| 0x40|
|m_flNextRespawnWave|[m_flNextRespawnWave](#m_flNextRespawnWave)|68 \| 0x44|
|m_bTeamReady|[m_bTeamReady](#m_bTeamReady)|196 \| 0xc4|
|m_bStopWatch|int|228 \| 0xe4|
|m_TeamRespawnWaveTimes|[m_TeamRespawnWaveTimes](#m_TeamRespawnWaveTimes)|232 \| 0xe8|

### m_flNextRespawnWave

|Prop|Type|Offset|
|---|:-:|:-:|
|000|float|0 \| 0x0|
|001|float|4 \| 0x4|
|002|float|8 \| 0x8|
|003|float|12 \| 0xc|
|004|float|16 \| 0x10|
|005|float|20 \| 0x14|
|006|float|24 \| 0x18|
|007|float|28 \| 0x1c|
|008|float|32 \| 0x20|
|009|float|36 \| 0x24|
|010|float|40 \| 0x28|
|011|float|44 \| 0x2c|
|012|float|48 \| 0x30|
|013|float|52 \| 0x34|
|014|float|56 \| 0x38|
|015|float|60 \| 0x3c|
|016|float|64 \| 0x40|
|017|float|68 \| 0x44|
|018|float|72 \| 0x48|
|019|float|76 \| 0x4c|
|020|float|80 \| 0x50|
|021|float|84 \| 0x54|
|022|float|88 \| 0x58|
|023|float|92 \| 0x5c|
|024|float|96 \| 0x60|
|025|float|100 \| 0x64|
|026|float|104 \| 0x68|
|027|float|108 \| 0x6c|
|028|float|112 \| 0x70|
|029|float|116 \| 0x74|
|030|float|120 \| 0x78|
|031|float|124 \| 0x7c|

### m_bTeamReady

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

### m_TeamRespawnWaveTimes

|Prop|Type|Offset|
|---|:-:|:-:|
|000|float|0 \| 0x0|
|001|float|4 \| 0x4|
|002|float|8 \| 0x8|
|003|float|12 \| 0xc|
|004|float|16 \| 0x10|
|005|float|20 \| 0x14|
|006|float|24 \| 0x18|
|007|float|28 \| 0x1c|
|008|float|32 \| 0x20|
|009|float|36 \| 0x24|
|010|float|40 \| 0x28|
|011|float|44 \| 0x2c|
|012|float|48 \| 0x30|
|013|float|52 \| 0x34|
|014|float|56 \| 0x38|
|015|float|60 \| 0x3c|
|016|float|64 \| 0x40|
|017|float|68 \| 0x44|
|018|float|72 \| 0x48|
|019|float|76 \| 0x4c|
|020|float|80 \| 0x50|
|021|float|84 \| 0x54|
|022|float|88 \| 0x58|
|023|float|92 \| 0x5c|
|024|float|96 \| 0x60|
|025|float|100 \| 0x64|
|026|float|104 \| 0x68|
|027|float|108 \| 0x6c|
|028|float|112 \| 0x70|
|029|float|116 \| 0x74|
|030|float|120 \| 0x78|
|031|float|124 \| 0x7c|
