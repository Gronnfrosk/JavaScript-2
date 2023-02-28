import { API_SOCIAL_URL } from "../constants.mjs";

const action = "/auth/register";
const method = "post";

export async function register(profile) {
	const registerURL = API_SOCIAL_URL + action;

	const response = await fetch(registerURL, {
		headers: { "Content-type": "application/json" },
		method,
		body: JSON.stringify(profile),
	});

	const result = await response.json();
	console.log(result);
	if (result.statusCode === 400) {
		alert("Profile already exist");
	} else {
		alert("Welcome to GreenFrog! You are a member and can now login to your profile.");
	}

	return result;
}
