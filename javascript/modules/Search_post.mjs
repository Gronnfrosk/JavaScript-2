import { showSearchResults } from "../templates/search_posts.mjs";

export function searchPosts(posts) {
	const search = document.querySelector("#search_form");
	search.onkeyup = function (event) {
		const searchInput = event.target.value.trim().toLowerCase();
		const searchInputNumber = parseInt(searchInput);
		console.log(typeof searchInputNumber);

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
