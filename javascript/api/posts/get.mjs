// Read post
import { API_SOCIAL_POSTS_MORE_DETAILS, API_SOCIAL_POSTS, API_SOCIAL_POSTS_MORE_DETAILS_END } from "../constants.mjs";
import { authFetch } from "../auth_fetch.mjs";
import * as searchPosts from "../../modules/index.mjs";
import * as templates from "../../templates/index.mjs";

/**
 * This async function sends an API "Get" request.
 * @param {String} getPostURL This is the url needed for "GET" request.
 * @function searchPosts() This function uses post title and id to display the search results.
 * @function filterPosts() This function gets data from posts and filters posts with, without image/media and oldest by query string.
 * @function showPost() This function displays all posts.
 *
 */
export async function getPosts() {
	const response = await authFetch(API_SOCIAL_POSTS_MORE_DETAILS);
	const result = await response.json();

	searchPosts.searchPosts(result);
	templates.filterPosts(result);
	templates.showPost(result);
}

/**
 * This async function sends an API "GET" request by id.
 * @param {Number} id The id number of a post
 * @param {String} getPostURL This is the url needed for "GET" request.
 */
export async function getPost(id) {
	if (!id) {
		throw new Error("Get requires an ID!");
	}
	const getPostURL = `${API_SOCIAL_POSTS}/${id}${API_SOCIAL_POSTS_MORE_DETAILS_END}`;

	const response = await authFetch(getPostURL);

	return await response.json();
}
