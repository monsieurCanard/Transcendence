export function renderGameForm() {
	return `<div class="container gameboard">
		<div class="container text-center mt-3 mb-3">
		<h2 data-translate="gameboard" style="text-align: center; color:"white";>Gameboard</h2>
		</div>
		<div class="row">
			
		<div class="col-md-6">
			<form id="gameForm">
					
			<div class="form-group mb-3 mt-3">
				<label for="gamename">Choose your ID</label>
				<input type="text" id="gamename" class="form-control" required>
			</div>
					
			<div class="form-group mb-3">
				<div class="form-check mb-3 mt-3">
				<input class="form-check-input" type="radio" name="gameType" id="gameType1" checked>
				<label class="form-check-label" for="gameType1">
				1 PLAYER
				</label>
				</div>
				
				<div class="form-check mb-3 mt-3">
				<input class="form-check-input" type="radio" name="gameType" id="gameType2">
				<label class="form-check-label" for="gameType2">
				2 PLAYER
				</label>
				</div>
				
				<div class="form-check mb-3 mt-3">
				<input class="form-check-input" type="radio" name="gameType" id="gameType3">
				<label class="form-check-label" for="gameType3">
				TOURNAMENT
				</label>
				</div>
			</div>
				
			<button type="submit" class="btn btn-primary">PLAY</button>
			</form>
			</div>`;
}