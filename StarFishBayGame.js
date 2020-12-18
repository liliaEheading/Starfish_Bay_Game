(function (cjs, an) {

var p; // shortcut to reference prototypes
var lib={};var ss={};var img={};
lib.webFontTxtInst = {}; 
var loadedTypekitCount = 0;
var loadedGoogleCount = 0;
var gFontsUpdateCacheList = [];
var tFontsUpdateCacheList = [];
lib.ssMetadata = [
		{name:"StarFishBayGame_atlas_1", frames: [[0,0,1984,1492]]},
		{name:"StarFishBayGame_atlas_2", frames: [[0,0,1892,1258]]},
		{name:"StarFishBayGame_atlas_3", frames: [[0,0,1561,1283]]},
		{name:"StarFishBayGame_atlas_4", frames: [[0,0,1617,1174]]},
		{name:"StarFishBayGame_atlas_5", frames: [[0,0,1628,1090]]},
		{name:"StarFishBayGame_atlas_6", frames: [[0,0,1561,1092]]},
		{name:"StarFishBayGame_atlas_7", frames: [[0,0,1434,1018],[0,1020,1600,900]]},
		{name:"StarFishBayGame_atlas_8", frames: [[0,0,1268,1024]]},
		{name:"StarFishBayGame_atlas_9", frames: [[0,0,1268,1024]]},
		{name:"StarFishBayGame_atlas_10", frames: [[0,0,1268,1024]]},
		{name:"StarFishBayGame_atlas_11", frames: [[0,0,1268,1024]]},
		{name:"StarFishBayGame_atlas_12", frames: [[0,0,1268,1024]]},
		{name:"StarFishBayGame_atlas_13", frames: [[0,0,1268,1024]]},
		{name:"StarFishBayGame_atlas_14", frames: [[0,0,1268,1024]]},
		{name:"StarFishBayGame_atlas_15", frames: [[0,0,1268,1024]]},
		{name:"StarFishBayGame_atlas_16", frames: [[0,0,1268,1024]]},
		{name:"StarFishBayGame_atlas_17", frames: [[0,0,1268,1024]]},
		{name:"StarFishBayGame_atlas_18", frames: [[0,0,1268,1024]]},
		{name:"StarFishBayGame_atlas_19", frames: [[0,0,1268,1024]]},
		{name:"StarFishBayGame_atlas_20", frames: [[0,0,1268,1024]]},
		{name:"StarFishBayGame_atlas_21", frames: [[0,0,1268,1024],[0,1026,1300,953]]},
		{name:"StarFishBayGame_atlas_22", frames: [[0,0,1024,1024]]},
		{name:"StarFishBayGame_atlas_23", frames: [[0,0,1024,1024]]},
		{name:"StarFishBayGame_atlas_24", frames: [[0,0,1024,1024]]},
		{name:"StarFishBayGame_atlas_25", frames: [[0,0,1024,1024]]},
		{name:"StarFishBayGame_atlas_26", frames: [[0,0,1024,1024]]},
		{name:"StarFishBayGame_atlas_27", frames: [[0,0,1024,1024]]},
		{name:"StarFishBayGame_atlas_28", frames: [[0,0,1024,1024]]},
		{name:"StarFishBayGame_atlas_29", frames: [[0,0,1024,1024]]},
		{name:"StarFishBayGame_atlas_30", frames: [[0,0,1024,1024]]},
		{name:"StarFishBayGame_atlas_31", frames: [[0,0,1024,1024]]},
		{name:"StarFishBayGame_atlas_32", frames: [[0,0,1024,1024]]},
		{name:"StarFishBayGame_atlas_33", frames: [[0,0,1024,1024]]},
		{name:"StarFishBayGame_atlas_34", frames: [[0,0,1024,1024]]},
		{name:"StarFishBayGame_atlas_35", frames: [[0,0,1024,1024]]},
		{name:"StarFishBayGame_atlas_36", frames: [[0,1026,1107,830],[0,0,1024,1024]]},
		{name:"StarFishBayGame_atlas_37", frames: [[0,832,1087,815],[0,0,1107,830]]},
		{name:"StarFishBayGame_atlas_38", frames: [[0,0,1087,815],[0,817,1087,815]]},
		{name:"StarFishBayGame_atlas_39", frames: [[1026,0,683,710],[504,770,683,710],[1189,712,683,710],[0,770,502,1000],[0,0,1024,768]]},
		{name:"StarFishBayGame_atlas_40", frames: [[0,0,683,710],[0,712,683,710],[685,0,683,710],[685,712,683,710]]},
		{name:"StarFishBayGame_atlas_41", frames: [[0,0,683,710],[0,712,683,710],[685,0,683,710],[685,712,683,710]]},
		{name:"StarFishBayGame_atlas_42", frames: [[0,0,683,710],[0,712,683,710],[685,0,683,710],[685,712,683,710]]},
		{name:"StarFishBayGame_atlas_43", frames: [[0,0,683,710],[0,712,683,710],[685,0,683,710],[685,712,683,710]]},
		{name:"StarFishBayGame_atlas_44", frames: [[0,0,683,710],[0,712,683,710],[685,0,683,710],[685,712,683,710]]},
		{name:"StarFishBayGame_atlas_45", frames: [[0,0,683,710],[0,712,683,710],[685,0,683,710],[685,712,683,710],[946,1424,699,451],[0,1424,944,388]]},
		{name:"StarFishBayGame_atlas_46", frames: [[618,1302,602,185],[0,1492,652,158],[646,1785,575,144],[0,1302,616,188],[0,1652,644,141],[654,1640,657,143],[1313,1640,531,169],[1222,1445,577,193],[1795,418,250,151],[1795,571,250,151],[0,0,1164,257],[0,259,1164,257],[0,1166,1236,134],[0,518,1164,257],[497,897,1236,134],[569,1931,464,74],[1554,1942,494,80],[811,1033,345,99],[1610,1033,386,272],[0,777,495,387],[331,1795,236,237],[1801,1307,236,237],[0,1795,329,220],[1223,1811,329,220],[1166,514,627,381],[1238,1033,370,410],[1166,0,512,512],[1680,0,347,416],[1554,1811,355,129],[654,1489,355,129],[497,777,312,118],[811,777,312,118],[497,1033,312,118]]},
		{name:"StarFishBayGame_atlas_47", frames: [[0,224,393,45],[633,112,357,48],[356,56,466,54],[356,0,522,54],[0,0,354,93],[880,0,122,106],[731,162,100,88],[833,162,76,72],[633,162,96,108],[0,95,209,110],[211,112,209,110],[422,112,209,110]]}
];



lib.updateListCache = function (cacheList) {		
	for(var i = 0; i < cacheList.length; i++) {		
		if(cacheList[i].cacheCanvas)		
			cacheList[i].updateCache();		
	}		
};		

lib.addElementsToCache = function (textInst, cacheList) {		
	var cur = textInst;		
	while(cur != null && cur != exportRoot) {		
		if(cacheList.indexOf(cur) != -1)		
			break;		
		cur = cur.parent;		
	}		
	if(cur != exportRoot) {		
		var cur2 = textInst;		
		var index = cacheList.indexOf(cur);		
		while(cur2 != null && cur2 != cur) {		
			cacheList.splice(index, 0, cur2);		
			cur2 = cur2.parent;		
			index++;		
		}		
	}		
	else {		
		cur = textInst;		
		while(cur != null && cur != exportRoot) {		
			cacheList.push(cur);		
			cur = cur.parent;		
		}		
	}		
};		

lib.gfontAvailable = function(family, totalGoogleCount) {		
	lib.properties.webfonts[family] = true;		
	var txtInst = lib.webFontTxtInst && lib.webFontTxtInst[family] || [];		
	for(var f = 0; f < txtInst.length; ++f)		
		lib.addElementsToCache(txtInst[f], gFontsUpdateCacheList);		

	loadedGoogleCount++;		
	if(loadedGoogleCount == totalGoogleCount) {		
		lib.updateListCache(gFontsUpdateCacheList);		
	}		
};		

lib.tfontAvailable = function(family, totalTypekitCount) {		
	lib.properties.webfonts[family] = true;		
	var txtInst = lib.webFontTxtInst && lib.webFontTxtInst[family] || [];		
	for(var f = 0; f < txtInst.length; ++f)		
		lib.addElementsToCache(txtInst[f], tFontsUpdateCacheList);		

	loadedTypekitCount++;		
	if(loadedTypekitCount == totalTypekitCount) {		
		lib.updateListCache(tFontsUpdateCacheList);		
	}		
};
(lib.AnMovieClip = function(){
	this.actionFrames = [];
	this.gotoAndPlay = function(positionOrLabel){
		cjs.MovieClip.prototype.gotoAndPlay.call(this,positionOrLabel);
	}
	this.play = function(){
		cjs.MovieClip.prototype.play.call(this);
	}
	this.gotoAndStop = function(positionOrLabel){
		cjs.MovieClip.prototype.gotoAndStop.call(this,positionOrLabel);
	}
	this.stop = function(){
		cjs.MovieClip.prototype.stop.call(this);
	}
}).prototype = p = new cjs.MovieClip();
// symbols:



(lib.CachedBmp_34 = function() {
	this.initialize(ss["StarFishBayGame_atlas_46"]);
	this.gotoAndStop(0);
}).prototype = p = new cjs.Sprite();



(lib.CachedBmp_33 = function() {
	this.initialize(ss["StarFishBayGame_atlas_46"]);
	this.gotoAndStop(1);
}).prototype = p = new cjs.Sprite();



(lib.CachedBmp_32 = function() {
	this.initialize(ss["StarFishBayGame_atlas_46"]);
	this.gotoAndStop(2);
}).prototype = p = new cjs.Sprite();



(lib.CachedBmp_31 = function() {
	this.initialize(ss["StarFishBayGame_atlas_46"]);
	this.gotoAndStop(3);
}).prototype = p = new cjs.Sprite();



(lib.CachedBmp_30 = function() {
	this.initialize(ss["StarFishBayGame_atlas_46"]);
	this.gotoAndStop(4);
}).prototype = p = new cjs.Sprite();



(lib.CachedBmp_29 = function() {
	this.initialize(ss["StarFishBayGame_atlas_46"]);
	this.gotoAndStop(5);
}).prototype = p = new cjs.Sprite();



(lib.CachedBmp_28 = function() {
	this.initialize(ss["StarFishBayGame_atlas_46"]);
	this.gotoAndStop(6);
}).prototype = p = new cjs.Sprite();



(lib.CachedBmp_27 = function() {
	this.initialize(ss["StarFishBayGame_atlas_46"]);
	this.gotoAndStop(7);
}).prototype = p = new cjs.Sprite();



(lib.CachedBmp_26 = function() {
	this.initialize(ss["StarFishBayGame_atlas_47"]);
	this.gotoAndStop(0);
}).prototype = p = new cjs.Sprite();



(lib.CachedBmp_25 = function() {
	this.initialize(ss["StarFishBayGame_atlas_47"]);
	this.gotoAndStop(1);
}).prototype = p = new cjs.Sprite();



(lib.CachedBmp_24 = function() {
	this.initialize(ss["StarFishBayGame_atlas_46"]);
	this.gotoAndStop(8);
}).prototype = p = new cjs.Sprite();



(lib.CachedBmp_23 = function() {
	this.initialize(ss["StarFishBayGame_atlas_46"]);
	this.gotoAndStop(9);
}).prototype = p = new cjs.Sprite();



(lib.CachedBmp_210 = function() {
	this.initialize(img.CachedBmp_210);
}).prototype = p = new cjs.Bitmap();
p.nominalBounds = new cjs.Rectangle(0,0,2055,1545);


(lib.CachedBmp_209 = function() {
	this.initialize(img.CachedBmp_209);
}).prototype = p = new cjs.Bitmap();
p.nominalBounds = new cjs.Rectangle(0,0,2055,1545);


(lib.CachedBmp_208 = function() {
	this.initialize(img.CachedBmp_208);
}).prototype = p = new cjs.Bitmap();
p.nominalBounds = new cjs.Rectangle(0,0,2055,1545);


(lib.CachedBmp_207 = function() {
	this.initialize(img.CachedBmp_207);
}).prototype = p = new cjs.Bitmap();
p.nominalBounds = new cjs.Rectangle(0,0,2055,1545);


(lib.CachedBmp_206 = function() {
	this.initialize(img.CachedBmp_206);
}).prototype = p = new cjs.Bitmap();
p.nominalBounds = new cjs.Rectangle(0,0,2055,1545);


(lib.CachedBmp_205 = function() {
	this.initialize(img.CachedBmp_205);
}).prototype = p = new cjs.Bitmap();
p.nominalBounds = new cjs.Rectangle(0,0,2055,1545);


(lib.CachedBmp_204 = function() {
	this.initialize(ss["StarFishBayGame_atlas_1"]);
	this.gotoAndStop(0);
}).prototype = p = new cjs.Sprite();



(lib.CachedBmp_15 = function() {
	this.initialize(ss["StarFishBayGame_atlas_46"]);
	this.gotoAndStop(10);
}).prototype = p = new cjs.Sprite();



(lib.CachedBmp_14 = function() {
	this.initialize(ss["StarFishBayGame_atlas_4"]);
	this.gotoAndStop(0);
}).prototype = p = new cjs.Sprite();



(lib.CachedBmp_13 = function() {
	this.initialize(ss["StarFishBayGame_atlas_46"]);
	this.gotoAndStop(11);
}).prototype = p = new cjs.Sprite();



(lib.CachedBmp_12copy2 = function() {
	this.initialize(ss["StarFishBayGame_atlas_46"]);
	this.gotoAndStop(12);
}).prototype = p = new cjs.Sprite();



(lib.CachedBmp_11 = function() {
	this.initialize(ss["StarFishBayGame_atlas_46"]);
	this.gotoAndStop(13);
}).prototype = p = new cjs.Sprite();



(lib.CachedBmp_12 = function() {
	this.initialize(ss["StarFishBayGame_atlas_46"]);
	this.gotoAndStop(14);
}).prototype = p = new cjs.Sprite();



(lib.CachedBmp_9 = function() {
	this.initialize(ss["StarFishBayGame_atlas_3"]);
	this.gotoAndStop(0);
}).prototype = p = new cjs.Sprite();



(lib.CachedBmp_8 = function() {
	this.initialize(ss["StarFishBayGame_atlas_6"]);
	this.gotoAndStop(0);
}).prototype = p = new cjs.Sprite();



(lib.CachedBmp_7 = function() {
	this.initialize(ss["StarFishBayGame_atlas_47"]);
	this.gotoAndStop(2);
}).prototype = p = new cjs.Sprite();



(lib.CachedBmp_6 = function() {
	this.initialize(ss["StarFishBayGame_atlas_47"]);
	this.gotoAndStop(3);
}).prototype = p = new cjs.Sprite();



(lib.CachedBmp_5 = function() {
	this.initialize(ss["StarFishBayGame_atlas_46"]);
	this.gotoAndStop(15);
}).prototype = p = new cjs.Sprite();



(lib.CachedBmp_4 = function() {
	this.initialize(ss["StarFishBayGame_atlas_46"]);
	this.gotoAndStop(16);
}).prototype = p = new cjs.Sprite();



(lib.CachedBmp_203 = function() {
	this.initialize(img.CachedBmp_203);
}).prototype = p = new cjs.Bitmap();
p.nominalBounds = new cjs.Rectangle(0,0,2101,1548);


(lib.CachedBmp_2 = function() {
	this.initialize(ss["StarFishBayGame_atlas_47"]);
	this.gotoAndStop(4);
}).prototype = p = new cjs.Sprite();



(lib.CachedBmp_1 = function() {
	this.initialize(ss["StarFishBayGame_atlas_46"]);
	this.gotoAndStop(17);
}).prototype = p = new cjs.Sprite();



(lib.bg_draww3 = function() {
	this.initialize(ss["StarFishBayGame_atlas_37"]);
	this.gotoAndStop(0);
}).prototype = p = new cjs.Sprite();



(lib.bgggggg = function() {
	this.initialize(ss["StarFishBayGame_atlas_36"]);
	this.gotoAndStop(0);
}).prototype = p = new cjs.Sprite();



(lib.bgver2 = function() {
	this.initialize(ss["StarFishBayGame_atlas_38"]);
	this.gotoAndStop(0);
}).prototype = p = new cjs.Sprite();



(lib.border_waterCol = function() {
	this.initialize(ss["StarFishBayGame_atlas_37"]);
	this.gotoAndStop(1);
}).prototype = p = new cjs.Sprite();



(lib.bubble1 = function() {
	this.initialize(ss["StarFishBayGame_atlas_47"]);
	this.gotoAndStop(5);
}).prototype = p = new cjs.Sprite();



(lib.bubble2 = function() {
	this.initialize(ss["StarFishBayGame_atlas_47"]);
	this.gotoAndStop(6);
}).prototype = p = new cjs.Sprite();



(lib.clam_shadow = function() {
	this.initialize(ss["StarFishBayGame_atlas_46"]);
	this.gotoAndStop(18);
}).prototype = p = new cjs.Sprite();



(lib.Crab2_SadCrab_00000 = function() {
	this.initialize(ss["StarFishBayGame_atlas_22"]);
	this.gotoAndStop(0);
}).prototype = p = new cjs.Sprite();



(lib.Crab2_SadCrab_00001 = function() {
	this.initialize(ss["StarFishBayGame_atlas_23"]);
	this.gotoAndStop(0);
}).prototype = p = new cjs.Sprite();



(lib.Crab2_SadCrab_00002 = function() {
	this.initialize(ss["StarFishBayGame_atlas_24"]);
	this.gotoAndStop(0);
}).prototype = p = new cjs.Sprite();



(lib.Crab2_SadCrab_00003 = function() {
	this.initialize(ss["StarFishBayGame_atlas_25"]);
	this.gotoAndStop(0);
}).prototype = p = new cjs.Sprite();



(lib.Crab2_SadCrab_00004 = function() {
	this.initialize(ss["StarFishBayGame_atlas_26"]);
	this.gotoAndStop(0);
}).prototype = p = new cjs.Sprite();



(lib.Crab2_SadCrab_00005 = function() {
	this.initialize(ss["StarFishBayGame_atlas_27"]);
	this.gotoAndStop(0);
}).prototype = p = new cjs.Sprite();



(lib.Crab2_SadCrab_00006 = function() {
	this.initialize(ss["StarFishBayGame_atlas_28"]);
	this.gotoAndStop(0);
}).prototype = p = new cjs.Sprite();



(lib.Crab2_SadCrab_00007 = function() {
	this.initialize(ss["StarFishBayGame_atlas_29"]);
	this.gotoAndStop(0);
}).prototype = p = new cjs.Sprite();



(lib.Crab2_SadCrab_00008 = function() {
	this.initialize(ss["StarFishBayGame_atlas_30"]);
	this.gotoAndStop(0);
}).prototype = p = new cjs.Sprite();



(lib.Crab2_SadCrab_00009 = function() {
	this.initialize(ss["StarFishBayGame_atlas_31"]);
	this.gotoAndStop(0);
}).prototype = p = new cjs.Sprite();



(lib.Crab2_SadCrab_00010 = function() {
	this.initialize(ss["StarFishBayGame_atlas_32"]);
	this.gotoAndStop(0);
}).prototype = p = new cjs.Sprite();



(lib.Crab2_SadCrab_00011 = function() {
	this.initialize(ss["StarFishBayGame_atlas_33"]);
	this.gotoAndStop(0);
}).prototype = p = new cjs.Sprite();



(lib.Crab2_SadCrab_00012 = function() {
	this.initialize(ss["StarFishBayGame_atlas_34"]);
	this.gotoAndStop(0);
}).prototype = p = new cjs.Sprite();



(lib.Crab2_SadCrab_00013 = function() {
	this.initialize(ss["StarFishBayGame_atlas_35"]);
	this.gotoAndStop(0);
}).prototype = p = new cjs.Sprite();



(lib.Crab2_SadCrab_00014 = function() {
	this.initialize(ss["StarFishBayGame_atlas_36"]);
	this.gotoAndStop(1);
}).prototype = p = new cjs.Sprite();



(lib.Crab3_QuestionMarkCrab_00000 = function() {
	this.initialize(ss["StarFishBayGame_atlas_39"]);
	this.gotoAndStop(0);
}).prototype = p = new cjs.Sprite();



(lib.Crab3_QuestionMarkCrab_00001 = function() {
	this.initialize(ss["StarFishBayGame_atlas_39"]);
	this.gotoAndStop(1);
}).prototype = p = new cjs.Sprite();



(lib.Crab3_QuestionMarkCrab_00002 = function() {
	this.initialize(ss["StarFishBayGame_atlas_39"]);
	this.gotoAndStop(2);
}).prototype = p = new cjs.Sprite();



(lib.Crab3_QuestionMarkCrab_00003 = function() {
	this.initialize(ss["StarFishBayGame_atlas_40"]);
	this.gotoAndStop(0);
}).prototype = p = new cjs.Sprite();



(lib.Crab3_QuestionMarkCrab_00004 = function() {
	this.initialize(ss["StarFishBayGame_atlas_40"]);
	this.gotoAndStop(1);
}).prototype = p = new cjs.Sprite();



(lib.Crab3_QuestionMarkCrab_00005 = function() {
	this.initialize(ss["StarFishBayGame_atlas_40"]);
	this.gotoAndStop(2);
}).prototype = p = new cjs.Sprite();



(lib.Crab3_QuestionMarkCrab_00006 = function() {
	this.initialize(ss["StarFishBayGame_atlas_40"]);
	this.gotoAndStop(3);
}).prototype = p = new cjs.Sprite();



(lib.Crab3_QuestionMarkCrab_00007 = function() {
	this.initialize(ss["StarFishBayGame_atlas_41"]);
	this.gotoAndStop(0);
}).prototype = p = new cjs.Sprite();



(lib.Crab3_QuestionMarkCrab_00008 = function() {
	this.initialize(ss["StarFishBayGame_atlas_41"]);
	this.gotoAndStop(1);
}).prototype = p = new cjs.Sprite();



(lib.Crab3_QuestionMarkCrab_00009 = function() {
	this.initialize(ss["StarFishBayGame_atlas_41"]);
	this.gotoAndStop(2);
}).prototype = p = new cjs.Sprite();



(lib.Crab3_QuestionMarkCrab_00010 = function() {
	this.initialize(ss["StarFishBayGame_atlas_41"]);
	this.gotoAndStop(3);
}).prototype = p = new cjs.Sprite();



(lib.Crab3_QuestionMarkCrab_00011 = function() {
	this.initialize(ss["StarFishBayGame_atlas_42"]);
	this.gotoAndStop(0);
}).prototype = p = new cjs.Sprite();



(lib.Crab3_QuestionMarkCrab_00012 = function() {
	this.initialize(ss["StarFishBayGame_atlas_42"]);
	this.gotoAndStop(1);
}).prototype = p = new cjs.Sprite();



(lib.Crab3_QuestionMarkCrab_00013 = function() {
	this.initialize(ss["StarFishBayGame_atlas_42"]);
	this.gotoAndStop(2);
}).prototype = p = new cjs.Sprite();



(lib.Crab3_QuestionMarkCrab_00014 = function() {
	this.initialize(ss["StarFishBayGame_atlas_42"]);
	this.gotoAndStop(3);
}).prototype = p = new cjs.Sprite();



(lib.Crab3_QuestionMarkCrab_00015 = function() {
	this.initialize(ss["StarFishBayGame_atlas_43"]);
	this.gotoAndStop(0);
}).prototype = p = new cjs.Sprite();



(lib.Crab3_QuestionMarkCrab_00016 = function() {
	this.initialize(ss["StarFishBayGame_atlas_43"]);
	this.gotoAndStop(1);
}).prototype = p = new cjs.Sprite();



(lib.Crab3_QuestionMarkCrab_00017 = function() {
	this.initialize(ss["StarFishBayGame_atlas_43"]);
	this.gotoAndStop(2);
}).prototype = p = new cjs.Sprite();



(lib.Crab3_QuestionMarkCrab_00018 = function() {
	this.initialize(ss["StarFishBayGame_atlas_43"]);
	this.gotoAndStop(3);
}).prototype = p = new cjs.Sprite();



(lib.Crab3_QuestionMarkCrab_00019 = function() {
	this.initialize(ss["StarFishBayGame_atlas_44"]);
	this.gotoAndStop(0);
}).prototype = p = new cjs.Sprite();



(lib.Crab3_QuestionMarkCrab_00020 = function() {
	this.initialize(ss["StarFishBayGame_atlas_44"]);
	this.gotoAndStop(1);
}).prototype = p = new cjs.Sprite();



(lib.Crab3_QuestionMarkCrab_00021 = function() {
	this.initialize(ss["StarFishBayGame_atlas_44"]);
	this.gotoAndStop(2);
}).prototype = p = new cjs.Sprite();



(lib.Crab3_QuestionMarkCrab_00022 = function() {
	this.initialize(ss["StarFishBayGame_atlas_44"]);
	this.gotoAndStop(3);
}).prototype = p = new cjs.Sprite();



(lib.Crab3_QuestionMarkCrab_00023 = function() {
	this.initialize(ss["StarFishBayGame_atlas_45"]);
	this.gotoAndStop(0);
}).prototype = p = new cjs.Sprite();



(lib.Crab3_QuestionMarkCrab_00024 = function() {
	this.initialize(ss["StarFishBayGame_atlas_45"]);
	this.gotoAndStop(1);
}).prototype = p = new cjs.Sprite();



(lib.Crab3_QuestionMarkCrab_00025 = function() {
	this.initialize(ss["StarFishBayGame_atlas_45"]);
	this.gotoAndStop(2);
}).prototype = p = new cjs.Sprite();



(lib.Crab3_QuestionMarkCrab_00026 = function() {
	this.initialize(ss["StarFishBayGame_atlas_45"]);
	this.gotoAndStop(3);
}).prototype = p = new cjs.Sprite();



(lib.Crab1_HappyCrab_00000 = function() {
	this.initialize(ss["StarFishBayGame_atlas_8"]);
	this.gotoAndStop(0);
}).prototype = p = new cjs.Sprite();



(lib.Crab1_HappyCrab_00001 = function() {
	this.initialize(ss["StarFishBayGame_atlas_9"]);
	this.gotoAndStop(0);
}).prototype = p = new cjs.Sprite();



(lib.Crab1_HappyCrab_00002 = function() {
	this.initialize(ss["StarFishBayGame_atlas_10"]);
	this.gotoAndStop(0);
}).prototype = p = new cjs.Sprite();



(lib.Crab1_HappyCrab_00003 = function() {
	this.initialize(ss["StarFishBayGame_atlas_11"]);
	this.gotoAndStop(0);
}).prototype = p = new cjs.Sprite();



(lib.Crab1_HappyCrab_00004 = function() {
	this.initialize(ss["StarFishBayGame_atlas_12"]);
	this.gotoAndStop(0);
}).prototype = p = new cjs.Sprite();



(lib.Crab1_HappyCrab_00005 = function() {
	this.initialize(ss["StarFishBayGame_atlas_13"]);
	this.gotoAndStop(0);
}).prototype = p = new cjs.Sprite();



(lib.Crab1_HappyCrab_00006 = function() {
	this.initialize(ss["StarFishBayGame_atlas_14"]);
	this.gotoAndStop(0);
}).prototype = p = new cjs.Sprite();



(lib.Crab1_HappyCrab_00007 = function() {
	this.initialize(ss["StarFishBayGame_atlas_15"]);
	this.gotoAndStop(0);
}).prototype = p = new cjs.Sprite();



(lib.Crab1_HappyCrab_00008 = function() {
	this.initialize(ss["StarFishBayGame_atlas_16"]);
	this.gotoAndStop(0);
}).prototype = p = new cjs.Sprite();



(lib.Crab1_HappyCrab_00009 = function() {
	this.initialize(ss["StarFishBayGame_atlas_17"]);
	this.gotoAndStop(0);
}).prototype = p = new cjs.Sprite();



(lib.Crab1_HappyCrab_00010 = function() {
	this.initialize(ss["StarFishBayGame_atlas_18"]);
	this.gotoAndStop(0);
}).prototype = p = new cjs.Sprite();



(lib.Crab1_HappyCrab_00011 = function() {
	this.initialize(ss["StarFishBayGame_atlas_19"]);
	this.gotoAndStop(0);
}).prototype = p = new cjs.Sprite();



(lib.Crab1_HappyCrab_00012 = function() {
	this.initialize(ss["StarFishBayGame_atlas_20"]);
	this.gotoAndStop(0);
}).prototype = p = new cjs.Sprite();



(lib.Crab1_HappyCrab_00013 = function() {
	this.initialize(ss["StarFishBayGame_atlas_21"]);
	this.gotoAndStop(0);
}).prototype = p = new cjs.Sprite();



(lib.crab_shadow = function() {
	this.initialize(ss["StarFishBayGame_atlas_46"]);
	this.gotoAndStop(19);
}).prototype = p = new cjs.Sprite();



(lib.flame_curve = function() {
	this.initialize(ss["StarFishBayGame_atlas_38"]);
	this.gotoAndStop(1);
}).prototype = p = new cjs.Sprite();



(lib.flower = function() {
	this.initialize(ss["StarFishBayGame_atlas_47"]);
	this.gotoAndStop(7);
}).prototype = p = new cjs.Sprite();



(lib.next1 = function() {
	this.initialize(ss["StarFishBayGame_atlas_46"]);
	this.gotoAndStop(20);
}).prototype = p = new cjs.Sprite();



(lib.next2 = function() {
	this.initialize(ss["StarFishBayGame_atlas_46"]);
	this.gotoAndStop(21);
}).prototype = p = new cjs.Sprite();



(lib.Photo1 = function() {
	this.initialize(ss["StarFishBayGame_atlas_2"]);
	this.gotoAndStop(0);
}).prototype = p = new cjs.Sprite();



(lib.Photo2 = function() {
	this.initialize(ss["StarFishBayGame_atlas_21"]);
	this.gotoAndStop(1);
}).prototype = p = new cjs.Sprite();



(lib.Photo3 = function() {
	this.initialize(ss["StarFishBayGame_atlas_7"]);
	this.gotoAndStop(0);
}).prototype = p = new cjs.Sprite();



(lib.Photo4 = function() {
	this.initialize(ss["StarFishBayGame_atlas_7"]);
	this.gotoAndStop(1);
}).prototype = p = new cjs.Sprite();



(lib.Photo5 = function() {
	this.initialize(ss["StarFishBayGame_atlas_5"]);
	this.gotoAndStop(0);
}).prototype = p = new cjs.Sprite();



(lib.Photo6 = function() {
	this.initialize(ss["StarFishBayGame_atlas_46"]);
	this.gotoAndStop(22);
}).prototype = p = new cjs.Sprite();



(lib.Photo7 = function() {
	this.initialize(ss["StarFishBayGame_atlas_46"]);
	this.gotoAndStop(23);
}).prototype = p = new cjs.Sprite();



(lib.Photo8 = function() {
	this.initialize(ss["StarFishBayGame_atlas_46"]);
	this.gotoAndStop(24);
}).prototype = p = new cjs.Sprite();



(lib.raindrop = function() {
	this.initialize(ss["StarFishBayGame_atlas_47"]);
	this.gotoAndStop(8);
}).prototype = p = new cjs.Sprite();



(lib.sb2 = function() {
	this.initialize(ss["StarFishBayGame_atlas_46"]);
	this.gotoAndStop(25);
}).prototype = p = new cjs.Sprite();



(lib.sbbbbb = function() {
	this.initialize(ss["StarFishBayGame_atlas_46"]);
	this.gotoAndStop(26);
}).prototype = p = new cjs.Sprite();



(lib.speechBubble = function() {
	this.initialize(ss["StarFishBayGame_atlas_45"]);
	this.gotoAndStop(4);
}).prototype = p = new cjs.Sprite();



(lib.speechBubble2 = function() {
	this.initialize(ss["StarFishBayGame_atlas_46"]);
	this.gotoAndStop(27);
}).prototype = p = new cjs.Sprite();



(lib.sunLight = function() {
	this.initialize(ss["StarFishBayGame_atlas_39"]);
	this.gotoAndStop(3);
}).prototype = p = new cjs.Sprite();



(lib.title = function() {
	this.initialize(ss["StarFishBayGame_atlas_45"]);
	this.gotoAndStop(5);
}).prototype = p = new cjs.Sprite();



(lib.waterColBtn1 = function() {
	this.initialize(ss["StarFishBayGame_atlas_46"]);
	this.gotoAndStop(28);
}).prototype = p = new cjs.Sprite();



(lib.waterColBtn1_blue = function() {
	this.initialize(ss["StarFishBayGame_atlas_46"]);
	this.gotoAndStop(29);
}).prototype = p = new cjs.Sprite();



(lib.waterColBtn2 = function() {
	this.initialize(ss["StarFishBayGame_atlas_46"]);
	this.gotoAndStop(30);
}).prototype = p = new cjs.Sprite();



(lib.waterColBtn2_blue = function() {
	this.initialize(ss["StarFishBayGame_atlas_46"]);
	this.gotoAndStop(31);
}).prototype = p = new cjs.Sprite();



(lib.waterColBtn2_grey = function() {
	this.initialize(ss["StarFishBayGame_atlas_46"]);
	this.gotoAndStop(32);
}).prototype = p = new cjs.Sprite();



(lib.waterColBtn3 = function() {
	this.initialize(ss["StarFishBayGame_atlas_47"]);
	this.gotoAndStop(9);
}).prototype = p = new cjs.Sprite();



(lib.waterColBtn3_blue = function() {
	this.initialize(ss["StarFishBayGame_atlas_47"]);
	this.gotoAndStop(10);
}).prototype = p = new cjs.Sprite();



(lib.waterColBtn3_grey = function() {
	this.initialize(ss["StarFishBayGame_atlas_47"]);
	this.gotoAndStop(11);
}).prototype = p = new cjs.Sprite();



(lib.whiteBorder_thin_b = function() {
	this.initialize(ss["StarFishBayGame_atlas_39"]);
	this.gotoAndStop(4);
}).prototype = p = new cjs.Sprite();
// helper functions:

function mc_symbol_clone() {
	var clone = this._cloneProps(new this.constructor(this.mode, this.startPosition, this.loop, this.reversed));
	clone.gotoAndStop(this.currentFrame);
	clone.paused = this.paused;
	clone.framerate = this.framerate;
	return clone;
}

function getMCSymbolPrototype(symbol, nominalBounds, frameBounds) {
	var prototype = cjs.extend(symbol, cjs.MovieClip);
	prototype.clone = mc_symbol_clone;
	prototype.nominalBounds = nominalBounds;
	prototype.frameBounds = frameBounds;
	return prototype;
	}


(lib.an_Video = function(options) {
	this.initialize();
	this._element = new $.an.Video(options);
	this._el = this._element.create();
}).prototype = p = new cjs.MovieClip();
p.nominalBounds = new cjs.Rectangle(0,0,400,300);

p._tick = _tick;
p._handleDrawEnd = _handleDrawEnd;
p._updateVisibility = _updateVisibility;
p.draw = _componentDraw;



(lib.Tween17 = function(mode,startPosition,loop,reversed) {
if (loop == null) { loop = true; }
if (reversed == null) { reversed = false; }
	var props = new Object();
	props.mode = mode;
	props.startPosition = startPosition;
	props.labels = {};
	props.loop = loop;
	props.reversed = reversed;
	cjs.MovieClip.apply(this,[props]);

	// Layer_1
	this.instance = new lib.sunLight();
	this.instance.setTransform(-251,-500);

	this.timeline.addTween(cjs.Tween.get(this.instance).wait(1));

	this._renderFirstFrame();

}).prototype = p = new cjs.MovieClip();
p.nominalBounds = new cjs.Rectangle(-251,-500,502,1000);


(lib.Tween16 = function(mode,startPosition,loop,reversed) {
if (loop == null) { loop = true; }
if (reversed == null) { reversed = false; }
	var props = new Object();
	props.mode = mode;
	props.startPosition = startPosition;
	props.labels = {};
	props.loop = loop;
	props.reversed = reversed;
	cjs.MovieClip.apply(this,[props]);

	// Layer_1
	this.instance = new lib.title();
	this.instance.setTransform(-424.6,-174.5,0.8996,0.8996);

	this.timeline.addTween(cjs.Tween.get(this.instance).wait(1));

	this._renderFirstFrame();

}).prototype = p = new cjs.MovieClip();
p.nominalBounds = new cjs.Rectangle(-424.6,-174.5,849.2,349.1);


(lib.Tween14 = function(mode,startPosition,loop,reversed) {
if (loop == null) { loop = true; }
if (reversed == null) { reversed = false; }
	var props = new Object();
	props.mode = mode;
	props.startPosition = startPosition;
	props.labels = {};
	props.loop = loop;
	props.reversed = reversed;
	cjs.MovieClip.apply(this,[props]);

	// Layer_1
	this.instance = new lib.title();
	this.instance.setTransform(-424.6,-174.5,0.8996,0.8996);

	this.timeline.addTween(cjs.Tween.get(this.instance).wait(1));

	this._renderFirstFrame();

}).prototype = p = new cjs.MovieClip();
p.nominalBounds = new cjs.Rectangle(-424.6,-174.5,849.2,349.1);


(lib.Tween13 = function(mode,startPosition,loop,reversed) {
if (loop == null) { loop = true; }
if (reversed == null) { reversed = false; }
	var props = new Object();
	props.mode = mode;
	props.startPosition = startPosition;
	props.labels = {};
	props.loop = loop;
	props.reversed = reversed;
	cjs.MovieClip.apply(this,[props]);

	// Layer_1
	this.instance = new lib.bubble2();
	this.instance.setTransform(-50,-44);

	this.timeline.addTween(cjs.Tween.get(this.instance).wait(1));

	this._renderFirstFrame();

}).prototype = p = new cjs.MovieClip();
p.nominalBounds = new cjs.Rectangle(-50,-44,100,88);


(lib.Tween12 = function(mode,startPosition,loop,reversed) {
if (loop == null) { loop = true; }
if (reversed == null) { reversed = false; }
	var props = new Object();
	props.mode = mode;
	props.startPosition = startPosition;
	props.labels = {};
	props.loop = loop;
	props.reversed = reversed;
	cjs.MovieClip.apply(this,[props]);

	// Layer_1
	this.instance = new lib.bubble2();
	this.instance.setTransform(-50,-44);

	this.timeline.addTween(cjs.Tween.get(this.instance).wait(1));

	this._renderFirstFrame();

}).prototype = p = new cjs.MovieClip();
p.nominalBounds = new cjs.Rectangle(-50,-44,100,88);


(lib.Tween11 = function(mode,startPosition,loop,reversed) {
if (loop == null) { loop = true; }
if (reversed == null) { reversed = false; }
	var props = new Object();
	props.mode = mode;
	props.startPosition = startPosition;
	props.labels = {};
	props.loop = loop;
	props.reversed = reversed;
	cjs.MovieClip.apply(this,[props]);

	// Layer_1
	this.instance = new lib.bubble2();
	this.instance.setTransform(-50,-44);

	this.timeline.addTween(cjs.Tween.get(this.instance).wait(1));

	this._renderFirstFrame();

}).prototype = p = new cjs.MovieClip();
p.nominalBounds = new cjs.Rectangle(-50,-44,100,88);


(lib.Tween10 = function(mode,startPosition,loop,reversed) {
if (loop == null) { loop = true; }
if (reversed == null) { reversed = false; }
	var props = new Object();
	props.mode = mode;
	props.startPosition = startPosition;
	props.labels = {};
	props.loop = loop;
	props.reversed = reversed;
	cjs.MovieClip.apply(this,[props]);

	// Layer_1
	this.instance = new lib.bubble1();
	this.instance.setTransform(-61,-53);

	this.timeline.addTween(cjs.Tween.get(this.instance).wait(1));

	this._renderFirstFrame();

}).prototype = p = new cjs.MovieClip();
p.nominalBounds = new cjs.Rectangle(-61,-53,122,106);


(lib.Tween9 = function(mode,startPosition,loop,reversed) {
if (loop == null) { loop = true; }
if (reversed == null) { reversed = false; }
	var props = new Object();
	props.mode = mode;
	props.startPosition = startPosition;
	props.labels = {};
	props.loop = loop;
	props.reversed = reversed;
	cjs.MovieClip.apply(this,[props]);

	// Layer_1
	this.instance = new lib.bubble1();
	this.instance.setTransform(-61,-53);

	this.timeline.addTween(cjs.Tween.get(this.instance).wait(1));

	this._renderFirstFrame();

}).prototype = p = new cjs.MovieClip();
p.nominalBounds = new cjs.Rectangle(-61,-53,122,106);


(lib.Tween8 = function(mode,startPosition,loop,reversed) {
if (loop == null) { loop = true; }
if (reversed == null) { reversed = false; }
	var props = new Object();
	props.mode = mode;
	props.startPosition = startPosition;
	props.labels = {};
	props.loop = loop;
	props.reversed = reversed;
	cjs.MovieClip.apply(this,[props]);

	// Layer_1
	this.instance = new lib.bubble1();
	this.instance.setTransform(-61,-53);

	this.timeline.addTween(cjs.Tween.get(this.instance).wait(1));

	this._renderFirstFrame();

}).prototype = p = new cjs.MovieClip();
p.nominalBounds = new cjs.Rectangle(-61,-53,122,106);


(lib.Tween7 = function(mode,startPosition,loop,reversed) {
if (loop == null) { loop = true; }
if (reversed == null) { reversed = false; }
	var props = new Object();
	props.mode = mode;
	props.startPosition = startPosition;
	props.labels = {};
	props.loop = loop;
	props.reversed = reversed;
	cjs.MovieClip.apply(this,[props]);

	// Layer_1
	this.instance = new lib.clam_shadow();
	this.instance.setTransform(-187.05,-131.8,0.9691,0.9691);

	this.timeline.addTween(cjs.Tween.get(this.instance).wait(1));

	this._renderFirstFrame();

}).prototype = p = new cjs.MovieClip();
p.nominalBounds = new cjs.Rectangle(-187,-131.8,374.1,263.6);


(lib.Tween6 = function(mode,startPosition,loop,reversed) {
if (loop == null) { loop = true; }
if (reversed == null) { reversed = false; }
	var props = new Object();
	props.mode = mode;
	props.startPosition = startPosition;
	props.labels = {};
	props.loop = loop;
	props.reversed = reversed;
	cjs.MovieClip.apply(this,[props]);

	// Layer_1
	this.instance = new lib.clam_shadow();
	this.instance.setTransform(-187.05,-131.8,0.9691,0.9691);

	this.timeline.addTween(cjs.Tween.get(this.instance).wait(1));

	this._renderFirstFrame();

}).prototype = p = new cjs.MovieClip();
p.nominalBounds = new cjs.Rectangle(-187,-131.8,374.1,263.6);


(lib.Tween5 = function(mode,startPosition,loop,reversed) {
if (loop == null) { loop = true; }
if (reversed == null) { reversed = false; }
	var props = new Object();
	props.mode = mode;
	props.startPosition = startPosition;
	props.labels = {};
	props.loop = loop;
	props.reversed = reversed;
	cjs.MovieClip.apply(this,[props]);

	// Layer_1
	this.instance = new lib.clam_shadow();
	this.instance.setTransform(-187.05,-131.8,0.9691,0.9691);

	this.timeline.addTween(cjs.Tween.get(this.instance).wait(1));

	this._renderFirstFrame();

}).prototype = p = new cjs.MovieClip();
p.nominalBounds = new cjs.Rectangle(-187,-131.8,374.1,263.6);


(lib.Tween4 = function(mode,startPosition,loop,reversed) {
if (loop == null) { loop = true; }
if (reversed == null) { reversed = false; }
	var props = new Object();
	props.mode = mode;
	props.startPosition = startPosition;
	props.labels = {};
	props.loop = loop;
	props.reversed = reversed;
	cjs.MovieClip.apply(this,[props]);

	// Layer_1
	this.instance = new lib.crab_shadow();
	this.instance.setTransform(-215.15,-142.7,0.8218,0.8218,-4.4632);

	this.timeline.addTween(cjs.Tween.get(this.instance).wait(1));

	this._renderFirstFrame();

}).prototype = p = new cjs.MovieClip();
p.nominalBounds = new cjs.Rectangle(-215.1,-174.3,430.29999999999995,348.70000000000005);


(lib.Tween3 = function(mode,startPosition,loop,reversed) {
if (loop == null) { loop = true; }
if (reversed == null) { reversed = false; }
	var props = new Object();
	props.mode = mode;
	props.startPosition = startPosition;
	props.labels = {};
	props.loop = loop;
	props.reversed = reversed;
	cjs.MovieClip.apply(this,[props]);

	// Layer_1
	this.instance = new lib.crab_shadow();
	this.instance.setTransform(-215.15,-142.7,0.8218,0.8218,-4.4632);

	this.timeline.addTween(cjs.Tween.get(this.instance).wait(1));

	this._renderFirstFrame();

}).prototype = p = new cjs.MovieClip();
p.nominalBounds = new cjs.Rectangle(-215.1,-174.3,430.29999999999995,348.70000000000005);


(lib.Tween2 = function(mode,startPosition,loop,reversed) {
if (loop == null) { loop = true; }
if (reversed == null) { reversed = false; }
	var props = new Object();
	props.mode = mode;
	props.startPosition = startPosition;
	props.labels = {};
	props.loop = loop;
	props.reversed = reversed;
	cjs.MovieClip.apply(this,[props]);

	// Layer_1
	this.instance = new lib.crab_shadow();
	this.instance.setTransform(-215.15,-142.7,0.8218,0.8218,-4.4632);

	this.timeline.addTween(cjs.Tween.get(this.instance).wait(1));

	this._renderFirstFrame();

}).prototype = p = new cjs.MovieClip();
p.nominalBounds = new cjs.Rectangle(-215.1,-174.3,430.29999999999995,348.70000000000005);


(lib.an_TextInput = function(options) {
	this.initialize();
	this._element = new $.an.TextInput(options);
	this._el = this._element.create();
}).prototype = p = new cjs.MovieClip();
p.nominalBounds = new cjs.Rectangle(0,0,100,22);

p._tick = _tick;
p._handleDrawEnd = _handleDrawEnd;
p._updateVisibility = _updateVisibility;
p.draw = _componentDraw;



(lib.Symbol11 = function(mode,startPosition,loop,reversed) {
if (loop == null) { loop = true; }
if (reversed == null) { reversed = false; }
	var props = new Object();
	props.mode = mode;
	props.startPosition = startPosition;
	props.labels = {};
	props.loop = loop;
	props.reversed = reversed;
	cjs.MovieClip.apply(this,[props]);

	// Layer_1
	this.instance = new lib.sbbbbb();
	this.instance.setTransform(0,0,0.8843,0.8282);

	this.timeline.addTween(cjs.Tween.get(this.instance).wait(1));

	this._renderFirstFrame();

}).prototype = getMCSymbolPrototype(lib.Symbol11, new cjs.Rectangle(0,0,452.8,424), null);


(lib.Symbol10 = function(mode,startPosition,loop,reversed) {
if (loop == null) { loop = true; }
if (reversed == null) { reversed = false; }
	var props = new Object();
	props.mode = mode;
	props.startPosition = startPosition;
	props.labels = {};
	props.loop = loop;
	props.reversed = reversed;
	cjs.MovieClip.apply(this,[props]);

	// Layer_1
	this.instance = new lib.speechBubble();
	this.instance.setTransform(0,0,0.6822,0.2913);

	this.timeline.addTween(cjs.Tween.get(this.instance).wait(1));

	this._renderFirstFrame();

}).prototype = getMCSymbolPrototype(lib.Symbol10, new cjs.Rectangle(0,0,476.9,131.4), null);


(lib.Symbol9 = function(mode,startPosition,loop,reversed) {
if (loop == null) { loop = true; }
if (reversed == null) { reversed = false; }
	var props = new Object();
	props.mode = mode;
	props.startPosition = startPosition;
	props.labels = {};
	props.loop = loop;
	props.reversed = reversed;
	cjs.MovieClip.apply(this,[props]);

	// Layer_1
	this.instance = new lib.sbbbbb();
	this.instance.setTransform(0,0,0.9383,0.9438);

	this.timeline.addTween(cjs.Tween.get(this.instance).wait(1));

	this._renderFirstFrame();

}).prototype = getMCSymbolPrototype(lib.Symbol9, new cjs.Rectangle(0,0,480.4,483.3), null);


(lib.Symbol8 = function(mode,startPosition,loop,reversed) {
if (loop == null) { loop = true; }
if (reversed == null) { reversed = false; }
	var props = new Object();
	props.mode = mode;
	props.startPosition = startPosition;
	props.labels = {};
	props.loop = loop;
	props.reversed = reversed;
	cjs.MovieClip.apply(this,[props]);

	// Layer_1
	this.instance = new lib.sbbbbb();
	this.instance.setTransform(0,0,1.7841,0.9183);

	this.timeline.addTween(cjs.Tween.get(this.instance).wait(1));

	this._renderFirstFrame();

}).prototype = getMCSymbolPrototype(lib.Symbol8, new cjs.Rectangle(0,0,913.5,470.2), null);


(lib.Symbol7 = function(mode,startPosition,loop,reversed) {
if (loop == null) { loop = true; }
if (reversed == null) { reversed = false; }
	var props = new Object();
	props.mode = mode;
	props.startPosition = startPosition;
	props.labels = {};
	props.loop = loop;
	props.reversed = reversed;
	cjs.MovieClip.apply(this,[props]);

	// Layer_1
	this.text = new cjs.Text("Answer:\n When the sand bubbler crab feeds, it filters sand through its mouth as it looks for small pieces of food. It then leaves behind the tiny balls of sand that look like bubbles!", "27px 'Montserrat Medium'");
	this.text.textAlign = "center";
	this.text.lineHeight = 39;
	this.text.lineWidth = 531;
	this.text.parent = this;
	this.text.setTransform(248.9,1.85,0.9297,0.9297);

	this.timeline.addTween(cjs.Tween.get(this.text).wait(1));

	this._renderFirstFrame();

}).prototype = getMCSymbolPrototype(lib.Symbol7, new cjs.Rectangle(0,0,497.8,287.6), null);


(lib.Symbol6 = function(mode,startPosition,loop,reversed) {
if (loop == null) { loop = true; }
if (reversed == null) { reversed = false; }
	var props = new Object();
	props.mode = mode;
	props.startPosition = startPosition;
	props.labels = {};
	props.loop = loop;
	props.reversed = reversed;
	cjs.MovieClip.apply(this,[props]);

	// Layer_1
	this.instance = new lib.sbbbbb();
	this.instance.setTransform(0,0,1.0751,0.7983);

	this.timeline.addTween(cjs.Tween.get(this.instance).wait(1));

	this._renderFirstFrame();

}).prototype = getMCSymbolPrototype(lib.Symbol6, new cjs.Rectangle(0,0,550.5,408.8), null);


(lib.Symbol5 = function(mode,startPosition,loop,reversed) {
if (loop == null) { loop = true; }
if (reversed == null) { reversed = false; }
	var props = new Object();
	props.mode = mode;
	props.startPosition = startPosition;
	props.labels = {};
	props.loop = loop;
	props.reversed = reversed;
	cjs.MovieClip.apply(this,[props]);

	// Layer_1
	this.instance = new lib.sb2();
	this.instance.setTransform(32.35,0,1.0451,1.0084,4.4877);

	this.timeline.addTween(cjs.Tween.get(this.instance).wait(1));

	this._renderFirstFrame();

}).prototype = getMCSymbolPrototype(lib.Symbol5, new cjs.Rectangle(0,0,417.9,442.5), null);


(lib.Symbol4 = function(mode,startPosition,loop,reversed) {
if (loop == null) { loop = true; }
if (reversed == null) { reversed = false; }
	var props = new Object();
	props.mode = mode;
	props.startPosition = startPosition;
	props.labels = {};
	props.loop = loop;
	props.reversed = reversed;
	cjs.MovieClip.apply(this,[props]);

	// Layer_1
	this.instance = new lib.speechBubble2();
	this.instance.setTransform(0,0,1.1276,0.766);

	this.timeline.addTween(cjs.Tween.get(this.instance).wait(1));

	this._renderFirstFrame();

}).prototype = getMCSymbolPrototype(lib.Symbol4, new cjs.Rectangle(0,0,391.3,318.7), null);


(lib.Symbol3 = function(mode,startPosition,loop,reversed) {
if (loop == null) { loop = true; }
if (reversed == null) { reversed = false; }
	var props = new Object();
	props.mode = mode;
	props.startPosition = startPosition;
	props.labels = {};
	props.loop = loop;
	props.reversed = reversed;
	cjs.MovieClip.apply(this,[props]);

	// Layer_1
	this.instance = new lib.sbbbbb();
	this.instance.setTransform(0,0,0.9459,0.9459);

	this.timeline.addTween(cjs.Tween.get(this.instance).wait(1));

	this._renderFirstFrame();

}).prototype = getMCSymbolPrototype(lib.Symbol3, new cjs.Rectangle(0,0,484.3,484.3), null);


(lib.Symbol2 = function(mode,startPosition,loop,reversed) {
if (loop == null) { loop = true; }
if (reversed == null) { reversed = false; }
	var props = new Object();
	props.mode = mode;
	props.startPosition = startPosition;
	props.labels = {};
	props.loop = loop;
	props.reversed = reversed;
	cjs.MovieClip.apply(this,[props]);

	// Layer_1
	this.text = new cjs.Text("What is your name?", "italic 500 75px 'Ubuntu'", "#FFFFFF");
	this.text.textAlign = "center";
	this.text.lineHeight = 90;
	this.text.lineWidth = 733;
	this.text.parent = this;
	this.text.setTransform(368.5,2);
	this.text.shadow = new cjs.Shadow("rgba(24,79,113,1)",3,3,4);
	if(!lib.properties.webfonts['Ubuntu']) {
		lib.webFontTxtInst['Ubuntu'] = lib.webFontTxtInst['Ubuntu'] || [];
		lib.webFontTxtInst['Ubuntu'].push(this.text);
	}

	this.timeline.addTween(cjs.Tween.get(this.text).wait(1));

	this._renderFirstFrame();

}).prototype = p = new cjs.MovieClip();
p.nominalBounds = new cjs.Rectangle(-3,-3,751,205);


(lib.Symbol1 = function(mode,startPosition,loop,reversed) {
if (loop == null) { loop = true; }
if (reversed == null) { reversed = false; }
	var props = new Object();
	props.mode = mode;
	props.startPosition = startPosition;
	props.labels = {};
	props.loop = loop;
	props.reversed = reversed;
	cjs.MovieClip.apply(this,[props]);

	// Layer_1
	this.text = new cjs.Text("End\nThank you !", "italic 500 68px 'Ubuntu'", "#181633");
	this.text.textAlign = "center";
	this.text.lineHeight = 82;
	this.text.lineWidth = 625;
	this.text.parent = this;
	this.text.setTransform(314.6,-22.5);
	if(!lib.properties.webfonts['Ubuntu']) {
		lib.webFontTxtInst['Ubuntu'] = lib.webFontTxtInst['Ubuntu'] || [];
		lib.webFontTxtInst['Ubuntu'].push(this.text);
	}

	this.timeline.addTween(cjs.Tween.get(this.text).wait(1));

	this._renderFirstFrame();

}).prototype = p = new cjs.MovieClip();
p.nominalBounds = new cjs.Rectangle(0,-24.5,629.2,251.8);


(lib.speechBubble_1 = function(mode,startPosition,loop,reversed) {
if (loop == null) { loop = true; }
if (reversed == null) { reversed = false; }
	var props = new Object();
	props.mode = mode;
	props.startPosition = startPosition;
	props.labels = {};
	props.loop = loop;
	props.reversed = reversed;
	cjs.MovieClip.apply(this,[props]);

	// Layer_1
	this.instance = new lib.sbbbbb();
	this.instance.setTransform(-91,-18,1.0521,0.9993);

	this.timeline.addTween(cjs.Tween.get(this.instance).wait(1));

	this._renderFirstFrame();

}).prototype = getMCSymbolPrototype(lib.speechBubble_1, new cjs.Rectangle(-91,-18,538.7,511.7), null);


(lib.rainDrop = function(mode,startPosition,loop,reversed) {
if (loop == null) { loop = true; }
if (reversed == null) { reversed = false; }
	var props = new Object();
	props.mode = mode;
	props.startPosition = startPosition;
	props.labels = {};
	props.loop = loop;
	props.reversed = reversed;
	cjs.MovieClip.apply(this,[props]);

	// Layer_1
	this.instance = new lib.raindrop();
	this.instance.setTransform(-48,-55);

	this.timeline.addTween(cjs.Tween.get(this.instance).wait(1));

	this._renderFirstFrame();

}).prototype = getMCSymbolPrototype(lib.rainDrop, new cjs.Rectangle(-48,-55,96,108), null);


(lib.QuestionCrabMove = function(mode,startPosition,loop,reversed) {
if (loop == null) { loop = true; }
if (reversed == null) { reversed = false; }
	var props = new Object();
	props.mode = mode;
	props.startPosition = startPosition;
	props.labels = {};
	props.loop = loop;
	props.reversed = reversed;
	cjs.MovieClip.apply(this,[props]);

	// timeline functions:
	this.frame_59 = function() {
		this.stop();
	}

	// actions tween:
	this.timeline.addTween(cjs.Tween.get(this).wait(59).call(this.frame_59).wait(1));

	// Layer_2
	this.instance = new lib.Crab3_QuestionMarkCrab_00000();
	this.instance.setTransform(-328,-352);

	this.instance_1 = new lib.Crab3_QuestionMarkCrab_00001();
	this.instance_1.setTransform(-328,-352);

	this.instance_2 = new lib.Crab3_QuestionMarkCrab_00002();
	this.instance_2.setTransform(-328,-352);

	this.instance_3 = new lib.Crab3_QuestionMarkCrab_00003();
	this.instance_3.setTransform(-328,-352);

	this.instance_4 = new lib.Crab3_QuestionMarkCrab_00004();
	this.instance_4.setTransform(-328,-352);

	this.instance_5 = new lib.Crab3_QuestionMarkCrab_00005();
	this.instance_5.setTransform(-328,-352);

	this.instance_6 = new lib.Crab3_QuestionMarkCrab_00006();
	this.instance_6.setTransform(-328,-352);

	this.instance_7 = new lib.Crab3_QuestionMarkCrab_00007();
	this.instance_7.setTransform(-328,-352);

	this.instance_8 = new lib.Crab3_QuestionMarkCrab_00008();
	this.instance_8.setTransform(-328,-352);

	this.instance_9 = new lib.Crab3_QuestionMarkCrab_00009();
	this.instance_9.setTransform(-328,-352);

	this.instance_10 = new lib.Crab3_QuestionMarkCrab_00010();
	this.instance_10.setTransform(-328,-352);

	this.instance_11 = new lib.Crab3_QuestionMarkCrab_00011();
	this.instance_11.setTransform(-328,-352);

	this.instance_12 = new lib.Crab3_QuestionMarkCrab_00012();
	this.instance_12.setTransform(-328,-352);

	this.instance_13 = new lib.Crab3_QuestionMarkCrab_00013();
	this.instance_13.setTransform(-328,-352);

	this.instance_14 = new lib.Crab3_QuestionMarkCrab_00014();
	this.instance_14.setTransform(-328,-352);

	this.instance_15 = new lib.Crab3_QuestionMarkCrab_00015();
	this.instance_15.setTransform(-328,-352);

	this.instance_16 = new lib.Crab3_QuestionMarkCrab_00016();
	this.instance_16.setTransform(-328,-352);

	this.instance_17 = new lib.Crab3_QuestionMarkCrab_00017();
	this.instance_17.setTransform(-328,-352);

	this.instance_18 = new lib.Crab3_QuestionMarkCrab_00018();
	this.instance_18.setTransform(-328,-352);

	this.instance_19 = new lib.Crab3_QuestionMarkCrab_00019();
	this.instance_19.setTransform(-328,-352);

	this.instance_20 = new lib.Crab3_QuestionMarkCrab_00020();
	this.instance_20.setTransform(-328,-352);

	this.instance_21 = new lib.Crab3_QuestionMarkCrab_00021();
	this.instance_21.setTransform(-328,-352);

	this.instance_22 = new lib.Crab3_QuestionMarkCrab_00022();
	this.instance_22.setTransform(-328,-352);

	this.instance_23 = new lib.Crab3_QuestionMarkCrab_00023();
	this.instance_23.setTransform(-328,-352);

	this.instance_24 = new lib.Crab3_QuestionMarkCrab_00024();
	this.instance_24.setTransform(-328,-352);

	this.instance_25 = new lib.Crab3_QuestionMarkCrab_00025();
	this.instance_25.setTransform(-328,-352);

	this.instance_26 = new lib.Crab3_QuestionMarkCrab_00026();
	this.instance_26.setTransform(-328,-352);

	this.timeline.addTween(cjs.Tween.get({}).to({state:[{t:this.instance}]}).to({state:[{t:this.instance_1}]},1).to({state:[{t:this.instance_2}]},1).to({state:[{t:this.instance_3}]},1).to({state:[{t:this.instance_4}]},1).to({state:[{t:this.instance_5}]},1).to({state:[{t:this.instance_6}]},1).to({state:[{t:this.instance_7}]},1).to({state:[{t:this.instance_8}]},1).to({state:[{t:this.instance_9}]},1).to({state:[{t:this.instance_10}]},1).to({state:[{t:this.instance_11}]},1).to({state:[{t:this.instance_12}]},1).to({state:[{t:this.instance_13}]},1).to({state:[{t:this.instance_14}]},1).to({state:[{t:this.instance_15}]},1).to({state:[{t:this.instance_16}]},1).to({state:[{t:this.instance_17}]},1).to({state:[{t:this.instance_18}]},1).to({state:[{t:this.instance_19}]},1).to({state:[{t:this.instance_20}]},1).to({state:[{t:this.instance_21}]},1).to({state:[{t:this.instance_22}]},1).to({state:[{t:this.instance_23}]},1).to({state:[{t:this.instance_24}]},1).to({state:[{t:this.instance_25}]},1).to({state:[{t:this.instance_26}]},1).to({state:[{t:this.instance_16}]},1).to({state:[{t:this.instance_17}]},1).to({state:[{t:this.instance_18}]},1).to({state:[{t:this.instance_19}]},1).to({state:[{t:this.instance_20}]},1).to({state:[{t:this.instance_21}]},1).to({state:[{t:this.instance_22}]},1).to({state:[{t:this.instance_23}]},1).to({state:[{t:this.instance_24}]},1).to({state:[{t:this.instance_25}]},1).to({state:[{t:this.instance_26}]},1).to({state:[{t:this.instance_16}]},1).to({state:[{t:this.instance_17}]},1).to({state:[{t:this.instance_18}]},1).to({state:[{t:this.instance_19}]},1).to({state:[{t:this.instance_20}]},1).to({state:[{t:this.instance_21}]},1).to({state:[{t:this.instance_22}]},1).to({state:[{t:this.instance_23}]},1).to({state:[{t:this.instance_24}]},1).to({state:[{t:this.instance_25}]},1).to({state:[{t:this.instance_26}]},1).to({state:[{t:this.instance_16}]},1).to({state:[{t:this.instance_17}]},1).to({state:[{t:this.instance_18}]},1).to({state:[{t:this.instance_19}]},1).to({state:[{t:this.instance_20}]},1).to({state:[{t:this.instance_21}]},1).to({state:[{t:this.instance_22}]},1).to({state:[{t:this.instance_23}]},1).to({state:[{t:this.instance_24}]},1).to({state:[{t:this.instance_25}]},1).to({state:[{t:this.instance_26}]},1).wait(1));

	this._renderFirstFrame();

}).prototype = p = new cjs.MovieClip();
p.nominalBounds = new cjs.Rectangle(-328,-352,683,710);


(lib.Symbol3_1 = function(mode,startPosition,loop,reversed) {
if (loop == null) { loop = true; }
if (reversed == null) { reversed = false; }
	var props = new Object();
	props.mode = mode;
	props.startPosition = startPosition;
	props.labels = {};
	props.loop = loop;
	props.reversed = reversed;
	cjs.MovieClip.apply(this,[props]);

	// Layer_1
	this.instance_1 = new lib.Photo2();
	this.instance_1.setTransform(0,0,0.3142,0.3295);

	this.timeline.addTween(cjs.Tween.get(this.instance_1).wait(1));

	this._renderFirstFrame();

}).prototype = getMCSymbolPrototype(lib.Symbol3_1, new cjs.Rectangle(0,0,408.5,314), null);


(lib.Symbol2_1 = function(mode,startPosition,loop,reversed) {
if (loop == null) { loop = true; }
if (reversed == null) { reversed = false; }
	var props = new Object();
	props.mode = mode;
	props.startPosition = startPosition;
	props.labels = {};
	props.loop = loop;
	props.reversed = reversed;
	cjs.MovieClip.apply(this,[props]);

	// Layer_1
	this.instance = new lib.Photo1();
	this.instance.setTransform(-304,-201,0.3204,0.3207);

	this.timeline.addTween(cjs.Tween.get(this.instance).wait(1));

	this._renderFirstFrame();

}).prototype = getMCSymbolPrototype(lib.Symbol2_1, new cjs.Rectangle(-304,-201,606.2,403.5), null);


(lib.photo6 = function(mode,startPosition,loop,reversed) {
if (loop == null) { loop = true; }
if (reversed == null) { reversed = false; }
	var props = new Object();
	props.mode = mode;
	props.startPosition = startPosition;
	props.labels = {};
	props.loop = loop;
	props.reversed = reversed;
	cjs.MovieClip.apply(this,[props]);

	// Layer_1
	this.instance = new lib.Photo7();
	this.instance.setTransform(344,0,1.0211,1.0211);

	this.instance_1 = new lib.Photo6();
	this.instance_1.setTransform(0,0,1.0211,1.0211);

	this.timeline.addTween(cjs.Tween.get({}).to({state:[{t:this.instance_1},{t:this.instance}]}).wait(1));

	this._renderFirstFrame();

}).prototype = getMCSymbolPrototype(lib.photo6, new cjs.Rectangle(0,0,680,224.7), null);


(lib.photo5 = function(mode,startPosition,loop,reversed) {
if (loop == null) { loop = true; }
if (reversed == null) { reversed = false; }
	var props = new Object();
	props.mode = mode;
	props.startPosition = startPosition;
	props.labels = {};
	props.loop = loop;
	props.reversed = reversed;
	cjs.MovieClip.apply(this,[props]);

	// Layer_1
	this.instance = new lib.Photo5();
	this.instance.setTransform(0,0,0.3677,0.3677);

	this.timeline.addTween(cjs.Tween.get(this.instance).wait(1));

	this._renderFirstFrame();

}).prototype = getMCSymbolPrototype(lib.photo5, new cjs.Rectangle(0,0,598.7,400.8), null);


(lib.photo4 = function(mode,startPosition,loop,reversed) {
if (loop == null) { loop = true; }
if (reversed == null) { reversed = false; }
	var props = new Object();
	props.mode = mode;
	props.startPosition = startPosition;
	props.labels = {};
	props.loop = loop;
	props.reversed = reversed;
	cjs.MovieClip.apply(this,[props]);

	// Layer_1
	this.instance = new lib.Photo4();
	this.instance.setTransform(0,0,0.376,0.376);

	this.timeline.addTween(cjs.Tween.get(this.instance).wait(1));

	this._renderFirstFrame();

}).prototype = getMCSymbolPrototype(lib.photo4, new cjs.Rectangle(0,0,601.7,338.5), null);


(lib.photo3 = function(mode,startPosition,loop,reversed) {
if (loop == null) { loop = true; }
if (reversed == null) { reversed = false; }
	var props = new Object();
	props.mode = mode;
	props.startPosition = startPosition;
	props.labels = {};
	props.loop = loop;
	props.reversed = reversed;
	cjs.MovieClip.apply(this,[props]);

	// Layer_1
	this.instance = new lib.Photo3();
	this.instance.setTransform(0,0,0.3622,0.3622);

	this.timeline.addTween(cjs.Tween.get(this.instance).wait(1));

	this._renderFirstFrame();

}).prototype = getMCSymbolPrototype(lib.photo3, new cjs.Rectangle(0,0,519.5,368.8), null);


(lib.Photo2_1 = function(mode,startPosition,loop,reversed) {
if (loop == null) { loop = true; }
if (reversed == null) { reversed = false; }
	var props = new Object();
	props.mode = mode;
	props.startPosition = startPosition;
	props.labels = {};
	props.loop = loop;
	props.reversed = reversed;
	cjs.MovieClip.apply(this,[props]);

	// Layer_1
	this.instance = new lib.Photo2();
	this.instance.setTransform(0,0,0.4056,0.4056);

	this.timeline.addTween(cjs.Tween.get(this.instance).wait(1));

	this._renderFirstFrame();

}).prototype = getMCSymbolPrototype(lib.Photo2_1, new cjs.Rectangle(0,0,527.3,386.5), null);


(lib.photo16 = function(mode,startPosition,loop,reversed) {
if (loop == null) { loop = true; }
if (reversed == null) { reversed = false; }
	var props = new Object();
	props.mode = mode;
	props.startPosition = startPosition;
	props.labels = {};
	props.loop = loop;
	props.reversed = reversed;
	cjs.MovieClip.apply(this,[props]);

	// Layer_1
	this.instance = new lib.Photo8();

	this.timeline.addTween(cjs.Tween.get(this.instance).wait(1));

	this._renderFirstFrame();

}).prototype = p = new cjs.MovieClip();
p.nominalBounds = new cjs.Rectangle(0,0,627,381);


(lib.movingSadCrab = function(mode,startPosition,loop,reversed) {
if (loop == null) { loop = true; }
if (reversed == null) { reversed = false; }
	var props = new Object();
	props.mode = mode;
	props.startPosition = startPosition;
	props.labels = {};
	props.loop = loop;
	props.reversed = reversed;
	cjs.MovieClip.apply(this,[props]);

	// timeline functions:
	this.frame_42 = function() {
		this.stop();
	}
	this.frame_56 = function() {
		this.stop();
	}

	// actions tween:
	this.timeline.addTween(cjs.Tween.get(this).wait(42).call(this.frame_42).wait(14).call(this.frame_56).wait(1));

	// Layer_1
	this.instance = new lib.Crab2_SadCrab_00000();
	this.instance.setTransform(-515,-513);

	this.instance_1 = new lib.Crab2_SadCrab_00001();
	this.instance_1.setTransform(-515,-513);

	this.instance_2 = new lib.Crab2_SadCrab_00002();
	this.instance_2.setTransform(-515,-513);

	this.instance_3 = new lib.Crab2_SadCrab_00003();
	this.instance_3.setTransform(-515,-513);

	this.instance_4 = new lib.Crab2_SadCrab_00004();
	this.instance_4.setTransform(-515,-513);

	this.instance_5 = new lib.Crab2_SadCrab_00005();
	this.instance_5.setTransform(-515,-513);

	this.instance_6 = new lib.Crab2_SadCrab_00006();
	this.instance_6.setTransform(-515,-513);

	this.instance_7 = new lib.Crab2_SadCrab_00007();
	this.instance_7.setTransform(-515,-513);

	this.instance_8 = new lib.Crab2_SadCrab_00008();
	this.instance_8.setTransform(-515,-513);

	this.instance_9 = new lib.Crab2_SadCrab_00009();
	this.instance_9.setTransform(-515,-513);

	this.instance_10 = new lib.Crab2_SadCrab_00010();
	this.instance_10.setTransform(-515,-513);

	this.instance_11 = new lib.Crab2_SadCrab_00011();
	this.instance_11.setTransform(-515,-513);

	this.instance_12 = new lib.Crab2_SadCrab_00012();
	this.instance_12.setTransform(-515,-513);

	this.instance_13 = new lib.Crab2_SadCrab_00013();
	this.instance_13.setTransform(-515,-513);

	this.instance_14 = new lib.Crab2_SadCrab_00014();
	this.instance_14.setTransform(-515,-513);

	this.timeline.addTween(cjs.Tween.get({}).to({state:[{t:this.instance}]}).to({state:[{t:this.instance_1}]},1).to({state:[{t:this.instance_2}]},1).to({state:[{t:this.instance_3}]},1).to({state:[{t:this.instance_4}]},1).to({state:[{t:this.instance_5}]},1).to({state:[{t:this.instance_6}]},1).to({state:[{t:this.instance_7}]},1).to({state:[{t:this.instance_8}]},1).to({state:[{t:this.instance_9}]},1).to({state:[{t:this.instance_10}]},1).to({state:[{t:this.instance_11}]},1).to({state:[{t:this.instance_12}]},1).to({state:[{t:this.instance_13}]},1).to({state:[{t:this.instance}]},1).to({state:[{t:this.instance_1}]},1).to({state:[{t:this.instance_2}]},1).to({state:[{t:this.instance_3}]},1).to({state:[{t:this.instance_4}]},1).to({state:[{t:this.instance_5}]},1).to({state:[{t:this.instance_6}]},1).to({state:[{t:this.instance_7}]},1).to({state:[{t:this.instance_8}]},1).to({state:[{t:this.instance_9}]},1).to({state:[{t:this.instance_10}]},1).to({state:[{t:this.instance_11}]},1).to({state:[{t:this.instance_12}]},1).to({state:[{t:this.instance_13}]},1).to({state:[{t:this.instance}]},1).to({state:[{t:this.instance_1}]},1).to({state:[{t:this.instance_2}]},1).to({state:[{t:this.instance_3}]},1).to({state:[{t:this.instance_4}]},1).to({state:[{t:this.instance_5}]},1).to({state:[{t:this.instance_6}]},1).to({state:[{t:this.instance_7}]},1).to({state:[{t:this.instance_8}]},1).to({state:[{t:this.instance_9}]},1).to({state:[{t:this.instance_10}]},1).to({state:[{t:this.instance_11}]},1).to({state:[{t:this.instance_12}]},1).to({state:[{t:this.instance_13}]},1).to({state:[{t:this.instance_14}]},1).to({state:[{t:this.instance_1}]},1).to({state:[{t:this.instance_2}]},1).to({state:[{t:this.instance_3}]},1).to({state:[{t:this.instance_4}]},1).to({state:[{t:this.instance_5}]},1).to({state:[{t:this.instance_6}]},1).to({state:[{t:this.instance_7}]},1).to({state:[{t:this.instance_8}]},1).to({state:[{t:this.instance_9}]},1).to({state:[{t:this.instance_10}]},1).to({state:[{t:this.instance_11}]},1).to({state:[{t:this.instance_12}]},1).to({state:[{t:this.instance_13}]},1).to({state:[{t:this.instance_14}]},1).wait(1));

	this._renderFirstFrame();

}).prototype = p = new cjs.MovieClip();
p.nominalBounds = new cjs.Rectangle(-515,-513,1024,1024);


(lib.movingHappyCrab = function(mode,startPosition,loop,reversed) {
if (loop == null) { loop = true; }
if (reversed == null) { reversed = false; }
	var props = new Object();
	props.mode = mode;
	props.startPosition = startPosition;
	props.labels = {};
	props.loop = loop;
	props.reversed = reversed;
	cjs.MovieClip.apply(this,[props]);

	// Layer_1
	this.instance = new lib.Crab1_HappyCrab_00000();
	this.instance.setTransform(-184,-385);

	this.instance_1 = new lib.Crab1_HappyCrab_00001();
	this.instance_1.setTransform(-184,-385);

	this.instance_2 = new lib.Crab1_HappyCrab_00002();
	this.instance_2.setTransform(-184,-385);

	this.instance_3 = new lib.Crab1_HappyCrab_00003();
	this.instance_3.setTransform(-184,-385);

	this.instance_4 = new lib.Crab1_HappyCrab_00004();
	this.instance_4.setTransform(-184,-385);

	this.instance_5 = new lib.Crab1_HappyCrab_00005();
	this.instance_5.setTransform(-184,-385);

	this.instance_6 = new lib.Crab1_HappyCrab_00006();
	this.instance_6.setTransform(-184,-385);

	this.instance_7 = new lib.Crab1_HappyCrab_00007();
	this.instance_7.setTransform(-184,-385);

	this.instance_8 = new lib.Crab1_HappyCrab_00008();
	this.instance_8.setTransform(-184,-385);

	this.instance_9 = new lib.Crab1_HappyCrab_00009();
	this.instance_9.setTransform(-184,-385);

	this.instance_10 = new lib.Crab1_HappyCrab_00010();
	this.instance_10.setTransform(-184,-385);

	this.instance_11 = new lib.Crab1_HappyCrab_00011();
	this.instance_11.setTransform(-184,-385);

	this.instance_12 = new lib.Crab1_HappyCrab_00012();
	this.instance_12.setTransform(-184,-385);

	this.instance_13 = new lib.Crab1_HappyCrab_00013();
	this.instance_13.setTransform(-184,-385);

	this.timeline.addTween(cjs.Tween.get({}).to({state:[{t:this.instance}]}).to({state:[{t:this.instance_1}]},1).to({state:[{t:this.instance_2}]},1).to({state:[{t:this.instance_3}]},1).to({state:[{t:this.instance_4}]},1).to({state:[{t:this.instance_5}]},1).to({state:[{t:this.instance_6}]},1).to({state:[{t:this.instance_7}]},1).to({state:[{t:this.instance_8}]},1).to({state:[{t:this.instance_9}]},1).to({state:[{t:this.instance_10}]},1).to({state:[{t:this.instance_11}]},1).to({state:[{t:this.instance_12}]},1).to({state:[{t:this.instance_13}]},1).to({state:[{t:this.instance}]},1).wait(1));

	this._renderFirstFrame();

}).prototype = p = new cjs.MovieClip();
p.nominalBounds = new cjs.Rectangle(-184,-385,1268,1024);


(lib.mcAnsBox = function(mode,startPosition,loop,reversed) {
if (loop == null) { loop = true; }
if (reversed == null) { reversed = false; }
	var props = new Object();
	props.mode = mode;
	props.startPosition = startPosition;
	props.labels = {};
	props.loop = loop;
	props.reversed = reversed;
	cjs.MovieClip.apply(this,[props]);

	// Layer_1
	this.shape = new cjs.Shape();
	this.shape.graphics.f().s("#083D43").ss(4,1,2).p("A3vnLMAvfAAAQC/AACGCGQCHCIAAC9QAAC/iHCGQiGCHi/AAMgvfAAAQi/AAiHiHQiGiGAAi/QAAi9CGiIQCHiGC/AAg");
	this.shape.setTransform(-2,3.05);

	this.shape_1 = new cjs.Shape();
	this.shape_1.graphics.f("#FFFFFF").s().p("A3vHMQi+AAiIiHQiGiHAAi+QAAi9CGiIQCIiGC+AAMAvfAAAQC/AACGCGQCHCIAAC9QAAC+iHCHQiGCHi/AAg");
	this.shape_1.setTransform(-2,3.05);

	this.shape_2 = new cjs.Shape();
	this.shape_2.graphics.f("#D7F5F4").s().p("A3vHMQi+AAiIiHQiGiHAAi+QAAi9CGiIQCIiGC+AAMAvfAAAQC/AACGCGQCHCIAAC9QAAC+iHCHQiGCHi/AAg");
	this.shape_2.setTransform(-2,3.05);

	this.shape_3 = new cjs.Shape();
	this.shape_3.graphics.f("#87CBCB").s().p("A3vHMQi+AAiIiHQiGiHAAi+QAAi9CGiIQCIiGC+AAMAvfAAAQC/AACGCGQCHCIAAC9QAAC+iHCHQiGCHi/AAg");
	this.shape_3.setTransform(-2,3.05);

	this.timeline.addTween(cjs.Tween.get({}).to({state:[{t:this.shape_1},{t:this.shape}]}).to({state:[{t:this.shape_2},{t:this.shape}]},1).to({state:[{t:this.shape_3},{t:this.shape}]},1).wait(1));

	this._renderFirstFrame();

}).prototype = p = new cjs.MovieClip();
p.nominalBounds = new cjs.Rectangle(-202,-44.9,400,96);


(lib.generalBtn_ = function(mode,startPosition,loop,reversed) {
if (loop == null) { loop = true; }
if (reversed == null) { reversed = false; }
	var props = new Object();
	props.mode = mode;
	props.startPosition = startPosition;
	props.labels = {};
	props.loop = loop;
	props.reversed = reversed;
	cjs.MovieClip.apply(this,[props]);

	// Layer_1
	this.instance = new lib.waterColBtn3();
	this.instance.setTransform(434,440);

	this.instance_1 = new lib.waterColBtn3_grey();
	this.instance_1.setTransform(434,440);

	this.instance_2 = new lib.waterColBtn3_blue();
	this.instance_2.setTransform(434,440);

	this.timeline.addTween(cjs.Tween.get({}).to({state:[{t:this.instance}]}).to({state:[{t:this.instance_1}]},1).to({state:[{t:this.instance_2}]},1).wait(1));

	this._renderFirstFrame();

}).prototype = p = new cjs.MovieClip();
p.nominalBounds = new cjs.Rectangle(434,440,209,110);


(lib.frame10SB = function(mode,startPosition,loop,reversed) {
if (loop == null) { loop = true; }
if (reversed == null) { reversed = false; }
	var props = new Object();
	props.mode = mode;
	props.startPosition = startPosition;
	props.labels = {};
	props.loop = loop;
	props.reversed = reversed;
	cjs.MovieClip.apply(this,[props]);

	// Layer_1
	this.instance = new lib.sbbbbb();
	this.instance.setTransform(-100,-39,1.1276,0.766);

	this.timeline.addTween(cjs.Tween.get(this.instance).wait(1));

	this._renderFirstFrame();

}).prototype = getMCSymbolPrototype(lib.frame10SB, new cjs.Rectangle(-100,-39,577.3,392.2), null);


(lib.frame9SB = function(mode,startPosition,loop,reversed) {
if (loop == null) { loop = true; }
if (reversed == null) { reversed = false; }
	var props = new Object();
	props.mode = mode;
	props.startPosition = startPosition;
	props.labels = {};
	props.loop = loop;
	props.reversed = reversed;
	cjs.MovieClip.apply(this,[props]);

	// Layer_1
	this.instance = new lib.sbbbbb();
	this.instance.setTransform(-96,-25,1.1276,0.766);

	this.timeline.addTween(cjs.Tween.get(this.instance).wait(1));

	this._renderFirstFrame();

}).prototype = getMCSymbolPrototype(lib.frame9SB, new cjs.Rectangle(-96,-25,577.3,392.2), null);


(lib.frame6SB = function(mode,startPosition,loop,reversed) {
if (loop == null) { loop = true; }
if (reversed == null) { reversed = false; }
	var props = new Object();
	props.mode = mode;
	props.startPosition = startPosition;
	props.labels = {};
	props.loop = loop;
	props.reversed = reversed;
	cjs.MovieClip.apply(this,[props]);

	// Layer_1
	this.instance = new lib.sb2();
	this.instance.setTransform(38.2,-61.35,1.0316,0.8709,6.2039);

	this.timeline.addTween(cjs.Tween.get(this.instance).wait(1));

	this._renderFirstFrame();

}).prototype = getMCSymbolPrototype(lib.frame6SB, new cjs.Rectangle(-0.4,-61.3,418.09999999999997,396.2), null);


(lib.frame5Text = function(mode,startPosition,loop,reversed) {
if (loop == null) { loop = true; }
if (reversed == null) { reversed = false; }
	var props = new Object();
	props.mode = mode;
	props.startPosition = startPosition;
	props.labels = {};
	props.loop = loop;
	props.reversed = reversed;
	cjs.MovieClip.apply(this,[props]);

	// Layer_1
	this.text = new cjs.Text("Wow! \nLook at these impressive patterns in the sand!", "30px 'Montserrat'", "#06282B");
	this.text.name = "text";
	this.text.textAlign = "center";
	this.text.lineHeight = 43;
	this.text.lineWidth = 274;
	this.text.parent = this;
	this.text.setTransform(140.4,2.04,1.0114,1.0114);

	this.timeline.addTween(cjs.Tween.get(this.text).wait(1));

	this._renderFirstFrame();

}).prototype = getMCSymbolPrototype(lib.frame5Text, new cjs.Rectangle(0,0,280.9,265.1), null);


(lib.flowerEffect = function(mode,startPosition,loop,reversed) {
if (loop == null) { loop = true; }
if (reversed == null) { reversed = false; }
	var props = new Object();
	props.mode = mode;
	props.startPosition = startPosition;
	props.labels = {};
	props.loop = loop;
	props.reversed = reversed;
	cjs.MovieClip.apply(this,[props]);

	// Layer_1
	this.instance = new lib.flower();

	this.timeline.addTween(cjs.Tween.get(this.instance).wait(1));

	this._renderFirstFrame();

}).prototype = getMCSymbolPrototype(lib.flowerEffect, new cjs.Rectangle(0,0,76,72), null);


(lib.F5text = function(mode,startPosition,loop,reversed) {
if (loop == null) { loop = true; }
if (reversed == null) { reversed = false; }
	var props = new Object();
	props.mode = mode;
	props.startPosition = startPosition;
	props.labels = {};
	props.loop = loop;
	props.reversed = reversed;
	cjs.MovieClip.apply(this,[props]);

	// Layer_1
	this.text = new cjs.Text("Therefore, the sand is usually looser and contains a small number of species. However, if you look close enough you can still find some interesting animals!", "24px 'Montserrat'", "#0A3337");
	this.text.textAlign = "center";
	this.text.lineHeight = 35;
	this.text.lineWidth = 250;
	this.text.parent = this;
	this.text.setTransform(127.15,2);

	this.timeline.addTween(cjs.Tween.get(this.text).wait(1));

	this._renderFirstFrame();

}).prototype = getMCSymbolPrototype(lib.F5text, new cjs.Rectangle(0,0,254.4,282.8), null);


(lib.an_CSS = function(options) {
	this.initialize();
	this._element = new $.an.CSS(options);
	this._el = this._element.create();
}).prototype = p = new cjs.MovieClip();
p.nominalBounds = new cjs.Rectangle(0,0,100,22);

p._tick = _tick;
p._handleDrawEnd = _handleDrawEnd;
p._updateVisibility = _updateVisibility;
p.draw = _componentDraw;



(lib.credit6 = function(mode,startPosition,loop,reversed) {
if (loop == null) { loop = true; }
if (reversed == null) { reversed = false; }
	var props = new Object();
	props.mode = mode;
	props.startPosition = startPosition;
	props.labels = {};
	props.loop = loop;
	props.reversed = reversed;
	cjs.MovieClip.apply(this,[props]);

	// Layer_1
	this.text = new cjs.Text("Photo 6-7 - HKU – Integrated Mangrove Ecology Lab\n ", "15px 'Microsoft JhengHei Light'");
	this.text.textAlign = "center";
	this.text.lineHeight = 22;
	this.text.lineWidth = 253;
	this.text.parent = this;
	this.text.setTransform(123.45,4.4);

	this.shape = new cjs.Shape();
	this.shape.graphics.f("#FFFFFF").s().p("AzmEXIAAouMAnNAAAIAAIug");
	this.shape.setTransform(125.5,27.95);

	this.timeline.addTween(cjs.Tween.get({}).to({state:[{t:this.shape},{t:this.text}]}).wait(1));

	this._renderFirstFrame();

}).prototype = getMCSymbolPrototype(lib.credit6, new cjs.Rectangle(-4.9,0,256.8,92.2), null);


(lib.credit5 = function(mode,startPosition,loop,reversed) {
if (loop == null) { loop = true; }
if (reversed == null) { reversed = false; }
	var props = new Object();
	props.mode = mode;
	props.startPosition = startPosition;
	props.labels = {};
	props.loop = loop;
	props.reversed = reversed;
	cjs.MovieClip.apply(this,[props]);

	// Layer_1
	this.instance = new lib.CachedBmp_34();
	this.instance.setTransform(4.5,0.2,0.5,0.5);

	this.instance_1 = new lib.CachedBmp_33();
	this.instance_1.setTransform(0,0,0.5,0.5);

	this.timeline.addTween(cjs.Tween.get({}).to({state:[{t:this.instance_1},{t:this.instance}]}).wait(1));

	this._renderFirstFrame();

}).prototype = getMCSymbolPrototype(lib.credit5, new cjs.Rectangle(0,0,326,92.7), null);


(lib.credit4 = function(mode,startPosition,loop,reversed) {
if (loop == null) { loop = true; }
if (reversed == null) { reversed = false; }
	var props = new Object();
	props.mode = mode;
	props.startPosition = startPosition;
	props.labels = {};
	props.loop = loop;
	props.reversed = reversed;
	cjs.MovieClip.apply(this,[props]);

	// Layer_1
	this.instance = new lib.CachedBmp_32();
	this.instance.setTransform(10.5,9,0.5,0.5);

	this.instance_1 = new lib.CachedBmp_31();
	this.instance_1.setTransform(0,0,0.5,0.5);

	this.timeline.addTween(cjs.Tween.get({}).to({state:[{t:this.instance_1},{t:this.instance}]}).wait(1));

	this._renderFirstFrame();

}).prototype = getMCSymbolPrototype(lib.credit4, new cjs.Rectangle(0,0,308,94), null);


(lib.credit3 = function(mode,startPosition,loop,reversed) {
if (loop == null) { loop = true; }
if (reversed == null) { reversed = false; }
	var props = new Object();
	props.mode = mode;
	props.startPosition = startPosition;
	props.labels = {};
	props.loop = loop;
	props.reversed = reversed;
	cjs.MovieClip.apply(this,[props]);

	// Layer_1
	this.instance = new lib.CachedBmp_30();
	this.instance.setTransform(12.15,8.05,0.5,0.5);

	this.instance_1 = new lib.CachedBmp_29();
	this.instance_1.setTransform(0,0,0.5,0.5);

	this.timeline.addTween(cjs.Tween.get({}).to({state:[{t:this.instance_1},{t:this.instance}]}).wait(1));

	this._renderFirstFrame();

}).prototype = getMCSymbolPrototype(lib.credit3, new cjs.Rectangle(0,0,334.2,78.6), null);


(lib.credit2 = function(mode,startPosition,loop,reversed) {
if (loop == null) { loop = true; }
if (reversed == null) { reversed = false; }
	var props = new Object();
	props.mode = mode;
	props.startPosition = startPosition;
	props.labels = {};
	props.loop = loop;
	props.reversed = reversed;
	cjs.MovieClip.apply(this,[props]);

	// Layer_1
	this.instance = new lib.CachedBmp_28();
	this.instance.setTransform(-119.25,-23.35,0.5,0.5);

	this.instance_1 = new lib.CachedBmp_27();
	this.instance_1.setTransform(-130.55,-26.25,0.5,0.5);

	this.timeline.addTween(cjs.Tween.get({}).to({state:[{t:this.instance_1},{t:this.instance}]}).wait(1));

	this._renderFirstFrame();

}).prototype = getMCSymbolPrototype(lib.credit2, new cjs.Rectangle(-130.5,-26.2,288.5,96.5), null);


(lib.credit1 = function(mode,startPosition,loop,reversed) {
if (loop == null) { loop = true; }
if (reversed == null) { reversed = false; }
	var props = new Object();
	props.mode = mode;
	props.startPosition = startPosition;
	props.labels = {};
	props.loop = loop;
	props.reversed = reversed;
	cjs.MovieClip.apply(this,[props]);

	// Layer_1
	this.instance = new lib.CachedBmp_26();
	this.instance.setTransform(75.3,-6.6,0.5,0.5);

	this.instance_1 = new lib.CachedBmp_25();
	this.instance_1.setTransform(84.85,-8.15,0.5,0.5);

	this.timeline.addTween(cjs.Tween.get({}).to({state:[{t:this.instance_1},{t:this.instance}]}).wait(1));

	this._renderFirstFrame();

}).prototype = getMCSymbolPrototype(lib.credit1, new cjs.Rectangle(75.3,-8.1,196.5,24), null);


(lib.credit16 = function(mode,startPosition,loop,reversed) {
if (loop == null) { loop = true; }
if (reversed == null) { reversed = false; }
	var props = new Object();
	props.mode = mode;
	props.startPosition = startPosition;
	props.labels = {};
	props.loop = loop;
	props.reversed = reversed;
	cjs.MovieClip.apply(this,[props]);

	// Layer_1
	this.text = new cjs.Text("Photo 8- HKU – Integrated Mangrove Ecology Lab", "15px 'Microsoft JhengHei Light'");
	this.text.textAlign = "center";
	this.text.lineHeight = 22;
	this.text.lineWidth = 208;
	this.text.parent = this;
	this.text.setTransform(119.55,8.25);

	this.shape = new cjs.Shape();
	this.shape.graphics.f("#FFFFFF").s().p("AyiEkIAApHMAlFAAAIAAJHg");
	this.shape.setTransform(118.7,29.15);

	this.timeline.addTween(cjs.Tween.get({}).to({state:[{t:this.shape},{t:this.text}]}).wait(1));

	this._renderFirstFrame();

}).prototype = getMCSymbolPrototype(lib.credit16, new cjs.Rectangle(0,0,237.4,79.5), null);


(lib.nextPageButton = function(mode,startPosition,loop,reversed) {
if (loop == null) { loop = true; }
if (reversed == null) { reversed = false; }
	var props = new Object();
	props.mode = mode;
	props.startPosition = startPosition;
	props.labels = {};
	props.loop = loop;
	props.reversed = reversed;
	cjs.MovieClip.apply(this,[props]);

	// Layer_1
	this.instance = new lib.next1();
	this.instance.setTransform(-116,-114);

	this.instance_1 = new lib.next2();
	this.instance_1.setTransform(-116,-114);

	this.timeline.addTween(cjs.Tween.get({}).to({state:[{t:this.instance}]}).to({state:[{t:this.instance_1}]},1).wait(2));

	this._renderFirstFrame();

}).prototype = p = new cjs.MovieClip();
p.nominalBounds = new cjs.Rectangle(-116,-114,236,237);


(lib.btn2 = function(mode,startPosition,loop,reversed) {
if (loop == null) { loop = true; }
if (reversed == null) { reversed = false; }
	var props = new Object();
	props.mode = mode;
	props.startPosition = startPosition;
	props.labels = {};
	props.loop = loop;
	props.reversed = reversed;
	cjs.MovieClip.apply(this,[props]);

	// Layer_1
	this.instance = new lib.CachedBmp_23();
	this.instance.setTransform(-11,-39.4,0.5,0.5);

	this.instance_1 = new lib.CachedBmp_24();
	this.instance_1.setTransform(-11,-39.4,0.5,0.5);

	this.timeline.addTween(cjs.Tween.get({}).to({state:[{t:this.instance}]}).to({state:[{t:this.instance_1}]},1).wait(1));

	// Layer_2
	this.shape = new cjs.Shape();
	this.shape.graphics.f("#89D0DA").s().p("ApwF7IAAr0IThAAIAAL0g");
	this.shape.setTransform(51.5,-1.5);

	this.timeline.addTween(cjs.Tween.get(this.shape).wait(2));

	this._renderFirstFrame();

}).prototype = p = new cjs.MovieClip();
p.nominalBounds = new cjs.Rectangle(-11,-39.4,125,75.8);


(lib.Btn = function(mode,startPosition,loop,reversed) {
if (loop == null) { loop = true; }
if (reversed == null) { reversed = false; }
	var props = new Object();
	props.mode = mode;
	props.startPosition = startPosition;
	props.labels = {};
	props.loop = loop;
	props.reversed = reversed;
	cjs.MovieClip.apply(this,[props]);

	// Layer_1
	this.instance = new lib.waterColBtn1();
	this.instance.setTransform(-174,-61);

	this.instance_1 = new lib.waterColBtn1_blue();
	this.instance_1.setTransform(-202,-71,1.1566,1.1566);

	this.timeline.addTween(cjs.Tween.get({}).to({state:[{t:this.instance,p:{scaleX:1,scaleY:1,x:-174,y:-61}}]}).to({state:[{t:this.instance,p:{scaleX:1.1555,scaleY:1.1597,x:-202,y:-71}}]},1).to({state:[{t:this.instance_1}]},1).wait(2));

	this._renderFirstFrame();

}).prototype = p = new cjs.MovieClip();
p.nominalBounds = new cjs.Rectangle(-202,-71,410.6,149.6);


(lib.BackBtn = function(mode,startPosition,loop,reversed) {
if (loop == null) { loop = true; }
if (reversed == null) { reversed = false; }
	var props = new Object();
	props.mode = mode;
	props.startPosition = startPosition;
	props.labels = {};
	props.loop = loop;
	props.reversed = reversed;
	cjs.MovieClip.apply(this,[props]);

	// Layer_2
	this.text = new cjs.Text("Back", "bold 41px 'Microsoft JhengHei'", "#143647");
	this.text.textAlign = "center";
	this.text.lineHeight = 57;
	this.text.lineWidth = 154;
	this.text.parent = this;
	this.text.setTransform(2.05,-29.8);

	this.timeline.addTween(cjs.Tween.get(this.text).wait(3));

	// Layer_3
	this.instance = new lib.waterColBtn2();
	this.instance.setTransform(-116,-57,0.7689,1);

	this.instance_1 = new lib.waterColBtn2_grey();
	this.instance_1.setTransform(-116,-57,0.7689,1);

	this.instance_2 = new lib.waterColBtn2_blue();
	this.instance_2.setTransform(-116,-57,0.7689,1);

	this.timeline.addTween(cjs.Tween.get({}).to({state:[{t:this.instance}]}).to({state:[{t:this.instance_1}]},1).to({state:[{t:this.instance_2}]},1).wait(1));

	this._renderFirstFrame();

}).prototype = p = new cjs.MovieClip();
p.nominalBounds = new cjs.Rectangle(-116,-57,239.9,118);


(lib.title_move = function(mode,startPosition,loop,reversed) {
if (loop == null) { loop = true; }
if (reversed == null) { reversed = false; }
	var props = new Object();
	props.mode = mode;
	props.startPosition = startPosition;
	props.labels = {};
	props.loop = loop;
	props.reversed = reversed;
	cjs.MovieClip.apply(this,[props]);

	// Layer_1
	this.instance = new lib.Tween14("synched",0);
	this.instance.setTransform(424.6,174.5);

	this.instance_1 = new lib.Tween16("synched",0);
	this.instance_1.setTransform(424.6,174.5);

	this.timeline.addTween(cjs.Tween.get({}).to({state:[{t:this.instance}]}).to({state:[{t:this.instance}]},9).to({state:[{t:this.instance_1}]},10).wait(1));
	this.timeline.addTween(cjs.Tween.get(this.instance).to({y:166.7},9).to({_off:true,y:174.5},10).wait(1));

	this._renderFirstFrame();

}).prototype = p = new cjs.MovieClip();
p.nominalBounds = new cjs.Rectangle(0,-7.8,849.2,356.90000000000003);


(lib.sunRay = function(mode,startPosition,loop,reversed) {
if (loop == null) { loop = true; }
if (reversed == null) { reversed = false; }
	var props = new Object();
	props.mode = mode;
	props.startPosition = startPosition;
	props.labels = {};
	props.loop = loop;
	props.reversed = reversed;
	cjs.MovieClip.apply(this,[props]);

	// Layer_1
	this.instance = new lib.Tween17("synched",0);
	this.instance.setTransform(251,500);

	this.timeline.addTween(cjs.Tween.get(this.instance).to({x:1638.5,y:517.75},24).to({startPosition:0},24).to({x:251,y:500},1).wait(1));

	this._renderFirstFrame();

}).prototype = p = new cjs.MovieClip();
p.nominalBounds = new cjs.Rectangle(0,0,1889.5,1017.8);


(lib.rainDrops = function(mode,startPosition,loop,reversed) {
if (loop == null) { loop = true; }
if (reversed == null) { reversed = false; }
	var props = new Object();
	props.mode = mode;
	props.startPosition = startPosition;
	props.labels = {};
	props.loop = loop;
	props.reversed = reversed;
	cjs.MovieClip.apply(this,[props]);

	// Layer_7
	this.instance = new lib.rainDrop();
	this.instance.setTransform(229.55,54,1,1,0,0,0,0,-1);
	this.instance.alpha = 0.3711;
	this.instance._off = true;

	this.timeline.addTween(cjs.Tween.get(this.instance).wait(19).to({_off:false},0).to({y:139.25,alpha:0.4102},5).wait(1));

	// Layer_5
	this.instance_1 = new lib.rainDrop();
	this.instance_1.setTransform(144,67.15,1,1,0,0,0,0,-1);

	this.timeline.addTween(cjs.Tween.get(this.instance_1).to({y:85.95},2).to({y:222.6,alpha:0},9).to({y:211.05,alpha:0.3711},3).to({_off:true},1).wait(6).to({_off:false,y:40.8,alpha:0},0).to({alpha:0.75},3).wait(1));

	// Layer_4
	this.instance_2 = new lib.rainDrop();
	this.instance_2.setTransform(139.25,5.6,1,1,0,0,0,0,-1);
	this.instance_2.alpha = 0;
	this.instance_2._off = true;

	this.timeline.addTween(cjs.Tween.get(this.instance_2).wait(7).to({_off:false},0).to({y:45.75,alpha:1},3).to({y:99.25,alpha:0.0508},4).to({y:233,alpha:0},10).wait(1));

	// Layer_3
	this.instance_3 = new lib.rainDrop();
	this.instance_3.setTransform(269.65,38.25,1,1,0,0,0,0,-1);
	this.instance_3.alpha = 0;
	this.instance_3._off = true;

	this.timeline.addTween(cjs.Tween.get(this.instance_3).wait(5).to({_off:false},0).to({y:75.45,alpha:1},3).to({y:199.55,alpha:0},10).to({y:274},6).wait(1));

	// Layer_1
	this.instance_4 = new lib.rainDrop();
	this.instance_4.setTransform(48,54,1,1,0,0,0,0,-1);
	this.instance_4.alpha = 0;

	this.timeline.addTween(cjs.Tween.get(this.instance_4).to({y:89.55,alpha:1},3).to({y:184.3,alpha:0.1602},8).to({y:106.35,alpha:0.0391},7).to({y:279,alpha:0},2).to({_off:true},1).wait(4));

	// Layer_6
	this.instance_5 = new lib.rainDrop();
	this.instance_5.setTransform(48,1.3,1,1,0,0,0,0,-1);
	this.instance_5.alpha = 0;
	this.instance_5._off = true;

	this.timeline.addTween(cjs.Tween.get(this.instance_5).wait(11).to({_off:false},0).to({y:33.15,alpha:1},2).to({y:131.45,alpha:0},5).to({y:341},6).wait(1));

	this._renderFirstFrame();

}).prototype = p = new cjs.MovieClip();
p.nominalBounds = new cjs.Rectangle(0,-52.7,317.7,447.7);


(lib.flowers = function(mode,startPosition,loop,reversed) {
if (loop == null) { loop = true; }
if (reversed == null) { reversed = false; }
	var props = new Object();
	props.mode = mode;
	props.startPosition = startPosition;
	props.labels = {};
	props.loop = loop;
	props.reversed = reversed;
	cjs.MovieClip.apply(this,[props]);

	// Layer_3
	this.instance = new lib.flowerEffect();
	this.instance.setTransform(409.45,124,1,1,0,0,0,38,36);

	this.timeline.addTween(cjs.Tween.get(this.instance).to({alpha:0.1016},14).to({alpha:1},15).wait(1));

	// Layer_2
	this.instance_1 = new lib.flowerEffect();
	this.instance_1.setTransform(174.55,25.05,1,1,0,0,0,38,36);
	this.instance_1.alpha = 0.1016;

	this.timeline.addTween(cjs.Tween.get(this.instance_1).to({alpha:1},14).to({alpha:0.1016},15).wait(1));

	// Layer_1
	this.instance_2 = new lib.flowerEffect();
	this.instance_2.setTransform(38,124,1,1,0,0,0,38,36);
	this.instance_2.alpha = 0.6016;

	this.timeline.addTween(cjs.Tween.get(this.instance_2).to({alpha:0.8398},7).to({alpha:0.6016},7).to({alpha:0.0898},7).to({alpha:0.6016},8).wait(1));

	this._renderFirstFrame();

}).prototype = p = new cjs.MovieClip();
p.nominalBounds = new cjs.Rectangle(0,-10.9,447.5,170.9);


(lib.crab_shadow_1 = function(mode,startPosition,loop,reversed) {
if (loop == null) { loop = true; }
if (reversed == null) { reversed = false; }
	var props = new Object();
	props.mode = mode;
	props.startPosition = startPosition;
	props.labels = {};
	props.loop = loop;
	props.reversed = reversed;
	cjs.MovieClip.apply(this,[props]);

	// Layer_1
	this.instance = new lib.Tween2("synched",0);
	this.instance.setTransform(215.15,174.35);

	this.instance_1 = new lib.Tween3("synched",0);
	this.instance_1.setTransform(215.15,158.9);
	this.instance_1._off = true;

	this.instance_2 = new lib.Tween4("synched",0);
	this.instance_2.setTransform(215.15,174.35);

	this.timeline.addTween(cjs.Tween.get({}).to({state:[{t:this.instance}]}).to({state:[{t:this.instance_1}]},7).to({state:[{t:this.instance_2}]},8).wait(1));
	this.timeline.addTween(cjs.Tween.get(this.instance).to({_off:true,y:158.9},7).wait(9));
	this.timeline.addTween(cjs.Tween.get(this.instance_1).to({_off:false},7).to({_off:true,y:174.35},8).wait(1));

	this._renderFirstFrame();

}).prototype = p = new cjs.MovieClip();
p.nominalBounds = new cjs.Rectangle(0,-15.4,430.3,364.09999999999997);


(lib.clam_move = function(mode,startPosition,loop,reversed) {
if (loop == null) { loop = true; }
if (reversed == null) { reversed = false; }
	var props = new Object();
	props.mode = mode;
	props.startPosition = startPosition;
	props.labels = {};
	props.loop = loop;
	props.reversed = reversed;
	cjs.MovieClip.apply(this,[props]);

	// Layer_1
	this.instance = new lib.Tween5("synched",0);
	this.instance.setTransform(187.05,131.8);

	this.instance_1 = new lib.Tween6("synched",0);
	this.instance_1.setTransform(178.05,137);
	this.instance_1._off = true;

	this.instance_2 = new lib.Tween7("synched",0);
	this.instance_2.setTransform(187.05,131.8);

	this.timeline.addTween(cjs.Tween.get({}).to({state:[{t:this.instance}]}).to({state:[{t:this.instance_1}]},7).to({state:[{t:this.instance_2}]},8).wait(1));
	this.timeline.addTween(cjs.Tween.get(this.instance).to({_off:true,x:178.05,y:137},7).wait(9));
	this.timeline.addTween(cjs.Tween.get(this.instance_1).to({_off:false},7).to({_off:true,x:187.05,y:131.8},8).wait(1));

	this._renderFirstFrame();

}).prototype = p = new cjs.MovieClip();
p.nominalBounds = new cjs.Rectangle(-9,0,383.1,268.8);


(lib.bubble2_move = function(mode,startPosition,loop,reversed) {
if (loop == null) { loop = true; }
if (reversed == null) { reversed = false; }
	var props = new Object();
	props.mode = mode;
	props.startPosition = startPosition;
	props.labels = {};
	props.loop = loop;
	props.reversed = reversed;
	cjs.MovieClip.apply(this,[props]);

	// Layer_1
	this.instance = new lib.Tween11("synched",0);
	this.instance.setTransform(50,44);

	this.instance_1 = new lib.Tween12("synched",0);
	this.instance_1.setTransform(60,49);
	this.instance_1._off = true;

	this.instance_2 = new lib.Tween13("synched",0);
	this.instance_2.setTransform(50,44);

	this.timeline.addTween(cjs.Tween.get({}).to({state:[{t:this.instance}]}).to({state:[{t:this.instance_1}]},12).to({state:[{t:this.instance_2}]},12).wait(1));
	this.timeline.addTween(cjs.Tween.get(this.instance).to({_off:true,x:60,y:49},12).wait(13));
	this.timeline.addTween(cjs.Tween.get(this.instance_1).to({_off:false},12).to({_off:true,x:50,y:44},12).wait(1));

	this._renderFirstFrame();

}).prototype = p = new cjs.MovieClip();
p.nominalBounds = new cjs.Rectangle(0,0,110,93);


(lib.bubble1_move = function(mode,startPosition,loop,reversed) {
if (loop == null) { loop = true; }
if (reversed == null) { reversed = false; }
	var props = new Object();
	props.mode = mode;
	props.startPosition = startPosition;
	props.labels = {};
	props.loop = loop;
	props.reversed = reversed;
	cjs.MovieClip.apply(this,[props]);

	// Layer_1
	this.instance = new lib.Tween8("synched",0);
	this.instance.setTransform(61,53);

	this.instance_1 = new lib.Tween9("synched",0);
	this.instance_1.setTransform(55,41);
	this.instance_1._off = true;

	this.instance_2 = new lib.Tween10("synched",0);
	this.instance_2.setTransform(61,53);

	this.timeline.addTween(cjs.Tween.get({}).to({state:[{t:this.instance}]}).to({state:[{t:this.instance_1}]},11).to({state:[{t:this.instance_2}]},13).wait(1));
	this.timeline.addTween(cjs.Tween.get(this.instance).to({_off:true,x:55,y:41},11).wait(14));
	this.timeline.addTween(cjs.Tween.get(this.instance_1).to({_off:false},11).to({_off:true,x:61,y:53},13).wait(1));

	this._renderFirstFrame();

}).prototype = p = new cjs.MovieClip();
p.nominalBounds = new cjs.Rectangle(-6,-12,128,118);


(lib.inputField_ = function(mode,startPosition,loop,reversed) {
if (loop == null) { loop = true; }
if (reversed == null) { reversed = false; }
	var props = new Object();
	props.mode = mode;
	props.startPosition = startPosition;
	props.labels = {};
	props.loop = loop;
	props.reversed = reversed;
	cjs.MovieClip.apply(this,[props]);

	// Layer_1
	this.answer_box3 = new lib.an_TextInput({'id': 'answer_box3', 'value':'', 'disabled':false, 'visible':true, 'class':'ui-textinput'});

	this.answer_box3.name = "answer_box3";
	this.answer_box3.setTransform(553.6,220.7,1,1,0,0,0,49.9,10.8);

	this.timeline.addTween(cjs.Tween.get(this.answer_box3).wait(1));

	this._renderFirstFrame();

}).prototype = getMCSymbolPrototype(lib.inputField_, new cjs.Rectangle(503.2,209.4,101.00000000000006,23), null);


(lib.inputField__1 = function(mode,startPosition,loop,reversed) {
if (loop == null) { loop = true; }
if (reversed == null) { reversed = false; }
	var props = new Object();
	props.mode = mode;
	props.startPosition = startPosition;
	props.labels = {};
	props.loop = loop;
	props.reversed = reversed;
	cjs.MovieClip.apply(this,[props]);

	// Layer_1
	this.answer_box2 = new lib.an_TextInput({'id': 'answer_box2', 'value':'', 'disabled':false, 'visible':true, 'class':'ui-textinput'});

	this.answer_box2.name = "answer_box2";
	this.answer_box2.setTransform(553.6,220.7,1,1,0,0,0,49.9,10.8);

	this.timeline.addTween(cjs.Tween.get(this.answer_box2).wait(1));

	this._renderFirstFrame();

}).prototype = getMCSymbolPrototype(lib.inputField__1, new cjs.Rectangle(503.2,209.4,101.00000000000006,23), null);


(lib.inputField__2 = function(mode,startPosition,loop,reversed) {
if (loop == null) { loop = true; }
if (reversed == null) { reversed = false; }
	var props = new Object();
	props.mode = mode;
	props.startPosition = startPosition;
	props.labels = {};
	props.loop = loop;
	props.reversed = reversed;
	cjs.MovieClip.apply(this,[props]);

	// Layer_1
	this.answer_box = new lib.an_TextInput({'id': 'answer_box', 'value':'', 'disabled':false, 'visible':true, 'class':'ui-textinput'});

	this.answer_box.name = "answer_box";
	this.answer_box.setTransform(553.6,220.7,1,1,0,0,0,49.9,10.8);

	this.timeline.addTween(cjs.Tween.get(this.answer_box).wait(1));

	this._renderFirstFrame();

}).prototype = getMCSymbolPrototype(lib.inputField__2, new cjs.Rectangle(503.2,209.4,101.00000000000006,23), null);


// stage content:
(lib.StarFishBayGame_new2 = function(mode,startPosition,loop,reversed) {
if (loop == null) { loop = true; }
if (reversed == null) { reversed = false; }
	var props = new Object();
	props.mode = mode;
	props.startPosition = startPosition;
	props.labels = {};
	props.loop = loop;
	props.reversed = reversed;
	cjs.MovieClip.apply(this,[props]);

	this.actionFrames = [0,1,2,3,4,5,6,7,8,9,10,11,12,13,14,15,16,24,25];
	// timeline functions:
	this.frame_0 = function() {
		function fl_ClickToGoToAndPlayAtFrame()
		{
			this.skipVideoBtn.removeEventListener("click",fl_ClickToGoToAndPlayAtFrame.bind(this));
			this.skipVideoBtn.stop();
			this.gotoAndStop(this.currentFrame+1); 
			
		}
		this.stop();
		
		
		
		
		
		this.skipVideoBtn.addEventListener("click", fl_ClickToGoToAndPlayAtFrame.bind(this));
	}
	this.frame_1 = function() {
		this.stop();
		
		var root4=this;
		
		this.StartBtn.addEventListener("click", fl_ClickToGoToAndPlayAtFrame.bind(this));
		
		function fl_ClickToGoToAndPlayAtFrame()
		{
				this.StartBtn.removeEventListener("click",fl_ClickToGoToAndPlayAtFrame.bind(this));
			this.StartBtn.stop();
			root4.gotoAndStop(2); 
		
		}
		
		
		
		this.creditBtn.addEventListener("click", fl_ClickToGoToAndPlayAtFrame2.bind(this));
		
		function fl_ClickToGoToAndPlayAtFrame2()
		{
				this.creditBtn.removeEventListener("click",fl_ClickToGoToAndPlayAtFrame2.bind(this));
			this.creditBtn.stop();
			root4.gotoAndStop(24); 
		
		}
	}
	this.frame_2 = function() {
		var val;
		
		function init() {
			infoContainer = new createjs.Container();
			stage.addChild(infoContainer);
		
			button = this.okBtn;
			infoContainer.addChild(button);
		
			inputField1 = this.answer_box;
			infoContainer.addChild(inputField1);
			
			
			//dom_overlay_container.children["answer_box"].maxLength = 2;
			createjs.Tween.get().wait(100).call(setCaret);
			
			
		}
		
		function setCaret() {
			document.getElementById('answer_box').focus(); //highlight the textfield
			document.getElementById('answer_box').maxLength = "10";
		}
		
		function getValue() {
			
			val = document.getElementById('answer_box').value;
			alert("Hello "+val+" !");
			name = val;
			console.log("name = "+name);
			this.gotoAndPlay(this.currentFrame+1); 
			this.okBtn.removeEventListener("click", getValue.bind(this));
			this.okBtn.stop();
			
			//this.navNext();
		
			
		}
		
		if (!this.inited) {
		this.stop();
		//this.title1.text="HIHI";
		this.okBtn.addEventListener("click", getValue.bind(this));
		init();
		this.inited = true;
		}
	}
	this.frame_3 = function() {
		this.stop();
		console.log("frame 4, real frame:"+this.currentFrame);
		
		
		
		this.credit.visible = false;
		var nextButtonEvent = this.nextBtn.addEventListener("click", fl_ClickToGoToAndPlayAtFrame.bind(this));
		
		function fl_ClickToGoToAndPlayAtFrame() {
			this.gotoAndStop(this.currentFrame+1);
			this.nextBtn.removeEventListener("click", nextButtonEvent);
			this.nextBtn.stop();
		}
		
		var frequency = 3;
		
		stage.enableMouseOver(frequency);
		
		//hover over
		this.photoImg.addEventListener("mouseover", fl_MouseOverHandler_2.bind(this));
		
		function fl_MouseOverHandler_2()
		{
			this.credit.visible = true;
			console.log("mouseOver");
		}
		
		this.photoImg.addEventListener("mouseout", fl_MouseOverHandler.bind(this));
		
		function fl_MouseOverHandler()
		{
			this.credit.visible = false;
			console.log("mouseOut");
		}
		
		
		//fade in
		this.photoImg.x = 1100;
		//fade in
		var crab_FadeInCbk4 = fl_FadeSymbolIn4.bind(this);
		this.addEventListener('tick', crab_FadeInCbk4);
		
		
		//fade in
		function fl_FadeSymbolIn4()
		{
			if(this.photoImg.x <=730)
			{
				this.removeEventListener('tick', crab_FadeInCbk4);
				console.log("ready");
				//this.photoImg.alpha = 1; 
				//this.speechBubble4.alpha = 1; 
				//this.crab4.alpha = 1; 
				//this.credit4.alpha = 1; 	
				return;	
			}
			this.photoImg.x-= 40;
		}
	}
	this.frame_4 = function() {
		this.stop();
		console.log("frame 5, real frame:"+this.currentFrame);
		this.credit.visible = false;
		
		var nextButtonEvent = this.nextBtn.addEventListener("click", fl_ClickToGoToAndPlayAtFrame.bind(this));
		
		var crab_FadeOutCbk = fl_FadeSymbolOut.bind(this);
		
		
		
		function fl_ClickToGoToAndPlayAtFrame() {
			this.nextBtn.removeEventListener("click",nextButtonEvent );
			this.nextBtn.stop();
			this.addEventListener('tick', crab_FadeOutCbk);
			//setTimeout(doLater,3000);
		}
		
		/*
		function doLater() {
			console.log("Hi");
			canChangeScene=true;
		}
		*/
		var frequency = 3;
		stage.enableMouseOver(frequency);
		
		//hover over
		this.photoImg.addEventListener("mouseover", fl_MouseOverHandler_3.bind(this));
		
		function fl_MouseOverHandler_3()
		{
			this.credit.visible = true;
			console.log("mouseOver");
		}
		
		this.photoImg.addEventListener("mouseout", fl_MouseOverHandler.bind(this));
		
		function fl_MouseOverHandler()
		{
			this.credit.visible = false;
			console.log("mouseOut");
		}
		
		
		
		
		function fl_FadeSymbolOut()
		{
			this.photoImg.alpha-=0.05;
			this.crab.alpha -= 0.05;
			this.text.alpha -= 0.05;
			this.speechBubble.alpha-=0.05;
			this.credit.alpha-=0.05;
		
			
			if(this.crab.alpha <= 0)
			{
				this.removeEventListener('tick', crab_FadeOutCbk);
				//console.log("CAN CHANGE");
				this.gotoAndStop(this.currentFrame+1);
				return;	
				//this.removeEventListener('tick',sceneCheckStart);
				
			}
		}
	}
	this.frame_5 = function() {
		this.stop();
		console.log("frame 6, real frame:"+this.currentFrame);
		this.credit2.visible = false;
		
		//fade in
		this.photo2.x = -600;
		var crab_FadeInCbk_2 = fl_FadeSymbolIn_2.bind(this);
		this.addEventListener('tick', crab_FadeInCbk_2);
		
		
		
		var buttonEvent = this.nextButton.addEventListener("click", fl_ClickToGoToAndPlayAtFrame.bind(this));
		
		//fade
		var crab_FadeOutCbk2 = fl_FadeSymbolOut2.bind(this);
		
		
		function fl_ClickToGoToAndPlayAtFrame() {
		
			console.log("frame 6 now");
			//this.gotoAndStop(this.currentFrame+1);
			this.nextBtn.removeEventListener("click", buttonEvent);
			this.nextBtn.stop();
			//fade
			this.addEventListener('tick', crab_FadeOutCbk2);
		}
		
		
		var frequency = 3;
		
		stage.enableMouseOver(frequency);
		
		//hover over
		this.photo2.addEventListener("mouseover", fl_MouseOverHandler_2.bind(this));
		
		function fl_MouseOverHandler_2()
		{
			this.credit2.visible = true;
			console.log("mouseOver");
		}
		
		this.photo2.addEventListener("mouseout", fl_MouseOverHandler.bind(this));
		
		function fl_MouseOverHandler()
		{
			this.credit2.visible = false;
			console.log("mouseOut");
		}
		
		
		
		
		
		//fade
		
		
		function fl_FadeSymbolOut2()
		{
			this.photo2.alpha-=0.05;
			this.crab2.alpha -= 0.05;
			this.text.alpha -=  0.05;
			this.speechBubble2.alpha-=0.05;
			this.credit2.alpha-=0.05;
		
			
			if(this.crab2.alpha <= 0)
			{
				this.removeEventListener('tick', crab_FadeOutCbk2);
				console.log("CAN CHANGE");
				this.text.alpha = 1 ;
				this.gotoAndStop(this.currentFrame+1);
				this.photo2.alpha = 1; 
				this.speechBubble2.alpha = 1; 
				this.crab2.alpha = 1; 
				this.credit2.alpha = 1; 
				return;	
			//this.removeEventListener('tick',sceneCheckStart);
				
			}
		}
		
		
		
		
		
		
		
		//fade in
		function fl_FadeSymbolIn_2()
		{
			if(this.photo2.x >=320)
			{
				this.removeEventListener('tick', crab_FadeInCbk_2);
				console.log("ready");
				//this.photoImg.alpha = 1; 
				//this.speechBubble4.alpha = 1; 
				//this.crab4.alpha = 1; 
				//this.credit4.alpha = 1; 	
				return;	
			}
			this.photo2.x+= 50;
		}
	}
	this.frame_6 = function() {
		//MC Page
		this.stop();
		console.log("frame 7, real frame:"+this.currentFrame);
		this.credit2_2.visible = false;
		var root= this;
		
		attempt++;
		
		
		var ABtnEvent = this.ABtn.addEventListener("click", fl_ClickToGoToAndPlayAtFrame.bind(this));
		
		
		function fl_ClickToGoToAndPlayAtFrame()
		{	
		
				console.log("a"+": attempt: "+attempt);
				this.ABtn.removeEventListener("click",  ABtnEvent);
				answerCorrect=false;
				root.gotoAndStop(7);  
				this.ABtn.stop();	
		}
		
		var BBtnEvent =this.BBtn.addEventListener("click", fl_ClickToGoToAndPlayAtFrame1.bind(this));
		
		function fl_ClickToGoToAndPlayAtFrame1()
		{
				console.log("b"+": attempt: "+attempt);
			  this.BBtn.removeEventListener("click",  BBtnEvent);
				root.gotoAndStop(8); 
				this.BBtn.stop();
		}
		
		var CBtnEvent = this.CBtn.addEventListener("click", fl_ClickToGoToAndPlayAtFrame2.bind(this));
		
		function fl_ClickToGoToAndPlayAtFrame2()
		{	
				console.log("c"+": attempt: "+attempt);
				this.CBtn.removeEventListener("click",  CBtnEvent);
				root.gotoAndStop(7); 
				this.CBtn.stop();
		}
		
		var DBtnEvent = this.DBtn.addEventListener("click", fl_ClickToGoToAndPlayAtFrame3.bind(this));
		
		function fl_ClickToGoToAndPlayAtFrame3()
		{
				console.log("d"+": attempt: "+attempt);
				this.DBtn.removeEventListener("click",  DBtnEvent);
				root.gotoAndStop(7); 
		    	this.DBtn.stop();
		
		}
		
		
		/////credit
		var frequency = 3;
		
		stage.enableMouseOver(frequency);
		
		//hover over
		this.photo2_2.addEventListener("mouseover", fl_MouseOverHandler_2.bind(this));
		
		function fl_MouseOverHandler_2()
		{
			this.credit2_2.visible = true;
			console.log("mouseOver");
		}
		
		this.photo2_2.addEventListener("mouseout", fl_MouseOverHandler.bind(this));
		
		function fl_MouseOverHandler()
		{
			this.credit2_2.visible = false;
			console.log("mouseOut");
		}
		/////credit end
		
		this.stop();
	}
	this.frame_7 = function() {
		this.stop();
		var root= this;
		
		
		console.log("frame 8, real frame:"+this.currentFrame);
		var backBtnEvent = this.backBtn.addEventListener("click", fl_ClickToGoToAndPlayAtFrame.bind(this));
		
		function fl_ClickToGoToAndPlayAtFrame()
		{
			//console.log("pressBack");
			root.gotoAndStop(6); 
			this.backBtn.removeEventListener("click",backBtnEvent);
			this.backBtn.stop();
		}
	}
	this.frame_8 = function() {
		this.stop();
		this.flower.visible = false;
		console.log("frame 9, real frame:"+this.currentFrame);
		var nextButtonEvent = this.nextBtn.addEventListener("click", fl_ClickToGoToAndPlayAtFrame.bind(this));
		
		//fade in
		this.crab9.x = -400;
		var crab_FadeInCbk9 = fl_FadeSymbolIn9.bind(this);
		this.addEventListener('tick', crab_FadeInCbk9);
		
		
		
		//fade
		var crab_FadeOutCbk3 = fl_FadeSymbolOut3.bind(this);
		
		
		function fl_ClickToGoToAndPlayAtFrame() {
			console.log("pressBnext");
			this.nextBtn.removeEventListener("click", nextButtonEvent);
			
			//fade
			this.addEventListener('tick', crab_FadeOutCbk3);
		
		}
		
		
		//fade
		function fl_FadeSymbolOut3()
		{
		
			this.crab9.alpha -= 0.05;
			this.speechBubble3_2.alpha-=0.05;
			this.text.visible = false;
			
			
			
			if(this.crab9.alpha <= 0)
			{
				this.removeEventListener('tick', crab_FadeOutCbk3);
				console.log("CAN CHANGE");
				this.gotoAndStop(this.currentFrame+1);
				this.speechBubble3_2.alpha = 1; 
				
				this.crab9.alpha = 1; 
				return;	
				
			}
		}
		
		
		
		
		//fade in
		function fl_FadeSymbolIn9()
		{
			if(this.crab9.x >=350)
			{
				this.removeEventListener('tick', crab_FadeInCbk9);
				console.log("ready"); 	
				this.flower.visible = true;
				return;	
			}
			this.crab9.x += 40;
		}
	}
	this.frame_9 = function() {
		this.stop();
		this.credit4.visible = false;
		
		//fade in
		this.photo4.x = -600;
		//fade in
		var crab_FadeInCbk = fl_FadeSymbolIn.bind(this);
		this.addEventListener('tick', crab_FadeInCbk);
		
		
		console.log("frame 10, real frame:"+this.currentFrame);
		
		//next
		var nextButtonEvent = this.nextBtn.addEventListener("click", fl_ClickToGoToAndPlayAtFrame.bind(this));
		
		
		
		//fade out
		var crab_FadeOutCbk4 = fl_FadeSymbolOut4.bind(this);
		
		//next
		function fl_ClickToGoToAndPlayAtFrame() {
			//if fade, delete this
			//this.gotoAndStop(this.currentFrame+1);
			
			this.nextBtn.removeEventListener("click", nextButtonEvent);
			
			//fade out
			this.addEventListener('tick', crab_FadeOutCbk4);
		
		}
		
		
		
		///credit
		var frequency = 3;
		
		stage.enableMouseOver(frequency);
		
		//hover over
		this.photo4.addEventListener("mouseover", fl_MouseOverHandler_2.bind(this));
		
		function fl_MouseOverHandler_2()
		{
			this.credit4.visible = true;
			console.log("mouseOver");
		}
		
		this.photo4.addEventListener("mouseout", fl_MouseOverHandler.bind(this));
		
		function fl_MouseOverHandler()
		{
			this.credit4.visible = false;
			console.log("mouseOut");
		}
		
		
		//fade in
		function fl_FadeSymbolIn()
		{
			if(this.photo4.x >=320)
			{
				this.removeEventListener('tick', crab_FadeInCbk);
				console.log("ready");
				this.photo4.alpha = 1; 
				this.speechBubble4.alpha = 1; 
				this.crab4.alpha = 1; 
				this.credit4.alpha = 1; 	
				return;	
			}
			this.photo4.x+= 40;
		}
		
		
		
		//fade out
		function fl_FadeSymbolOut4()
		{
			this.photo4.alpha-=0.05;
			this.crab4.alpha -= 0.05;
			this.text.visible = false;
			this.speechBubble4.alpha-=0.05;
			this.credit4.alpha-=0.05;
		
			if(this.crab4.alpha <= 0)
			{
				this.removeEventListener('tick', crab_FadeOutCbk4);
				console.log("CAN CHANGE");
				this.gotoAndStop(this.currentFrame+1);
				this.photo4.alpha = 1; 
				this.speechBubble4.alpha = 1; 
				this.crab4.alpha = 1; 
				this.credit4.alpha = 1; 
				return;	
			}
		}
	}
	this.frame_10 = function() {
		this.stop();
		this.credit7.visible = false;
		
		var nextButtonEvent = this.nextBtn.addEventListener("click", fl_ClickToGoToAndPlayAtFrame.bind(this));
		
		function fl_ClickToGoToAndPlayAtFrame() {
			this.gotoAndStop(this.currentFrame+1);
			this.nextBtn.removeEventListener("click", nextButtonEvent);
		}
		
		var frequency = 3;
		
		stage.enableMouseOver(frequency);
		
		//hover over
		this.photo7.addEventListener("mouseover", fl_MouseOverHandler_6.bind(this));
		
		function fl_MouseOverHandler_6()
		{
			this.credit7.visible = true;
			console.log("mouseOver");
		}
		
		this.photo7.addEventListener("mouseout", fl_MouseOverHandler4.bind(this));
		
		function fl_MouseOverHandler4()
		{
			this.credit7.visible = false;
			console.log("mouseOut");
		}
		
		
		
		//fade in
		this.photo7.x = 1100;
		var crab_FadeInCbk2 = fl_FadeSymbolIn2.bind(this);
		this.addEventListener('tick', crab_FadeInCbk2);
		
		
		//fade in
		function fl_FadeSymbolIn2()
		{
			if(this.photo7.x <=720)
			{
				this.removeEventListener('tick', crab_FadeInCbk2);
				console.log("ready");
			
				return;	
			}
			this.photo7.x-= 40;
		}
	}
	this.frame_11 = function() {
		this.stop();
		
		
		var nextButtonEvent = this.nextBtn.addEventListener("click", fl_ClickToGoToAndPlayAtFrame.bind(this));
		//get input box text
		
		function init() {
			infoContainer2 = new createjs.Container();
			stage.addChild(infoContainer);
		
			button = this.nextBtn;
			infoContainer.addChild(button);
		
			inputField2 = this.answer_box2;
			infoContainer2.addChild(inputField2);
			createjs.Tween.get().wait(100).call(setCaret);
			
		}
		
		function setCaret() {
			//document.getElementById('answer_box2').focus(); //highlight the textfiel
			//document.getElementById('answer_box2').maxLength = "70";
		}
		
		function getValue() {
			crabPatternAns = document.getElementById('answer_box2').value;
			console.log(crabPatternAns);
			
		}
		
		
		init();
		
			
		//fade out
		var crab_FadeOutCbk5 = fl_FadeSymbolOut5.bind(this);
		
		//next
		function fl_ClickToGoToAndPlayAtFrame() {
			getValue();
			//this.gotoAndStop(this.currentFrame+1);
			this.nextBtn.removeEventListener("click", nextButtonEvent);
			//fade out
			this.addEventListener('tick', crab_FadeOutCbk5);
		}
		
		
		
		//fade out
		function fl_FadeSymbolOut5()
		{
			this.photo12.alpha-=0.05;
			 this.crab12.alpha -= 0.05;
			//this.text.visible = false;
			this.speechBubble12.alpha-=0.05;
			//this.credit4.alpha-=0.05;
		
			if(this.crab12.alpha <= 0)
			{
				this.removeEventListener('tick', crab_FadeOutCbk5);
				console.log("CAN CHANGE");
				this.gotoAndStop(this.currentFrame+1);
				this.photo12.alpha = 1; 
				this.speechBubble12.alpha = 1; 
				this.crab12.alpha = 1; 
				//this.credit4.alpha = 1; 
				return;	
			}
		}
	}
	this.frame_12 = function() {
		this.stop();
		
		
		var nextButtonEvent = this.nextBtn.addEventListener("click", fl_ClickToGoToAndPlayAtFrame.bind(this));
		
		function fl_ClickToGoToAndPlayAtFrame() {
			this.gotoAndStop(this.currentFrame+1);
			this.nextBtn.removeEventListener("click", nextButtonEvent);
		
		}
		
		
		
		//fade in
		this.crab13.x = -400;
		var crab_FadeInCbk = fl_FadeSymbolIn.bind(this);
		this.addEventListener('tick', crab_FadeInCbk);
		
		
		
		
		//fade in
		function fl_FadeSymbolIn()
		{
			if(this.crab13.x >=350)
			{
				this.removeEventListener('tick', crab_FadeInCbk);
				console.log("ready"); 	
				return;	
			}
			this.crab13.x += 40;
		}
	}
	this.frame_13 = function() {
		this.stop();
		this.credit5.visible = false;
		
		var nextButtonEvent = this.nextBtn.addEventListener("click", fl_ClickToGoToAndPlayAtFrame.bind(this));
		
		function fl_ClickToGoToAndPlayAtFrame() {
			this.gotoAndStop(this.currentFrame+1);
			this.nextBtn.removeEventListener("click", nextButtonEvent);
		
		}
		
		
		
		
		
		
		var frequency = 3;
		
		stage.enableMouseOver(frequency);
		
		//hover over
		this.photo5.addEventListener("mouseover", fl_MouseOverHandler_2.bind(this));
		
		function fl_MouseOverHandler_2()
		{
			this.credit5.visible = true;
			console.log("mouseOver");
		}
		
		this.photo5.addEventListener("mouseout", fl_MouseOverHandler.bind(this));
		
		function fl_MouseOverHandler()
		{
			this.credit5.visible = false;
			console.log("mouseOut");
		}
		
		
		//fade in
		this.photo5.x = 1100;
		var crab_FadeInCbk = fl_FadeSymbolIn.bind(this);
		this.addEventListener('tick', crab_FadeInCbk);
		
		
		//fade in
		function fl_FadeSymbolIn()
		{
			if(this.photo5.x <=720)
			{
				this.removeEventListener('tick', crab_FadeInCbk);
				console.log("ready");
			
				return;	
			}
			this.photo5.x-= 40;
		}
	}
	this.frame_14 = function() {
		this.stop();
		this.credit6.visible = false;
		
		var nextButtonEvent = this.nextBtn.addEventListener("click", fl_ClickToGoToAndPlayAtFrame.bind(this));
		//get input box text
		
		function init() {
			infoContainer = new createjs.Container();
			stage.addChild(infoContainer);
		
			button = this.nextBtn;
			infoContainer.addChild(button);
		
			inputField3 = this.answer_box3;
			infoContainer.addChild(inputField3);
			
			createjs.Tween.get().wait(100).call(setCaret);
			
		}
		
		function setCaret() {
			///document.getElementById('answer_box3').focus(); //highlight the textfield
			//document.getElementById('answer_box2').maxLength = "70";
		}
		
		function getValue() {
			snailDifferenceAns = document.getElementById('answer_box3').value;
			console.log(snailDifferenceAns);
		}
		
		function fl_ClickToGoToAndPlayAtFrame() {
			getValue();
			this.gotoAndStop(this.currentFrame+1);
			this.nextBtn.removeEventListener("click", nextButtonEvent);
		}
		
		
		//credit
		var frequency = 3;
		
		stage.enableMouseOver(frequency);
		
		//hover over
		this.photo6.addEventListener("mouseover", fl_MouseOverHandler_2.bind(this));
		
		function fl_MouseOverHandler_2()
		{
			this.credit6.visible = true;
			console.log("mouseOver");
		}
		
		this.photo6.addEventListener("mouseout", fl_MouseOverHandler.bind(this));
		
		function fl_MouseOverHandler()
		{
			this.credit6.visible = false;
			console.log("mouseOut");
		}
		
		
		
		
		init();
	}
	this.frame_15 = function() {
		this.stop();
		this.credit16.visible = false;
		
		var nextButtonEvent = this.nextBtn.addEventListener("click", fl_ClickToGoToAndPlayAtFrame.bind(this));
		
		function fl_ClickToGoToAndPlayAtFrame() {
			this.gotoAndStop(this.currentFrame+2);
			this.nextBtn.removeEventListener("click", nextButtonEvent);
		}
		
		
		
		
		
		//credit
		var frequency = 3;
		
		stage.enableMouseOver(frequency);
		
		//hover over
		this.photo16.addEventListener("mouseover", fl_MouseOverHandler_2.bind(this));
		
		function fl_MouseOverHandler_2()
		{
			this.credit16.visible = true;
			console.log("mouseOver");
		}
		
		this.photo16.addEventListener("mouseout", fl_MouseOverHandler.bind(this));
		
		function fl_MouseOverHandler()
		{
			this.credit16.visible = false;
			console.log("mouseOut");
		}
	}
	this.frame_16 = function() {
		this.stop();
	}
	this.frame_24 = function() {
		this.stop();
		var root2= this;
		
		console.log("frame 8, real frame:"+this.currentFrame);
		var backBtnEvent2 = this.backBtn2.addEventListener("click", BackToTitle.bind(this));
		
		function BackToTitle()
		{
			console.log("pressBack");
			root2.gotoAndStop(1); 
			this.backBtn2.removeEventListener("click",backBtnEvent2);
			this.backBtn2.stop();
		}
		
		
		
		//var nextBtnEvent = this.nextBtn.addEventListener("click", GoToNextPage.bind(this));
		
		function GoToNextPage()
		{
			
			//this.nextBtn.removeEventListener("click", nextBtnEvent);
			root2.gotoAndStop(25);
			this.nextBtn.stop();
		}
		
		this.stop();
	}
	this.frame_25 = function() {
		this.stop();
		var root3= this;
		
		console.log("frame 8, real frame:"+this.currentFrame);
		var backBtnEvent3 = this.backBtn2.addEventListener("click", BackToTitle.bind(this));
		
		function BackToTitle()
		{
			console.log("pressBack");
			this.backBtn2.removeEventListener("click",backBtnEvent3);
			root3.gotoAndStop(1); 
			this.backBtn2.stop();
		}
		
		
		
		var lastBtnEvent = this.lastBtn.addEventListener("click", GoToLastPage.bind(this));
		
		function GoToLastPage()
		{
			root3.gotoAndStop(24);
			this.lastBtn.removeEventListener("click", lastBtnEvent);
			this.lastBtn.stop();
		}
		
		//this.stop();
	}

	// actions tween:
	this.timeline.addTween(cjs.Tween.get(this).call(this.frame_0).wait(1).call(this.frame_1).wait(1).call(this.frame_2).wait(1).call(this.frame_3).wait(1).call(this.frame_4).wait(1).call(this.frame_5).wait(1).call(this.frame_6).wait(1).call(this.frame_7).wait(1).call(this.frame_8).wait(1).call(this.frame_9).wait(1).call(this.frame_10).wait(1).call(this.frame_11).wait(1).call(this.frame_12).wait(1).call(this.frame_13).wait(1).call(this.frame_14).wait(1).call(this.frame_15).wait(1).call(this.frame_16).wait(8).call(this.frame_24).wait(1).call(this.frame_25).wait(3));

	// name
	this.instance = new lib.Symbol2("synched",0);
	this.instance.setTransform(514.45,297.4,1,1,0,0,0,368.5,95.6);

	this.text = new cjs.Text("ok", "44px 'Ubuntu Medium'", "#156074");
	this.text.textAlign = "center";
	this.text.lineHeight = 51;
	this.text.lineWidth = 136;
	this.text.parent = this;
	this.text.setTransform(505.5,474.8);

	this.okBtn = new lib.generalBtn_();
	this.okBtn.name = "okBtn";
	this.okBtn.setTransform(-26.9,9.25);
	this.okBtn.alpha = 0.8594;
	new cjs.ButtonHelper(this.okBtn, 0, 1, 2);

	this.answer_box = new lib.an_TextInput({'id': 'answer_box', 'value':'', 'disabled':false, 'visible':true, 'class':'ui-textinput'});

	this.answer_box.name = "answer_box";
	this.answer_box.setTransform(512.85,364.3,4.3425,4.7568,0,0,0,50,10.8);

	this.instance_1 = new lib.an_CSS({'id': 'instance_1', 'href':'assets/styles.css'});

	this.instance_1.setTransform(909.4,120.05,1,1,0,0,0,50,11);

	this.timeline.addTween(cjs.Tween.get({}).to({state:[]}).to({state:[{t:this.instance_1},{t:this.answer_box},{t:this.okBtn},{t:this.text},{t:this.instance}]},2).to({state:[]},1).wait(25));

	// nextButton
	this.instance_2 = new lib.CachedBmp_2();
	this.instance_2.setTransform(418.4,548.15,0.5,0.5);

	this.creditBtn = new lib.Btn();
	this.creditBtn.name = "creditBtn";
	this.creditBtn.setTransform(508.75,574.55,0.7526,0.8758,0,0,0,0.1,0.1);
	this.creditBtn.alpha = 0.9219;
	new cjs.ButtonHelper(this.creditBtn, 0, 1, 2, false, new lib.Btn(), 3);

	this.instance_3 = new lib.CachedBmp_1();
	this.instance_3.setTransform(418.4,429.45,0.5,0.5);

	this.StartBtn = new lib.Btn();
	this.StartBtn.name = "StartBtn";
	this.StartBtn.setTransform(510.6,460.25,0.742,0.8938,0,0,0,0.1,0);
	this.StartBtn.alpha = 0.8594;
	new cjs.ButtonHelper(this.StartBtn, 0, 1, 2, false, new lib.Btn(), 3);

	this.nextBtn = new lib.nextPageButton();
	this.nextBtn.name = "nextBtn";
	this.nextBtn.setTransform(912.9,655,0.6685,0.6685,0,0,0,0.1,-1.4);
	this.nextBtn._off = true;
	new cjs.ButtonHelper(this.nextBtn, 0, 1, 2);

	this.nextButton = new lib.nextPageButton();
	this.nextButton.name = "nextButton";
	this.nextButton.setTransform(914.85,656.25,0.6916,0.6916);
	new cjs.ButtonHelper(this.nextButton, 0, 1, 2);

	this.lastBtn = new lib.nextPageButton();
	this.lastBtn.name = "lastBtn";
	this.lastBtn.setTransform(520.05,627.85,0.2665,0.2605,0,0,180,2,4.4);
	new cjs.ButtonHelper(this.lastBtn, 0, 1, 2);

	this.timeline.addTween(cjs.Tween.get({}).to({state:[]}).to({state:[{t:this.StartBtn},{t:this.instance_3},{t:this.creditBtn},{t:this.instance_2}]},1).to({state:[]},1).to({state:[{t:this.nextBtn}]},1).to({state:[{t:this.nextButton}]},2).to({state:[]},1).to({state:[{t:this.nextBtn}]},2).to({state:[{t:this.nextBtn}]},1).to({state:[{t:this.nextBtn}]},1).to({state:[{t:this.nextBtn}]},1).to({state:[{t:this.nextBtn}]},1).to({state:[{t:this.nextBtn}]},1).to({state:[{t:this.nextBtn}]},1).to({state:[{t:this.nextBtn}]},1).to({state:[{t:this.nextBtn}]},1).to({state:[{t:this.nextBtn}]},8).to({state:[{t:this.lastBtn}]},1).wait(3));
	this.timeline.addTween(cjs.Tween.get(this.nextBtn).wait(3).to({_off:false},0).to({_off:true},2).wait(3).to({_off:false,scaleX:0.612,scaleY:0.612,x:902.95,y:648.6},0).wait(1).to({x:921.7,y:658.2},0).wait(1).to({x:908.25,y:658.95},0).wait(1).to({x:910.15,y:655.15},0).wait(1).to({x:902.95,y:648.6},0).wait(2).to({regX:0.5,regY:-1.1,scaleX:0.5804,scaleY:0.5804,x:930.3,y:674.05},0).wait(1).to({regX:0.1,regY:-1.4,scaleX:0.612,scaleY:0.612,x:902.95,y:664.6},0).wait(1).to({x:917.8,y:671.3},0).wait(8).to({regX:2,regY:4.4,scaleX:0.2665,scaleY:0.2605,x:520.05,y:627.85},0).to({_off:true},1).wait(3));

	// video
	this.instance_4 = new lib.an_Video({'id': 'instance_4', 'src':'videos/Video%20Version%202-1.mp4', 'autoplay':true, 'controls':true, 'muted':false, 'loop':true, 'poster':'', 'preload':true, 'class':'video'});

	this.instance_4.setTransform(512.25,382.35,2.6172,1.9629,0,0,0,200,150.3);

	this.skipVideoBtn = new lib.btn2();
	this.skipVideoBtn.name = "skipVideoBtn";
	this.skipVideoBtn.setTransform(920.75,59.15,0.594,0.594,0,0,0,0.1,0.1);
	new cjs.ButtonHelper(this.skipVideoBtn, 0, 1, 1);

	this.instance_5 = new lib.CachedBmp_203();
	this.instance_5.setTransform(-11.7,-2.45,0.5,0.5);

	this.timeline.addTween(cjs.Tween.get({}).to({state:[{t:this.instance_5},{t:this.skipVideoBtn},{t:this.instance_4}]}).to({state:[]},1).wait(27));

	// text
	this.text_1 = new cjs.Text("The Upper Shore environment only becomes fully submerged for a short period of time at the highest high tide. ", "24px 'Montserrat'", "#063034");
	this.text_1.textAlign = "center";
	this.text_1.lineHeight = 35;
	this.text_1.lineWidth = 250;
	this.text_1.parent = this;
	this.text_1.setTransform(217.75,160.7);
	this.text_1._off = true;

	this.text_2 = new lib.F5text();
	this.text_2.name = "text_2";
	this.text_2.setTransform(209.15,303.45,0.9604,0.9604,0,0,0,127.2,153.6);

	this.text_3 = new lib.frame5Text();
	this.text_3.name = "text_3";
	this.text_3.setTransform(809.3,315.8,1,1,0,0,0,140.4,132.6);

	this.instance_6 = new lib.CachedBmp_4();
	this.instance_6.setTransform(458.6,453.1,0.5,0.5);

	this.instance_7 = new lib.Symbol7();
	this.instance_7.setTransform(614.1,287.75,1,1,0,0,0,248.9,143.8);

	this.instance_8 = new lib.an_CSS({'id': 'instance_8', 'href':'assets/style3.css'});

	this.instance_8.setTransform(933.4,49.1,1,1,0,0,0,50,11);

	this.answer_box3 = new lib.inputField_();
	this.answer_box3.name = "answer_box3";
	this.answer_box3.setTransform(619.25,577.15,5.0965,2.9539,0,0,0,553.4,220.7);

	this.instance_9 = new lib.CachedBmp_7();
	this.instance_9.setTransform(233.7,106.1,0.5,0.5);

	this.instance_10 = new lib.CachedBmp_6();
	this.instance_10.setTransform(600.3,106.4,0.5,0.5);

	this.instance_11 = new lib.CachedBmp_5();
	this.instance_11.setTransform(343.75,504.2,0.5,0.5);

	this.instance_12 = new lib.Symbol1("synched",0);
	this.instance_12.setTransform(514.6,386.3,1,1,0,0,0,314.6,125.9);

	this.instance_13 = new lib.CachedBmp_8();
	this.instance_13.setTransform(129.7,143,0.5,0.5);

	this.instance_14 = new lib.CachedBmp_9();
	this.instance_14.setTransform(143.65,143.75,0.5,0.5);

	this.timeline.addTween(cjs.Tween.get({}).to({state:[]}).to({state:[{t:this.text_1}]},3).to({state:[{t:this.text_2}]},1).to({state:[{t:this.text_3}]},1).to({state:[{t:this.text_1}]},1).to({state:[{t:this.text_1}]},1).to({state:[{t:this.text_1}]},1).to({state:[{t:this.text_1}]},1).to({state:[{t:this.text_1}]},1).to({state:[{t:this.text_1},{t:this.instance_6}]},1).to({state:[{t:this.instance_7}]},1).to({state:[{t:this.text_1}]},1).to({state:[{t:this.text_1},{t:this.instance_11},{t:this.instance_10},{t:this.instance_9},{t:this.answer_box3},{t:this.instance_8}]},1).to({state:[]},1).to({state:[{t:this.instance_12}]},1).to({state:[{t:this.instance_13}]},8).to({state:[{t:this.instance_14}]},1).wait(3));
	this.timeline.addTween(cjs.Tween.get(this.text_1).wait(3).to({_off:false},0).to({_off:true},1).wait(2).to({_off:false,x:253.9,y:207.65,text:"What animal creates these patterns?",font:"31px 'Montserrat'",color:"#000000",lineHeight:44.75,lineWidth:248},0).wait(1).to({x:619.9,y:213.8,text:"Wrong Answer\nTry Again!",font:"bold 33px 'Montserrat'",color:"#16454E",lineHeight:47.5,lineWidth:263},0).wait(1).to({x:682.95,y:172.75,text:"Yes! \nIt's a crab",font:"bold 41px 'Montserrat'",color:"#0A3337",lineHeight:58.5,lineWidth:275},0).wait(1).to({x:805.95,y:163.85,text:"Let's see what's hiding in the burrow…",font:"31px 'Montserrat Medium'",lineHeight:44.75,lineWidth:231},0).wait(1).to({x:214,y:133.4,text:"It's a \nSand Bubbler Crab \n(Scopimera globose). \nThese are small crabs that live on sandy beaches in the tropical Indo-Pacific region.",font:"24px 'Montserrat Medium'",color:"#0C2D41",lineHeight:35.1,lineWidth:266},0).wait(1).to({scaleX:1.0299,scaleY:1.0299,x:243.3,y:180.65,text:"How do you think the sand bubbler crab created this pattern?",font:"29px 'Montserrat Medium'",color:"#000000",lineHeight:42,lineWidth:272},0).to({_off:true},1).wait(1).to({_off:false,scaleX:1,scaleY:1,x:186.55,y:189.8,text:"Look! There are other animals as well as crabs living here! \nLet's have a closer look…",font:"24px 'Montserrat Medium'",lineHeight:35.1,lineWidth:217},0).wait(1).to({scaleX:0.7345,scaleY:0.7345,x:467.3,y:415.0453,text:"These snails look alike but are not the same species! Can you spot at least 3 differences?",font:"25px 'Montserrat Medium'",lineHeight:36.5,lineWidth:573},0).to({_off:true},1).wait(13));

	// mcAnsT
	this.text_4 = new cjs.Text("D) A Snail", "bold 24px 'Montserrat'", "#0A3337");
	this.text_4.textAlign = "center";
	this.text_4.lineHeight = 35;
	this.text_4.lineWidth = 192;
	this.text_4.parent = this;
	this.text_4.setTransform(824.1,631.45);

	this.text_5 = new cjs.Text("C) A Bird", "bold 24px 'Montserrat'", "#0A3337");
	this.text_5.textAlign = "center";
	this.text_5.lineHeight = 35;
	this.text_5.lineWidth = 192;
	this.text_5.parent = this;
	this.text_5.setTransform(562.7,631.45);

	this.text_6 = new cjs.Text("B) A Crab", "bold 24px 'Montserrat'", "#0A3337");
	this.text_6.textAlign = "center";
	this.text_6.lineHeight = 35;
	this.text_6.lineWidth = 192;
	this.text_6.parent = this;
	this.text_6.setTransform(824.1,541.5);

	this.text_7 = new cjs.Text("A) A Fish", "bold 24px 'Montserrat'", "#0A3337");
	this.text_7.textAlign = "center";
	this.text_7.lineHeight = 35;
	this.text_7.lineWidth = 192;
	this.text_7.parent = this;
	this.text_7.setTransform(562.7,541.5);

	this.timeline.addTween(cjs.Tween.get({}).to({state:[]}).to({state:[{t:this.text_7},{t:this.text_6},{t:this.text_5},{t:this.text_4}]},6).to({state:[]},1).wait(21));

	// mcAnsBox
	this.DBtn = new lib.mcAnsBox();
	this.DBtn.name = "DBtn";
	this.DBtn.setTransform(823,649.1,0.6313,0.79,0,0,0,0.2,0.2);
	new cjs.ButtonHelper(this.DBtn, 0, 1, 2);

	this.BBtn = new lib.mcAnsBox();
	this.BBtn.name = "BBtn";
	this.BBtn.setTransform(823,559.85,0.6313,0.79,0,0,0,0.2,0.1);
	new cjs.ButtonHelper(this.BBtn, 0, 1, 2);

	this.CBtn = new lib.mcAnsBox();
	this.CBtn.name = "CBtn";
	this.CBtn.setTransform(564.65,649.1,0.6313,0.79,0,0,0,0.1,0.2);
	new cjs.ButtonHelper(this.CBtn, 0, 1, 2);

	this.ABtn = new lib.mcAnsBox();
	this.ABtn.name = "ABtn";
	this.ABtn.setTransform(564.65,559.65,0.6313,0.79,0,0,0,0.1,0.1);
	new cjs.ButtonHelper(this.ABtn, 0, 1, 2);

	this.instance_15 = new lib.an_CSS({'id': 'instance_15', 'href':'assets/style2.css'});

	this.instance_15.setTransform(944.7,72.3,1,1,0,0,0,50,11);

	this.answer_box2 = new lib.inputField__1();
	this.answer_box2.name = "answer_box2";
	this.answer_box2.setTransform(730.55,522.35,4.9049,2.6727,0,0,0,553.4,220.9);

	this.timeline.addTween(cjs.Tween.get({}).to({state:[]}).to({state:[{t:this.ABtn},{t:this.CBtn},{t:this.BBtn},{t:this.DBtn}]},6).to({state:[]},1).to({state:[{t:this.answer_box2},{t:this.instance_15}]},4).to({state:[]},1).wait(16));

	// hCrabAnim
	this.instance_16 = new lib.movingHappyCrab();
	this.instance_16.setTransform(197.8,579.8,0.3703,0.3703,0,0,0,450,126.9);

	this.crab = new lib.movingHappyCrab();
	this.crab.name = "crab";
	this.crab.setTransform(199.6,592.45,0.3833,0.3833,0,0,0,450.4,127.5);

	this.crab2 = new lib.movingHappyCrab();
	this.crab2.name = "crab2";
	this.crab2.setTransform(421.8,442.6,0.364,0.3537,0,0,180,1266.4,-155.7);

	this.instance_17 = new lib.QuestionCrabMove();
	this.instance_17.setTransform(205.85,563.65,0.6553,0.6553,0,0,0,13.6,3.2);

	this.instance_18 = new lib.movingSadCrab();
	this.instance_18.setTransform(433.05,521.9,0.583,0.583,0,0,0,-3,-1);

	this.flower = new lib.flowers();
	this.flower.name = "flower";
	this.flower.setTransform(402.9,379.75,1.1226,1.1226,0,0,0,219.7,80);

	this.crab9 = new lib.movingHappyCrab();
	this.crab9.name = "crab9";
	this.crab9.setTransform(388.25,537.15,0.5063,0.5063,0,0,0,450.7,127.5);

	this.crab4 = new lib.movingHappyCrab();
	this.crab4.name = "crab4";
	this.crab4.setTransform(722.95,533.65,0.3945,0.3861,0,0,180,450.2,163.8);

	this.crab12 = new lib.QuestionCrabMove();
	this.crab12.name = "crab12";
	this.crab12.setTransform(241.75,550.5,0.6693,0.6693,0,0,0,13.7,3.2);

	this.crab13 = new lib.movingHappyCrab();
	this.crab13.name = "crab13";
	this.crab13.setTransform(250.1,544,0.4377,0.4377,0,0,0,450.2,127.2);

	this.backBtn2 = new lib.BackBtn();
	this.backBtn2.name = "backBtn2";
	this.backBtn2.setTransform(128.95,689.05,0.7836,0.7836);
	new cjs.ButtonHelper(this.backBtn2, 0, 1, 2);

	this.timeline.addTween(cjs.Tween.get({}).to({state:[]}).to({state:[{t:this.instance_16}]},3).to({state:[{t:this.crab}]},1).to({state:[{t:this.crab2}]},1).to({state:[{t:this.instance_17}]},1).to({state:[{t:this.instance_18}]},1).to({state:[{t:this.crab9},{t:this.flower}]},1).to({state:[{t:this.crab4,p:{regX:450.2,regY:163.8,scaleX:0.3945,scaleY:0.3861,skewY:180,x:722.95,y:533.65}}]},1).to({state:[{t:this.crab4,p:{regX:450,regY:127,scaleX:0.3767,scaleY:0.3767,skewY:0,x:200.15,y:595.65}}]},1).to({state:[{t:this.crab12,p:{regX:13.7,regY:3.2,scaleX:0.6693,scaleY:0.6693,x:241.75,y:550.5}}]},1).to({state:[{t:this.crab13,p:{regX:450.2,regY:127.2,scaleX:0.4377,scaleY:0.4377,x:250.1,y:544}}]},1).to({state:[{t:this.crab13,p:{regX:450.1,regY:127,scaleX:0.4181,scaleY:0.4181,x:200.05,y:589.05}}]},1).to({state:[{t:this.crab12,p:{regX:13.5,regY:3,scaleX:0.612,scaleY:0.612,x:205.75,y:574.65}}]},1).to({state:[{t:this.crab13,p:{regX:449.9,regY:127,scaleX:0.3834,scaleY:0.3834,x:205.7,y:610.05}}]},1).to({state:[]},1).to({state:[{t:this.backBtn2}]},8).to({state:[{t:this.backBtn2}]},1).wait(3));

	// Title
	this.instance_19 = new lib.title_move();
	this.instance_19.setTransform(519.6,315.5,1,1,0,0,0,424.6,174.5);

	this.instance_20 = new lib.bubble2_move();
	this.instance_20.setTransform(907,396,1,1,0,0,0,50,44);

	this.instance_21 = new lib.bubble1_move();
	this.instance_21.setTransform(66,73);

	this.instance_22 = new lib.clam_move();
	this.instance_22.setTransform(190.1,643.8,1,1,0,0,0,187.1,131.8);

	this.instance_23 = new lib.crab_shadow_1();
	this.instance_23.setTransform(826.35,623.75,1,1,0,0,0,215.2,174.3);

	this.instance_24 = new lib.CachedBmp_11();
	this.instance_24.setTransform(239.2,18.3,0.5,0.5);

	this.instance_25 = new lib.CachedBmp_12();
	this.instance_25.setTransform(224.2,27.8,0.5,0.5);

	this.instance_26 = new lib.CachedBmp_13();
	this.instance_26.setTransform(239.2,18.3,0.5,0.5);

	this.instance_27 = new lib.CachedBmp_12copy2();
	this.instance_27.setTransform(224.2,27.8,0.5,0.5);

	this.instance_28 = new lib.CachedBmp_15();
	this.instance_28.setTransform(226.05,32.8,0.5,0.5);

	this.instance_29 = new lib.CachedBmp_14();
	this.instance_29.setTransform(115.85,41.05,0.5,0.5);

	this.timeline.addTween(cjs.Tween.get({}).to({state:[]}).to({state:[{t:this.instance_23},{t:this.instance_22},{t:this.instance_21},{t:this.instance_20},{t:this.instance_19}]},1).to({state:[]},1).to({state:[{t:this.instance_25},{t:this.instance_24}]},1).to({state:[{t:this.instance_27},{t:this.instance_26}]},11).to({state:[]},2).to({state:[{t:this.instance_29},{t:this.instance_28}]},8).wait(4));

	// border
	this.instance_30 = new lib.whiteBorder_thin_b();

	this.instance_31 = new lib.border_waterCol();
	this.instance_31.setTransform(-7,-10,0.9375,0.9436);

	this.instance_32 = new lib.flame_curve();
	this.instance_32.setTransform(-18,-16,0.9799,0.9871);
	this.instance_32._off = true;

	this.timeline.addTween(cjs.Tween.get({}).to({state:[{t:this.instance_30}]}).to({state:[{t:this.instance_31}]},1).to({state:[{t:this.instance_32}]},2).to({state:[{t:this.instance_32}]},11).to({state:[{t:this.instance_32}]},2).to({state:[{t:this.instance_32}]},8).wait(4));
	this.timeline.addTween(cjs.Tween.get(this.instance_32).wait(3).to({_off:false},0).wait(25));

	// speechBubble
	this.instance_33 = new lib.Symbol3();
	this.instance_33.setTransform(219.2,290.85,1,1,0,0,0,242.2,242.2);
	this.instance_33.shadow = new cjs.Shadow("rgba(47,47,47,0.498)",0,7,11);

	this.speechBubble = new lib.speechBubble_1();
	this.speechBubble.name = "speechBubble";
	this.speechBubble.setTransform(229.45,293.95,0.9666,1.008,0,0,0,195.9,221.6);
	this.speechBubble.shadow = new cjs.Shadow("rgba(102,102,102,0.498)",0,6,4);

	this.speechBubble2 = new lib.frame6SB();
	this.speechBubble2.name = "speechBubble2";
	this.speechBubble2.setTransform(797.45,338.3,0.909,1,0,0,0,195.6,159.3);
	this.speechBubble2.shadow = new cjs.Shadow("rgba(102,102,102,0.498)",0,7,11);

	this.speechBubble3 = new lib.frame6SB();
	this.speechBubble3.name = "speechBubble3";
	this.speechBubble3.setTransform(234.6,315.45,0.8786,1,0,0,0,195.7,159.3);
	this.speechBubble3.shadow = new cjs.Shadow("rgba(102,102,102,0.459)",0,7,11);

	this.instance_34 = new lib.Symbol4();
	this.instance_34.setTransform(628.6,284.3,1,1,0,0,0,195.6,159.3);
	this.instance_34.shadow = new cjs.Shadow("rgba(102,102,102,1)",0,7,11);

	this.speechBubble3_2 = new lib.frame9SB();
	this.speechBubble3_2.name = "speechBubble3_2";
	this.speechBubble3_2.setTransform(678.65,255.75,0.9529,0.9529,0,0,0,195.6,159.3);
	this.speechBubble3_2.shadow = new cjs.Shadow("rgba(102,102,102,0.518)",0,7,11);

	this.speechBubble4 = new lib.frame10SB();
	this.speechBubble4.name = "speechBubble4";
	this.speechBubble4.setTransform(811.75,272.05,0.8357,1.0388,0,0,0,195.6,159.4);
	this.speechBubble4.shadow = new cjs.Shadow("rgba(84,72,67,0.459)",0,7,11);

	this.instance_35 = new lib.Symbol5();
	this.instance_35.setTransform(206.85,301.85,1,1,0,0,0,208.9,221.2);
	this.instance_35.shadow = new cjs.Shadow("rgba(50,50,50,0.498)",0,7,11);

	this.speechBubble12 = new lib.Symbol6();
	this.speechBubble12.name = "speechBubble12";
	this.speechBubble12.setTransform(244.2,277.3,1,1,0,0,0,275.2,204.3);
	this.speechBubble12.shadow = new cjs.Shadow("rgba(102,102,102,0.498)",0,7,11);

	this.instance_36 = new lib.Symbol8();
	this.instance_36.setTransform(625.8,278.1,1,1,0,0,0,456.8,235.1);
	this.instance_36.shadow = new cjs.Shadow("rgba(102,102,102,0.498)",0,7,11);

	this.instance_37 = new lib.Symbol11();
	this.instance_37.setTransform(194.3,311,1,1,0,0,0,226.3,212);
	this.instance_37.shadow = new cjs.Shadow("rgba(102,102,102,0.498)",0,7,11);

	this.instance_38 = new lib.Symbol10();
	this.instance_38.setTransform(468.4,446.7,1,1,0,0,0,238.4,65.7);
	this.instance_38.shadow = new cjs.Shadow("rgba(102,102,102,0.498)",0,7,11);

	this.text_8 = new cjs.Text("", "18px 'MicrosoftJhengHeiBold'");
	this.text_8.textAlign = "center";
	this.text_8.lineHeight = 26;
	this.text_8.lineWidth = 100;
	this.text_8.parent = this;
	this.text_8.setTransform(-420.35,-102.4);

	this.text_9 = new cjs.Text("There is actually \na total of four visual differences between these two species. These can be seen when you compare the ends of their shells, the shoulder, the opening and the colouration", "18px 'Montserrat Medium'", "#0D3147");
	this.text_9.textAlign = "center";
	this.text_9.lineHeight = 27;
	this.text_9.lineWidth = 208;
	this.text_9.parent = this;
	this.text_9.setTransform(192.05,156.7,1.0927,1.0927);

	this.instance_39 = new lib.Symbol9();
	this.instance_39.setTransform(195.15,311.7,1,1,0,0,0,240.2,241.6);
	this.instance_39.shadow = new cjs.Shadow("rgba(102,102,102,0.498)",0,7,11);

	this.timeline.addTween(cjs.Tween.get({}).to({state:[]}).to({state:[{t:this.instance_33}]},3).to({state:[{t:this.speechBubble}]},1).to({state:[{t:this.speechBubble2}]},1).to({state:[{t:this.speechBubble3}]},1).to({state:[{t:this.instance_34}]},1).to({state:[{t:this.speechBubble3_2}]},1).to({state:[{t:this.speechBubble4}]},1).to({state:[{t:this.instance_35}]},1).to({state:[{t:this.speechBubble12}]},1).to({state:[{t:this.instance_36}]},1).to({state:[{t:this.instance_37}]},1).to({state:[{t:this.instance_38}]},1).to({state:[{t:this.instance_39},{t:this.text_9},{t:this.text_8}]},1).to({state:[]},1).wait(12));

	// Layer_1
	this.instance_40 = new lib.rainDrops();
	this.instance_40.setTransform(299.4,326.45,1,1,0,0,0,48,54);

	this.instance_41 = new lib.flowers();
	this.instance_41.setTransform(226.85,508,0.8386,0.8386,0,0,0,223.7,74.5);

	this.timeline.addTween(cjs.Tween.get({}).to({state:[]}).to({state:[{t:this.instance_40}]},7).to({state:[]},1).to({state:[{t:this.instance_41}]},2).to({state:[]},1).wait(17));

	// backBtn
	this.backBtn = new lib.BackBtn();
	this.backBtn.name = "backBtn";
	this.backBtn.setTransform(879.9,655.85);
	this.backBtn._off = true;
	new cjs.ButtonHelper(this.backBtn, 0, 1, 2);

	this.timeline.addTween(cjs.Tween.get(this.backBtn).wait(7).to({_off:false},0).to({_off:true},1).wait(20));

	// credits
	this.credit = new lib.credit1();
	this.credit.name = "credit";
	this.credit.setTransform(865.5,540.45,1,1,0,0,0,142.8,14.2);

	this.credit2 = new lib.credit2();
	this.credit2.name = "credit2";
	this.credit2.setTransform(206.25,523.15,1,1,0,0,0,13.7,29.1);

	this.credit2_2 = new lib.credit2();
	this.credit2_2.name = "credit2_2";
	this.credit2_2.setTransform(854.05,439.15,1,1,0,0,0,13.7,29.1);

	this.credit4 = new lib.credit3();
	this.credit4.name = "credit4";
	this.credit4.setTransform(209.15,512.95,1,1,0,0,0,164.2,39.6);

	this.credit7 = new lib.credit4();
	this.credit7.name = "credit7";
	this.credit7.setTransform(846.1,490.4,1,1,0,0,0,154.1,47);

	this.credit5 = new lib.credit5();
	this.credit5.name = "credit5";
	this.credit5.setTransform(834.15,521.15,1,1,0,0,0,162.8,46.3);

	this.credit6 = new lib.credit6();
	this.credit6.name = "credit6";
	this.credit6.setTransform(863.45,370.95,1,1,0,0,0,126,36.5);

	this.credit16 = new lib.credit16();
	this.credit16.name = "credit16";
	this.credit16.setTransform(882.7,521.3,1,1,0,0,0,118.7,39.7);

	this.timeline.addTween(cjs.Tween.get({}).to({state:[]}).to({state:[{t:this.credit,p:{x:865.5,y:540.45}}]},3).to({state:[{t:this.credit,p:{x:871.8,y:542.75}}]},1).to({state:[{t:this.credit2}]},1).to({state:[{t:this.credit2_2}]},1).to({state:[]},1).to({state:[{t:this.credit4}]},2).to({state:[{t:this.credit7}]},1).to({state:[]},1).to({state:[{t:this.credit5}]},2).to({state:[{t:this.credit6}]},1).to({state:[{t:this.credit16}]},1).to({state:[]},1).wait(12));

	// photo1
	this.instance_42 = new lib.sunRay();
	this.instance_42.setTransform(-122,362,1,1,0,0,0,251,500);
	this.instance_42.alpha = 0.7383;

	this.photoImg = new lib.Symbol2_1();
	this.photoImg.name = "photoImg";
	this.photoImg.setTransform(684.85,332.6,0.9674,0.9674);

	this.photo2 = new lib.Symbol3_1();
	this.photo2.name = "photo2";
	this.photo2.setTransform(348.85,325.65,1.324,1.324,0,0,0,204.2,157.1);

	this.photo2_2 = new lib.Photo2_1();
	this.photo2_2.name = "photo2_2";
	this.photo2_2.setTransform(681.85,289.9,0.9494,0.9494,0,0,0,263.7,193.5);

	this.photo4 = new lib.photo3();
	this.photo4.name = "photo4";
	this.photo4.setTransform(352.25,303.5,1.0791,1.0791,0,0,0,264.2,174.2);

	this.photo7 = new lib.photo4();
	this.photo7.name = "photo7";
	this.photo7.setTransform(690.5,319.6,1,1,0,0,0,300.8,169.3);

	this.photo12 = new lib.photo4();
	this.photo12.name = "photo12";
	this.photo12.setTransform(705.85,285.55,0.9077,0.9077,0,0,0,300.9,169.3);

	this.photo5 = new lib.photo5();
	this.photo5.name = "photo5";
	this.photo5.setTransform(679.75,323.45,0.9785,0.9785,0,0,0,299.3,200.4);

	this.photo6 = new lib.photo6();
	this.photo6.name = "photo6";
	this.photo6.setTransform(539.6,253.15,1.0835,1.0835,0,0,0,340,112.3);

	this.photo16 = new lib.photo16();
	this.photo16.name = "photo16";
	this.photo16.setTransform(677.5,323.5,1,1,0,0,0,313.5,190.5);

	this.timeline.addTween(cjs.Tween.get({}).to({state:[]}).to({state:[{t:this.instance_42}]},1).to({state:[]},1).to({state:[{t:this.photoImg,p:{scaleX:0.9674,scaleY:0.9674,x:684.85,y:332.6}}]},1).to({state:[{t:this.photoImg,p:{scaleX:0.9666,scaleY:0.9666,x:686.8,y:331.55}}]},1).to({state:[{t:this.photo2}]},1).to({state:[{t:this.photo2_2}]},1).to({state:[]},1).to({state:[{t:this.photo4}]},2).to({state:[{t:this.photo7}]},1).to({state:[{t:this.photo12}]},1).to({state:[]},1).to({state:[{t:this.photo5}]},1).to({state:[{t:this.photo6}]},1).to({state:[{t:this.photo16}]},1).to({state:[]},1).wait(12));

	// Background
	this.instance_43 = new lib.bgggggg();
	this.instance_43.setTransform(7,4,0.9183,0.9183);

	this.instance_44 = new lib.CachedBmp_204();
	this.instance_44.setTransform(3.5,4.65,0.5,0.5);

	this.instance_45 = new lib.CachedBmp_205();
	this.instance_45.setTransform(-3.25,-2.85,0.5,0.5);

	this.instance_46 = new lib.bgver2();
	this.instance_46.setTransform(1,0,0.9418,0.9418);

	this.instance_47 = new lib.CachedBmp_206();
	this.instance_47.setTransform(-3.25,-2.85,0.5,0.5);

	this.instance_48 = new lib.bg_draww3();
	this.instance_48.setTransform(1,0,0.9418,0.9418);

	this.instance_49 = new lib.CachedBmp_207();
	this.instance_49.setTransform(-3.25,-2.85,0.5,0.5);

	this.instance_50 = new lib.CachedBmp_208();
	this.instance_50.setTransform(-3.25,-2.85,0.5,0.5);

	this.instance_51 = new lib.CachedBmp_209();
	this.instance_51.setTransform(-3.25,-2.85,0.5,0.5);

	this.instance_52 = new lib.CachedBmp_210();
	this.instance_52.setTransform(-3.25,-2.85,0.5,0.5);

	this.timeline.addTween(cjs.Tween.get({}).to({state:[]}).to({state:[{t:this.instance_44},{t:this.instance_43,p:{scaleX:0.9183,scaleY:0.9183,x:7,y:4}}]},1).to({state:[{t:this.instance_45},{t:this.instance_43,p:{scaleX:0.9418,scaleY:0.9418,x:1,y:0}}]},2).to({state:[{t:this.instance_47},{t:this.instance_46}]},2).to({state:[{t:this.instance_49},{t:this.instance_48}]},4).to({state:[{t:this.instance_50},{t:this.instance_46}]},4).to({state:[{t:this.instance_51},{t:this.instance_46}]},3).to({state:[{t:this.instance_52},{t:this.instance_43,p:{scaleX:0.9328,scaleY:0.9328,x:-4,y:-4}}]},8).wait(4));

	this._renderFirstFrame();

}).prototype = p = new lib.AnMovieClip();
p.nominalBounds = new cjs.Rectangle(39.6,246,1048.4,616);
// library properties:
lib.properties = {
	id: 'CF5783475C6FCB4DB1193D8026298DF2',
	width: 1024,
	height: 768,
	fps: 30,
	color: "#FFFFFF",
	opacity: 1.00,
	webfonts: {},
	manifest: [
		{src:"images/CachedBmp_210.png", id:"CachedBmp_210"},
		{src:"images/CachedBmp_209.png", id:"CachedBmp_209"},
		{src:"images/CachedBmp_208.png", id:"CachedBmp_208"},
		{src:"images/CachedBmp_207.png", id:"CachedBmp_207"},
		{src:"images/CachedBmp_206.png", id:"CachedBmp_206"},
		{src:"images/CachedBmp_205.png", id:"CachedBmp_205"},
		{src:"images/CachedBmp_203.png", id:"CachedBmp_203"},
		{src:"images/StarFishBayGame_atlas_1.png", id:"StarFishBayGame_atlas_1"},
		{src:"images/StarFishBayGame_atlas_2.png", id:"StarFishBayGame_atlas_2"},
		{src:"images/StarFishBayGame_atlas_3.png", id:"StarFishBayGame_atlas_3"},
		{src:"images/StarFishBayGame_atlas_4.png", id:"StarFishBayGame_atlas_4"},
		{src:"images/StarFishBayGame_atlas_5.png", id:"StarFishBayGame_atlas_5"},
		{src:"images/StarFishBayGame_atlas_6.png", id:"StarFishBayGame_atlas_6"},
		{src:"images/StarFishBayGame_atlas_7.png", id:"StarFishBayGame_atlas_7"},
		{src:"images/StarFishBayGame_atlas_8.png", id:"StarFishBayGame_atlas_8"},
		{src:"images/StarFishBayGame_atlas_9.png", id:"StarFishBayGame_atlas_9"},
		{src:"images/StarFishBayGame_atlas_10.png", id:"StarFishBayGame_atlas_10"},
		{src:"images/StarFishBayGame_atlas_11.png", id:"StarFishBayGame_atlas_11"},
		{src:"images/StarFishBayGame_atlas_12.png", id:"StarFishBayGame_atlas_12"},
		{src:"images/StarFishBayGame_atlas_13.png", id:"StarFishBayGame_atlas_13"},
		{src:"images/StarFishBayGame_atlas_14.png", id:"StarFishBayGame_atlas_14"},
		{src:"images/StarFishBayGame_atlas_15.png", id:"StarFishBayGame_atlas_15"},
		{src:"images/StarFishBayGame_atlas_16.png", id:"StarFishBayGame_atlas_16"},
		{src:"images/StarFishBayGame_atlas_17.png", id:"StarFishBayGame_atlas_17"},
		{src:"images/StarFishBayGame_atlas_18.png", id:"StarFishBayGame_atlas_18"},
		{src:"images/StarFishBayGame_atlas_19.png", id:"StarFishBayGame_atlas_19"},
		{src:"images/StarFishBayGame_atlas_20.png", id:"StarFishBayGame_atlas_20"},
		{src:"images/StarFishBayGame_atlas_21.png", id:"StarFishBayGame_atlas_21"},
		{src:"images/StarFishBayGame_atlas_22.png", id:"StarFishBayGame_atlas_22"},
		{src:"images/StarFishBayGame_atlas_23.png", id:"StarFishBayGame_atlas_23"},
		{src:"images/StarFishBayGame_atlas_24.png", id:"StarFishBayGame_atlas_24"},
		{src:"images/StarFishBayGame_atlas_25.png", id:"StarFishBayGame_atlas_25"},
		{src:"images/StarFishBayGame_atlas_26.png", id:"StarFishBayGame_atlas_26"},
		{src:"images/StarFishBayGame_atlas_27.png", id:"StarFishBayGame_atlas_27"},
		{src:"images/StarFishBayGame_atlas_28.png", id:"StarFishBayGame_atlas_28"},
		{src:"images/StarFishBayGame_atlas_29.png", id:"StarFishBayGame_atlas_29"},
		{src:"images/StarFishBayGame_atlas_30.png", id:"StarFishBayGame_atlas_30"},
		{src:"images/StarFishBayGame_atlas_31.png", id:"StarFishBayGame_atlas_31"},
		{src:"images/StarFishBayGame_atlas_32.png", id:"StarFishBayGame_atlas_32"},
		{src:"images/StarFishBayGame_atlas_33.png", id:"StarFishBayGame_atlas_33"},
		{src:"images/StarFishBayGame_atlas_34.png", id:"StarFishBayGame_atlas_34"},
		{src:"images/StarFishBayGame_atlas_35.png", id:"StarFishBayGame_atlas_35"},
		{src:"images/StarFishBayGame_atlas_36.png", id:"StarFishBayGame_atlas_36"},
		{src:"images/StarFishBayGame_atlas_37.png", id:"StarFishBayGame_atlas_37"},
		{src:"images/StarFishBayGame_atlas_38.png", id:"StarFishBayGame_atlas_38"},
		{src:"images/StarFishBayGame_atlas_39.png", id:"StarFishBayGame_atlas_39"},
		{src:"images/StarFishBayGame_atlas_40.png", id:"StarFishBayGame_atlas_40"},
		{src:"images/StarFishBayGame_atlas_41.png", id:"StarFishBayGame_atlas_41"},
		{src:"images/StarFishBayGame_atlas_42.png", id:"StarFishBayGame_atlas_42"},
		{src:"images/StarFishBayGame_atlas_43.png", id:"StarFishBayGame_atlas_43"},
		{src:"images/StarFishBayGame_atlas_44.png", id:"StarFishBayGame_atlas_44"},
		{src:"images/StarFishBayGame_atlas_45.png", id:"StarFishBayGame_atlas_45"},
		{src:"images/StarFishBayGame_atlas_46.png", id:"StarFishBayGame_atlas_46"},
		{src:"images/StarFishBayGame_atlas_47.png", id:"StarFishBayGame_atlas_47"},
		{src:"https://code.jquery.com/jquery-3.4.1.min.js", id:"lib/jquery-3.4.1.min.js"},
		{src:"components/sdk/anwidget.js", id:"sdk/anwidget.js"},
		{src:"components/video/src/video.js", id:"an.Video"},
		{src:"components/ui/src/textinput.js", id:"an.TextInput"},
		{src:"components/ui/src/css.js", id:"an.CSS"}
	],
	preloads: []
};



// bootstrap callback support:

(lib.Stage = function(canvas) {
	createjs.Stage.call(this, canvas);
}).prototype = p = new createjs.Stage();

p.setAutoPlay = function(autoPlay) {
	this.tickEnabled = autoPlay;
}
p.play = function() { this.tickEnabled = true; this.getChildAt(0).gotoAndPlay(this.getTimelinePosition()) }
p.stop = function(ms) { if(ms) this.seek(ms); this.tickEnabled = false; }
p.seek = function(ms) { this.tickEnabled = true; this.getChildAt(0).gotoAndStop(lib.properties.fps * ms / 1000); }
p.getDuration = function() { return this.getChildAt(0).totalFrames / lib.properties.fps * 1000; }

p.getTimelinePosition = function() { return this.getChildAt(0).currentFrame / lib.properties.fps * 1000; }

an.bootcompsLoaded = an.bootcompsLoaded || [];
if(!an.bootstrapListeners) {
	an.bootstrapListeners=[];
}

an.bootstrapCallback=function(fnCallback) {
	an.bootstrapListeners.push(fnCallback);
	if(an.bootcompsLoaded.length > 0) {
		for(var i=0; i<an.bootcompsLoaded.length; ++i) {
			fnCallback(an.bootcompsLoaded[i]);
		}
	}
};

an.compositions = an.compositions || {};
an.compositions['CF5783475C6FCB4DB1193D8026298DF2'] = {
	getStage: function() { return exportRoot.stage; },
	getLibrary: function() { return lib; },
	getSpriteSheet: function() { return ss; },
	getImages: function() { return img; }
};

an.compositionLoaded = function(id) {
	an.bootcompsLoaded.push(id);
	for(var j=0; j<an.bootstrapListeners.length; j++) {
		an.bootstrapListeners[j](id);
	}
}

an.getComposition = function(id) {
	return an.compositions[id];
}


an.makeResponsive = function(isResp, respDim, isScale, scaleType, domContainers) {		
	var lastW, lastH, lastS=1;		
	window.addEventListener('resize', resizeCanvas);		
	resizeCanvas();		
	function resizeCanvas() {			
		var w = lib.properties.width, h = lib.properties.height;			
		var iw = window.innerWidth, ih=window.innerHeight;			
		var pRatio = window.devicePixelRatio || 1, xRatio=iw/w, yRatio=ih/h, sRatio=1;			
		if(isResp) {                
			if((respDim=='width'&&lastW==iw) || (respDim=='height'&&lastH==ih)) {                    
				sRatio = lastS;                
			}				
			else if(!isScale) {					
				if(iw<w || ih<h)						
					sRatio = Math.min(xRatio, yRatio);				
			}				
			else if(scaleType==1) {					
				sRatio = Math.min(xRatio, yRatio);				
			}				
			else if(scaleType==2) {					
				sRatio = Math.max(xRatio, yRatio);				
			}			
		}
		domContainers[0].width = w * pRatio * sRatio;			
		domContainers[0].height = h * pRatio * sRatio;
		domContainers.forEach(function(container) {				
			container.style.width = w * sRatio + 'px';				
			container.style.height = h * sRatio + 'px';			
		});
		stage.scaleX = pRatio*sRatio;			
		stage.scaleY = pRatio*sRatio;
		lastW = iw; lastH = ih; lastS = sRatio;            
		stage.tickOnUpdate = false;            
		stage.update();            
		stage.tickOnUpdate = true;		
	}
}
function _updateVisibility(evt) {
	var parent = this.parent;
	var detach = this.stage == null || this._off || !parent;
	while(parent) {
		if(parent.visible) {
			parent = parent.parent;
		}
		else{
			detach = true;
			break;
		}
	}
	detach = detach && this._element && this._element._attached;
	if(detach) {
		this._element.detach();
		this.dispatchEvent('detached');
		stage.removeEventListener('drawstart', this._updateVisibilityCbk);
		this._updateVisibilityCbk = false;
	}
}
function _handleDrawEnd(evt) {
	if(this._element && this._element._attached) {
		var props = this.getConcatenatedDisplayProps(this._props), mat = props.matrix;
		var tx1 = mat.decompose(); var sx = tx1.scaleX; var sy = tx1.scaleY;
		var dp = window.devicePixelRatio || 1; var w = this.nominalBounds.width * sx; var h = this.nominalBounds.height * sy;
		mat.tx/=dp;mat.ty/=dp; mat.a/=(dp*sx);mat.b/=(dp*sx);mat.c/=(dp*sy);mat.d/=(dp*sy);
		this._element.setProperty('transform-origin', this.regX + 'px ' + this.regY + 'px');
		var x = (mat.tx + this.regX*mat.a + this.regY*mat.c - this.regX);
		var y = (mat.ty + this.regX*mat.b + this.regY*mat.d - this.regY);
		var tx = 'matrix(' + mat.a + ',' + mat.b + ',' + mat.c + ',' + mat.d + ',' + x + ',' + y + ')';
		this._element.setProperty('transform', tx);
		this._element.setProperty('width', w);
		this._element.setProperty('height', h);
		this._element.update();
	}
}

function _tick(evt) {
	var stage = this.stage;
	stage&&stage.on('drawend', this._handleDrawEnd, this, true);
	if(!this._updateVisibilityCbk) {
		this._updateVisibilityCbk = stage.on('drawstart', this._updateVisibility, this, false);
	}
}
function _componentDraw(ctx) {
	if(this._element && !this._element._attached) {
		this._element.attach($('#dom_overlay_container'));
		this.dispatchEvent('attached');
	}
}
an.handleSoundStreamOnTick = function(event) {
	if(!event.paused){
		var stageChild = stage.getChildAt(0);
		if(!stageChild.paused){
			stageChild.syncStreamSounds();
		}
	}
}


})(createjs = createjs||{}, AdobeAn = AdobeAn||{});
var createjs, AdobeAn;