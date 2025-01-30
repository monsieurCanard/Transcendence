  // Définir les différentes "routes" de contenu
const routes = {
	"/www/html/index.html": "Home",
	"/login": "login",
	"/game": "game",
  };
  
  // Fonction pour changer la page (cacher/montrer des sections)
  function navigate(event) {
	event.preventDefault();  // Empêche le comportement par défaut du bouton
	const path = event.target.getAttribute("data-link");
	window.history.pushState({}, "", path);  // Met à jour l'URL sans recharger la page
	renderPage(path);  // Affiche le contenu correspondant
  }
  
  // Fonction pour afficher le contenu basé sur la route
  function renderPage(path) {
	const content = routes[path] || "Page non trouvée";  // Si route non définie, afficher "Page non trouvée"
  
	// Masquer toutes les pages
	document.getElementById("homePage").style.display = "none";
	document.getElementById("loginPage").style.display = "none";
	document.getElementById("gamePage").style.display = "none";
  
	// Afficher la page correspondante
	if (content === "Home") {
	  document.getElementById("homePage").style.display = "block";
	} else if (content === "login") {
	  document.getElementById("loginPage").style.display = "block";
	} else if (content === "game") {
	  document.getElementById("gamePage").style.display = "block";
  }
  }
  
  // Initialiser la page en fonction de l'URL actuelle
  window.onpopstate = () => renderPage(window.location.pathname);
  
  window.onload = function() {
	renderPage(window.location.pathname);
  }

 
  // Événement de clic sur le bouton "Entrer"
  document.getElementById("enterButton").addEventListener("click", function() {
	// Simule un clic sur un lien pour rediriger vers la page de login
	navigate({
	  preventDefault: () => {},
	  target: { getAttribute: () => "/login" }
	});
  });
  document.querySelector("form").addEventListener("submit", function(event) {
    event.preventDefault();
    navigate({
        preventDefault: () => {},
        target: { getAttribute: () => "/game" }
    });
});
  // Initialisation avec la route actuelle
  renderPage(window.location.pathname);