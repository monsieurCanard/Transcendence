export async function renderChat() {

let chat = `<div class="col-md-6">
	<div class="d-flex justify-content-between">
		<button id="liveChat" class="btn btn-secondary custom-btn-black" data-translate="live-chat">Live Chat</button>
		<button id="showScores" class="btn btn-secondary custom-btn-white" data-translate="live-chat">All Scores</button>
	</div>
	
	<div class=chat-container>
			<div class="chat-content">`;

const chat_input = `<div class="d-flex justify-content-between chat-input">
			<input type="text" class="form-control chat-type" placeholder="Type your message..." required>
			</div>
		 </div>	
	</div>
</div>`;

try {
	const response = await fetch('https://localhost:8000/api/messages', {
		method: 'POST',
		headers: {
			'Content-Type': 'application/json',
			'Authorization': 'Bearer ' + localStorage.getItem('token')
		},
		body: JSON.stringify({
			token: localStorage.getItem('token'),
		}),
	});
	if (!response.ok) {
		throw new Error('Error with getting messages');
	}

	const messages = await response.json();

	messages.forEach(element => {
		
		let chat_message = `<div class="chat-message">`;

		if (element.username === localStorage.getItem('username'))
			chat_message = `<div class="chat-message-user">`

		chat += chat_message;
		
		chat +=	`<span class="chat-time">${element.time}</span>
			<span class="chat-username">${element.username}</span>`;
		
		if (element.username === localStorage.getItem('username'))
			`<p class="chat-text-user">${element.message}</p>`;
		else
			chat += `<p class="chat-text">${element.message}</p>`;

		chat += `</div> </div> </div>`;
	});
	} catch (error) {
		console.error('Problem with fetching messages:');
	}

	chat += chat_input;
	console.log(chat);
	return chat;
}