import './style.css'

import { renderHomePage } from './pages/home'
import { renderLoginPage } from './pages/login'
import { translatePage, changeLanguage, saveLanguage } from './i18n/translate'

const main_container = document.querySelector<HTMLDivElement>('#app')!

function addAllEventOnPage() {
  const all_events = [
    { id: 'language', event: 'change', callback: () => { changeLanguage() } },
    { id: 'save_lang', event: 'click', callback: () => { saveLanguage() } },
    { id: 'loadLogin', event: 'click', callback: () => { renderPage('login') } },
  ]
  
  all_events.forEach(event => {
    if (document.getElementById(event.id) !== null)
      document.getElementById(event.id)!.addEventListener(event.event, event.callback)
  })
}

function renderPage(page: string) {

  switch(page) {
      case 'home':
        main_container.innerHTML = renderHomePage();
        break;
      case 'login':
        main_container.innerHTML = renderLoginPage();
        break;
      default:
        main_container.innerHTML = renderHomePage();
        break;
  }
  translatePage(localStorage.getItem('lang') || sessionStorage.getItem('lang') || 'en')
  localStorage.setItem('current_page', page)
  addAllEventOnPage()
}



document.addEventListener('DOMContentLoaded', () => {
  const page = localStorage.getItem('current_page') || 'home'
  renderPage(page)
})



window.addEventListener('popstate', () => { 
  const page = localStorage.getItem('current_page')!
  renderPage(page)
})