import { updatePost } from "../api/posts/index.mjs";

export async function setUpdatePostFormListener() {
	const form = document.querySelector("#update");

	const url = new URL(location.href);
	const id = url.searchParams.get("id");

	if (form) {
		form.addEventListener("submit", (event) => {
			event.preventDefault();
			const form = event.target;
			const formData = new FormData(form);
			const post = Object.fromEntries(formData.entries());
			const id = document.querySelector(".edit-btn").id;
			const tagsArray = post.tags.split(" ");
			post.tags = tagsArray;
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
			}, 500);
		});
	}
}
