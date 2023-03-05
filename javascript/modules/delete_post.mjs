import { removePost } from "../api/posts/delete.mjs";

export async function deletePost() {
	const deleteBtn = document.querySelectorAll(".delete-btn");

	for (let i = 0; i < deleteBtn.length; i++) {
		deleteBtn[i].addEventListener("click", () => {
			const deleteConfirm = "Are you sure you want to delete this post?";

			if (confirm(deleteConfirm)) {
				removePost(deleteBtn[i].id);
				window.location.reload();
				alert("You can't delete other users post");
			}
		});
	}
}
