// ◊ HEADER
// ──────────────────────────

function track_title(music) {
	if (music) {
		document.write(
		"<p>",music,"</p>"
		);
	};
};

function navigator() {
	var pages = [
		"home","index.html",
		"ambrosia","ambrosia.html",
		"minetest","minetest.html",
		"final","final.html"
	];
	var symbol = "&#9830; "
	var symbol2 = "◊"
	var path = window.location.pathname;
	var page_current = path.split("/").pop();
	var loc = window.location.pathname;
	var dir = loc.substring(0, loc.lastIndexOf('/'));

	document.write("<center>");

	var i;
	for (i = 0; i < pages.length/2; i++) {

	// INACTIVE
		if (page_current == pages[i*2+1] || pages[i*2+1] == "null"){
			document.write(
			"<div class='navigator' id='navigator_inactive'>",
			symbol2," ",pages[i*2]," ",symbol2,
			"</div>"
			);
		}
	// ACTIVE
		else {
			document.write(
			"<a href='",dir,"/",pages[i*2+1],"'>",
			"<div class='navigator' id='navigator_active'>",
			symbol2," ",pages[i*2]," ",symbol2,
			"</div>",
			"</a>"
			);
		};
	};
	document.write("</center>");
};

//		document.getElementById("navigator").onclick = navigator.onclick();
