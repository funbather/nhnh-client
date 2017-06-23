/**
 * DB/DBManager.js
 *
 * Manage and load DB files
 *
 * This file is part of ROBrowser, Ragnarok Online in the Web Browser (http://www.robrowser.com/).
 *
 * @author Vincent Thibault
 */

define(function(require)
{
	'use strict';


	/**
	 * Dependencies
	 */
	var Client           = require('Core/Client');
	var TextEncoding     = require('Vendors/text-encoding');
	var ClassTable       = require('./Jobs/JobNameTable');
	var WeaponAction     = require('./Jobs/WeaponAction');
	var WeaponJobTable   = require('./Jobs/WeaponJobTable');
	var BabyTable        = require('./Jobs/BabyTable');
	var HairIndexTable   = require('./Jobs/HairIndexTable');
	var MonsterTable     = require('./Monsters/MonsterTable');
	var PetIllustration  = require('./Pets/PetIllustration');
	var PetAction        = require('./Pets/PetAction');
	var ItemTable        = require('./Items/ItemTable');
	var HatTable         = require('./Items/HatTable');
	var ShieldTable      = require('./Items/ShieldTable');
	var WeaponTable      = require('./Items/WeaponTable');
	var WeaponType       = require('./Items/WeaponType');
	var WeaponSoundTable = require('./Items/WeaponSoundTable');
	var RarityTable      = require('./Items/RarityTable');


	/**
	 * DB NameSpace
	 */
	var DB = {};


	/**
	 * @var {Array} message string
	 */
	var MsgStringTable = [];


	/**
	 * @var {Array} map table
	 * struct { string name; string mp3; object fog }
	 */
	var MapTable = {};


	/**
	 * @var {Array} ASCII sex
	 */
	var SexTable = [ '\xbf\xa9', '\xb3\xb2' ];


	/**
	 * @var {Array} file alias list
	 */
	DB.mapalias = {};


	/**
	 * @var {string} interface path
	 */
	DB.INTERFACE_PATH = 'data/texture/\xc0\xaf\xc0\xfa\xc0\xce\xc5\xcd\xc6\xe4\xc0\xcc\xbd\xba/';
	
	// For use with dynamic item descriptions
	DB._mult = { "HP":15,
	             "MP":10,
	             "DEF":7,
	             "MDEF":7,
	             "ATK":11,
	             "MAG":11,
	             "EVA":7,
	             "CEL":2,
	             "CRIT":2,
	             "DEF2":2,
	             "MDEF2":2,
	             "ASPD":2,
	             "CSPD":2,
	             "SKILLDMG":2,
	             "SPELLDMG":2 }

	DB._blvl = 1;

	/**
	 * Initialize DB
	 */
	DB.init = function init()
	{
		// Callback
		var index = 0, count = 0;
		function onLoad(){
			count++;
			return function OnLoadClosure(){
				index++;

				if (DB.onProgress) {
					DB.onProgress(index, count);
				}

				if (index === count && DB.onReady) {
					DB.onReady();
				}
			};
		}

		console.log('Loading DB files...');

		// Loading TXT Tables
		loadTable( 'data/mp3nametable.txt',               2, function(index, key, val){   (MapTable[key] || (MapTable[key] = {})).mp3                   = val;               }, onLoad());
		loadTable( 'data/mapnametable.txt',               2, function(index, key, val){   (MapTable[key] || (MapTable[key] = {})).name                  = val;               }, onLoad());
		loadTable( 'data/msgstringtable.txt',             1, function(index, val){         MsgStringTable[index]                                        = val;               }, onLoad());
		loadTable( 'data/resnametable.txt',               2, function(index, key, val){    DB.mapalias[key]                                             = val;               }, onLoad());
		loadTable( 'data/num2cardillustnametable.txt',    2, function(index, key, val){   (ItemTable[key] || (ItemTable[key] = {})).illustResourcesName = val;               }, onLoad());
		loadTable( 'data/cardprefixnametable.txt',        2, function(index, key, val){   (ItemTable[key] || (ItemTable[key] = {})).prefixNameTable     = val;               }, onLoad());
		loadTable( 'data/fogparametertable.txt',          5, parseFogEntry,                                                                                                     onLoad());
	};


	/**
	 * Load TXT table
	 *
	 * @param {string} filename to load
	 * @param {number} size of each group
	 * @param {function} callback to call for each group
	 * @param {function} onEnd to run once the file is loaded
	 */
	function loadTable( filename, size, callback, onEnd )
	{
		Client.loadFile( filename, function(data) {
			console.log('Loading file "'+ filename +'"...');

			// Remove commented lines
			var content  = ('\n' + data).replace(/\n(\/\/[^\n]+)/g, '');
			var elements = content.split('#');
			var i, count = elements.length;
			var args     = new Array(size+1);

			for (i = 0; i < count; i++) {
				if (i%size === 0) {
					if (i) {
						callback.apply( null, args );
					}
					args[i%size] = i;
				}

				args[(i%size)+1] = elements[i].replace(/^\s+|\s+$/g, ''); // trim
			}

			onEnd();
		}, onEnd );
	}


	/**
	 * Fog entry parser
	 *
	 * @param {number} index
	 * @param {mixed} key
	 * @param {string} near
	 * @param {string} far
	 * @param {string} color
	 * @param {string} factor
	 */
	function parseFogEntry(index, key, near, far, color, factor)
	{
		var int_color = parseInt(color,16);
		var map       = (MapTable[key] || (MapTable[key] = {}));

		map.fog = {
			near:   parseFloat(near),
			far:    parseFloat(far),
			color:  [
				(255 & (int_color >> 16)) / 255.0,
				(255 & (int_color >>  8)) / 255.0,
				(255 & (int_color >>  0)) / 255.0
			],
			factor: parseFloat(factor)
		};
	}

	/**
	 * @return {string} path to body sprite/action
	 * @param {number} id entity
	 * @param {boolean} sex
	 * @return {string}
	 */
	DB.getBodyPath = function getBodyPath( id, sex )
	{
		// PC
		if (id < 45) {
			return 'data/sprite/\xc0\xce\xb0\xa3\xc1\xb7/\xb8\xf6\xc5\xeb/' + SexTable[sex] + '/' + (ClassTable[id] || ClassTable[0]) + '_' + SexTable[sex];
		}

		// TODO: Warp STR file
		if (id === 45) {
			return null;
		}

		// Not visible sprite
		if (id === 111 || id === 139) {
			return null;
		}

		// NPC
		if (id < 1000) {
			return 'data/sprite/npc/' + ( MonsterTable[id] || MonsterTable[46] ).toLowerCase();
		}

		// Monsters
		if (id < 4000) {
			return 'data/sprite/\xb8\xf3\xbd\xba\xc5\xcd/' + ( MonsterTable[id] || MonsterTable[1001] ).toLowerCase();
		}

		// PC
		if (id < 6000) {
			return 'data/sprite/\xc0\xce\xb0\xa3\xc1\xb7/\xb8\xf6\xc5\xeb/' + SexTable[sex] + '/' + ( ClassTable[id] || ClassTable[0] ) + '_' + SexTable[sex];
		}
		
		// NPC
		if (id < 11000) {
			return 'data/sprite/npc/' + ( MonsterTable[id] || MonsterTable[46] ).toLowerCase();
		}

		// Homunculus
		return 'data/sprite/homun/' + ( MonsterTable[id] || MonsterTable[1002] ).toLowerCase();

		// TODO: add support for mercenary
	};


	/**
	 * @return {string} path of admin clothes
	 * @param {boolean} sex
	 */
	DB.getAdminPath = function getAdminPath(sex)
	{
		return 'data/sprite/\xc0\xce\xb0\xa3\xc1\xb7/\xb8\xf6\xc5\xeb/' + SexTable[sex] + '/\xbf\xee\xbf\xb5\xc0\xda_' + SexTable[sex];
	};


	/**
	 * @return {string} path to body palette
	 * @param {number} id entity
	 * @param {number} pal
	 * @param {boolean} sex
	 */
	DB.getBodyPalPath = function getBodyPalettePath( id, pal, sex )
	{
		if (id === 0 || !(id in ClassTable)) {
			return null;
		}

		return 'data/palette/\xb8\xf6/' + ClassTable[id] + '_' + SexTable[sex] + '_' + pal + '.pal';
	};


	/**
	 * @return {string} path to head sprite/action
	 * @param {number} id hair style
	 * @param {boolean} sex
	 */
	DB.getHeadPath = function getHeadPath( id, sex )
	{
		return 'data/sprite/\xc0\xce\xb0\xa3\xc1\xb7/\xb8\xd3\xb8\xae\xc5\xeb/' + SexTable[sex] + '/' + (HairIndexTable[sex][id] || id)+ '_' + SexTable[sex];
	};


	/**
	 * @return {string} path to head palette
	 * @param {number} id hair style
	 * @param {number} pal id
	 * @param {boolean} sex
	 */
	DB.getHeadPalPath = function getHeadPalPath( id, pal, sex )
	{
		return 'data/palette/\xb8\xd3\xb8\xae/\xb8\xd3\xb8\xae' + (HairIndexTable[sex][id] || id) + '_' + SexTable[sex] + '_' + pal + '.pal';
	};


	/**
	 * @return {string} path to hat
	 * @param {number} id hair style
	 * @param {boolean} sex
	 */
	DB.getHatPath = function getHatPath( id, sex )
	{
		if (id === 0 || !(id in HatTable)) {
			return null;
		}

		return 'data/sprite/\xbe\xc7\xbc\xbc\xbb\xe7\xb8\xae/' + SexTable[sex] + '/' + SexTable[sex] + HatTable[id];
	};


	/**
	 * @return {string} Path to pets equipements
	 * @param {number} id (pets)
	 */
	DB.getPetEquipPath = function getPetEquipPath( id )
	{
		if (id === 0 || !(id in PetAction)) {
			return null;
		}

		return 'data/sprite/' + PetAction[id];
	};


	/**
	 * @return {string} Path to pets equipements
	 * @param {number} id (pets)
	 */
	DB.getPetIllustPath = function getPetIllustPath( id )
	{
		return 'data/texture/' + (PetIllustration[id] || PetIllustration[1002]);
	};


	/**
	 * @return {string} Path to shield
	 * @param {number} id shield
	 * @param {number} job class
	 * @param {boolean} sex
	 */
	DB.getShieldPath = function getShieldPath( id, job, sex )
	{
		if (id === 0) {
			return null;
		}

		// Took out dual-wield code... for now
		
		if( id > 100 ) return null; // Not a shield?

		var baseClass = WeaponJobTable[job] || WeaponJobTable[0];
		
		// ItemID to View Id
		if ((id in ItemTable) && ('ClassNum' in ItemTable[id])) {
			id = ItemTable[id].ClassNum;
		}

		return 'data/sprite/\xb9\xe6\xc6\xd0/' + baseClass + '/' + baseClass + '_' + SexTable[sex] + '_' + ( ShieldTable[id] || ShieldTable[1] );
	};


	/**
	 * @return {string} Path to weapon
	 * @param {number} id weapon
	 * @param {number} job class
	 * @param {boolean} sex
	 */
	DB.getWeaponPath = function getWeaponPath( id, job, sex )
	{
		if (id === 0) {
			return null;
		}

		var baseClass = WeaponJobTable[job] || WeaponJobTable[0];

		// ItemID to View Id
		if ((id >= 100) && (id in ItemTable) && ('ClassNum' in ItemTable[id])) {
			id = ItemTable[id].ClassNum;
		}

		return 'data/sprite/\xc0\xce\xb0\xa3\xc1\xb7/' + baseClass + '/' + baseClass + '_' + SexTable[sex] + ( WeaponTable[id] ) ;
	};


	/**
	 * @return {string} Path to eapon sound
	 * @param {number} weapon id
	 */
	DB.getWeaponSound = function getWeaponSound( id )
	{
		var type = DB.getWeaponViewID(id);

		// TODO: implement basejob
		if (type === WeaponType.NONE) {
			// return '_' + ( basejob ) + '_attack.wav';
		}

		return WeaponSoundTable[type];
	};


	/**
	 * @return {number} weapon viewid
	 * @param {number} id weapon
	 */
	DB.getWeaponViewID = function getWeaponViewIdClosure()
	{
		var gunGatling = [13157, 13158, 13159, 13172, 13177];
		var gunShotGun = [13154, 13155, 13156, 13167, 13168, 13169, 13173, 13178];
		var gunGranade = [13160, 13161, 13162, 13174, 13179];

		return function getWeaponViewID(id)
		{
			// Already weapon type.
			if (id < WeaponType.MAX) {
				return id;
			}

			// Based on view id
			if (id in ItemTable) {
				if (ItemTable[id].ClassNum) {
					return ItemTable[id].ClassNum;
				}
			}
			
			if(id >= 100 && id <= 102)   return WeaponType.SWORD;
			if(id >= 103 && id <= 105)   return WeaponType.MACE;
			if(id >= 106 && id <= 108)   return WeaponType.DAGGER;
			if(id >= 109 && id <= 111)   return WeaponType.TWOHANDSWORD;
			if(id >= 112 && id <= 114)   return WeaponType.AXE;
			if(id >= 115 && id <= 117)   return WeaponType.BOW;
			if(id >= 118 && id <= 120)   return WeaponType.ROD;

			// Specific weapon range inside other range (wtf gravity ?)
			if (id >= 1116 && id <= 1118)    return WeaponType.TWOHANDSWORD;
			if (id >= 1314 && id <= 1315)    return WeaponType.TWOHANDAXE;
			if (id >= 1410 && id <= 1412)    return WeaponType.TWOHANDSPEAR;
			if (id >= 1472 && id <= 1473)    return WeaponType.ROD;
			if (id === 1599)                 return WeaponType.MACE;
			if (gunGatling.indexOf(id) > -1) return WeaponType.GUN_GATLING;
			if (gunShotGun.indexOf(id) > -1) return WeaponType.GUN_SHOTGUN;
			if (gunGranade.indexOf(id) > -1) return WeaponType.GUN_GRANADE;
      
			// Ranges
			return (
          id <  1150 ? WeaponType.SWORD        :
			    id <  1200 ? WeaponType.TWOHANDSWORD :
			    id <  1250 ? WeaponType.SHORTSWORD   :
			    id <  1300 ? WeaponType.CATARRH      :
			    id <  1350 ? WeaponType.AXE          :
			    id <  1400 ? WeaponType.TWOHANDAXE   :
			    id <  1450 ? WeaponType.SPEAR        :
			    id <  1500 ? WeaponType.TWOHANDSPEAR :
			    id <  1550 ? WeaponType.MACE         :
			    id <  1600 ? WeaponType.BOOK         :
			    id <  1650 ? WeaponType.ROD          :
			    id <  1700 ? WeaponType.NONE         :
			    id <  1750 ? WeaponType.BOW          :
			    id <  1800 ? WeaponType.NONE         :
			    id <  1850 ? WeaponType.KNUKLE       :
			    id <  1900 ? WeaponType.NONE         :
			    id <  1950 ? WeaponType.INSTRUMENT   :
			    id <  2000 ? WeaponType.WHIP         :
			    id <  2050 ? WeaponType.TWOHANDROD   :
			    id < 13000 ? WeaponType.NONE         :
			    id < 13050 ? WeaponType.SHORTSWORD   :
			    id < 13100 ? WeaponType.NONE         :
			    id < 13150 ? WeaponType.GUN_HANDGUN  :
			    id < 13200 ? WeaponType.GUN_RIFLE    :
			    id < 13300 ? WeaponType.NONE         :
			    id < 13350 ? WeaponType.SYURIKEN     :
			    id < 13400 ? WeaponType.NONE         :
			    id < 13450 ? WeaponType.SWORD        :
			    id < 18100 ? WeaponType.NONE         :
			    id < 18150 ? WeaponType.BOW          :
			                 WeaponType.NONE
			);
		};
	}();


	/**
	 * @return {number} weapon action frame
	 * @param {number} id weapon
	 * @param {number} job
	 * @param {number} sex
	 */
	DB.getWeaponAction = function getWeaponAction( id, job, sex )
	{
		var type = DB.getWeaponViewID(id);

		if (job in WeaponAction) {
			if (WeaponAction[job] instanceof Array) {
				if (type in WeaponAction[job][sex]) {
					return WeaponAction[job][sex][type];
				}
			}
			else if (type in WeaponAction[job]) {
				return WeaponAction[job][type];
			}
		}

		return 0;
	};


	/**
	 * Get back informations from id
	 *
	 * @param {number} item id
	 * @return {object} item
	 */
	DB.getItemInfo = function getItemInfoClosure()
	{
		var unknownItem = {
			unidentifiedDisplayName: 'Unknown Item',
			unidentifiedResourceName: '\xbb\xe7\xb0\xfa',
			unidentifiedDescriptionName: [
				'...',
			],
			identifiedDisplayName: 'Unknown Item',
			identifiedResourceName: '\xbb\xe7\xb0\xfa',
			identifiedDescriptionName: [
				'...',
			],
			slotCount: 0,
			ClassNum: 0
		};

		return function getItemInfo( itemid )
		{
			var item = ItemTable[itemid] || unknownItem;
			var ratings = ["","\u2605\u2606\u2606","\u2605\u2605\u2606","\u2605\u2605\u2605","\u272A"];

			if (!item._decoded) {
				item.identifiedDescriptionName   = item.identifiedDescriptionName ? TextEncoding.decodeString(item.identifiedDescriptionName.join('\n'))   : '';
				item.unidentifiedDescriptionName = item.identifiedDescriptionName;
				item.identifiedDisplayName       = TextEncoding.decodeString(item.identifiedDisplayName);
				item.unidentifiedDisplayName     = item.identifiedDisplayName
				item.prefixNameTable             = TextEncoding.decodeString(item.prefixNameTable || '');
				item.flavortext                  = item.flavortext ? item.flavortext : '';
				item.condensedDesc               = item.condensedDesc ? TextEncoding.decodeString(item.condensedDesc.join('\n'))  : item.identifiedDescriptionName;
				item.BaseHP                      = item.BaseHP    || 0;
				item.BaseMP                      = item.BaseMP    || 0;
				item.BaseDEF                     = item.BaseDEF   || 0;
				item.BaseMDEF                    = item.BaseMDEF  || 0;
				item.BaseATK                     = item.BaseATK   || 0;
				item.BaseEVADE                   = item.BaseEVADE || 0;
				item.BaseCRIT                    = item.BaseCRIT  || 0;
				item.BaseCEL                     = item.BaseCEL   || 0;
				item.BaseMAG                     = item.BaseMAG   || 0;
				item.BaseCRIT                    = item.BaseCRIT  || 0;
				item.BaseDEF2                    = item.BaseDEF2  || 0;
				item.BaseMDEF2                   = item.BaseMDEF2 || 0;
				item.BaseBHP                     = item.BaseBHP   || 0;
				item.BaseASPD                    = item.BaseASPD  || 0;
				item.BaseCSPD                    = item.BaseCSPD  || 0;
				item.BaseSKILLDMG                = item.BaseSKILLDMG || 0;
				item.BaseSPELLDMG                = item.BaseSPELLDMG || 0;
				item.BaseBonus1                  = item.BaseBonus1 || 0;
				item.BaseBonus2                  = item.BaseBonus2 || 0;
				item.BaseBonus3                  = item.BaseBonus3 || 0;
				item.Multiplier1                 = item.Multiplier1 || 0;
				item.Multiplier2                 = item.Multiplier2 || 0;
				item.Multiplier3                 = item.Multiplier3 || 0;
				item.BaseRoll1                   = item.BaseRoll1 || 0;
				item.BaseRoll2                   = item.BaseRoll2 || 0;
				item.BaseRoll3                   = item.BaseRoll3 || 0;
				item.BaseRoll4                   = item.BaseRoll4 || 0;
				item.RollMultiplier1             = item.RollMultiplier1 || 0;
				item.RollMultiplier2             = item.RollMultiplier2 || 0;
				item.RollMultiplier3             = item.RollMultiplier3 || 0;
				item.RollMultiplier4             = item.RollMultiplier4 || 0;

				item.Rating                      = item.Rating || 0;
				item.identifiedDescriptionName   = item.identifiedDescriptionName.replace('$r$',ratings[item.Rating]);
				item.condensedDesc               = item.condensedDesc.replace('$r$',ratings[item.Rating]);
				item.EquipLoc                    = item.EquipLoc || 0;
				
				item._decoded                    = true;
			}

			return item;
		};
	}();

	// Flags
	// 1 - Item is equipped, apply stat penalties
	// 2 - Item obtained from cube, highlight high rolls
  //        extra: cube item level	

	DB.formatDesc = function formatDesc( item, flag, extra ) {
		var it = DB.getItemInfo( item.ITID );
		var bonus, bval, slotcount;
		var bonusdesc = "";
		var itemlevel = (item.ITID < 500) ? Math.min(item.IsIdentified, DB._blvl + 3) : item.IsIdentified;
		var statcolor = "^99BBFF";

		if( it.EquipLoc ) { // Only hats will have this set
			var desc = "^FFFFFFCosmetic Item\n\n";
			var loc = it.EquipLoc;
			
			desc += loc & 0x100 ? "Upper\n"  : "^777777Upper\n^FFFFFF";
			desc += loc & 0x010 ? "Middle\n" : "^777777Middle\n^FFFFFF";
			desc += loc & 0x001 ? "Lower\n"  : "^777777Lower\n^FFFFFF";
			return desc;
		}
		
		slotcount = (item.slot['card1'] > 0) + (item.slot['card2'] > 0) + (item.slot['card3'] > 0) + (item.slot['card4'] > 0);
		
		if( flag == 2 ) {
			if     ( slotcount > 3 ) bonusdesc = "\n\nEnchantments: ^99BBFF^bo" + slotcount + " !!^ld^FFFFFF\n";
			else if( slotcount > 2 ) bonusdesc = "\n\nEnchantments: ^99BBFF^bo" + slotcount + " !^ld^FFFFFF\n";
			else                     bonusdesc = "\n\nEnchantments: ^99BBFF" + slotcount + "^FFFFFF\n";
		} else {
			bonusdesc = (slotcount) ? "\n\n" : "";
		}
		
		if( item.slot && item.slot['card1'] ) {
			for( var i=0; i<4; i++ ) {
				if(item.slot['card' + (i+1)]) {
					bonus = DB.getItemInfo((item.slot && item.slot['card' + (i+1)]));
					
					bval = (item.rolls >> (i * 8)) & 0xFF;
					
					bonusdesc += bonus.identifiedDescriptionName + '\n';
					bonusdesc = bonusdesc.replace(/\$shard/g,'\u25C6');
					bonusdesc = bonusdesc.replace(/\$seal/g,'\u2756');
					bonusdesc = bonusdesc.replace('$roll1$','^99BBFF' + (Math.floor(bval * (bonus.BaseRoll1 * (bonus.RollMultiplier1-1) + 1) / 100) + bonus.BaseRoll1) + '^FFFFFF');
					bonusdesc = bonusdesc.replace('$roll2$','^99BBFF' + (Math.floor(bval * (bonus.BaseRoll2 * (bonus.RollMultiplier2-1) + 1) / 100) + bonus.BaseRoll2) + '^FFFFFF');
					bonusdesc = bonusdesc.replace('$roll3$','^99BBFF' + ((Math.floor(bval * (bonus.BaseRoll3 * (bonus.RollMultiplier3-1) + 1) / 100) + bonus.BaseRoll3) / 10).toFixed(1) + '^FFFFFF');
					bonusdesc = bonusdesc.replace('$roll4$','^99BBFF' + ((Math.floor(bval * (bonus.BaseRoll4 * (bonus.RollMultiplier4-1) + 1) / 100) + bonus.BaseRoll4) / 100).toFixed(2) + '^FFFFFF');
				}
			}
		}
	
	
		var desc = '^FFFFFF' + it.condensedDesc + bonusdesc;
		var lvldiff = -(itemlevel - item.IsIdentified);
		
		if( flag != 2 ) {
			if( (flag == 1) && lvldiff )
				desc = desc.replace('$ilvl$', '^FF99BB' + itemlevel + '^FFFFFF' + '   (^99BBFF'+item.IsIdentified+'^FFFFFF)');
			else if( (flag != 1) && lvldiff )
				desc = desc.replace('$ilvl$', '^99BBFF'+item.IsIdentified+'^FFFFFF'+'   (^FF99BB' + itemlevel + '^FFFFFF Equipped)');
			else
				desc = desc.replace('$ilvl$', '^99BBFF'+item.IsIdentified+'^FFFFFF');
		} else if( flag == 2 ) {
			if     ( item.IsIdentified - extra > 2 ) desc = desc.replace('$ilvl$', '^99BBFF^bo'+item.IsIdentified+' !!^ld^FFFFFF');
			else if( item.IsIdentified - extra > 1 ) desc = desc.replace('$ilvl$', '^99BBFF^bo'+item.IsIdentified+' !^ld^FFFFFF');
			else                                     desc = desc.replace('$ilvl$', '^99BBFF'+item.IsIdentified+'^FFFFFF');
		}

		// display actual item stats when unequipped, penalized stats when equipped
		itemlevel = ( flag == 1 ) ? itemlevel : item.IsIdentified;
		statcolor = ( (flag == 1) && ((itemlevel - item.IsIdentified) < 0)) ? "^FF99BB" : statcolor;
		
		if( flag == 2 ) {
			if     ( item.RefiningLevel > 115 ) desc = desc.replace('$quality$', '^99BBFF^bo'+item.RefiningLevel+' !!^ld^FFFFFF');
			else if( item.RefiningLevel > 100 ) desc = desc.replace('$quality$', '^99BBFF^bo'+item.RefiningLevel+' !^ld^FFFFFF');
			else                                desc = desc.replace('$quality$', '^99BBFF'+item.RefiningLevel+'^FFFFFF');
			
		} else {
			desc = desc.replace('$quality$', '^99BBFF'+item.RefiningLevel+'^FFFFFF');
		}
		
		desc = desc.replace('$hp$', statcolor+getStatValue(it.BaseHP, DB._mult["HP"], item.RefiningLevel, itemlevel)+'^FFFFFF');
		desc = desc.replace('$mp$', statcolor+getStatValue(it.BaseMP, DB._mult["MP"], item.RefiningLevel, itemlevel)+'^FFFFFF');
		desc = desc.replace('$def$', statcolor+getStatValue(it.BaseDEF, DB._mult["DEF"], item.RefiningLevel, itemlevel)+'^FFFFFF');
		desc = desc.replace('$mdef$', statcolor+getStatValue(it.BaseMDEF, DB._mult["MDEF"], item.RefiningLevel, itemlevel)+'^FFFFFF');
		desc = desc.replace('$atk$', statcolor+getStatValue(it.BaseATK, DB._mult["ATK"], item.RefiningLevel, itemlevel)+'^FFFFFF');
		desc = desc.replace('$mag$', statcolor+getStatValue(it.BaseMAG, DB._mult["MAG"], item.RefiningLevel, itemlevel)+'^FFFFFF');
		desc = desc.replace('$eva$', statcolor+getStatValue(it.BaseEVADE, DB._mult["EVA"], item.RefiningLevel, itemlevel)+'^FFFFFF');
		desc = desc.replace('$cel$', statcolor+getStatValue(it.BaseCEL, DB._mult["CEL"], item.RefiningLevel, itemlevel)+'^FFFFFF');
		desc = desc.replace('$crit$', statcolor+(getStatValue(it.BaseCRIT, DB._mult["CRIT"], item.RefiningLevel, itemlevel) / 10).toFixed(1)+'^FFFFFF');
		desc = desc.replace('$def2$', statcolor+(getStatValue(it.BaseDEF2, DB._mult["DEF2"], item.RefiningLevel, itemlevel) / 10).toFixed(1)+'^FFFFFF');
		desc = desc.replace('$mdef2$', statcolor+(getStatValue(it.BaseMDEF2, DB._mult["MDEF2"], item.RefiningLevel, itemlevel) / 10).toFixed(1)+'^FFFFFF');
		desc = desc.replace('$skilldmg$', statcolor+getStatValue(it.BaseSKILLDMG, DB._mult["SKILLDMG"], item.RefiningLevel, itemlevel)+'^FFFFFF');
		desc = desc.replace('$spelldmg$', statcolor+getStatValue(it.BaseSPELLDMG, DB._mult["SPELLDMG"], item.RefiningLevel, itemlevel)+'^FFFFFF');
		desc = desc.replace('$aspd$', statcolor+getStatValue(it.BaseASPD, DB._mult["ASPD"], item.RefiningLevel, itemlevel)+'^FFFFFF');
		desc = desc.replace('$cspd$', statcolor+getStatValue(it.BaseCSPD, DB._mult["CSPD"], item.RefiningLevel, itemlevel)+'^FFFFFF');
		desc = desc.replace('$bonus1$', statcolor+getStatValue(it.BaseBonus1, it.Multiplier1, item.RefiningLevel, itemlevel)+'^FFFFFF');
		desc = desc.replace('$bonus2$', statcolor+getStatValue(it.BaseBonus2, it.Multiplier2, item.RefiningLevel, itemlevel)+'^FFFFFF');
		desc = desc.replace('$bonus3$', statcolor+(getStatValue(it.BaseBonus3, it.Multiplier3, item.RefiningLevel, itemlevel) / 10).toFixed(1)+'^FFFFFF');
		
		return desc;
	};
	
	function getStatValue( base, multiplier, quality, ilvl ) {
		return Math.floor(Math.floor((multiplier-1) * ilvl * 2 * base / 100 + base) * quality / 100);
	}
	
	/**
	 * Get back item path
	 *
	 * @param {number} item id
	 * @param {boolean} is identify
	 * @return {string} path
	 */
	DB.getItemPath = function getItemPath( itemid, identify )
	{
		var it = DB.getItemInfo( itemid );
		return 'data/sprite/\xbe\xc6\xc0\xcc\xc5\xdb/' + it.identifiedResourceName;
	};


	/**
	 * Get full item name
	 *
	 * @param {object} item
	 * @return {string} item full name
	 */
	DB.getItemName = function getItemName( item )
	{
		var it = DB.getItemInfo( item.ITID );
		var str = '';

		if (item.slot) {
			switch (item.slot.card1) {
				case 0x00FF: // FORGE
				case 0x00FE: // CREATE
				case 0xFF00: // PET
					break;

				// Show card prefix
				default:
					var list  = ['', 'Double ', 'Triple ', 'Quadruple '];
					var count = [0, 0, 0, 0];
					var name, prefix = [];
					var i, j = 0, pos;

					for (i = 1; i <= 4; ++i) {
						if (!item.slot['card'+i]) {
							break;
						}

						name = DB.getItemInfo(item.slot['card'+i]).prefixNameTable;
						if (name) {
							pos = prefix.indexOf(name);
							if (pos > -1) {
								count[pos]++;
								continue;
							}
							prefix[j] = name;
							count[j]++;
							j++;
						}
					}

					for (i = 0; i < j; ++i) {
						str += list[count[i]-1] + prefix[i] + ' ';
					}
			}
		}


		str += it.identifiedDisplayName;

		if (it.slotCount) {
			str += ' [' + it.slotCount + ']';
		}

		return str;
	};


	/**
	 * Get a message from msgstringtable
	 *
	 * @param {number} message id
	 * @param {string} optional string to show if the text isn't defined
	 * @return {string} message
	 */
	DB.getMessage = function getMessage(id, defaultText)
	{
		if (!(id in MsgStringTable)) {
			return defaultText !== undefined ? defaultText : 'NO MSG ' + id;
		}

		return TextEncoding.decodeString( MsgStringTable[id] );
	};


	/**
	 * @param {string} filename
	 * @return {object}
	 */
	DB.getMap = function getMap( mapname )
	{
		var map = mapname.replace('.gat','.rsw');

		return MapTable[map] || null;
	};


	/**
	 * Get a message from msgstringtable
	 *
	 * @param {string} mapname
	 * @param {string} default name if not found
	 * @return {string} map location
	 */
	DB.getMapName = function getMapName( mapname, defaultName )
	{
		var map = mapname.replace('.gat','.rsw');

		if (!(map in MapTable) || !MapTable[map].name) {
			return (typeof defaultName === 'undefined' ? DB.getMessage(187) : defaultName);
		}

		return TextEncoding.decodeString(MapTable[map].name);
	};


	/**
	 * Is character id a baby ?
	 *
	 * @param {number} job id
	 * @return {boolean} is baby
	 */
	DB.isBaby = function isBaby( jobid )
	{
		return BabyTable.indexOf(jobid) > -1;
	};

  // Rarity Prefix
	DB.getRarity = function getRarity( rarity )
	{
		return RarityTable[rarity];
	};
	
	/**
	 * Export
	 */
	return DB;
});