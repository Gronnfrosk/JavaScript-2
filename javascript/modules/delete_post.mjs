import { removePost } from "../api/posts/delete.mjs";
import * as postMethods from "../api/posts/index.mjs";

export async function deletePost() {
	const deleteBtn = document.querySelectorAll(".delete-btn");
	//console.log(deleteBtn);

	for (let i = 0; i < deleteBtn.length; i++) {
		deleteBtn[i].addEventListener("click", () => {
			const deleteConfirm = "Are you sure you want to delete this post?";

			if (confirm(deleteConfirm)) {
				removePost(deleteBtn[i].id);
				//console.log(postsPosts[i].id);
				//console.log(deleteBtn[i].id);
				localStorage.setItem("postId", deleteBtn[i].id);
				window.location.reload();

				const postId = localStorage.getItem("postId");
				console.log(postId);
				if (postMethods.getPost(postId)) {
					alert("You can't delete other users post");
					localStorage.removeItem("postId");
				}
			}
		});
	}
}
