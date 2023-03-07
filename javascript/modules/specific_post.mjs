import * as postMethods from "../api/posts/index.mjs";
import * as templates from "../templates/index.mjs";
import { removePost } from "../api/posts/delete.mjs";
import * as listeners from "../modules/index.mjs";

/**
 * This function gets id from query string sends API request "GET" to display post. Also contains feature as delete and update post.
 * @param {string} queryString This is the last part of of the url and starts with ?
 * @param {object} params iterate over key/value pairs in the same order as they appear in the query string.
 * @param {Number} id This id number of post gotten from querystring.
 * @param {Object} post This is a collection of data by key and value from submit form.
 * @function postTemplate() This function uses data from post to display a post in html with or without image.
 * @param {Element} deleteBtn This is the html location of the element button.
 * @function removePost() This async function sends an API "DELETE" request.
 * @function setUpdatePostFormListener() This function triggers by a form submit that updates the target post by adding new title, body, tags and/or media and afterwards reload page.
 */
export async function displaySpecificPost() {
	// view post
	const queryString = document.location.search;
	const params = new URLSearchParams(queryString);
	const id = params.get("postID");
	const post = await postMethods.getPost(id);
	templates.postTemplate(post);

	console.log(queryString);
	console.log(params);
	console.log(post);

	//Delete Post
	const deleteBtn = document.querySelector(".delete-btn");
	deleteBtn.addEventListener("click", () => {
		const deleteConfirm = "Are you sure you want to delete this post?";

		if (confirm(deleteConfirm)) {
			removePost(id);
			alert("Your post was successfully deleted.");
			window.location.href = "/index.html";
		}
	});
	// Update post
	listeners.setUpdatePostFormListener();
}
