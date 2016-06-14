// Brunch automatically concatenates all files in your
// watched paths. Those paths can be configured at
// config.paths.watched in "brunch-config.js".
//
// However, those files will only be executed if
// explicitly imported. The only exception are files
// in vendor, which are never wrapped in imports and
// therefore are always executed.

// Import dependencies
//
// If you no longer want to use a dependency, remember
// to also remove its path from "config.paths.watched".
import "phoenix_html"

// Import local files
//
// Local files can be imported directly using relative
// paths "./socket" or full ones "web/static/js/socket".

import socket from "./socket"
import Synth from "./audiosynth"

const piano = Synth.createInstrument('fat');

function play(note) {
	piano.play(note.note, note.octave, 2);
	document.getElementById("credits").classList.add("visible");
}

const oct2 = "ZSXDCVGBHNJM,L.;/";
const oct3 = "Q2W3ER5T6Y7UI9O0P[=]";
const notes = ["C", "C#", "D", "D#", "E", "F", "F#", "G", "G#", "A", "A#", "B"];

// maps keys to {note, octave}
let keymap = {};
let octave = 3;
for(let oct of [oct2, oct3]) {
	for(let i = 0; i != oct.length; i++) {
		const char = oct[i];
		keymap[char] = {
			note: notes[i % notes.length],
			octave: octave + parseInt(i / notes.length)
		};
	};
	octave++;
}

const hasModifier = e => e.altKey || e.shiftKey || e.ctrlKey || e.metaKey;

document.addEventListener('keydown', function(e){
  	if(hasModifier(e)) {
  		return;
  	}

	const note = keymap[e.key.toUpperCase()];
	if(note) {
    	play(note, note, 2);

    	// suppress browser defaults
  		e.preventDefault(); e.stopPropagation();
	}
});