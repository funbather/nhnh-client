/**
 * Network/PacketVerManager.js
 *
 * Manager to find the server protocol
 *
 * This file is part of ROBrowser, Ragnarok Online in the Web Browser (http://www.robrowser.com/).
 *
 * @author Vincent Thibault
 */

define(['Core/Configs'], function( Configs )
{
	"use strict";


	/**
	 * PACKETVER range
	 * @var integer
	 */
	var _value = 0;


	/**
	 * Loop over version to find the good one
	 * @return integer[] offset
	 */
	function getPacketVersion() {
		var versions = this.versions;
		var i, count = versions.length;
	
		for (i = 0; i < count-1; ++i) {
			if (_value < versions[i+1][0]) {
				return versions[i];
			}
		}
		return versions[i];
	}


	/**
	 * Get block size based on packetver
	 *
	 * @return {number} blocksize
	 */
	function calculateBlockSize() {
		// Not dependent of PACKETVER
		var blockSize = 106;
		blockSize += 2; // hairColor;
		blockSize += 4; // unknown value

		// slot/haircolor (2 * (short)) -> (2 * (char))
		// remove unknown 4 bytes
		blockSize += -(2 * 2) + (1 * 2) - 4;

		// Start check
		if (_value >= 20061023) {
			blockSize += 2;  // .bIsChangedCharName
		}

		// hp/maxhp (2 * (short)) -> (2 * (int))
		if (_value > 20081217) {
			blockSize += -(2 * 2) + (2 * 4);
		}

		if ((_value >= 20100720 && _value <= 20100727) || _value >= 20100803) {
			blockSize += 12; // lastMap(14) - never found it...
			blockSize += 4;  // lastMap(16)
		}

		// delete date
		if (_value >= 20100803) {
			blockSize += 4;
		}

		// robe
		if (_value >= 20110111) {
			blockSize += 4;
		}

		// slot addon
		if (_value >= 20110928) {
			blockSize += 4;
		}

		// rename addon
		if (_value >= 20111025) {
			blockSize += 4;
		}

		// Character sex
		if (_value >= 20141016) {
			blockSize++;
		}

		// Weapon move from short to int
		if (_value >= 20141022) {
			blockSize += 2;
		}

		return blockSize;
	}


	/**
	 * Parse char list
	 *
	 * @param {BinaryReader} fp
	 * @param {number} end of the reader
	 */
	function parseCharList(fp, end) {
		if (!end) {
			end = fp.length;
		}

		var i, count, out = [];
		var blockSize = 151;
		var length = end - fp.tell();

		// Nothing to parse
		if (length <= 0) {
			return out;
		}
		
		// Removed blocksize checks, there will only ever be one (1) size at a time

		for (i = 0, count = length / blockSize; i < count; ++i) {
			out[i] = {};
			out[i].GID = fp.readULong();
			out[i].exp = fp.readLong();
			out[i].money = fp.readLong();
			out[i].jobexp = fp.readLong();
			out[i].joblevel = fp.readLong();
			out[i].bodyState = fp.readLong();
			out[i].healthState = fp.readLong();
			out[i].effectState = fp.readLong();
			out[i].virtue = fp.readLong();
			out[i].honor = fp.readLong();
			out[i].jobpoint = fp.readShort();
			out[i].hp = fp.readLong();
			out[i].maxhp = fp.readLong();
			out[i].sp = fp.readShort();
			out[i].maxsp = fp.readShort();
			out[i].speed = fp.readShort();
			out[i].job = fp.readShort();
			out[i].head = fp.readShort();
			out[i].body = fp.readShort();
			out[i].weapon = fp.readShort();
			out[i].level = fp.readShort();
			out[i].sppoint = fp.readShort();
			out[i].accessory = fp.readShort();
			out[i].shield = fp.readShort();
			out[i].accessory2 = fp.readShort();
			out[i].accessory3 = fp.readShort();
			out[i].headpalette = fp.readShort();
			out[i].bodypalette = fp.readShort();
			out[i].name = fp.readString(24);
			out[i].Str = fp.readUChar();
			out[i].Agi = fp.readUChar();
			out[i].Vit = fp.readUChar();
			out[i].Int = fp.readUChar();
			out[i].Dex = fp.readUChar();
			out[i].Luk = fp.readUChar();
			out[i].CharNum = fp.readUChar();
			out[i].haircolor = fp.readUChar();
			out[i].bIsChangedCharName = fp.readShort();
			out[i].lastMap = fp.readBinaryString(16);
			out[i].DeleteDate = fp.readLong();
			out[i].Robe = fp.readLong();
			out[i].SlotAddon = fp.readLong();
			out[i].RenameAddon = fp.readLong();
			out[i].sex = fp.readUChar();
			out[i].classes = fp.readLong();
		}

		return out;
	}



	/**
	 * Add support for a new packet version
	 * 
	 * @param {number} date
	 * @param {number[]} list of offsets
	 */
	function addSupport(date, list) {
		var packet, param;
		var i, count = list.length;

		for (i = 0; i < count; ++i) {
			param    = list[i];
			packet   = param[0];
			param[0] = date;

			if (!packet.prototype.versions)
				packet.prototype.versions = [];
	
			packet.prototype.versions.push(list[i]);
			packet.prototype.getPacketVersion = getPacketVersion;
		}
	}


	/**
	 * Export
	 */
	return {

		// Get Back data
		get value() {
			return _value;
		},

		set value(v) {
			if (v !== _value) {
				console.log( "%c[PACKETVER] Set packet version ", "color:#007000", _value = v);
			}
		},

		// Add support for packet version
		addSupport:    addSupport,
		parseCharInfo: parseCharList
	};
});