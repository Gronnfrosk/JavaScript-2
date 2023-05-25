import { removePost } from "../api/posts/delete.mjs";

/**
 * This function allows to delete posts from API.
 * @param {Element} deleteBtn This is the html location of the element button.
 * @function removePost() This function sends API "DELETE" request with a post id.
 */
function deletePosts() {
	setTimeout(function () {
		const deleteBtn = document.querySelector(".delete-btn");
		if (deleteBtn) {
			deleteBtn.addEventListener("click", () => {
				const deleteConfirm = "Are you sure you want to delete this post?";
				if (confirm(deleteConfirm)) {
					removePost(deleteBtn.id);
					window.location.reload();
					alert("You can't delete other users post");
				}
			});
		}
	}, 500);
}

/**
 * This function allows to delete posts from API after a search.
 * @param {Element} input This is a html element input.
 * @function deletePosts() This function allows to delete posts from API.
 */
function deletePostsSearched() {
	const input = document.querySelector("#search_input");
	if (input) {
		input.addEventListener(
			"keypress",
			(e) => {
				deletePosts();
			},
			500
		);
	}
}

/**
 * This function allows to delete posts from API before and after a search
 * @function deletePosts() This function allows to delete posts from API.
 * @function deletePostsSearched(); This function allows to delete posts from API after a search.
 */
export function deletePost() {
	deletePosts();
	deletePostsSearched();
}
