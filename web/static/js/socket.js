import {Socket} from "phoenix";

function connect(onPlay) {

	let socket = new Socket("/play", {params: {token: window.userToken}})
	socket.connect()

	// Now that you are connected, you can join channels with a topic:
	let channel = socket.channel("play:sounds", {})
	channel.join()
	  .receive("ok", resp => { console.log("Joined successfully", resp) })
	  .receive("error", resp => { console.log("Unable to join", resp) });

	channel.on("play", payload => { 
		onPlay(payload.notes)
	});
}

export default connect;
