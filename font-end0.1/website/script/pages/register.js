export function renderRegister() {
	return `
	<div class="container-center">
		<div class="login">
			<h1 class="display-1" data-translate="register">Register</h1>
			<form id="loginForm">
				<div class="form-group mb-3 mt-3">
					<input type="text" id="username" placeholder="Username" class="form-control" data-translate="username" required>
				</div>
				<div class="form-group mb-3">
					<input type="password" id="inputpassword6" placeholder="Password" class="form-control" data-translate="password" required>
				</div>
				<div class="form-group mb-3">
					<input type="password" id="verif_inputpassword6" placeholder="Repeat Password" class="form-control" data-translate="verif_password" required>
					<button type="submit" class="btn btn-primary" data-translate="create_account">Create Account</button>
				</div>
				</form>
				<p>
				<button id="loadLogin" class="btn btn-secondary" data-translate="back-link">Back</button>
				</p>
		</div>
	</div>`;
}