import { API_SOCIAL_URL } from "../constants.mjs";
import * as storage from "../../storage/token.mjs";

const action = "/auth/login";
const method = "post";

export async function login(profile) {
	const loginURL = API_SOCIAL_URL + action;

	const response = await fetch(loginURL, {
		headers: { "Content-type": "application/json" },
		method,
		body: JSON.stringify(profile),
	});

	const { accessToken, ...user } = await response.json();

	storage.save("token", accessToken);

	storage.save("profile", user);

	if (accessToken === undefined) {
		alert("Error! The combination of user name and password may be incorrect or user is not registered at GreenFrog.");
	} else {
		alert("Welcome to GreenFrog! You are now logged in.");
	}
}
