import { changeLanguage, saveLanguage } from '../i18n/translate'
import { renderPage } from '../main'

export function addAllEventListenOnPage(container : HTMLDivElement) {
	container.addEventListener('click', (event) => {
		const target = event.target as HTMLElement;
		
		if (target.id === 'save_lang') {
			saveLanguage();
		} else if (target.id === 'loadLogin') {
			renderPage('login');
		} else if (target.id === 'loadHome') {
			renderPage('home');
		}
	});
	
	container.addEventListener('change', (event) => {
		const target = event.target as HTMLElement;
		if (target.id === 'language') {
			changeLanguage();
		}
	});
}