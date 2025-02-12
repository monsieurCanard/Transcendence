import './style.css'

import { renderHomePage } from './pages/home'
import { renderLoginPage } from './pages/login'
import { translatePage } from './i18n/translate'
import { addAllEventOnPage } from './events/handler'

const main_container = document.querySelector<HTMLDivElement>('#app')!

function setupPageAndHistory(page: string, updateHistory: boolean = true) {
	translatePage(localStorage.getItem('lang') || sessionStorage.getItem('lang') || 'en')
	localStorage.setItem('current_page', page)
	console.log('Setting up page:', page)
	if (updateHistory)
		history.pushState({ page }, '', `/${page}`)
	addAllEventOnPage();
}

export function renderPage(page: string, updateHistory: boolean = true) {

	switch(page) {
			case 'home':
				main_container.innerHTML = renderHomePage();
				(document.getElementById('language') as HTMLSelectElement).value = localStorage.getItem('lang') || sessionStorage.getItem('lang') || 'en'
				break;
			case 'login':
				main_container.innerHTML = renderLoginPage();
				break;
			default:
				main_container.innerHTML = renderHomePage();
				break;
	}
	setupPageAndHistory(page, updateHistory);
}

document.addEventListener('DOMContentLoaded', () => {
	const page = localStorage.getItem('current_page') || 'home'
	renderPage(page, false)
})

window.addEventListener('popstate', (event) => { 
	const page = event.state?.page || 'home'
	renderPage(page, false)
})