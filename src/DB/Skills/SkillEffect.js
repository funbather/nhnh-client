/**
 * DB/Skills/SkillEffect.js
 *
 * List of skills with informations (in progress)
 *
 * This file is part of ROBrowser, Ragnarok Online in the Web Browser (http://www.robrowser.com/).
 *
 * @author Vincent Thibault
 */

define(['./SkillConst'], function( SK )
{
	'use strict';


	var SkillEffect = {};

	SkillEffect[SK.SWD_SWASHBUCKLING] = { effectId: "swashbuckling" };
	SkillEffect[SK.SWD_SECONDWIND]    = { effectId: "secondwind" };
	SkillEffect[SK.SWD_SWAGGER]       = { effectId: "swagger" };
	SkillEffect[SK.SWD_ENDURE]        = { effectId: "endure" };

	SkillEffect[SK.SWD_UMBOBLOW]        = { effectId: "umboblow" };
	SkillEffect[SK.SWD_SHIELDBOOMERANG] = { effectId: "shieldboomerang" };
	SkillEffect[SK.SWD_METEORMASH]      = { effectId: "meteormash" };
	SkillEffect[SK.SWD_SKULLCRACK]      = { hitEffectId: "skullcrack" };
	SkillEffect[SK.SWD_SLEDGEHAMMER]    = { effectId: "sledgehammer" };

	SkillEffect[SK.THF_CAMOUFLAGE] = { effectId: "camouflage" };
	SkillEffect[SK.THF_DOUBLETEAM] = { effectId: "doubleteam" };
	SkillEffect[SK.THF_BROWBEAT]   = { effectId: "browbeat" };

	SkillEffect[SK.THF_SONICSTRIKE]   = { effectId: "sonicstrike" };
	SkillEffect[SK.THF_BONECUTTER]    = { effectId: "bonecutter" };
	SkillEffect[SK.THF_BLADEFLOURISH] = { effectId: "bladeflourish", hitEffectId: "bladeflourish_hit" };
	SkillEffect[SK.THF_PUNCTURE]      = { effectId: "puncture" };
	
	SkillEffect[SK.ACO_PURIFY]       = { effectId: "purify" };
	SkillEffect[SK.ACO_CURE]         = { effectId: "cure" };
	SkillEffect[SK.ACO_RAISE]        = { effectId: "raise" };
	SkillEffect[SK.ACO_FORCEARMOR]   = { effectId: "forcearmor" };
	SkillEffect[SK.ACO_GODSSTRENGTH] = { effectId: "godsstrength" };
	
	SkillEffect[SK.ACO_HALLOWEDBOLT] = { effectId: "hallowedbolt" };
	SkillEffect[SK.ACO_HEAVENLYBLOW] = { hitEffectId: "heavenlyblow" };
	
	SkillEffect[SK.MGN_FIRELANCE]  = { hitEffectId: "firelance_hit" };
	SkillEffect[SK.MGN_INCINERATE] = { effectId: "incinerate", hitEffectId: "incinerate_hit" };
	SkillEffect[SK.MGN_EXPLOSION]  = { effectId: "explosion", hitEffectId: "firelance_hit" };
	SkillEffect[SK.MGN_COMET]      = { effectId: "comet" };
	
	SkillEffect[SK.MGN_ICICLEEDGE]  = { effectId: "icicleedge", hitEffectId: "icicleedge_hit" };
	SkillEffect[SK.MGN_CRYSTALLIZE] = { effectId: "crystallize" };
	SkillEffect[SK.MGN_ICENOVA]     = { effectId: "icenova", hitEffectId: "icicleedge_hit" };
	SkillEffect[SK.MGN_FROSTBITE]   = { effectId: "frostbite", hitEffectId: "icicleedge_hit" };
	
	SkillEffect[SK.MGN_LIGHTNINGBOLT]    = { effectId: "lightningbolt", hitEffectId: "lightningbolt_hit" };
	SkillEffect[SK.MGN_IONPULSE]         = { effectId: "ionpulse" };
	SkillEffect[SK.MGN_STORMLOCUS]       = { groundEffectId: "stormlocus_unit" };
	SkillEffect[SK.MGN_STORMLOCUS_PULSE] = { hitEffectId: 1 };

	/**
	 * Exports
	 */
	return SkillEffect;
});