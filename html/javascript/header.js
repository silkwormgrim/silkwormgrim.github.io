/*-----------------------------------------------------------------------------------------------
Title:		...
Author:		Dom
Created:	00/00/2018 - 00:00
Revised: 	00/00/2018 - 00:00
-----------------------------------------------------------------------------------------------*/
var page_title = [
	"[1] Front",
	"[2] Ambrosia",
	"[3] Minetest_Dom",
	"[4] Final",
];
var page_url = [
	"index.html",
	"null",
	"null",
	"final.html",
];
function generate_navigation(x) {
	var path = window.location.pathname;
	var page_current = path.split("/").pop();

	var loc = window.location.pathname;
	var dir = loc.substring(0, loc.lastIndexOf('/'));

	if (page_current != page_url[x] && page_url[x] != "null"){
		// ok
		document.write("<a href='" + dir + "/" + page_url[x]);
		document.write("'>");
		document.write("<div id='nav_active'><p>" + page_title[x] + "</p></div>");
		document.write("</a>");
	}
	else {
		// not ok
		document.write("<div id='nav_inactive'><p>" + page_title[x] + "</p></div>");
	};
};
	// Print OK link.
//	if (page_current == page_url[x]){
//		document.write("<div id='nav'><p>" + page_title[x] + "</p></div>");
//	}
	// Print OK link. not current or null
//	else {
//		document.write("test");
//		document.write("<a href=''" + page_url[x] + ".html'");
//		document.write("<div id='nav'></div>");
//		document.write("</a>");
//	};
//-----------------------------------------------------------------------------------------------
document.write("<div class='post' id='header'>");
document.write("<p style='margin-left:0.5em;'>&#9830; Absinthe Interactive Software</p>");

var i;
for (i = 0; i < page_title.length; i++) {
	generate_navigation(i);
};

document.write("</div>");

//----------------------------------------------------
document.write("<div class='post' id=''>");
		document.write("<audio controls id='audio' style='width:100%;height:48px;'><source src='" + var_track + "' type='audio/ogg'>Your browser does not support the audio element.</audio>");
		var audio = document.getElementById("audio"); audio.volume = 0.2;
document.write("</div>");
//-----------------------------------------------------------------------------------------------
//<script>var audio = document.getElementById("audio"); audio.volume = 0.2;</script>
