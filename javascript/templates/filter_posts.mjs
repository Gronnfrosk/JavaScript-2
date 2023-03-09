import { load } from "../storage/token.mjs";

const hideOld = document.querySelector("#hideOld");
const container = document.querySelector("#allPosts");
const params = new URLSearchParams(window.location.search);
const filterParam = params.get("filter");

/**
 * This function gets data from posts and filters posts with, without image/media and oldest by query string.
 * @param {Array} posts Array of posts data.
 * @param {Array} Array This is a list of data of one post.
 * @param {Element} container This is a html element where all generated posts data are displayed.
 * @param {Element} hideOld html element to hide unwanted text.
 * @param {Object} user This is the value of the key profile in the localStorage
 * @param {String} editFeature Contains the html content of the edit and delete features.
 */
export function filterPosts(posts) {
	if (filterParam === "with_img") {
		container.innerHTML = "";
		posts.forEach(function (post) {
			const { id, title, body, tags, media, created, updated, author, reactions, _count } = post;
			const { name, avatar } = author;
			const user = load("profile");
			let editFeature = `
                    <div class="float-end" id="edit">
                        <div title="Delete button">
                            <i class="fa-solid fa-trash-can py-2 delete-btn" id="${id}"></i>
                        </div>
                        <div class="dropdown">
                        <i class="fa-solid fa-pencil py-2 edit-btn dropdown-toggle" id="${id}" title="Update button" data-bs-toggle="dropdown"></i>
                        <form class="dropdown-menu" id="update">
                            <div class="mb-3 mx-4">
                                <label class="form-label">Post title</label>
                                <input type="text" name="title" class="form-control" placeholder="${title}" />
                            </div>
                            <div class="mb-3 mx-4">
                                <label class="form-label">Post message</label>
                                <textarea name="body" class="form-control" placeholder="${body}" ></textarea>
                            </div>
                                                            
                            <div class="mb-3 mx-4">
                                <label class="form-label">Tags</label>
                                <input type="text" name="tags" class="form-control" placeholder="${tags}"></input>
                            </div>
                            
                            <div class="mb-3 mx-4">
                                <label class="form-label">Media</label>
                                <input type="url" name="media" class="form-control" placeholder="${media}"></input>
                            </div>
                            
                            <div class="pb-4 text-end mx-3">
                                <button class="btn btn-info">Update post</button>
                            </div>
                        </form>
                        </div>
                    </div>`;
			if (user.name !== name) {
				editFeature = "";
			}
			if (media) {
				container.innerHTML += `<div class="card mb-3 mt-3">
                <div class="row g-0">
                    <div class="card-body">
                    ${editFeature}
                        <a href="/html/specific_post.html?postID=${id}"><h5 class="card-title">${title}</h5></a>
                        <div class="row px-5 pb-4">
                            <img src="${media}" alt="Image for the post: ${title}" class="pe-0">
                        </div>
                        <p class="card-text">${body}</p>
                        <p class="card-text">Tags: ${tags}</p>
                        <p class="card-text"><small class="text-muted">Posted: ${created}</small></p>
                        <i class="fa-regular fa-user float-end text-info mx-1"></i>
                        <p class="card-text float-end mx-2">${name}</p>
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
				const { id, title, body, tags, media, created, updated, author, reactions, _count } = post;
				const { name, avatar } = author;
				const user = load("profile");
				let editFeature = `
                    <div class="float-end" id="edit">
                        <div title="Delete button">
                            <i class="fa-solid fa-trash-can py-2 delete-btn" id="${id}"></i>
                        </div>
                        <div class="dropdown">
                        <i class="fa-solid fa-pencil py-2 edit-btn dropdown-toggle" id="${id}" title="Update button" data-bs-toggle="dropdown"></i>
                        <form class="dropdown-menu" id="update">
                            <div class="mb-3 mx-4">
                                <label class="form-label">Post title</label>
                                <input type="text" name="title" class="form-control" placeholder="${title}" />
                            </div>
                            <div class="mb-3 mx-4">
                                <label class="form-label">Post message</label>
                                <textarea name="body" class="form-control" placeholder="${body}" ></textarea>
                            </div>
                                                            
                            <div class="mb-3 mx-4">
                                <label class="form-label">Tags</label>
                                <input type="text" name="tags" class="form-control" placeholder="${tags}"></input>
                            </div>
                            
                            <div class="mb-3 mx-4">
                                <label class="form-label">Media</label>
                                <input type="url" name="media" class="form-control" placeholder="${media}"></input>
                            </div>
                            
                            <div class="pb-4 text-end mx-3">
                                <button class="btn btn-info">Update post</button>
                            </div>
                        </form>
                        </div>
                    </div>`;
				if (user.name !== name) {
					editFeature = "";
				}
				if (!media) {
					container.innerHTML += `
        <div class="card mb-3 mt-3">
            <div class="row g-0">
                <div class="card-body">
                ${editFeature}
                    <a href="/html/specific_post.html?postID=${id}"><h5 class="card-title">${title}</h5></a>
                    <p class="card-text">${body}</p>
                    <p class="card-text">Tags: ${tags}</p>
                    <p class="card-text"><small class="text-muted">Posted: ${created}</small></p>
                    <i class="fa-regular fa-user float-end text-info mx-1"></i>
                    <p class="card-text float-end mx-2">${name}</p>
                </div>
            </div>
        </div>`;
				}
			});
		}
	}
	if (filterParam === "old_posts") {
		container.classList.add("reverse");
		hideOld.style.display = "block";
	}
}
