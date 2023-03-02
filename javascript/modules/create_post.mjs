import { createPost } from "../api/posts/index.mjs";

export function setCreatePostFormListener() {
	const form = document.querySelector("#create");

	form.addEventListener("submit", (event) => {
		event.preventDefault();
		const form = event.target;
		const formData = new FormData(form);
		const post = Object.fromEntries(formData.entries());

		// send it to the API
		createPost(post);

		setTimeout(() => {
			window.location.reload();
		}, 500);
	});
}