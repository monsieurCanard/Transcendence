export async function loadTranslations() {
	return fetch('translation.json')
		.then((response) => response.json())
		.catch((error) => {
			console.error('Error:', error);
		});
}

export function changeLanguage(translate) {
	const language = localStorage.getItem('lang') || sessionStorage.getItem('lang') || 'en';

	if (!translate[language]) {
		return;
	}
	const lang = translate[language];
	const elements = document.querySelectorAll('[data-translate]');
	elements.forEach((element) => {
		const key = element.getAttribute('data-translate');
		if (lang[key]) {
			if (element.tagName === 'INPUT' || element.tagName === 'TEXTAREA') {
				element.placeholder = lang[key];
			} else if (element.tagName === 'A' || element.tagName === 'BUTTON' || element.tagName === 'LABEL') {
				element.textContent = lang[key];
			} else {
				element.childNodes.forEach((node) => {
					if (node.nodeType === Node.TEXT_NODE) {
						node.textContent = lang[key];
					}
				});
			}
		}
	});
}

export async function initializeTranslation() {
	const translations = await loadTranslations();
	if (!translations) {
		return Promise.reject('Failed to load translations');
	}
	return translations;
}

export function restoreSaveLanguage() {
	const saveLang = localStorage.getItem('lang');
	if (saveLang) {
		const saveLangBox = document.getElementById('saveLanguage');
		saveLangBox.checked = true;
		document.getElementById('lang').value = saveLang || 'en';
	}
}