/*-----------------------------------------------------------------------------------------------
Title:		...
Author:		Dom
Created:	00/00/2018 - 00:00
Revised: 	00/00/2018 - 00:00
-----------------------------------------------------------------------------------------------*/
var page_title = [
	"[0] Front Page",
	"[1] Placeholder",
	"[2] Placeholder",
	"[3] Final Page",
];
var page_url = [
	"index",
	"null",
	"null",
	"page_final",
];
function link_print(x) {
	var path = window.location.pathname;
	var page_current = path.split("/").pop();
	// Print NULL link.
	if (page_current = page_url[x] + ".html" || page_url[x] == "null"){
		document.write("<div id='nav_inactive'><p>" + page_title[x] + "</p></div>");
	}
	// Print OK link.
	else {
		document.write("<div id='nav_active'><a href='" + page_url[x] + ".html'></a></div>");
	};
};
//-----------------------------------------------------------------------------------------------
document.write("<p>&#9830; Absinthe Interactive Software</p>");

var i;
for (i = 0; i < page_title.length; i++) {
	link_print(i);
};

document.write("</br></br>");
