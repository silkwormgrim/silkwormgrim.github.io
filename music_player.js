var audio = document.getElementById("audio_player");

function sleep(milliseconds){
	const date = Date.now();
	let currentDate = null;
	do {
		currentDate = Date.now();
	} while (currentDate - date < milliseconds);
};

var audio_player = {
	init() {
		audio.volume = 0.5;
	},
	play() {
		audio.play();
	},
	pause() {
		audio.pause();
	},
	percent() {
		var min = Math.round(audio.currentTime);
		var max = Math.round(audio.duration);
		var result = Math.floor((min / max) * 100);

		if (result == 0) {
			result = 1;
		};
		return result;
	},
	update() {
		var min = Math.round(audio.currentTime);
		var max = Math.round(audio.duration);

		console.log(min,"/",max);
		console.log("percent: ",audio_player.percent());
		document.getElementById("progress_bar").style.width = audio_player.percent() + "%";
		sleep(1000);
	}
};

// IMPLEMENTATION

if (music) {
	audio_player.init();
	audio.ontimeupdate = function() {
		audio_player.update();
	};
	audio.onplaying = function() {
	//	alert("now_playing");
	};
}
else {
	console.log("error_initialising_audio_player");
};
