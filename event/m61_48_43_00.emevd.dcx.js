// ==EMEVD==
// @docs    er-common.emedf.json
// @compress    DCX_KRAK
// @game    Sekiro
// @string    "N:\\GR\\data\\Param\\event\\common_func.emevd\u0000N:\\GR\\data\\Param\\event\\common_macro.emevd\u0000\u0000\u0000\u0000\u0000\u0000"
// @linked    [0,82]
// @version    3.6.1
// ==/EMEVD==

$Event(0, Default, function() {
    // Keep the original grace 1950 only; the 1951 site was moved out of this map.
    RegisterBonfire(2048430000, 2048431950, 0, 0, 0, 0);

    $InitializeCommonEvent(0, 90005250, 2048430310, 2048432300, 0, 0);
    $InitializeCommonEvent(0, 90005250, 2048430300, 2048432300, 4, 0);
    $InitializeCommonEvent(0, 90005221, 2048430200, 30003, 20003, 0, 0);
    $InitializeCommonEvent(0, 90005221, 2048430202, 30003, 20003, 0, 0);
    $InitializeCommonEvent(0, 90005221, 2048430203, 30003, 20003, 0, 0);
    $InitializeCommonEvent(0, 90005221, 2048430209, 30003, 20003, 0, 0);
    $InitializeCommonEvent(0, 90005221, 2048430211, 30003, 20003, 0, 0);
    $InitializeCommonEvent(0, 900005580, 580600, 2048431602, 9146);
    $InitializeEvent(0, 2048430700, 2048430700, 4460, 4463, 4465, 30, 90100, 4900, 2048432700, 2048432706);
    $InitializeCommonEvent(0, 90005749, 2048430701, 2048430700, 4465, 2048432706);
    $InitializeEvent(0, 2048430701, 4465, 4460, 2048439213, 2048439207, 2048439208, 2);
    $InitializeCommonEvent(0, 90005744, 2048430700, 2048439217, 2048439217, 90200);
    $InitializeCommonEvent(0, 90005748, 2048431700, 206020, 1030027, 30, 4917);
});

$Event(2048430700, Restart, function(chrEntityId, eventFlagId, eventFlagId2, eventFlagId3, range, animationId, eventFlagId4, entityId, eventFlagId5) {
    DisableNetworkSync();
    WaitFixedTimeFrames(1);
    if (PlayerIsInOwnWorld()) {}
L10:
    DisableCharacter(chrEntityId);
    SetCharacterBackreadState(chrEntityId, true);
    EnableCharacterInvincibility(chrEntityId);
    EndIf(EventFlag(eventFlagId4));
    if (!EventFlag(eventFlagId3)) {
        WaitFor(EventFlag(eventFlagId3));
        RestartEvent();
    }
L0:
    GotoIf(L1, EventFlag(eventFlagId));
    GotoIf(L4, EventFlag(eventFlagId2));
L1:
    GotoIf(L20, EventFlag(eventFlagId5));
    EnableCharacter(chrEntityId);
    SetCharacterBackreadState(chrEntityId, false);
    SetCharacterTalkRange(chrEntityId, range);
    ForceAnimationPlayback(chrEntityId, animationId, false, false, false);
    WaitFor(CharacterBackreadStatus(chrEntityId) && EventFlag(eventFlagId));
    WaitFixedTimeRealFrames(1);
    if (entityId == 0) {
        ResetCharacterPosition(chrEntityId);
    } else {
        IssueShortWarpRequest(chrEntityId, TargetEntityType.Area, entityId, -1);
    }
    Goto(L20);
L4:
    DisableCharacter(chrEntityId);
    SetCharacterBackreadState(chrEntityId, true);
    ForceCharacterTreasure(chrEntityId);
    Goto(L20);
L20:
    WaitFor(!EventFlag(eventFlagId3));
    RestartEvent();
});

$Event(2048430701, Restart, function(eventFlagId, eventFlagId2, eventFlagId3, eventFlagId4, eventFlagId5, maximumAllowedValue) {
    EndIf(!PlayerIsInOwnWorld());
    WaitFixedTimeFrames(1);
    EndIf(!EventFlag(eventFlagId));
    EndIf(!EventFlag(eventFlagId2));
    EndIf(!EventFlag(eventFlagId3));
    EndIf(EventFlag(eventFlagId4));
    IncrementEventValue(eventFlagId5, 4, maximumAllowedValue);
    if (EventValue(eventFlagId5, 4) >= maximumAllowedValue) {
        SetEventFlagID(eventFlagId4, ON);
    }
    EndEvent();
});

$Event(2048430705, Restart, function(chrEntityId, chrEntityId2, eventFlagId, eventFlagId2, eventFlagId3, eventFlagId4, eventFlagId5, eventFlagId6) {
    WaitFixedTimeFrames(1);
    DisableCharacter(chrEntityId);
    DisableCharacter(chrEntityId2);
    SetEventFlagID(eventFlagId3, ON);
    EndEvent();
    if (EventFlag(eventFlagId4)) {
        if (!EventFlag(eventFlagId5)) {
            if (!(EventFlag(eventFlagId) && !EventFlag(eventFlagId6))) {
                Goto(L1);
L1:
                if (!EventFlag(eventFlagId2)) {
                    EnableCharacter(chrEntityId);
                    ForceAnimationPlayback(chrEntityId, 30007, false, false, false);
                    EndEvent();
                }
                EnableCharacter(chrEntityId2);
                ForceAnimationPlayback(chrEntityId2, 30008, false, false, false);
                SetCharacterTeamType(chrEntityId2, TeamType.Disabled);
                DisableCharacterCollision(chrEntityId2);
                EndEvent();
            }
        }
    }
L20:
    EndEvent();
});

