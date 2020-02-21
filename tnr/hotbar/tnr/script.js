/*
 * Ragebar Version 2.0
 * Copyright (C) 2015 Yaseen Kocher
 * All rights reserved.
 * Redistribution of any code found on this page in any form is prohibited.
 */

var today = new Date(); 
var expiry = new Date(today.getTime() + 1000 * 24 * 3600 * 1000); 
	
function setCookie(name, value) { 
	document.cookie=name + "=" + escape(value) + "; path=/; expires=" + expiry.toGMTString(); 
}


	
function storeValues(form) { 

//Wake

	if (form.field_wake.value.length < 1){
		setCookie("newwake", "N/A");
	}
	
	else {
		setCookie("newwake", form.field_wake.value);
	}
	
//Sleep

	if (form.field_sleep.value.length < 1){
		setCookie("newsleep", "N/A");
	}
	
	else {
		setCookie("newsleep", form.field_sleep.value);
	}
	
//Camp Wake

	if (form.field_camp_out.value.length < 1){
		setCookie("campwake", "N/A");
	}
	
	else {
		setCookie("campwake", form.field_camp_out.value);
	}

//Camp Sleep

	if (form.field_camp_in.value.length < 1){
		setCookie("campsleep", "N/A");
	}
	
	else {
		setCookie("campsleep", form.field_camp_in.value);
	}
	
//North

	if (form.field_north.value.length < 1){
		setCookie("north", "N/A");
	}
	
	else {
		setCookie("north", form.field_north.value);
	}

//West

	if (form.field_west.value.length < 1){
		setCookie("west", "N/A");
	}
	
	else {
		setCookie("west", form.field_west.value);
	}

//East

	if (form.field_east.value.length < 1){
		setCookie("east", "N/A");
	}
	
	else {
		setCookie("east", form.field_east.value);
	}

//South

	if (form.field_south.value.length < 1){
		setCookie("south", "N/A");
	}
	
	else {
		setCookie("south", form.field_south.value);
	}

//Combat

	if (form.field_combat.value.length < 1){
		setCookie("combat", "N/A");
	}
	
	else {
		setCookie("combat", form.field_combat.value);
	}
	
//Scout

	if (form.field_scout.value.length < 1){
		setCookie("scout", "N/A");
	}
	
	else {
		setCookie("scout", form.field_scout.value);
	}
	
//Refresh Combat

	if (form.field_refresh.value.length < 1){
		setCookie("refresh", "N/A");
	}
	
	else {
		setCookie("refresh", form.field_refresh.value);
	}
	
//Ramen

	if (form.field_ramen.value.length < 1){
		setCookie("ramen", "N/A");
	}
	
	else {
		setCookie("ramen", form.field_ramen.value);
	}
	
//Hospital

	if (form.field_hospital.value.length < 1){
		setCookie("hospital", "N/A");
	}
	
	else {
		setCookie("hospital", form.field_hospital.value);
	}
	
//Tavern

	if (form.field_tavern.value.length < 1){
		setCookie("tavern", "N/A");
	}
	
	else {
		setCookie("tavern", form.field_tavern.value);
	}
	
//Occupation

	if (form.field_occupation.value.length < 1){
		setCookie("occupation", "N/A");
	}
	
	else {
		setCookie("occupation", form.field_occupation.value);
	}
	
//Profession

	if (form.field_profession.value.length < 1){
		setCookie("profession", "N/A");
	}
	
	else {
		setCookie("profession", form.field_profession.value);
	}

//D-Mission

	if (form.field_dmission.value.length < 1){
		setCookie("dmission", "N/A");
	}
	
	else {
		setCookie("dmission", form.field_dmission.value);
	}

//C-Mission

	if (form.field_cmission.value.length < 1){
		setCookie("cmission", "N/A");
	}
	
	else {
		setCookie("cmission", form.field_cmission.value);
	}

//B-Mission

	if (form.field_bmission.value.length < 1){
		setCookie("bmission", "N/A");
	}
	
	else {
		setCookie("bmission", form.field_bmission.value);
	}

//A-Mission

	if (form.field_amission.value.length < 1){
		setCookie("amission", "N/A");
	}
	
	else {
		setCookie("amission", form.field_amission.value);
	}

//Rob

	if (form.field_rob.value.length < 1){
		setCookie("rob", "N/A");
	}
	
	else {
		setCookie("rob", form.field_rob.value);
	}

//Errands

	if (form.field_errands.value.length < 1){
		setCookie("errands", "N/A");
	}
	
	else {
		setCookie("errands", form.field_errands.value);
	}

//Crimes

	if (form.field_crimes.value.length < 1){
		setCookie("crimes", "N/A");
	}
	
	else {
		setCookie("crimes", form.field_crimes.value);
	}

//Ramen 1

	if (form.field_ramen1.value.length < 1){
		setCookie("ramen1", "N/A");
	}
	
	else {
		setCookie("ramen1", form.field_ramen1.value);
	}

//Ramen 2

	if (form.field_ramen2.value.length < 1){
		setCookie("ramen2", "N/A");
	}
	
	else {
		setCookie("ramen2", form.field_ramen2.value);
	}

//Ramen 3

	if (form.field_ramen3.value.length < 1){
		setCookie("ramen3", "N/A");
	}
	
	else {
		setCookie("ramen3", form.field_ramen3.value);
	}	
	
//Ramen 4

	if (form.field_ramen4.value.length < 1){
		setCookie("ramen4", "N/A");
	}
	
	else {
		setCookie("ramen4", form.field_ramen4.value);
	}
	
//Ramen 5

	if (form.field_ramen5.value.length < 1){
		setCookie("ramen5", "N/A");
	}
	
	else {
		setCookie("ramen5", form.field_ramen5.value);
	}
	
//C-Crime

	if (form.field_ccrime.value.length < 1){
		setCookie("ccrime", "N/A");
	}
	
	else {
		setCookie("ccrime", form.field_ccrime.value);
	}
	
//B-Crime

	if (form.field_bcrime.value.length < 1){
		setCookie("bcrime", "N/A");
	}
	
	else {
		setCookie("bcrime", form.field_bcrime.value);
	}
	
//A-Crime

	if (form.field_acrime.value.length < 1){
		setCookie("acrime", "N/A");
	}
	
	else {
		setCookie("acrime", form.field_acrime.value);
	}
	
//Rumors

	if (form.field_rumors.value.length < 1){
		setCookie("rumors", "N/A");
	}

	else {
		setCookie("rumors", form.field_rumors.value);
	}
	
//Find User

	if (form.field_finduser.value.length < 1){
		setCookie("finduser", "N/A");
	}
	
	else {
		setCookie("finduser", form.field_finduser.value);
	}
	
//Find User

	if (form.field_finditem.value.length < 1){
		setCookie("finditem", "N/A");
	}
	
	else {
		setCookie("finditem", form.field_finditem.value);
	}
	

//Add Bounty

	if (form.field_bingo.value.length < 1){
		setCookie("bingo", "N/A");
	}
	
	else {
		setCookie("bingo", form.field_bingo.value);
	}
	
	alert("Your keybinds have been set!");
	return true; 
}

