var audio = document.getElementById("audio_player");
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
		var min = audio.currentTime;
		var max = audio.duration;
		var result = Math.round((min / max) * 100);
		return result;
	},
	update() {
	}
};

// IMPLEMENTATION

if (music) {
	audio_player.init();

	audio.ontimeupdate = function() {
		console.log(audio.currentTime,audio.duration);
		console.log("percent: ",audio_player.percent());

		document.getElementById("progress_bar").style.width = audio_player.percent() + "%";
	};

	audio.onplaying = function() {
	//	alert("now_playing");
	};
}
else {
	console.log("error_initialising_audio_player");
};
