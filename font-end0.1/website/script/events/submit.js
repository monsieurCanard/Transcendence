export async function loginSubmit(event)
{
	event.preventDefault();
	const formData = new FormData(event.target);
	const data = {
		username: formData.get('username'),
		password: formData.get('inputpassword6')
	};

	try {
		const response = await fetch('http://localhost:3000/api/login', {
			method: 'POST',
			headers: {
				'Content-Type': 'application/json'
			},
			body: JSON.stringify(data)
		});
		const result = await response.json();

		if (response.ok)
			console.log(result);
		else
			console.error(result);
		
	}
	catch (error) {
		console.error(error);
	}
}

export function login42Submit(event)
{
	event.preventDefault();
	const clientId = 'u-s4t2ud-79c4e610d0b51b5eda849150fc3fafc501417bf6961ae42b0a7f0de74510af58';
	const redirectUri = 'https://transcenduck.fr/auth/callback';
	window.location.href = `https://api.intra.42.fr/oauth/authorize?client_id=${clientId}&redirect_uri=${redirectUri}&response_type=code`;
}