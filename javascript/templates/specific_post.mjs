import { load } from "../storage/token.mjs";

/**
 * This function uses data from API request GET to display a post in html with and without image.
 * @param {Object} post The data of one post.
 * @param {Element} container This is a html element where all generated posts data are displayed.
 * @param {String} dateFormat The format of when the post was created.
 * @param {String} postMedia This is the HTML content for post with image.
 * @param {String} editFeature This is the HTML content from edit and delete features.
 * @param {Object} user This is the value of the key profile in the localStorage
 */
export function specificPost(post) {
	const container = document.querySelector("#allPosts");
	const { id, title, body, tags, media, created, updated, author, reactions, _count } = post;
	const { name, avatar } = author;
	const date = new Date(created);
	const dateFormat = date.toLocaleDateString("en-GB");
	const user = load("profile");
	let postMedia = `<img src="${media}" alt="Image for the post: ${title}" class="pe-0">`;
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
		postMedia = "";
	}

	container.innerHTML += `<div class="card mb-3 mt-3">
        <div class="row g-0">
            <div class="card-body">
            ${editFeature}
                <a href="/html/specific_post.html?postID=${id}"><h5 class="card-title">${title}</h5></a>
                <div class="row px-5 pb-4">
                ${postMedia}
                </div>
                <p class="card-text">${body}</p>
                <p class="card-text">Tags: ${tags}</p>
                <p class="card-text"><small class="text-muted">Posted: ${dateFormat}</small></p>
                <i class="fa-regular fa-user float-end text-info mx-1"></i>
                <p class="card-text float-end mx-2">${name}</p>
            </div>
        </div>
    </div>`;
}
