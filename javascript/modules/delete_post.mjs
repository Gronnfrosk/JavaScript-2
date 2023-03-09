import { removePost } from "../api/posts/delete.mjs";

/**
 * This function allows to delete posts from API
 * @param {Element} deleteBtn This is the html location of the element button.
 * @function removePost() This function sends API "DELETE" request with a post id.
 */
export function deletePost() {
	const deleteBtn = document.querySelectorAll(".delete-btn");

	if (deleteBtn) {
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
}
