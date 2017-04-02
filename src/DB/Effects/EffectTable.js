/**
 * DB/Effects/EffectTable.js
 *
 * List effects
 * TODO: complete the list, add informations about sound.
 *
 * This file is part of ROBrowser, Ragnarok Online in the Web Browser (http://www.robrowser.com/).
 *
 * @author Vincent Thibault
 */
define(function( require )
{
	'use strict';

	/// type = STR
	///
	/// - file:
	///   STR file name stored in data/texture/effect/(.*).str
	///
	/// - min:
	///   minify str file stored in data/texture/effect/(.*).str
	///   used when /mineffect is enabled
	///
	/// - rand
	///   replace the %d in the file name with a rand(val1, val2).
	///
	/// - wav:
	///   audio file stored in data/wav/ folder
	///
	/// - attachedEntity:
	///   if set to true, the effect will follow the entity attached


	/// type = SPR
	///
	/// - file:
	///   Sprite file name stored in data/sprite/ÀÌÆÑÆ®/(.*).spr
	///
	/// - wav:
	///   audio file stored in data/wav/ folder
	///
	/// - attachedEntity:
	///   if set to true, the effect will follow the entity attached
	///
	/// - head
	///   if set to true, the sprite will be at the character's head
	///
	/// - stopAtEnd
	///   do not remove when animation end
	///
	/// - direction
	///   if set to true, the sprite will inherit character's direction

	/// type = FUNC
	///
	/// - func:
	///   callback to use


	return {
		
		"swashbuckling": [{
			type: 'STR',
			file: 'loud',
			wav: 'effect/ef_stonecurse',
			attachedEntity: true
		}],
		
		"secondwind": [{
			type: 'STR',
			file: 'rk_luxanima',
			wav: 'effect/black_adrenalinerush_b',
			attachedEntity: true
		}],
		
		"swagger": [{
			type: 'STR',
			file: 'proboc',
			wav: 'effect/black_maximize_power_sword',
			attachedEntity: true
		}],
		
		"endure": [{
			type: 'STR',
			file: 'ramadan',
			wav: 'effect/ef_endure',
			attachedEntity: true
		}],

		"umboblow": [{
			type: 'STR',
			file: 'deffender',
			wav: 'effect/ef_hit4',
			attachedEntity: true
		}],

		"shieldboomerang": [{
			type: 'STR',
			file: 'eraser_cutter',
			wav: 'effect/ef_hit4',
			attachedEntity: true
		}],

		"meteormash": [{
			type: 'STR',
			file: 'RL_D_TAIL/DTDT',
			wav: 'effect/ef_magnumbreak',
			attachedEntity: true
		}],

		"skullcrack": [{
			type: 'STR',
			file: 'sonic_claw',
			wav: 'effect/ef_hit5',
			attachedEntity: true
		}],
		
		"sledgehammer": [{
			type: 'STR',
			file: 'black_hammerfall',
			wav: 'effect/black_hammerfall',
			attachedEntity: true
		}],
		
		"camouflage": [{
			type: 'STR',
			file: 'thief_invenom',
			wav: 'effect/ef_hiding',
			attachedEntity: true
		}],
		
		"doubleteam": [{
			type: 'STR',
			file: '¸ÅÁ÷·Îµå',
			wav: 'effect/lg_prestige',
			attachedEntity: true
		}],

		"browbeat": [{
			type: 'STR',
			file: 'groomy',
			wav: 'effect/priest_suffragium',
			attachedEntity: true
		}],

		"sonicstrike": [{
			//type:  'FUNC',
			wav: 'effect/ef_hit4',
			attachedEntity: true
		}],

		"bonecutter": [{
			type: 'STR',
			file: 'moonlight_2',
			wav: '_hit_sword',
			attachedEntity: true
		}],

		"bladeflourish": [{
			type: 'STR',
			file: 'bowling',
			wav: 'effect/knight_brandish_spear',
			attachedEntity: true
		}],

		"bladeflourish_hit": [{
			type: 'STR',
			file: 'moonlight_1',
			wav: '_hit_sword',
			attachedEntity: true
		}],

		"puncture": [{
			type: 'STR',
			file: '¹ö¼­Å©',
			wav: 'effect/ef_hit5',
			attachedEntity: true
		}],

		"purify": [{
			type: 'STR',
			file: 'cure',
			wav: 'effect/priest_recovery',
			attachedEntity: true
		}],

		"cure": [{
			type: 'STR',
			file: 'ÇÏ¾áÆ÷¼Ç',
			wav: 'effect/Èí±â',
			attachedEntity: true
		}],

		"raise": [{
			type: 'STR',
			file: 'resurrection',
			wav:  'effect/priest_resurrection',
			min:  'resurrection_min',
			attachedEntity: true
		}],

		"forcearmor": [{
			type: 'STR',
			file: 'kyrie',
			wav: 'effect/¼¼Å©¸®ÆÄÀÌ½º',
			attachedEntity: true
		}],

		"godsstrength": [{
			type: 'STR',
			file: 'asum',
			wav: 'effect/rk_luxanima',
			attachedEntity: true
		}],

		"hallowedbolt": [{
			type: 'STR',
			file: 'ado',
			wav: 'effect/ab_judex',
			attachedEntity: true
		}],

		"heavenlyblow": [{
			type: 'STR',
			file: 'holyhit',
			wav: 'effect/ef_hit4',
			attachedEntity: true
		}],

		"firelance_hit": [{
			type: 'STR',
			file: 'firehit',
			wav: 'effect/ef_firehit',
			attachedEntity: true
		}],

		"incinerate": [{
			type: 'STR',
			file: 'firepillar',
			wav: 'effect/ef_sight',
			attachedEntity: true
		}],

		"incinerate_hit": [{
			type: 'STR',
			file: 'firepillarbomb',
			attachedEntity: true
		}],

		"explosion": [{
			type: 'STR',
			file: 'ÀÌ±×´Ï¼Çºê·¹ÀÌÅ©',
			wav: 'effect/wizard_fire_pillar_b',
			attachedEntity: true
		}],

		"comet": [{
			type: 'STR',
			file: 'meteor1',
			wav: 'effect/wizard_meteor',
			attachedEntity: false
		}],
		
		"icicleedge": [{
			type: 'CYLINDER',
			topSize: 0,
			bottomSize: 0.4,
			height: 5,
			textureName: 'rocktex3',
			wav:  '_hit_dagger',
			tickTime: 600,
			attachedEntity: false
		}],
		
		"icicleedge_hit": [{
			type: 'STR',
			file: 'enc_ice',
			attachedEntity: true
		}],

		"crystallize": [{
			type: 'STR',
			file: 'freeze',
			wav: 'effect/black_maximize_power_sword',
			attachedEntity: true
		}],

		"icenova": [{
			type: 'STR',
			file: 'ice_status_crash',
			wav: 'effect/¸ÅÁ÷ Å©·¡½¬',
			attachedEntity: true
		}],

		"frostbite": [{
			type: 'STR',
			file: 'invincibleoff2',
			wav: 'effect/hunter_freezingtrap',
			attachedEntity: true
		}],
		
		"lightningbolt": [{
			type: 'STR',
			file: 'thunderstorm',
			wav: 'effect/ef_thunderstorm',
			attachedEntity: true
		}],

		"lightningbolt_hit": [{
			type: 'STR',
			file: 'windhit',
			wav: 'effect/priest_lexdivina',
			attachedEntity: true
		}],

		"ionpulse": [{
			type: 'STR',
			file: 'chainlight',
			wav: 'effect/wl_stasis',
			attachedEntity: true
		}],

		"stormlocus_unit": [{
			type: 'STR',
			file: 'ufidel',
			wav: 'effect/priest_lexdivina',
			attachedEntity: false
		}],

		"stormlocus_hit": [{
			type: 'STR',
			file: 'spearboomerang',
			wav: '_enemy_hit_wind2',
			attachedEntity: true
		}],

		1: [{ // MGN_DISCHARGE
			type: 'STR',
			file: 'spearboomerang',
			wav: 'effect/¼¼Å©¸®ÆÄÀÌ½º',
			attachedEntity: true
		}],
	};
});