/*------------------------
 created: 00/00/2018 :: 00:00
 revised: 00/00/2018 :: 00:00
------------------------*/
var pages = [
	"home","index.html",
	"ambrosia","ambrosia.html",
	"minetest","minetest.html",
	"final","final.html"
];

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
			document.write("<li>",symbol,pages[i*2],"</li>");
		}
		// print active_box
		else {
			document.write("<li>","<a href='",dir,"/",pages[i*2+1],"'>");
			document.write(symbol,pages[i*2]);
			document.write("</a>","</li>");
		};
	};
};
function main_function() {
	document.write("<ul>");
	generate_navigation();
	document.write("</ul>");
};

main_function();