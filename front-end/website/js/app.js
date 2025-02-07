import { changeLanguage, initializeTranslation, restoreSaveLanguage } from './localisation/translate.js';
import { renderHome } from './pages/home.js';
import { renderLogin } from './pages/login.js';
import { renderRegister } from './pages/register.js';
import { renderGameBoard } from './pages/gameboard.js';
import { addEventListeners } from './pages/event.js';


const container = document.getElementById('app');
let translate = {};

function loadPage(page)
{
	switch(page) {
		case 'home':
			container.innerHTML = renderHome();
			break;
		case 'login':
			container.innerHTML = renderLogin();
			break;
		case 'register':
			container.innerHTML = renderRegister();
			break;
		case 'gameboard':
			container.innerHTML = renderGameBoard();
			break;
		default:
			container.innerHTML = renderHome();
	}
	localStorage.setItem('current_page', page);
	addEventListeners();

	const lang = localStorage.getItem('lang') || sessionStorage.getItem('lang') || 'en';
	changeLanguage(lang, translate);
}

document.addEventListener('DOMContentLoaded', () => {

	const currentPage = localStorage.getItem('current_page') || 'home';

	initializeTranslation().then((translations) => {
		translate = translations;
		navigateTo(currentPage);
		

	});
});


window.addEventListener('popstate', (event) => {
    const page = event.state ? event.state.page : 'home';
    loadPage(page);
	if (page == 'home')
		restoreSaveLanguage();
});

export function navigateTo(page) {
    history.pushState({ page: page }, '', `#${page}`);
    loadPage(page);
	if (page == 'home')
		restoreSaveLanguage();
}