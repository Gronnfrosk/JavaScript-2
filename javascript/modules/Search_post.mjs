import { showSearchResults } from "../templates/search_posts.mjs";

/**
 * This function uses post title and id to display the search results.
 * @param {Element} search This is a html element where search input is displayed.
 * @onkeyup This is a keyboard event that is fired when the search input changes.
 * @param {String} searchInput This is the searched value in lowercase.
 * @param {Number} searchInputNumber This is the searched value in numbers.
 * @param {Function} searchFiltered It filters put posts when post title and search value are included or if post id matches the search number.
 * @function showSearchResults() This is a function for displaying each posts with and without image/media
 */
export function searchPosts(posts) {
	const search = document.querySelector("#search_form");
	search.onkeyup = function (event) {
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
		showSearchResults(searchFiltered);
	};
}
