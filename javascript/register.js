const API_BASE_URL = "https://nf-api.onrender.com";

async function registerUser(url, data) {
	try {
		const postData = {
			method: "POST",
			headers: {
				"Content-Type": "application/json",
			},
			body: JSON.stringify(data),
		};

		const response = await fetch(url, postData);
		console.log(response);
		const json = await response.json();
		console.log(json);
		return json;
	} catch (error) {
		console.log(error);
	}
}

const user = {
	name: "test2_account_ca",
	email: "test2-account-a@noroff.no",
	password: "my2-password",
};

registerUser(`${API_BASE_URL}/api/v1/social/auth/register`, user);
