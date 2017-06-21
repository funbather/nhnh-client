define( ['Core/Preferences', 'Controls/KeyEventHandler'], function( Preferences, KEYS )
{
	'use strict';
	
	var keybind = {};
	keybind.keys = {};
	
	keybind.key11 = "1";
	keybind.key12 = "2";
	keybind.key13 = "3";
	keybind.key14 = "4";
	keybind.key15 = "5";
	keybind.key16 = "6";
	keybind.key17 = "7";
	keybind.key18 = "8";
	keybind.key19 = "9";
	
	keybind.key21 = "Q";
	keybind.key22 = "W";
	keybind.key23 = "E";
	keybind.key24 = "R";
	keybind.key25 = "T";
	keybind.key26 = "Y";
	keybind.key27 = "U";
	keybind.key28 = "I";
	keybind.key29 = "O";
	
	keybind.key31 = "A";
	keybind.key32 = "S";
	keybind.key33 = "D";
	keybind.key34 = "F";
	keybind.key35 = "G";
	keybind.key36 = "H";
	keybind.key37 = "J";
	keybind.key38 = "K";
	keybind.key39 = "L";
	
	keybind.keyHK = "0";
	
	keybind.keyEQ = "Z";
	keybind.keyIV = "X";
	keybind.keySL = "C";
	keybind.keyPA = "V";
	keybind.keyFR = "B";
	keybind.keyEM = "N";
	
	keybind.keys[ (keybind.key11).charCodeAt(0) ]      = { component:'ShortCut',        cmd:'EXECUTE0' };
	keybind.keys[ (keybind.key12).charCodeAt(0) ]      = { component:'ShortCut',        cmd:'EXECUTE1' };
	keybind.keys[ (keybind.key13).charCodeAt(0) ]      = { component:'ShortCut',        cmd:'EXECUTE2' };
	keybind.keys[ (keybind.key14).charCodeAt(0) ]      = { component:'ShortCut',        cmd:'EXECUTE3' };
	keybind.keys[ (keybind.key15).charCodeAt(0) ]      = { component:'ShortCut',        cmd:'EXECUTE4' };
	keybind.keys[ (keybind.key16).charCodeAt(0) ]      = { component:'ShortCut',        cmd:'EXECUTE5' };
	keybind.keys[ (keybind.key17).charCodeAt(0) ]      = { component:'ShortCut',        cmd:'EXECUTE6' };
	keybind.keys[ (keybind.key18).charCodeAt(0) ]      = { component:'ShortCut',        cmd:'EXECUTE7' };
	keybind.keys[ (keybind.key19).charCodeAt(0) ]      = { component:'ShortCut',        cmd:'EXECUTE8' };

	keybind.keys[ (keybind.key21).charCodeAt(0) ]      = { component:'ShortCut',        cmd:'EXECUTE9' };
	keybind.keys[ (keybind.key22).charCodeAt(0) ]      = { component:'ShortCut',        cmd:'EXECUTE10' };
	keybind.keys[ (keybind.key23).charCodeAt(0) ]      = { component:'ShortCut',        cmd:'EXECUTE11' };
	keybind.keys[ (keybind.key24).charCodeAt(0) ]      = { component:'ShortCut',        cmd:'EXECUTE12' };
	keybind.keys[ (keybind.key25).charCodeAt(0) ]      = { component:'ShortCut',        cmd:'EXECUTE13' };
	keybind.keys[ (keybind.key26).charCodeAt(0) ]      = { component:'ShortCut',        cmd:'EXECUTE14' };
	keybind.keys[ (keybind.key27).charCodeAt(0) ]      = { component:'ShortCut',        cmd:'EXECUTE15' };
	keybind.keys[ (keybind.key28).charCodeAt(0) ]      = { component:'ShortCut',        cmd:'EXECUTE16' };
	keybind.keys[ (keybind.key29).charCodeAt(0) ]      = { component:'ShortCut',        cmd:'EXECUTE17' };

	keybind.keys[ (keybind.key31).charCodeAt(0) ]      = { component:'ShortCut',        cmd:'EXECUTE18' };
	keybind.keys[ (keybind.key32).charCodeAt(0) ]      = { component:'ShortCut',        cmd:'EXECUTE19' };
	keybind.keys[ (keybind.key33).charCodeAt(0) ]      = { component:'ShortCut',        cmd:'EXECUTE20' };
	keybind.keys[ (keybind.key34).charCodeAt(0) ]      = { component:'ShortCut',        cmd:'EXECUTE21' };
	keybind.keys[ (keybind.key35).charCodeAt(0) ]      = { component:'ShortCut',        cmd:'EXECUTE22' };
	keybind.keys[ (keybind.key36).charCodeAt(0) ]      = { component:'ShortCut',        cmd:'EXECUTE23' };
	keybind.keys[ (keybind.key37).charCodeAt(0) ]      = { component:'ShortCut',        cmd:'EXECUTE24' };
	keybind.keys[ (keybind.key38).charCodeAt(0) ]      = { component:'ShortCut',        cmd:'EXECUTE25' };
	keybind.keys[ (keybind.key39).charCodeAt(0) ]      = { component:'ShortCut',        cmd:'EXECUTE26' };
	
	keybind.keys[ (keybind.keyHK).charCodeAt(0) ]      = { component:'ShortCut',        cmd:'EXTEND'   };

	// UI
	keybind.keys[ (keybind.keyEQ).charCodeAt(0) ]   = { component:'Equipment',       cmd:'TOGGLE', alt:false };
	keybind.keys[ (keybind.keyIV).charCodeAt(0) ]   = { component:'Inventory',       cmd:'TOGGLE', alt:false };
	keybind.keys[ (keybind.keySL).charCodeAt(0) ]   = { component:'SkillList',       cmd:'TOGGLE', alt:false };
	keybind.keys[ (keybind.keyPA).charCodeAt(0) ]   = { component:'PartyFriends',    cmd:'PARTY',  alt:false };
	keybind.keys[ (keybind.keyFR).charCodeAt(0) ]   = { component:'PartyFriends',    cmd:'FRIEND', alt:false };
	keybind.keys[ (keybind.keyEM).charCodeAt(0) ]   = { component:'Emoticons',       cmd:'TOGGLE', alt:false };
	
	return Preferences.get( 'Keybinds', keybind, 2.5 );
});