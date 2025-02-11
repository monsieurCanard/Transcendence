export function renderLoginPage() {
	return `<div class='flex flex-col items-center justify-center h-screen space-y-4 text-white'>
	<div class="text-6xl" translate="login">Login</div>
	<input class="p-2 border border-gray-400 rounded w-1/4" placeholder="Username" translate="username" />
	<input class="p-2 border border-gray-400 rounded w-1/4" placeholder="Password" translate="password"/>
	<button class="p-2 bg-blue-500 text-white rounded w-1/4" translate="login">Login</button>
	<button class="p-2 bg-gray-500 text-white rounded w-1/4">Log in with google</button>
	<div class="text-sm" translate="no_account">Don't have an account?</div>
	<div id="loadRegisterPage" class="cursor-pointer" translate="register" >Register</div>
	<button id="loadHome" class="p-2 bg-red-500 text-white rounded w-1/4">Back</button>
</div>
	`
}