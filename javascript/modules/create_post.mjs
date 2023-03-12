import { createPost } from "../api/posts/index.mjs";

/**
 * This function triggers by a form submit and creates a post by sending request to API.
 * @param {Element} formCreate This is a html element where a form is displayed.
 * @param {Class} formData This is a collection of data to form.
 * @param {Object} post This is a collection of data by key and value from submit form.
 * @param {Array} tagsArray This is an array of tags to target post.
 * @function cratePost() This function Sends API request "POST" with post data.
 * @setTimeout Reloads page after 1 second after submit.
 */
export function setCreatePostFormListener() {
	const formCreate = document.querySelector("#create");

	formCreate.addEventListener("submit", (event) => {
		event.preventDefault();
		const form = event.target;
		const formData = new FormData(form);
		const post = Object.fromEntries(formData.entries());
		const tagsArray = post.tags.split(" ");
		post.tags = tagsArray;

		// send it to the API
		createPost(post);

		setTimeout(() => {
			window.location.reload();
		}, 1000);
	});
}