function getCookie(name) { 
		var re = new RegExp(name + "=([^;]+)"); 
		var value = re.exec(document.cookie); 
		return (value != null) ? unescape(value[1]) : null; 
	}
	
var newwake = getCookie("newwake");
var thWake = newwake.toLowerCase();

var newsleep = getCookie("newsleep");
var thSleep = newsleep.toLowerCase();

var campwake = getCookie("campwake");
var thCWake = campwake.toLowerCase();

var campsleep = getCookie("campsleep");
var thCSleep = campsleep.toLowerCase();

var north = getCookie("north");
var thNorth = north.toLowerCase();

var west = getCookie("west");
var thWest = west.toLowerCase();

var east = getCookie("east");
var thEast = east.toLowerCase();

var south = getCookie("south");
var thSouth = south.toLowerCase();

var combat = getCookie("combat");
var thCombat = combat.toLowerCase();

var scout = getCookie("scout");
var thScout = scout.toLowerCase();

var refresh = getCookie("refresh");
var thRefresh = refresh.toLowerCase();

var ramen = getCookie("ramen");
var thRamen = ramen.toLowerCase();

var hospital = getCookie("hospital");
var thHospital = hospital.toLowerCase();

var tavern = getCookie("tavern");
var thTavern = tavern.toLowerCase();

