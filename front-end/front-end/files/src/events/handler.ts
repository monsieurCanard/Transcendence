import { changeLanguage, saveLanguage } from '../i18n/translate'
import { renderPage } from '../main'

export function addAllEventOnPage() {
  const all_events = [
	{ id: 'language', event: 'change', callback: () => { changeLanguage() } },
	{ id: 'save_lang', event: 'click', callback: () => { saveLanguage() } },
	{ id: 'loadLogin', event: 'click', callback: () => { renderPage('login') } },
	{ id: 'loadHome', event: 'click', callback: () => { renderPage('home') } },
  ]
  
  all_events.forEach(event => {
	if (document.getElementById(event.id) !== null)
	  document.getElementById(event.id)!.addEventListener(event.event, event.callback)
  })
}