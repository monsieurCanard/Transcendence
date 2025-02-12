export function renderLoginPage() {
	return `<div class='flex flex-col items-center justify-center h-screen space-y-4 text-white'>
	<div class="text-6xl" translate="login">Login</div>
	<input class="p-2 border border-gray-400 rounded w-1/4 ring-orange-400 focus:ring-2 focus:outline-none"
	 placeholder="Username" translate="username" />
	<input class="p-2 border border-gray-400 rounded w-1/4 ring-orange-400 focus:ring-2 focus:outline-none" placeholder="Password" translate="password"/>
	<button class="p-2 bg-black text-white rounded w-1/4 hover:cursor-pointer hover:ring-2 ring-orange-400" translate="login">Login</button>
	
	<button class="flex flex-row bg-white text-black rounded-full w-1/4 items-center hover:cursor-pointer hover:ring-2 ring-red-400">
	<img src="/logo_google.png" class="w-10 h-8" alt="Google logo" />
	Continue with Google
	</button>
	
	<div class="flex flex row">
	<div class="p-2" translate="no_account">Don't have an account? </div>
	<div id="loadRegisterPage" class="cursor-pointer  p-2 bold underline" translate="register" >Register</div>
	</div>
	<button id="loadHome" class="p-2 bg-red-500 text-white rounded w-1/4">Back</button>
</div>
	`
}