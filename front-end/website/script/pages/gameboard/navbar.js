
export async function renderNavbar() {
	
	try {
		const reponse = await fetch('http://localhost:8000/api/user', {
			method: 'POST',
			headers: {
				'Content-Type': 'application/json',
			},
			body: JSON.stringify({
				token: localStorage.getItem('token'), //Token pour recuperer le bon user dans la list
			}),
		});

		if (!reponse.ok) {
			throw new Error('Error');
		}

		const user = await reponse.json();
		const icon = user.icon;
		const username = user.username;

		
		return `
		<nav class="navbar navbar-light" style="background-color: #1C1890;">
		  <a class="navbar-brand" href="#">
			<img src="img/icon.png" width="30" height="30" class="d-inline-block align-top" alt="iconTranscenduck">
			<span class="nav-text" data-translate="gameboard">Transcenduck</span>
		  </a>
		  <a class="nav-text ml-auto" href="#" id="loadHome">${user.username}
			<img src="${user.iconUrl}" id="user_icon" width="30" height="30" style="border-radius: 50%;" alt="icon_user">
		  </a>
		</nav>`;
	} catch (error) {
		console.error('Error:', error);
		return '';
	}
} 