var occupation = getCookie("occupation");
var thOccupation = occupation.toLowerCase();

var profession = getCookie("profession");
var thProfession = profession.toLowerCase();

var dmission = getCookie("dmission");
var thDMission = dmission.toLowerCase();

var cmission = getCookie("cmission");
var thCMission = cmission.toLowerCase();

var bmission = getCookie("bmission");
var thBMission = bmission.toLowerCase();

var amission = getCookie("amission");
var thAMission = amission.toLowerCase();

var rob = getCookie("rob");
var thRob = rob.toLowerCase();

var errands = getCookie("errands");
var thErrands = errands.toLowerCase();

var crimes = getCookie("crimes");
var thCrimes = crimes.toLowerCase();

var ramen1 = getCookie("ramen1");
var thRamen1 = ramen1.toLowerCase();

var ramen2 = getCookie("ramen2");
var thRamen2 = ramen2.toLowerCase();

var ramen3 = getCookie("ramen3");
var thRamen3 = ramen3.toLowerCase();

var ramen4 = getCookie("ramen4");
var thRamen4 = ramen4.toLowerCase();

var ramen5 = getCookie("ramen5");
var thRamen5 = ramen5.toLowerCase();

var ccrime = getCookie("ccrime");
var thCCrime = ccrime.toLowerCase();

var bcrime = getCookie("bcrime");
var thBCrime = bcrime.toLowerCase();

var acrime = getCookie("acrime");
var thACrime = acrime.toLowerCase();

var rumors = getCookie("rumors");
var thRumors = rumors.toLowerCase();

var finduser = getCookie("finduser");
var thFindUser = finduser.toLowerCase();

var finditem = getCookie("finditem");
var thFindItem = finditem.toLowerCase();

var bingo = getCookie("bingo");
var thBingo = bingo.toLowerCase();

