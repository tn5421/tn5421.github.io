//Lol Alert

function LoLCustomAlert(){
    this.render = function(dialog){
        var winW = window.innerWidth;
        var winH = window.innerHeight;
        var dialogoverlay = document.getElementById('dialogoverlay');
        var dialogbox = document.getElementById('dialogbox');
        dialogoverlay.style.display = "block";
        dialogoverlay.style.height = winH+"px";
        dialogbox.style.left = (winW/2) - (853 * .5)+"px";
        dialogbox.style.top = "150px";
        dialogbox.style.display = "block";
        document.getElementById('dialogboxbody').innerHTML = "<embed id='playerid' width='853px' height='480px' allowfullscreen='true' allowscriptaccess='always' quality='high' bgcolor='#000000' name='player' src='http://www.youtube.com/v/j-hXQ1oEn84?enablejsapi=1&version=3&playerapiid=ytplayer' type='application/x-shockwave-flash'>";
        document.getElementById('dialogboxfoot').innerHTML = '<button id="gamebutton" onclick="LoLAlert.ok()">Play Now</button> <button id="gamebutton" onclick="LoLAlert.close()">Close</button>';

    }
	this.ok = function(){
		window.location.href ="http://signup.leagueoflegends.com/?ref=4d35ad78dddf6046909465";
	}
	
	this.close = function(){
		document.getElementById('dialogbox').style.display = "none";
		document.getElementById('dialogoverlay').style.display = "none";
		var myPlayer = document.getElementById('player'); 
		myPlayer.pauseVideo();

	}
}
var LoLAlert = new LoLCustomAlert();

//Rift Alert

function RiftCustomAlert(){
    this.render = function(dialog){
        var winW = window.innerWidth;
        var winH = window.innerHeight;
        var dialogoverlay = document.getElementById('dialogoverlay');
        var dialogbox = document.getElementById('dialogbox');
        dialogoverlay.style.display = "block";
        dialogoverlay.style.height = winH+"px";
        dialogbox.style.left = (winW/2) - (853 * .5)+"px";
        dialogbox.style.top = "150px";
        dialogbox.style.display = "block";
        document.getElementById('dialogboxbody').innerHTML = "<embed id='playerid' width='853px' height='480px' allowfullscreen='true' allowscriptaccess='always' quality='high' bgcolor='#000000' name='player' src='http://www.youtube.com/v/UQH1-GCPcbw?enablejsapi=1&version=3&playerapiid=ytplayer' type='application/x-shockwave-flash'>";
        document.getElementById('dialogboxfoot').innerHTML = '<button id="gamebutton" onclick="RiftAlert.ok()">Play Now</button> <button id="gamebutton" onclick="RiftAlert.close()">Close</button>';

    }
	this.ok = function(){
		window.location.href ="https://rift.trionworlds.com/account/reg/account-registration-short-flow.action?voucherCode=QNQMERLJ3KNNQ3KZ7WCP&request_locale=en&experience=aaf&utm_source=manual&utm_medium=social&utm_campaign=ascend_invite";
	}
	
	this.close = function(){
		document.getElementById('dialogbox').style.display = "none";
		document.getElementById('dialogoverlay').style.display = "none";
		var myPlayer = document.getElementById('player'); 
		myPlayer.pauseVideo();
	}
}
var RiftAlert = new RiftCustomAlert();

//Trove Alert

function TroveCustomAlert(){
    this.render = function(dialog){
        var winW = window.innerWidth;
        var winH = window.innerHeight;
        var dialogoverlay = document.getElementById('dialogoverlay');
        var dialogbox = document.getElementById('dialogbox');
        dialogoverlay.style.display = "block";
        dialogoverlay.style.height = winH+"px";
        dialogbox.style.left = (winW/2) - (853 * .5)+"px";
        dialogbox.style.top = "150px";
        dialogbox.style.display = "block";
        document.getElementById('dialogboxbody').innerHTML = "<embed id='playerid' width='853px' height='480px' allowfullscreen='true' allowscriptaccess='always' quality='high' bgcolor='#000000' name='player' src='http://www.youtube.com/v/YilnD-w6Rso?enablejsapi=1&version=3&playerapiid=ytplayer' type='application/x-shockwave-flash'>";
        document.getElementById('dialogboxfoot').innerHTML = '<button id="gamebutton" onclick="TroveAlert.ok()">Play Now</button> <button id="gamebutton" onclick="TroveAlert.close()">Close</button>';

    }
	this.ok = function(){
		window.location.href ="https://www.trovegame.com/landing/";
	}
	
	this.close = function(){
		document.getElementById('dialogbox').style.display = "none";
		document.getElementById('dialogoverlay').style.display = "none";
		var myPlayer = document.getElementById('player'); 
		myPlayer.pauseVideo();
	}
}
var TroveAlert = new TroveCustomAlert();

//Warframe Alert

function WarframeCustomAlert(){
    this.render = function(dialog){
        var winW = window.innerWidth;
        var winH = window.innerHeight;
        var dialogoverlay = document.getElementById('dialogoverlay');
        var dialogbox = document.getElementById('dialogbox');
        dialogoverlay.style.display = "block";
        dialogoverlay.style.height = winH+"px";
        dialogbox.style.left = (winW/2) - (853 * .5)+"px";
        dialogbox.style.top = "150px";
        dialogbox.style.display = "block";
        document.getElementById('dialogboxbody').innerHTML = "<embed id='playerid' width='853px' height='480px' allowfullscreen='true' allowscriptaccess='always' quality='high' bgcolor='#000000' name='player' src='http://www.youtube.com/v/Q6cIRZlMQ3g?enablejsapi=1&version=3&playerapiid=ytplayer' type='application/x-shockwave-flash'>";
        document.getElementById('dialogboxfoot').innerHTML = '<button id="gamebutton" onclick="WarframeAlert.ok()">Play Now</button> <button id="gamebutton" onclick="WarframeAlert.close()">Close</button>';

    }
	this.ok = function(){
		window.location.href ="https://warframe.com/signup?referrerId=5352b7f31a4d80f24100027e";
	}
	
	this.close = function(){
		document.getElementById('dialogbox').style.display = "none";
		document.getElementById('dialogoverlay').style.display = "none";
		var myPlayer = document.getElementById('player'); 
		myPlayer.pauseVideo();
	}
}
var WarframeAlert = new WarframeCustomAlert();