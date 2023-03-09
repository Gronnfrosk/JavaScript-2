import { updatePost } from "../api/posts/index.mjs";

/**
 * This function triggers by a form submit that updates the target post by adding new title, body, tags and/or media and afterwards reload page.
 * @param {Element} form This is a html element where a form is displayed.
 * @param {Class} formData This is a collection of data to form.
 * @param {Object} post This is a collection of data by key and value from submit form.
 * @param {Number} id This is the target id number retrieved from form buttons id.
 * @param {Array} tagsArray This is an array of tags to target post.
 * @setTimeout Reloads page after 1 second after submit.
 */
export function setUpdatePostFormListener() {
	const form = document.querySelector("#update");

	if (form) {
		form.addEventListener("submit", (event) => {
			event.preventDefault();
			const form = event.target;
			const formData = new FormData(form);
			const post = Object.fromEntries(formData.entries());
			const id = document.querySelector(".edit-btn").id;
			post.id = id;

			if (!post.title) {
				delete post.title;
			}
			if (!post.body) {
				delete post.body;
			}
			if (!post.tags) {
				delete post.tags;
			}
			if (!post.media) {
				delete post.media;
			}

			// send it to the API
			updatePost(post);

			setTimeout(() => {
				window.location.reload();
			}, 1000);
		});
	}
}
