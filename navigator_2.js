/*------------------------
 created: 00/00/2018 :: 00:00
 revised: 00/00/2018 :: 00:00
------------------------*/
var pages = [
	"home","index.html",
	"ambrosia","ambrosia.html",
	"minetest","minetest.html",
	"final","final.html",
/*
	"et cetera","null",
	"et cetera","null",
	"et cetera","null"
*/
];

var navigator  = {
	on_click() {
		document.write("testing...");
	}
};
//document.getElementById("navigator").onclick = navigator.onclick();

function generate_navigation() {
	var symbol = "&#9830; "
	var path = window.location.pathname;
	var page_current = path.split("/").pop();

	var loc = window.location.pathname;
	var dir = loc.substring(0, loc.lastIndexOf('/'));

	var i;
	for (i = 0; i < pages.length/2; i++) {

	// print inactive_box
	if (page_current == pages[i*2+1] || pages[i*2+1] == "null"){
		document.write("<div class='navigator' id='navigator_inactive'>");
		document.write(symbol,pages[i*2]);
		document.write("</div>");
	}
	// print active_box
	else {
		document.write("<a href='",dir,"/",pages[i*2+1],"'>");
		document.write("<div class='navigator' id='navigator_active'>");
		document.write(symbol,pages[i*2]);
		document.write("</div></a>");
//		document.getElementById("navigator").onclick = navigator.onclick();
	};
	};
};
function main_function() {
	generate_navigation();
};

main_function();