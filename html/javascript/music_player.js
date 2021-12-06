/*-----------------------------------------------------------------------------------------------
Title:		...
Author:		Dom
Created:	00/00/2018 - 00:00
Revised: 	00/00/2018 - 00:00
-----------------------------------------------------------------------------------------------*/
function generate_music_player() {

	document.write("<center><p></br></p></center>");

	document.write("<audio controls autoplay loop id='audio'>");
	document.write("<source src='html/audio/" + music + ".ogg' type='audio/ogg'>");
	document.write("<p>Your browser does not support the audio element.</p>");	
	document.write("</audio>");

	document.write("<center><p>" + music + "</p></center>");

	var audio = document.getElementById("audio");
	audio.volume = 0.1;
};

if (music != "null") {
	generate_music_player();
}
