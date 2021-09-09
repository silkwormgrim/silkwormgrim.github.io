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
	"ambrosia.html",
	"minetest_dom.html",
	"final.html",
];
function generate_navigation(x) {
	var path = window.location.pathname;
	var page_current = path.split("/").pop();

	var loc = window.location.pathname;
	var dir = loc.substring(0, loc.lastIndexOf('/'));

	if (page_current != page_url[x] && page_url[x] != "null"){
		// ok
		document.write("<li style='float: left;'>");
		document.write("<a href='" + dir + "/" + page_url[x] + "'>");
		document.write(page_title[x]);
		document.write("</a>");
		document.write("</li>");
	}
	else {
		// not ok
		document.write("<li style='float: left;'>");
		document.write("<p>" + page_title[x] + "</p>");
		document.write("</li>");
	};
};
//-----------------------------------------------------------------------------------------------
var i;
for (i = 0; i < page_title.length; i++) {
	generate_navigation(i);
};
//-----------------------------------------------------------------------------------------------
//<script>var audio = document.getElementById("audio"); audio.volume = 0.2;</script>
