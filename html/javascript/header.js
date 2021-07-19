/*-----------------------------------------------------------------------------------------------
Title:		...
Author:		Dom
Created:	00/00/2018 - 00:00
Revised: 	00/00/2018 - 00:00
-----------------------------------------------------------------------------------------------*/
var page_title = [
	"[0] front",
	"[1] page 1",
	"[2] page 2",
	"[3] final",
	"[4]",
	"[5]",
	"[6]",
	"[7]",
	"[8]",
	"[9]",
	"[10]",
	"[11]",
	"[12]",
	"[13]",
	"[14]",
	"[15]",
	"[16]",
	"[17]",
	"[18]",
	"[19]",
	"[20]",
];
var page_url = [
	"index",
	"null",
	"null",
	"page_final",
	"null",
	"null",
	"null",
	"null",
	"null",
	"null",
	"null",
	"null",
	"null",
	"null",
	"null",
	"null",
	"null",
	"null",
	"null",
	"null",
	"null",
];
function link_print(x) {
	var path = window.location.pathname;
	var page_current = path.split("/").pop();
	// Print NULL link.
	if (page_current = page_url[x] + ".html" || page_url[x] == "null"){
		document.write("<div id='nav'><p>" + page_title[x] + "</p></div>");
	}
	// Print OK link.
	else {
		document.write("<div id='nav'><a href='" + page_url[x] + ".html'></a></div>");
	};
};
//-----------------------------------------------------------------------------------------------
document.write("<div class='post' id='header'>");
document.write("<p style='margin-left:0.5em;'>&#9830; Absinthe Interactive Software</p>");
var i;
for (i = 0; i < page_title.length; i++) {
	link_print(i);
};
document.write("</div>");

document.write("<div class='post' id=''>");
		document.write("<audio controls id='audio' style='width:100%;height:48px;'><source src='html/audio/ada.ogg' type='audio/ogg'>Your browser does not support the audio element.</audio>");
		var audio = document.getElementById("audio"); audio.volume = 0.2;
document.write("</div>");
//-----------------------------------------------------------------------------------------------
//<script>var audio = document.getElementById("audio"); audio.volume = 0.2;</script>
