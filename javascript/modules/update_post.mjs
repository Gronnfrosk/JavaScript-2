import { updatePost } from "../api/posts/index.mjs";

export function setUpdatePostFormListener() {
	const form = document.querySelector("#update");

	const url = new URL(location.href);
	const id = url.searchParams.get("id");

	if (form) {
		//const post = await getPost(id);
		//
		//form.title.value = post.title;
		//form.body.value = post.body;

		form.addEventListener("submit", (event) => {
			event.preventDefault();
			const form = event.target;
			const formData = new FormData(form);
			const post = Object.fromEntries(formData.entries());
			post.id = id;

			// send it to the API
			updatePost(post);
		});
	}
}
