import { showPost } from "../templates/post.mjs";

/**
 * This function uses post title and id to display the search results when keypress.
 * @param {Element} search This is a html element where search input is displayed.
 * @param {Element} input This is a html element input.
 * @onkeyup This is a keyboard event that is fired when the search input changes.
 * @param {String} searchInput This is the searched value in lowercase.
 * @param {Number} searchInputNumber This is the searched value in numbers.
 * @param {Function} searchFiltered It filters out posts when post title and search value are included or if post id matches the search number.
 * @function showPost() This is a function for displaying each posts with and without image/media
 */
export function searchPosts(posts) {
	const search = document.querySelector("#search_form");
	const input = document.querySelector("#search_input");
	const container = document.querySelector("#allPosts");

	search.onkeyup = function (event) {
		container.innerHTML = "";
		const searchInput = event.target.value.trim().toLowerCase();
		const searchInputNumber = parseInt(searchInput);
		const searchFiltered = posts.filter(function (posts) {
			if (posts.title.toLowerCase().includes(searchInput)) {
				return true;
			}
			if (posts.id === searchInputNumber) {
				return true;
			}
		});
		showPost(searchFiltered);
	};

	input.addEventListener("keypress", function (e) {
		container.innerHTML = "";
		const searchInput = e.target.value.trim().toLowerCase();
		const searchInputNumber = parseInt(searchInput);
		if (e.key === "Enter") {
			e.preventDefault();
			const searchFiltered = posts.filter(function (posts) {
				if (posts.title.toLowerCase().trim().includes(searchInput)) {
					return true;
				}
				if (posts.id === searchInputNumber) {
					return true;
				}
			});
			showPost(searchFiltered);
		}
	});
}
