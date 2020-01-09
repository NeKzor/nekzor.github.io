# Portal 2 VScript
Dumped global this. Complete documentation.

- [Strings](#strings)
- [Integers](#integers)
- [Floats](#floats)
- [Instances](#instances)
- [Tables](#tables)
- [Arrays](#arrays)
- [Functions](#functions)
- [Native Functions](#native-functions)
- [Classes](#classes)

## Strings

|Symbol|Value|
|---|---|
|\_version\_|Squirrel 2.2.3 stable|

## Integers

|Symbol|Value|
|---|---|
|\_charsize\_|1|
|\_floatsize\_|4|
|\_intsize\_|4|
|RAND\_MAX|32767|

## Floats

|Symbol|Value|
|---|---|
|PI|3.14159|

## Instances

|Symbol|Value|
|---|---|
|Entities||
|player<sup> sp</sup>|([1] player)|
|PlayerVoiceListener||

## Tables

|Symbol|
|---|
|Documentation|

## Functions

|Symbol|Description|
|---|---|
|\_\_DumpScope||
|\_\_ReplaceClosures||
|Assert||
|Document||
|EntFire|Generate and entity i/o event|
|IncludeScript||
|Msg||
|PrintHelp||
|printl||
|RegisterFunctionDocumentation||
|RetrieveNativeSignature||
|UniqueString|Generate a string guaranteed to be unique across the life of the script VM, with an optional root string. Useful for adding data to tables when not sure what keys are already in use in that table.|
|VSquirrel\_OnCreateScope||
|VSquirrel\_OnReleaseScope||

## Native Functions

## Documented

|Signature|Returns|Description|
|---|---|---|
|AddBranchLevelName\(int, string\)|void|Adds a level to the specified branche's list.|
|AddCoopCreditsName\(string\)|void|Adds a name to the coop credit's list.|
|AddGladosSpokenFlags\(int, int\)<sup> mp</sup>|void|Adds bit flags for specific lines that we want to track per session.|
|CoopGetBranchTotalLevelCount\(int\)<sup> mp</sup>|int|Returns the number of levels in the current branch.|
|CoopGetLevelsCompletedThisBranch\(\)<sup> mp</sup>|int|Returns the number of levels the players have completed in their run of the current branch.|
|CoopGetNumPortalsPlaced\(\)<sup> mp</sup>|int|Returns the number of portals the players have placed so far.|
|CoopGladosBlowUpBots\(\)<sup> mp</sup>|void|Call this to blow up both robots and prevent respawning!|
|CoopSetCameFromLastDLCMap\(bool\)<sup> mp</sup>|void|Set whether we came from the last coop DLC map or not|
|CoopSetMapRunTime\(float\)<sup> mp</sup>|void|Sets the time to complete a coop map from spawn to completing the puzzle.|
|CreateProp\(string, Vector, string, int\)|handle|Create a physics prop|
|CreateSceneEntity\(string\)|handle|Create a scene entity to play the specified scene.|
|DebugDrawBox\(Vector, Vector, Vector, int, int, int, int, float\)|void|Draw a debug overlay box|
|DebugDrawLine\(Vector, Vector, int, int, int, bool, float\)|void|Draw a debug overlay box|
|DoIncludeScript\(string, handle\)|bool|Execute a script (internal)|
|EntFireByHandle\(handle, string, string, float, handle, handle\)|void|Generate and entity i/o event. First parameter is an entity instance.|
|FrameTime\(\)|float|Get the time spent on the server in the last frame|
|GetBluePlayerIndex\(\)|int|Player index of the blue player.|
|GetCameFromLastDLCMap\(\)<sup> mp</sup>|bool|Returns true if coming from the last DLC coop map.|
|GetCoopBranchLevelIndex\(int\)|int|Given the 'branch' argument, returns the current chosen level.|
|GetCoopSectionIndex\(\)|int|Section that the coop players have selected to load.|
|GetDeveloperLevel\(\)|int|Gets the level of 'develoer'|
|GetGladosSpokenFlags\(int\)<sup> mp</sup>|int|Returns bit flags for specific lines that we want to track per session.|
|GetHaveSeenDLCTubesReveal\(\)<sup> mp</sup>|bool|Get whether we have seen the DLC tubes reveal this session.|
|GetHighestActiveBranch\(\)|int|Returns which branches should be available in the hub.|
|GetMapIndexInPlayOrder\(\)|int|Determines which index (by order played) this map is. Returns -1 if entry is not found. -2 if this is not a known community map.|
|GetMapName\(\)|string|Get the name of the map.|
|GetNumMapsPlayed\(\)|int|Returns how many maps the player has played through.|
|GetNumPlayersConnected\(\)<sup> mp</sup>|int|Returns how many players are connected|
|GetOrangePlayerIndex\(\)|int|Player index of the orange player.|
|GetPlayer\(\)<sup> sp</sup>|handle|Returns the player (SP Only).|
|GetPlayerDeathCount\(int\)<sup> mp</sup>|int|Returns the number of times that a specific player has died in the session.|
|GetPlayerSilenceDuration\(int\)|float|Time that the specified player has been silent on the mic.|
|GivePlayerPortalgun\(\)<sup> sp</sup>|void|Give player the portalgun.|
|IsBranchComplete\(int\)<sup> mp</sup>|bool|Returns true if every level in the branch has been completed by either.|
|IsLevelComplete\(int, int\)|bool|Returns true if the level in the specified branch is completed by either player.|
|IsLocalSplitScreen\(\)<sup> mp</sup>|bool|Are these players playing in Splitscreen?|
|IsMultiplayer\(\)|bool|Is this a multiplayer game?|
|IsPlayerBranchComplete\(int, int\)<sup> mp</sup>|bool|Returns true if every level in the branch has been completed by the specified player.|
|IsPlayerLevelComplete\(int, int, int\)|bool|Returns true if the level in the specified branch is completed by a specific player.|
|LoopSinglePlayerMaps\(\)|bool|Run the single player maps in a continuous loop.|
|MarkMapComplete\(string\)|void|Marks a maps a complete for both players.|
|NotifySpeedRunSuccess\(int, string\)<sup> mp</sup>|void|Tells the client that a successful speed run has been completed.|
|PrecacheMovie\(string\)<sup> sp</sup>|void|Precaches a named movie. Only valid to call within the entity's 'Precache' function called on mapspawn.|
|RandomFloat\(float, float\)|float|Generate a random floating point number within a range, inclusive|
|RandomInt\(int, int\)|int|Generate a random integer within a range, inclusive|
|RecordAchievementEvent\(string, int\)|void|Records achievement event or progress|
|RequestMapRating\(\)|void|Pops up the map rating dialog for user input|
|SaveMPStatsData\(\)<sup> mp</sup>|void|Save the multiplayer stats for the score board.|
|ScriptShowHudMessageAll\(string, float\)<sup> sp</sup>|void|Show center print text message.|
|ScriptSteamShowURL\(string\)<sup> sp</sup>|bool|Bring up the steam overlay and shows the specified URL.  (Full address with protocol type is required, e.g. http://www.steamgames.com/)|
|SendToConsole\(string\)|void|Send a string to the console as a command|
|SetDucking\(string, string, float\)|void|Set the level of an audio ducking channel|
|SetHaveSeenDLCTubesReveal\(\)<sup> mp</sup>|void|Set that we have seen the DLC tubes reveal this session.|
|SetMapAsPlayed\(\)|int|Adds the current map to the play order and returns the new index therein. Returns -2 if this is not a known community map.|
|ShowMessage\(string\)|void|Print a hud message on all clients|
|Time\(\)|float|Get the current server time|
|TraceLine\(Vector, Vector, handle\)|float|given 2 points & ent to ignore, return fraction along line that hits world or models|
|TryDLC1InstalledOrCatch\(\)<sup> sp</sup>|bool|Tests if the DLC1 is installed for Try/Catch blocks.|
|UpgradePlayerPortalgun\(\)<sup> sp</sup>|void|Give player the portalgun.|
|UpgradePlayerPotatogun\(\)<sup> sp</sup>|void|Give player the portalgun.|

## mathlib

|Symbol|
|---|
|abs|
|acos|
|asin|
|atan|
|atan2|
|ceil|
|cos|
|exp|
|fabs|
|floor|
|log|
|log10|
|pow|
|rand|
|sin|
|sqrt|
|srand|
|tan|

## stringlib

|Symbol|
|---|
|format|
|lstrip|
|rstrip|
|split|
|strip|

## Others

|Symbol|
|---|
|array|
|assert|
|collectgarbage|
|compilestring|
|developer|
|DoEntFire|
|DoUniqueString|
|dummy|
|enabledebuginfo|
|getconsttable|
|GetFunctionSignature|
|getroottable|
|getstackinfos|
|newthread|
|print|
|setconsttable|
|setdebughook|
|seterrorhandler|
|setroottable|
|suspend|
|type|

## Classes

|Symbol|
|---|
|[CBaseAnimating](#cbaseanimating)|
|[CBaseEntity](#cbaseentity)|
|[CBaseFlex](#cbaseflex)|
|[CBaseMultiplayerPlayer](#cbasemultiplayerplayer)|
|[CBasePlayer](#cbaseplayer)|
|[CCallChainer](#ccallchainer)|
|[CEntities](#centities)|
|[CEnvEntityMaker](#cenventitymaker)|
|[CLinkedPortalDoor](#clinkedportaldoor)|
|[CPlayerVoiceListener](#cplayervoicelistener)|
|[CPortal\_Player](#cportal_player)|
|[CPropLinkedPortalDoor](#cproplinkedportaldoor)|
|[CSceneEntity](#csceneentity)|
|[CScriptKeyValues](#cscriptkeyvalues)|
|[CSimpleCallChainer](#csimplecallchainer)|
|[CTriggerCamera](#ctriggercamera)|
|[LateBinder](#latebinder)|
|[regexp](#regexp)|
|[Vector](#vector)|

### CBaseAnimating

|Signature|Returns|Description|
|---|---|---|
|GetAttachmentAngles(int)|Vector|Get the attachement id's angles as a p,y,r vector|
|GetAttachmentOrigin(int)|Vector|Get the attachement id's origin vector|
|GetObjectScaleLevel()|int|The scale size of the entity|
|IsSequenceFinished()|bool|Ask whether the main sequence is done playing|
|LookupAttachment(string)|int|Get the named attachement id|
|SetBodygroup(int, int)|void|Sets a bodygroup|

### CBaseEntity

|Signature|Returns|Description|
|---|---|---|
|ConnectOutput(string, string)|void|Adds an I/O connection that will call the named function when the specified output fires|
|Destroy()|void||
|DisconnectOutput(string, string)|void|Removes a connected script function from an I/O event.|
|EmitSound(string)|void|Plays a sound from this entity.|
|entindex()|int||
|EyePosition()|Vector|Get vector to eye position - absolute coords|
|FirstMoveChild()|handle||
|GetAngles()|Vector|Get entity pitch, yaw, roll as a vector|
|GetAngularVelocity()|Vector|Get the local angular velocity - returns a vector of pitch,yaw,roll|
|GetBoundingMaxs()|Vector|Get a vector containing max bounds, centered on object|
|GetBoundingMins()|Vector|Get a vector containing min bounds, centered on object|
|GetCenter()|Vector|Get vector to center of object - absolute coords|
|GetClassname()|string||
|GetForwardVector()|Vector|Get the forward vector of the entity|
|GetHealth()|int||
|GetLeftVector()|Vector|Get the left vector of the entity|
|GetMaxHealth()|int||
|GetModelKeyValues()|handle|Get a KeyValue class instance on this entity's model|
|GetModelName()|string|Returns the name of the model|
|GetMoveParent()|handle|If in hierarchy, retrieves the entity's parent|
|GetName()|string||
|GetOrigin()|Vector||
|GetOwner()|handle|Gets this entity's owner|
|GetPreTemplateName()|string|Get the entity name stripped of template unique decoration|
|GetRootMoveParent()|handle|If in hierarchy, walks up the hierarchy to find the root parent|
|GetScriptId()|string|Retrieve the unique identifier used to refer to the entity within the scripting system|
|GetScriptScope()|handle|Retrieve the script-side data associated with an entity|
|GetSoundDuration(string, string)|float|Returns float duration of the sound. Takes soundname and optional actormodelname.|
|GetTeam()|int||
|GetUpVector()|Vector|Get the up vector of the entity|
|GetVelocity()|Vector||
|NextMovePeer()|handle||
|PrecacheSoundScript(string)|void|Precache a sound for later playing.|
|SetAbsOrigin(Vector)|void|SetAbsOrigin|
|SetAngles(float, float, float)|void|Set entity pitch, yaw, roll|
|SetAngularVelocity(float, float, float)|void|Set the local angular velocity - takes float pitch,yaw,roll velocities|
|SetForwardVector(Vector)|void|Set the orientation of the entity to have this forward vector|
|SetHealth(int)|void||
|SetMaxHealth(int)|void||
|SetModel(string)|void||
|SetOrigin(Vector)|void||
|SetOwner(handle)|void|Sets this entity's owner|
|SetSize(Vector, Vector)|void||
|SetTeam(int)|void||
|SetVelocity(Vector)|void||
|ValidateScriptScope()|bool|Ensure that an entity's script scope has been created|

### CBaseFlex

|Signature|Returns|Description|
|---|---|---|
|GetCurrentScene()|handle|Returns the instance of the oldest active scene entity (if any).|
|GetSceneByIndex(int)|handle|Returns the instance of the scene entity at the specified index.|

### CBaseMultiplayerPlayer

|Field|
|---|
|__KeyValueFromFloat|
|__KeyValueFromInt|
|__KeyValueFromString|
|__KeyValueFromVector|
|ConnectOutput|
|Destroy|
|DisconnectOutput|
|EmitSound|
|entindex|
|EyePosition|
|FirstMoveChild|
|GetAngles|
|GetAngularVelocity|
|GetAttachmentAngles|
|GetAttachmentOrigin|
|GetBoundingMaxs|
|GetBoundingMins|
|GetCenter|
|GetClassname|
|GetForwardVector|
|GetHealth|
|GetLeftVector|
|GetMaxHealth|
|GetModelKeyValues|
|GetModelName|
|GetMoveParent|
|GetName|
|GetObjectScaleLevel|
|GetOrigin|
|GetOwner|
|GetPreTemplateName|
|GetRootMoveParent|
|GetScriptId|
|GetScriptScope|
|GetSoundDuration|
|GetTeam|
|GetUpVector|
|GetVelocity|
|IsNoclipping|
|IsSequenceFinished|
|IsValid|
|LookupAttachment|
|NextMovePeer|
|PrecacheSoundScript|
|SetAbsOrigin|
|SetAngles|
|SetAngularVelocity|
|SetBodygroup|
|SetForwardVector|
|SetHealth|
|SetMaxHealth|
|SetModel|
|SetOrigin|
|SetOwner|
|SetSize|
|SetTeam|
|SetVelocity|
|ValidateScriptScope|

### CBasePlayer

|Signature|Returns|Description|
|---|---|---|
|IsNoclipping()|bool|Returns true if the player is in noclip mode.|

### CCallChainer

|Field|Value|
|---|---|
|Call||
|chains|null|
|constructor||
|PostScriptExecute||
|prefix|null|
|scope|null|

### CEntities

|Signature|Returns|Description|
|---|---|---|
|CreateByClassname(string)|handle|Creates an entity by classname|
|FindByClassname(handle, string)|handle|Find entities by class name. Pass 'null' to start an iteration, or reference to a previously found entity to continue a search|
|FindByClassnameNearest(string, Vector, float)|handle|Find entities by class name nearest to a point.|
|FindByClassnameWithin(handle, string, Vector, float)|handle|Find entities by class name within a radius. Pass 'null' to start an iteration, or reference to a previously found entity to continue a search|
|FindByModel(handle, string)|handle|Find entities by model name. Pass 'null' to start an iteration, or reference to a previously found entity to continue a search|
|FindByName(handle, string)|handle|Find entities by name. Pass 'null' to start an iteration, or reference to a previously found entity to continue a search|
|FindByNameNearest(string, Vector, float)|handle|Find entities by name nearest to a point.|
|FindByNameWithin(handle, string, Vector, float)|handle|Find entities by name within a radius. Pass 'null' to start an iteration, or reference to a previously found entity to continue a search|
|FindByTarget(handle, string)|handle|Find entities by targetname. Pass 'null' to start an iteration, or reference to a previously found entity to continue a search|
|FindInSphere(handle, Vector, float)|handle|Find entities within a radius. Pass 'null' to start an iteration, or reference to a previously found entity to continue a search|
|First()|handle|Begin an iteration over the list of entities|
|Next(handle)|handle|Continue an iteration over the list of entities, providing reference to a previously found entity|

### CEnvEntityMaker

|Signature|Returns|Description|
|---|---|---|
|SpawnEntity()|void|Create an entity at the location of the maker|
|SpawnEntityAtEntityOrigin(handle)|void|Create an entity at the location of a specified entity instance|
|SpawnEntityAtLocation(Vector, Vector)|void|Create an entity at a specified location and orientaton, orientation is Euler angle in degrees (pitch, yaw, roll)|
|SpawnEntityAtNamedEntityOrigin(string)|void|Create an entity at the location of a named entity|

### CLinkedPortalDoor

|Signature|Returns|Description|
|---|---|---|
|GetPartnerInstance()|handle|Get the instance handle of the door's linked partner|
|GetPartnername()|string|Returns the partnername of the door.|

### CPlayerVoiceListener

|Signature|Returns|Description|
|---|---|---|
|GetPlayerSpeechDuration(int)|float|Returns the number of seconds the player has been continuously speaking.|
|IsPlayerSpeaking(int)|bool|Returns whether the player specified is speaking.|

### CPortal_Player

|Signature|Returns|Description|
|---|---|---|
|GetWheatleyMonitorDestructionCount()|int|Get number of wheatley monitors destroyed by the player.|
|IncWheatleyMonitorDestructionCount()|void|Set number of wheatley monitors destroyed by the player.|
|TurnOffPotatos()|void|Turns Off the Potatos material light|
|TurnOnPotatos()|void|Turns On the Potatos material light|

### CPropLinkedPortalDoor

|Signature|Returns|Description|
|---|---|---|
|GetPartnerInstance()|handle|Get the instance handle of the door's linked partner|
|GetPartnername()|string|Returns the partnername of the door.|

### CSceneEntity

|Signature|Returns|Description|
|---|---|---|
|AddBroadcastTeamTarget(int)|void|Adds a team (by index) to the broadcast list|
|EstimateLength()|float|Returns length of this scene in seconds.|
|FindNamedEntity(string)|handle|given an entity reference, such as !target, get actual entity from scene object|
|IsPaused()|bool|If this scene is currently paused.|
|IsPlayingBack()|bool|If this scene is currently playing.|
|LoadSceneFromString(string, string)|bool|given a dummy scene name and a vcd string, load the scene|
|RemoveBroadcastTeamTarget(int)|void|Removes a team (by index) from the broadcast list|

### CScriptKeyValues

|Signature|Returns|Description|
|---|---|---|
|FindKey(string)|handle|Given a KeyValues object and a key name, find a KeyValues object associated with the key name|
|GetFirstSubKey()|handle|Given a KeyValues object, return the first sub key object|
|GetKeyBool(string)|bool|Given a KeyValues object and a key name, return associated bool value|
|GetKeyFloat(string)|float|Given a KeyValues object and a key name, return associated float value|
|GetKeyInt(string)|int|Given a KeyValues object and a key name, return associated integer value|
|GetKeyString(string)|string|Given a KeyValues object and a key name, return associated string value|
|GetNextKey()|handle|Given a KeyValues object, return the next key object in a sub key group|
|IsKeyEmpty(string)|bool|Given a KeyValues object and a key name, return true if key name has no value|
|ReleaseKeyValues()|void|Given a root KeyValues object, release its contents|

### CSimpleCallChainer

|Field|Value|
|---|---|
|Call||
|chain|null|
|constructor||
|exactMatch|false|
|PostScriptExecute||
|prefix|null|
|scope|null|

### CTriggerCamera

|Signature|Returns|Description|
|---|---|---|
|GetFov()|int|get camera's current fov setting as integer|
|SetFov(int, float)|void|set camera's current fov in integer degrees and fov change rate as float|

### LateBinder

|Field|Value|
|---|---|
|Begin||
|End||
|EstablishDelegation||
|HookRootMetamethod||
|Log||
|m_bindNamesStack||
|m_fixupSet||
|m_log|false|
|m_logIndent|0|
|m_targetTable|null|
|RemoveDelegation||
|Resolve||
|UnhookRootMetamethod||

### regexp

|Field|
|---|
|capture|
|constructor|
|match|
|search|
|subexpcount|

### Vector

|Field|
|---|
|constructor|
|Cross|
|Dot|
|Length|
|Length2D|
|Length2DSqr|
|LengthSqr|
|Norm|
|ToKVString|
