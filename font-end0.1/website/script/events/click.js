import { navigateTo } from '../main.js';

export function saveLanguageLoginLoadClick(event)
{
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