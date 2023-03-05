import { createPost } from "../api/posts/index.mjs";

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
		}, 500);
	});
}
