// Delete post
import { API_SOCIAL_URL } from "../constants.mjs";
import { authFetch } from "../auth_fetch.mjs";

const action = "/posts";
const method = "delete";

/**
 * This async function sends an API "DELETE" request.
 * @param {Number} id The id number of a post
 * @param {string} deletePostURL This is the url needed for "DELETE" request.
 * @param {string} method The HTTP request method "DELETE".
 */
export async function removePost(id) {
	if (!id) {
		throw new Error("Delete requires an ID!");
	}

	const deletePostURL = `${API_SOCIAL_URL}${action}/${id}`;

	const response = await authFetch(deletePostURL, {
		method,
	});

	return await response.json();
}
