// Read post
import { API_SOCIAL_URL, API_SOCIAL_POSTS } from "../constants.mjs";
import { authFetch } from "../auth_fetch.mjs";
import { load } from "../../storage/token.mjs";
import * as searchPosts from "../../modules/index.mjs";
import * as templates from "../../templates/index.mjs";

const action = "/posts";

export async function getPosts() {
	const getPostURL = `${API_SOCIAL_URL}${action}`;

	const response = await authFetch(getPostURL);

	return await response.json();
}

export async function getPost(id) {
	if (!id) {
		throw new Error("Get requires an ID!");
	}
	const getPostURL = `${API_SOCIAL_URL}${action}/${id}`;

	const response = await authFetch(getPostURL);

	return await response.json();
}

export async function searchFilter() {
	try {
		const token = load("token");

		const fetchPosts = {
			method: "GET",
			headers: {
				"Content-Type": "application/json",
				Authorization: `Bearer ${token}`,
			},
		};

		const response = await fetch(API_SOCIAL_POSTS, fetchPosts);
		const result = await response.json();

		searchPosts.searchPosts(result);
		templates.filterPosts(result);
	} catch (error) {
		console.log(error);
	}
}
