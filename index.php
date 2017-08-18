<?php
error_reporting(E_ALL);
ini_set("display_errors",1);
$h  = fopen("logs.txt", "a");
fwrite($h,"IP: ". $_SERVER['HTTP_X_FORWARDED_FOR'] . " | ");
fwrite($h,"agent: ". $_SERVER['HTTP_USER_AGENT'] . " | ");
fwrite($h,"lang: ". $_SERVER['HTTP_ACCEPT_LANGUAGE'] . "\n");

fclose($h);
?>
<!DOCTYPE html>
<html>
<head>
  <meta charset="utf-8">
  <meta name="viewport" content="width=device-width, initial-scale=1.0">
	<title>Listen Your favourites</title>
	<!--font awesome-->
<link href="https://maxcdn.bootstrapcdn.com/font-awesome/4.7.0/css/font-awesome.min.css" rel="stylesheet" integrity="sha384-wvfXpqpZZVQGK6TAh5PVlGOfQNHSoD2xbE+QkPxCAFlNEevoEH3Sl0sibVcOQVnN" crossorigin="anonymous">
<!--roboto font-->
<link href="https://fonts.googleapis.com/css?family=Roboto" rel="stylesheet">
<link href="style.css" rel="stylesheet">
<script type="text/javascript" src="player.js"></script>
<style type="text/css">
  .developer-info{
    width: 100%;
    height: 70px;
    background-color: #e94e60;
    color:white;
    padding-top: 25px; 
    margin-bottom: 8px;
    text-align: center;
    font-size: 25px;
  }
  .developer-info a{
    text-decoration: none;
  }
  .developer-info a:visited, .developer-info a:link{
    color:blue;
  }
</style>
</head>
<body>
<div class="developer-info">
  contact me at: <a target="_blank" href="http://www.beshoynabeih.me">Beshoy Nabeih</a>
</div>
<audio src="" id="audio-obj"></audio>
<!-- <nav>
  <ul>
    <li><a href="#">Login</a></li>
    <li><a href="#">Register</a></li>
  </ul>
</nav> -->
 <div class="container" style="position: relative;">
        <!--header section-->
      <div class="invisible" id="audio-list-items">
        <ul id="songs-list">          
        </ul>
      </div>
     <div class="header">
       <div class="title">
         <h1 class="main-title roboto-font center">Enjoy Your Songs</h1>
         <button class="menu-burger" style="z-index: 110">
           <span class="burger-icon"></span>
           <span class="burger-icon"></span>
           <span class="burger-icon"></span>
         </button>
       </div>
     </div>
   <!--footer section-->
     <div class="footer">
       <div class="profile-img"></div>
       <div class="sub-title">
         <button class="dots-container">
           <span class=" dots"></span>
           <span class=" dots"></span>
           <span class=" dots"></span>    
         </button>
         <h2 class="footer-title center roboto-font">
           <span class="bold black big"></span><br>
           <span></span>
           <p id="msg-buffer"></p>
         </h2>
         <span id="volume" class="footer-icon fa fa-volume-up"></span>
       </div>
       <div class="song-board roboto-font">
         <span class="time bold">00:00</span>
         <span class="song-board-content">
           <span class="song-buffer"></span>
           <span id="seek-time"></span>
           <span class="played-length"></span>
         </span>
         <span class="time bold">00:00</span>
       </div>
       <div class="container-control">
         <div class="song-controllers">
           <span title="repeat this song" class="icon-control fa fa-undo" style="color:rgb(152, 147, 147)"></span>
           <span class="fa fa-step-backward pale"></span>
           <div class="play">
             <span id="play-btn" class="fa fa-play play-icon"></span>
           </div>
           <span  class="fa fa-step-forward pale"></span>
           <span title="shuffle" class="icon-control fa fa-random"></span>
         </div>
       </div>
     </div>
</div>

</body>
</html>
