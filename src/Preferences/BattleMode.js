/**
 * Preferences/BattleMode.js
 *
 * BattleMode preferences
 *
 * This file is part of ROBrowser, Ragnarok Online in the Web Browser (http://www.robrowser.com/).
 *
 * @author Vincent Thibault
 */
define( ['Core/Preferences', 'Controls/KeyEventHandler'], function( Preferences, KEYS )
{
	'use strict';


	/**
	 * Default keys
	 */
	var defaultKey = {};

	defaultKey[ KEYS.ONE ]    = { component:'ShortCut',        cmd:'EXECUTE0' };
	defaultKey[ KEYS.TWO ]    = { component:'ShortCut',        cmd:'EXECUTE1' };
	defaultKey[ KEYS.THREE ]  = { component:'ShortCut',        cmd:'EXECUTE2' };
	defaultKey[ KEYS.FOUR ]   = { component:'ShortCut',        cmd:'EXECUTE3' };
	defaultKey[ KEYS.FIVE ]   = { component:'ShortCut',        cmd:'EXECUTE4' };
	defaultKey[ KEYS.SIX ]    = { component:'ShortCut',        cmd:'EXECUTE5' };
	defaultKey[ KEYS.SEVEN ]  = { component:'ShortCut',        cmd:'EXECUTE6' };
	defaultKey[ KEYS.EIGHT ]  = { component:'ShortCut',        cmd:'EXECUTE7' };
	defaultKey[ KEYS.NINE ]   = { component:'ShortCut',        cmd:'EXECUTE8' };

	defaultKey[ KEYS.Q ]      = { component:'ShortCut',        cmd:'EXECUTE9' };
	defaultKey[ KEYS.W ]      = { component:'ShortCut',        cmd:'EXECUTE10' };
	defaultKey[ KEYS.E ]      = { component:'ShortCut',        cmd:'EXECUTE11' };
	defaultKey[ KEYS.R ]      = { component:'ShortCut',        cmd:'EXECUTE12' };
	defaultKey[ KEYS.T ]      = { component:'ShortCut',        cmd:'EXECUTE13' };
	defaultKey[ KEYS.Y ]      = { component:'ShortCut',        cmd:'EXECUTE14' };
	defaultKey[ KEYS.U ]      = { component:'ShortCut',        cmd:'EXECUTE15' };
	defaultKey[ KEYS.I ]      = { component:'ShortCut',        cmd:'EXECUTE16' };
	defaultKey[ KEYS.O ]      = { component:'ShortCut',        cmd:'EXECUTE17' };

	defaultKey[ KEYS.A ]      = { component:'ShortCut',        cmd:'EXECUTE18' };
	defaultKey[ KEYS.S ]      = { component:'ShortCut',        cmd:'EXECUTE19' };
	defaultKey[ KEYS.D ]      = { component:'ShortCut',        cmd:'EXECUTE20' };
	defaultKey[ KEYS.F ]      = { component:'ShortCut',        cmd:'EXECUTE21' };
	defaultKey[ KEYS.G ]      = { component:'ShortCut',        cmd:'EXECUTE22' };
	defaultKey[ KEYS.H ]      = { component:'ShortCut',        cmd:'EXECUTE23' };
	defaultKey[ KEYS.J ]      = { component:'ShortCut',        cmd:'EXECUTE24' };
	defaultKey[ KEYS.K ]      = { component:'ShortCut',        cmd:'EXECUTE25' };
	defaultKey[ KEYS.L ]      = { component:'ShortCut',        cmd:'EXECUTE26' };
	defaultKey[ KEYS.F12 ]    = { component:'ShortCut',        cmd:'EXTEND'   };

	// UI
	//defaultKey[ KEYS.C + 300 ]   = { component:'ChatRoomCreate',  cmd:'TOGGLE', alt:true };
	defaultKey[ KEYS.X     ]   = { component:'Inventory',       cmd:'TOGGLE', alt:false };
	//defaultKey[ KEYS.G + 300 ]   = { component:'Guild',           cmd:'TOGGLE', alt:true };
	//defaultKey[ KEYS.J + 300 ]   = { component:'PetInformations', cmd:'TOGGLE', alt:true };
	defaultKey[ KEYS.N     ]   = { component:'Emoticons',       cmd:'TOGGLE', alt:false };
	defaultKey[ KEYS.Z ]   = { component:'Equipment',       cmd:'TOGGLE', alt:false };
	defaultKey[ KEYS.C   ]   = { component:'SkillList',       cmd:'TOGGLE', alt:false };
	//defaultKey[ KEYS.V + 300 ]   = { component:'BasicInfo',       cmd:'EXTEND', alt:true };
	defaultKey[ KEYS.B    ]   = { component:'PartyFriends',    cmd:'FRIEND', alt:false };
	defaultKey[ KEYS.V    ]   = { component:'PartyFriends',    cmd:'PARTY',  alt:false };
	defaultKey[ KEYS.SPACE   ]   = { };


	/**
	 * Export
	 */
	return Preferences.get( 'BattleMode', defaultKey, 2.2 );
});