function showValues() {

	document.getElementById('new_wake').value = thWake;
	document.getElementById('new_sleep').value = thSleep;
	document.getElementById('camp_out').value = thCWake;
	document.getElementById('camp_in').value = thCSleep;
	
	document.getElementById('north').value = thNorth;
	document.getElementById('west').value = thWest;
	document.getElementById('east').value = thEast;
	document.getElementById('south').value = thSouth;
	
	document.getElementById('combat').value = thCombat;
	document.getElementById('scout').value = thScout;
	document.getElementById('refresh').value = thRefresh;
	
	document.getElementById('ramen').value = thRamen;
	document.getElementById('hospital').value = thHospital;
	document.getElementById('tavern').value = thTavern;
	document.getElementById('occupation').value = thOccupation;
	document.getElementById('profession').value = thProfession;
	
	document.getElementById('dmission').value = thDMission;
	document.getElementById('cmission').value = thCMission;
	document.getElementById('bmission').value = thBMission;
	document.getElementById('amission').value = thAMission;
	
	document.getElementById('rob').value = thRob;
	document.getElementById('errands').value = thErrands;
	document.getElementById('crimes').value = thCrimes;
	
	document.getElementById('ramen1').value = thRamen1;
	document.getElementById('ramen2').value = thRamen2;
	document.getElementById('ramen3').value = thRamen3;
	document.getElementById('ramen4').value = thRamen4;
	document.getElementById('ramen5').value = thRamen5;
	
	document.getElementById('ccrime').value = thCCrime;
	document.getElementById('bcrime').value = thBCrime;
	document.getElementById('acrime').value = thACrime;
	
	document.getElementById('rumors').value = thRumors;
	document.getElementById('finduser').value = thFindUser;
	document.getElementById('finditem').value = thFindItem;
	document.getElementById('bingo').value = thBingo;	
	
	if (thWake == null || thWake == 'undefined' || thWake == ''){document.getElementById('new_wake').value = 'q';}
	if (thSleep == null || thSleep == 'undefined' || thSleep == ''){document.getElementById('new_sleep').value = 'e';}
	if (thCWake == null || thCWake == 'undefined' || thCWake == ''){document.getElementById('camp_out').value = 'b';}
	if (thCSleep == null || thCSleep == 'undefined' || thCSleep == ''){document.getElementById('camp_in').value = 'n';}
	
	if (thNorth == null || thNorth == 'undefined' || thNorth == ''){document.getElementById('north').value = 'w';}
	if (thWest == null || thWest == 'undefined' || thWest == ''){document.getElementById('west').value = 'a';}
	if (thEast == null || thEast == 'undefined' || thEast == ''){document.getElementById('east').value = 'd';}
	if (thSouth == null || thSouth == 'undefined' || thSouth == ''){document.getElementById('south').value = 's';}
	
	if (thCombat == null || thCombat == 'undefined' || thCombat == ''){document.getElementById('combat').value = 'c';}
	if (thScout == null || thScout == 'undefined' || thScout == ''){document.getElementById('scout').value = 'z';}
	if (thRefresh == null || thRefresh == 'undefined' || thRefresh == ''){document.getElementById('refresh').value = 'f';}

	if (thRamen == null || thRamen == 'undefined' || thRamen == ''){document.getElementById('ramen').value = 'r';}
	if (thHospital == null || thHospital == 'undefined' || thHospital == ''){document.getElementById('hospital').value = 'h';}
	if (thTavern == null || thTavern == 'undefined' || thTavern == ''){document.getElementById('tavern').value = 't';}
	if (thOccupation == null || thOccupation == 'undefined' || thOccupation == ''){document.getElementById('occupation').value = 'o';}
	if (thProfession == null || thProfession == 'undefined' || thProfession == ''){document.getElementById('profession').value = 'p';}

	if (thDMission == null || thDMission == 'undefined' || thDMission == ''){document.getElementById('dmission').value = '1';}	
	if (thCMission == null || thCMission == 'undefined' || thCMission == ''){document.getElementById('cmission').value = '2';}
	if (thBMission == null || thBMission == 'undefined' || thBMission == ''){document.getElementById('bmission').value = '3';}
	if (thAMission == null || thAMission == 'undefined' || thAMission == ''){document.getElementById('amission').value = '4';}
	 
	if (thRob == null || thRob == 'undefined' || thRob == ''){document.getElementById('rob').value = 'N/A';}
	if (thErrands == null || thErrands == 'undefined' || thErrands == ''){document.getElementById('errands').value = 'N/A';}
	if (thCrimes == null || thCrimes == 'undefined' || thCrimes == ''){document.getElementById('crimes').value = 'N/A';}

	if (thRamen1 == null || thRamen1 == 'undefined' || thRamen1 == ''){document.getElementById('ramen1').value = 'N/A';}
	if (thRamen2 == null || thRamen2 == 'undefined' || thRamen2 == ''){document.getElementById('ramen2').value = 'N/A';}
	if (thRamen3 == null || thRamen3 == 'undefined' || thRamen3 == ''){document.getElementById('ramen3').value = 'N/A';}
	if (thRamen4 == null || thRamen4 == 'undefined' || thRamen4 == ''){document.getElementById('ramen4').value = 'N/A';}
	if (thRamen5 == null || thRamen5 == 'undefined' || thRamen5 == ''){document.getElementById('ramen5').value = 'N/A';}
	
	if (thCCrime == null || thCCrime == 'undefined' || thCCrime == ''){document.getElementById('ccrime').value = 'N/A';}
	if (thBCrime == null || thBCrime == 'undefined' || thBCrime == ''){document.getElementById('bcrime').value = 'N/A';}
	if (thACrime == null || thACrime == 'undefined' || thACrime == ''){document.getElementById('acrime').value = 'N/A';}
	
	if (thRumors == null || thRumors == 'undefined' || thRumors == ''){document.getElementById('rumors').value = 'N/A';}
	if (thFindUser == null || thFindUser == 'undefined' || thFindUser == ''){document.getElementById('finduser').value = 'N/A';}
	if (thFindItem == null || thFindItem == 'undefined' || thFindItem == ''){document.getElementById('finditem').value = 'N/A';}
	if (thBingo == null || thBingo == 'undefined' || thBingo == ''){document.getElementById('bingo').value = 'N/A';}
}

