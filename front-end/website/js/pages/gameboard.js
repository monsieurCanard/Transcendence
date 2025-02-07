export function renderGameBoard() {
	return `
<nav class="navbar navbar-light" style="background-color: #1C1890;">
	<a class="navbar-brand" href="#">
		<img src="img/icon.png" width="30" height="30" class="d-inline-block align-top" alt="iconTranscenduck">
		<span class="nav-text" data-translate="gameboard">Transcenduck</span>
	</a>
  <a class="nav-text ml-auto" href="#" id="loadHome" >Username
    <img src="img/icon.png" width="30" height="30" style="border-radius: 50%;" alt="iconTranscenduck"></a>
</nav>







	<div class="container">
	<h1 class="display-1" data-translate="gameboard">Gameboard</h1>
		<div class="row">
			<div class="col-md-6">
				<form id="gameForm">
					<div class="form-group mb-3 mt-3">
						<label for="gamename">Game Name</label>
						<input type="text" id="gamename" class="form-control" required>
					</div>
					<div class="form-group mb-3">
						<div class="form-check">
							<input class="form-check-input" type="radio" name="gameType" id="gameType1">
							<label class="form-check-label" for="gameType1">
								LOCAL - 1 PLAYER
							</label>
						</div>
						<div class="form-check">
							<input class="form-check-input" type="radio" name="gameType" id="gameType2">
							<label class="form-check-label" for="gameType2">
								LOCAL - 2 PLAYER
							</label>
						</div>
						<div class="form-check">
							<input class="form-check-input" type="radio" name="gameType" id="gameType3">
							<label class="form-check-label" for="gameType3">
								TOURNAMENT
							</label>
						</div>
					</div>
					<button type="submit" class="btn btn-primary">PLAY</button>
				</form>
			</div>
			<div class="col-md-6">
				<h1>LIVE CHAT</h1>
				<canvas id="gameCanvas" width="400" height="400"></canvas>
				<!-- Ajoutez ici le contenu pour la partie droite -->
			</div>
				<button id="loadLogin" class="btn btn-secondary" data-translate="back-link">Back</button>

		</div>
	</div>`;
}