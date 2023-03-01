import { createPost } from "../api/posts/index.mjs";

export function setCreatePostFormListener() {
	const form = document.querySelector("#create");

	form.addEventListener("submit", (event) => {
		event.preventDefault();
		const form = event.target;
		const formData = new FormData(form);
		const post = Object.fromEntries(formData.entries());
		console.log("hello");

		// send it to the API
		createPost(post);
	});
}
