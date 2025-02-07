export function renderHome() {
	return '\
	<div class="container-center">\
	<img src="img/logo.svg" alt="Placeholder image" />\
	<form id="langForm">\
		<div class="form-group mb-3 mt-3">\
			<select id="lang" class="form-select">\
				<option value="en">English</option>\
				<option value="fr">Français</option>\
				<option value="es">Espagnol</option>\
			</select>\
			<div class="checkbox">\
				<label><input type="checkbox" id="saveLanguage"> Save Choice</label>\
			</div>\
			<button class="btn btn-link" id="saveLangAndLoginLoad">\
				<i class="bi bi-play-fill"></i>\
			</button>\
			</div>\
	</form>\
	</div>';
}