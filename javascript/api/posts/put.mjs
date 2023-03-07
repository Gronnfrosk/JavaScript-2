// Update post
import { API_SOCIAL_URL } from "../constants.mjs";
import { authFetch } from "../auth_fetch.mjs";

const action = "/posts";
const method = "put";

/**
 * This async function sends an API "PUT" request.
 * @param {Object} postData The data that will be sent to the "PUT" request.
 * @param {string} updatePostURL This is the url needed for "PUT" request.
 * @param {string} method The HTTP request method "PUT".
 */
export async function updatePost(postData) {
	if (!postData.id) {
		throw new Error("Update requires a postID!");
	}

	const updatePostURL = `${API_SOCIAL_URL}${action}/${postData.id}`;

	const response = await authFetch(updatePostURL, {
		method,
		body: JSON.stringify(postData),
	});

	return await response.json();
}
