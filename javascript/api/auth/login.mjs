import { API_SOCIAL_URL } from "../constants.mjs";
import * as storage from "../../storage/token.mjs";

const action = "/auth/login";
const method = "post";

/**
 * This async function sends an API "POST" request and informs if successful or not.
 * @param {Object} profile The data that will be sent to the "POST" request.
 * @param {String} loginURL This is the url needed for "POST" request.
 * @param {String} method The HTTP request method "POST".
 * @param {string} accessToken This is the localStorage access token value.
 * @param {string} user This is the localStorage user profile data value.
 */
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

	if (response.ok) {
		window.location.href = "/index.html";
		alert("Welcome to GreenFrog! You are now logged in.");
	} else {
		alert("Error! The combination of user name and password may be incorrect or user is not registered at GreenFrog.");
	}
}
