// import { renderNavbar } from './navbar.js';
import { renderChat } from './chat.js';
import { renderGameForm } from './gameForm.js';

let chat_template = `<div class="col-md-6">
	<div class="d-flex justify-content-between">
		<button id="liveChat" class="btn btn-secondary custom-btn-black" data-translate="live-chat">Live Chat</button>
		<button id="showScores" class="btn btn-secondary custom-btn-white" data-translate="live-chat">All Scores</button>
	</div>
	
	<div class=chat-container>
			<div class="chat-content" id="chat-content">`;

			
			

const fake_message = `<div class="chat-message">
<span class="chat-time">12:00</span>
<span class="chat-username">Username</span>
<p class="chat-text">Hello World! akwjdhakjdhakawdjhakwjdhakwjdhakwjdhakwjdhjdhakjwdhkajdhwakjwdhakjwhdakjwdhakjwhdakjwdhakwjhdkajwhdkaujwhdakjwhdakjwdh</p>
</div>`;

const fake_message_user = `<div class="chat-message-user">
<span class="chat-time">12:40</span>
<span class="chat-username">You</span>
<p class="chat-text-user">Hello World! akwjdhakjdhakawdjhakwjdhakwjdhakwjdhakwjdhjdhakjwdhkajdhwakjwdhakjwhdakjwdhakjwhdakjwdhakwjhdkajwhdkaujwhdakjwhdakjwdh</p>
</div>`;


const chat_end = `<div class="d-flex justify-content-between chat-input">
			<input type="text" class="form-control" placeholder="Type your message..." required>
			</div> </div> </div> </div>`;
// async function getChat() {
// 	const chat = await renderChat();
// 	chat_template.getElementById('chat-content').innerHTML = chat;
// }

export function renderGameBoard() {

let navbar = `
	<nav class="navbar navbar-light" style="background-color: #1C1890;">
	<a class="navbar-brand" href="#">
		<img src="img/icon.png" width="30" height="30" class="d-inline-block align-top" alt="iconTranscenduck">
		<span class="nav-text">Transcenduck</span>
	</a>
	<a class="nav-text ml-auto" href="#" id="loadHome" >Username
	<img src="img/icon.png" id="user_icon" width="30" height="30" style="border-radius: 50%;" alt="iconTranscenduck"></a>
</nav>`;


// const navbar = renderNavbar();

const gameForm = renderGameForm();

const chat = chat_template;
console.log(navbar);
console.log(gameForm);
console.log(chat);


return `${navbar} ${gameForm} ${chat_template} ${fake_message} ${fake_message_user} ${chat_end}`;
}