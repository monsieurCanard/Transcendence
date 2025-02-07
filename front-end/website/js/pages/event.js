import { navigateTo } from '../app.js';

function handleSaveLanguageLoginLoadClick(event) {
	event.preventDefault();
	const lang = document.getElementById('lang').value;
	const checkbox = document.getElementById('saveLanguage');
	
	if (checkbox.checked) {
		localStorage.setItem('lang', lang);
	} else {
		sessionStorage.setItem('lang', lang);
		localStorage.removeItem('lang');
	}
	navigateTo('login');
}

function handleHomeLoadClick(event) {
	event.preventDefault();
	navigateTo('home');
	const saveLangBox = document.getElementById('saveLanguage');
	const saveLang = localStorage.getItem('lang');

	if (saveLang) {
		saveLangBox.checked = true;
		document.getElementById('lang').value = saveLang || 'en';
	}
}

async function handleLoginSubmit(event) {
	event.preventDefault();
	const formData = new FormData(event.target);
	const data = {
		username: formData.get('username'),
		password: formData.get('inputpassword6')
	};

	try {
		const response = await fetch('http://localhost:3000/api/login', {
			method: 'POST',
			headers: {
				'Content-Type': 'application/json'
			},
			body: JSON.stringify(data)
		});
		const result = await response.json();

		if (response.ok)
			console.log(result);
		else
			console.error(result);
		
	}
	catch (error) {
		console.error(error);
	}
}

function handleLogin42Submit(event) {
	event.preventDefault();
	const clientId = 'u-s4t2ud-79c4e610d0b51b5eda849150fc3fafc501417bf6961ae42b0a7f0de74510af58';
	const redirectUri = 'https://transcenduck.fr/auth/callback';
	window.location.href = `https://api.intra.42.fr/oauth/authorize?client_id=${clientId}&redirect_uri=${redirectUri}&response_type=code`;
}

export function addEventListeners() {
	const allEvents = [
		{ id: 'loadRegister', event: 'click', func: () => navigateTo('register') },
		{ id: 'loadLogin', event: 'click', func: () => navigateTo('login') },
		{ id: 'loadHome', event: 'click', func: handleHomeLoadClick },
		{ id: 'login42', event: 'click', func: handleLogin42Submit },
		{ id: 'loginForm', event: 'submit', func: handleLoginSubmit },
		{ id: 'saveLangAndLoginLoad', event: 'click', func: handleSaveLanguageLoginLoadClick },
		{ id: 'loadGameBoard', event: 'click', func: () => navigateTo('gameboard') }
	];

	allEvents.forEach(({ id, event, func }) => {
		const element = document.getElementById(id);
		if (element) {
			element.addEventListener(event, func);
		}
	});
}
