import { load } from "../storage/token.mjs";
import { API_SOCIAL_POSTS } from "../api/constants.mjs";

const container = document.querySelector("#allPosts");
const hide = document.querySelector("#hide");

export async function searchFilter() {
	try {
		const token = load("token");

		const getPosts = {
			method: "GET",
			headers: {
				"Content-Type": "application/json",
				Authorization: `Bearer ${token}`,
			},
		};

		const response = await fetch(API_SOCIAL_POSTS, getPosts);
		const result = await response.json();

		searchPosts(result);
		filterPosts(result);
	} catch (error) {
		console.log(error);
	}
}

function searchPosts(posts) {
	const search = document.querySelector("#search_form");
	search.onkeyup = function (event) {
		const searchInput = event.target.value.trim().toLowerCase();
		//const searchInputNumber = parseInt(searchInput);
		//console.log(searchInputNumber);
		//console.log(typeof searchInput);
		const searchFiltered = posts.filter(function (posts) {
			if (posts.title.toLowerCase().includes(searchInput)) {
				return true;
			}
			//if (posts.id.includes(searchInputNumber)) {
			//	return true;
			//}
		});
		showSearchResults(searchFiltered);
	};
}

function showSearchResults(posts) {
	container.innerHTML = "";
	posts.forEach(function (post) {
		const { title, media, body, id, created, tags } = post;
		if (post.media) {
			container.innerHTML += `
	            <div class="card mb-3 mt-3">
	                <div class="row g-0">
	                    <div class="card-body">
	                        <div class="float-end">
	                            <div title="Delete button. You can't delete other users post"><i class="fa-solid fa-trash-can py-2 delete-btn" id="${id}"></i></div>
	                            <div title="Edit button. You can't edit other users post"><i class="fa-solid fa-pencil py-2" id="${id}"></i></div>
	
	                        </div>
	                        <h5 class="card-title">${title}</h5>
	                        <div class="row px-5 pb-4">
	                            <img src="${media}" alt="Image for the post: ${title}" class="pe-0">
	                        </div>
	                        <p class="card-text">${body}</p>
	                        <p class="card-text"><small class="text-muted">Posted: ${created}</small></p>
	                        <i class="fa-regular fa-user float-end text-info mx-1"></i>
	                        <p class="card-text float-end mx-2">Someone</p>
	                    </div>
	                </div>
	            </div>`;
		} else {
			container.innerHTML += `<div class="card mb-3 mt-3">
	        <div class="row g-0">
	        <div class="card-body">
	            <div class="float-end">
	            <i class="fa-solid fa-pencil px-1" id="${id}"></i>
	            <i class="fa-solid fa-trash-can px-1 delete-btn" id="${id}"></i>
	            </div>
	            <h5 class="card-title">${title}</h5>
	            <p class="card-text">${body}</p>
	            <p class="card-text"><small class="text-muted">Posted: ${created}</small></p>
	            <i class="fa-regular fa-user float-end text-info mx-1"></i>
	            <p class="card-text float-end mx-2">Someone</p>
	        </div>
	    </div>
	</div>`;
		}
	});
}

// filter posts down under
function filterPosts(posts) {
	const params = new URLSearchParams(window.location.search);
	const filterParam = params.get("filter");

	if (filterParam === "with_img") {
		container.innerHTML = "";
		posts.forEach(function (post) {
			const { title, media, body, id, created, tags } = post;
			if (post.media) {
				container.innerHTML += `
                <div class="card mb-3 mt-3">
                    <div class="row g-0">
                        <div class="card-body">
                            <div class="float-end">
                                <div title="Delete button. You can't delete other users post"><i class="fa-solid fa-trash-can py-2 delete-btn" id="${id}"></i></div>
                                <div title="Edit button. You can't edit other users post"><i class="fa-solid fa-pencil py-2" id="${id}"></i></div>
                                
                            </div>
                            <h5 class="card-title">${title}</h5>
                            <div class="row px-5 pb-4">
                                <img src="${media}" alt="Image for the post: ${title}" class="pe-0">
                            </div>
                            <p class="card-text">${body}</p>
                            <p class="card-text"><small class="text-muted">Posted: ${created}</small></p>
                            <i class="fa-regular fa-user float-end text-info mx-1"></i>
                            <p class="card-text float-end mx-2">Someone</p>
                        </div>
                    </div>
                </div>`;
			}
		});
	}
	if (filterParam === "no_img") {
		if (filterParam === "no_img") {
			container.innerHTML = "";
			posts.forEach(function (post) {
				const { title, media, body, id, created, tags } = post;
				if (!post.media) {
					container.innerHTML += `<div class="card mb-3 mt-3">
						<div class="row g-0">
							<div class="card-body">
								<div class="float-end">
								<i class="fa-solid fa-pencil px-1" id="${id}"></i>
								<i class="fa-solid fa-trash-can px-1 delete-btn" id="${id}"></i>
								</div>
								<h5 class="card-title">${title}</h5>
								<p class="card-text">${body}</p>
								<p class="card-text"><small class="text-muted">Posted: ${created}</small></p>
								<i class="fa-regular fa-user float-end text-info mx-1"></i>
								<p class="card-text float-end mx-2">Someone</p>
							</div>
						</div>
					</div>`;
				}
			});
		}
	}
	if (filterParam === "old_posts") {
		container.classList.add("reverse");
		hide.style.position = "absolute";
		hide.style.top = "699px";
	}
}
