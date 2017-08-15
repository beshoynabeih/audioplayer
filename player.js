window.onload = function(){

	function __(el){
		return document.getElementById(el);
	}
	function __c(cl){
		return document.getElementsByClassName(cl);
	}
	var songs = [["Hello.mp3", "Adele"],
				 ["E.T.mp3", "Katy Perry"],
				 ["Teenage Dream.mp3", "Katy Perry"],
				 ["The One That Got Away.mp3", "Katy Perry"],
				 ["boom boom pow.mp3", "Sean Paul"],
				 ["baby.mp3","Justin Bieber"],
				 ["Aho Leli We Adda.mp3", "Amr Diab"], 
				 ["Aiwa Etghaiart.mp3", "Amr Diab"],
				 ["Jana.mp3", "Amr Diab"],
				 ];
	var playing_id = 0;
	var aobj = document.getElementById("audio-obj");
	var ctime = document.getElementsByClassName("time bold")[0];
	var playpause = document.getElementById("play-btn");
	var playingbar = document.getElementsByClassName("played-length")[0];
	var duration = 	document.getElementsByClassName("time bold")[1];
	var loop = __c("icon-control fa fa-undo")[0];
	var shuffle = __c("icon-control fa fa-random")[0];
	var buffer = __c("song-buffer")[0];

__c("menu-burger")[0].addEventListener("click", function(){
	document.getElementById("audio-list-items").classList.toggle("invisible");
});

__c("song-board-content")[0].addEventListener("click", function(event){
	aobj.currentTime = (event.offsetX/220)*aobj.duration;
});
__c("song-board-content")[0].addEventListener("mouseover", function(event){
	__("seek-time").style.display="block";
	__("seek-time").textContent = timeformat((event.offsetX/220)*aobj.duration);
	this.style.height = "5px";
	__("seek-time").style.left = event.offsetX + "px";
});
__c("song-board-content")[0].addEventListener("mousemove",function(event){
	__("seek-time").style.left = event.offsetX - 25 + "px";
	__("seek-time").textContent = timeformat((event.offsetX/220)*aobj.duration);
});
__c("song-board-content")[0].addEventListener("mouseout", function(){
	__("seek-time").style.display="none";
	this.style.height = "3px";
});

///play
playpause.addEventListener("click", function(){
	if(this.className == "fa fa-play play-icon"){		
		// changeNameAuthor(playing_id);
		aobj.play();
		this.className = "fa fa-pause play-icon";

	}else{
		aobj.pause();
	this.className = "fa fa-play play-icon";
	}
});


aobj.addEventListener("timeupdate", function(){
	seek();
	if(__c("icon-control fa fa-undo")[0].style.color != "rgb(152, 147, 147)"){
		aobj.loop = true;
	}else{
		aobj.loop=false;
	}
});
aobj.addEventListener("ended", function(){
	playingbar.style.width = 0;
	ctime.innerHTML = "00:00";
	playpause.className="fa fa-play play-icon";
	if(shuffle.style.color != "rgb(152, 147, 147"){
		if(playing_id < songs.length-1){
			play(parseInt(playing_id) + 1);
			aobj.play();
			playpause.className = "fa fa-pause play-icon";
			setLastSong();
		}
		else{
			play(0);
			aobj.play();
			playpause.className = "fa fa-pause play-icon";
			setLastSong();
		}
	}
});

__("volume").addEventListener("click",function(){
	if(this.className == "footer-icon fa fa-volume-up"){
		this.className = "footer-icon fa fa-volume-off";
		aobj.muted = true;
	}
	else {
		aobj.muted = false;
		this.className = "footer-icon fa fa-volume-up";
	}
});

__c("icon-control fa fa-random")[0].addEventListener("click", function(){
	if(this.style.color == "rgb(152, 147, 147)"){
		this.style.color = "#000";
	}else{
		this.style.color = "rgb(152, 147, 147)";		
	}
});
__c("icon-control fa fa-undo")[0].addEventListener("click", function(){
	if(this.style.color == "rgb(152, 147, 147)"){
		this.style.color = "#000";
	}else{
		this.style.color = "rgb(152, 147, 147)";		
	}
});
__c("fa fa-step-forward pale")[0].addEventListener("click", function(){
	if(playing_id < songs.length-1){
		playing_id++;
		changeSRC(playing_id);
		changeNameAuthor(playing_id);
		if(playpause.className == "fa fa-play play-icon"){
			playpause.className = "fa fa-pause play-icon"
		}
		aobj.play();
		setLastSong();
	}
});
__c("fa fa-step-backward pale")[0].addEventListener("click", function(){
	if(playing_id > 0){
		playing_id--;
		changeSRC(playing_id);
		changeNameAuthor(playing_id);
		if(playpause.className == "fa fa-play play-icon"){
			playpause.className = "fa fa-pause play-icon"
		}
		aobj.play();

		setLastSong();	
	}
});

aobj.addEventListener("progress", function(){
	if(aobj.buffered.length > 0){
		var buf = Math.round((aobj.buffered.end(0)/aobj.duration) *220);
		buffer.style.width = buf + "px";		
	}
});
function seek(){
	ctime.innerHTML = timeformat(aobj.currentTime);
	var per = Math.round((aobj.currentTime/aobj.duration) *220);
	
	playingbar.style.width =  per + "px";
}
function changeSRC(n){
	aobj.src = "audiofiles/"+songs[parseInt(n)][0];
}
aobj.addEventListener("loadedmetadata", function(){
	duration.innerHTML = timeformat(aobj.duration);
});
function changeNameAuthor(n){
		n = parseInt(n);	
		__c("bold black big")[0].textContent = songs[n][0].substr(0,songs[n][0].length-4);
		__c("bold black big")[0].nextElementSibling.nextElementSibling.textContent =songs[n][1];
		duration.innerHTML = timeformat(aobj.duration);
		if(n < songs.length-1){
			__c("fa fa-step-forward pale")[0].title = songs[n+1][0];			
		}
		else{
			__c("fa fa-step-forward pale")[0].title = "it the end song";			
		}
		if(n > 0){
			__c("fa fa-step-backward pale")[0].title = songs[parseInt(n)-1][0];
		}
		else{
			__c("fa fa-step-backward pale")[0].title = "it the first song";	
		}
}
function timeformat(time){
	if(isNaN){
		var strdur = Math.floor(time/60).toString().length < 2 ? "0" + Math.floor(time/60).toString() : Math.floor(time/60).toString();
		strdur += ":";
		strdur += Math.floor(time%60).toString().length < 2 ? "0" + Math.floor(time%60).toString() : Math.floor(time%60).toString();
		return strdur;		
	}
	return "00:00";
}
function setLastSong(){
	localStorage.setItem("last_song", playing_id);
}
function play(n){
	n = parseInt(n);
	changeSRC(n);
	duration.innerHTML = timeformat(aobj.duration);
	changeNameAuthor(n);
	playing_id = n;
}
function playLast(){
	var l_song = localStorage.getItem("last_song");
	if(l_song){
		play(l_song);
	}else{
		play(0);
	}
}

function addingSongsHTML(){
	for(i=0;i<songs.length;i++){
		html = "<li data-id='"+i+"'><p onclick=\"this.parentElement.click()\">" + songs[i][0] + "</p>" + "<span id='author' onclick=\"this.parentElement.click()\">";
		html += songs[i][1] + "</span></li>";
		__("songs-list").innerHTML += html;
	}
}
// aobj.addEventListener("load", function(){
// 	consol
// });
//Click on song
__("songs-list").addEventListener("click", function(event){
	value = event.target.getAttribute("data-id");
	if(value != null){
		changeSRC(value);
		changeNameAuthor(value);
		playing_id = value;
		playpause.className = "fa fa-pause play-icon";
		aobj.play();
		__c("menu-burger")[0].click();
	}

}, true);

aobj.addEventListener("waiting", function(){
	__("msg-buffer").innerHTML = "Please wait, Song is loading";
});
aobj.addEventListener("playing", function(){
	__("msg-buffer").innerHTML = "";
});
addingSongsHTML();
playLast();
}//end of load