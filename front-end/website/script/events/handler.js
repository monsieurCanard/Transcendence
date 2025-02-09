import { navigateTo } from '../main.js';
import { login42Submit, loginSubmit } from './submit.js';
import { saveLanguageLoginLoadClick } from './click.js';


export function addEventListeners() {
	const allEvents = [
		{ id: 'loadHome', event: 'click', func: () => navigateTo('home') },
		{ id: 'loadLogin', event: 'click', func: () => navigateTo('login') },
		{ id: 'loadRegister', event: 'click', func: () => navigateTo('register') },
		{ id: 'loadGameBoard', event: 'click', func: () => navigateTo('gameboard') },
		{ id: 'login42', event: 'click', func: login42Submit },
		{ id: 'loginForm', event: 'submit', func: loginSubmit },
		{ id: 'saveLangAndLoginLoad', event: 'click', func: saveLanguageLoginLoadClick }
	];

	allEvents.forEach(({ id, event, func }) => {
		const element = document.getElementById(id);
		if (element) {
			element.addEventListener(event, func);
		}
	});
}
