export function renderLogin() {
	return `
	<div class="container-center">
		<div class="login">
			<h1 class="display-1" data-translate="login">Login</h1>
			<form id="loginForm">
				<div class="form-group mb-3 mt-3">
					<input type="text" id="username" placeholder="Username" class="form-control" data-translate="username" required>
				</div>
				<div class="form-group mb-3">
					<input type="password" id="inputpassword6" placeholder="Password" class="form-control" data-translate="password" required>
					<button type="submit" class="btn btn-primary" data-translate="login">Login</button>
					<button id="login42" class="btn btn-primary" data-translate="login42">Login with 42</button>
				</div>
				</form>
				<p data-translate="no_account"> Don't have an account yet?
				</p>
				<button id="loadRegister" class="btn btn-urgent" data-translate="register">Create an account</button>
				<button id="loadHome" class="btn btn-secondary" data-translate="back-link">Back</button>
				<button id="loadGameBoard" class="btn btn-urgent">SKIP THIS PART / GO TO GAMEBOARD</button>
		</div>
	</div>`;
}