/**
 * This function uses data from postsData to display a post in html with and without image.
 * @param {Object} postData The data of one post.
 * @param {Element} container This is a html element where all generated posts data are displayed.
 * @param {Element} hide html element to hide unwanted text.
 */

export function postTemplate(postData) {
	const container = document.querySelector("#allPosts");
	const hide = document.querySelector("#hide");
	hide.style.display = "block";
	if (postData.media) {
		container.innerHTML += `<div class="card mb-3 mt-3">
                <div class="row g-0">
                    <div class="card-body">
                        <div class="float-end">
                            <div title="Delete button. You can't delete other users post">
                                <i class="fa-solid fa-trash-can py-2 delete-btn" id="${postData.id}"></i>
                            </div>
                            <div class="dropdown">
                            <i class="fa-solid fa-pencil py-2 edit-btn dropdown-toggle" id="${postData.id}" title="Edit button. You can't edit other users post" data-bs-toggle="dropdown"></i>
                            <form class="dropdown-menu" id="update">
                                <div class="mb-3 mx-4">
                                    <label class="form-label">Post title</label>
                                    <input type="text" name="title" class="form-control" placeholder="${postData.title}" />
                                </div>
                                <div class="mb-3 mx-4">
                                    <label class="form-label">Post message</label>
                                    <textarea name="body" class="form-control" placeholder="${postData.body}" ></textarea>
                                </div>
                                                                
                                <div class="mb-3 mx-4">
                                    <label class="form-label">Tags</label>
                                    <input type="text" name="tags" class="form-control" placeholder="${postData.tags}"></input>
                                </div>
                                
                                <div class="mb-3 mx-4">
                                    <label class="form-label">Media</label>
                                    <input type="url" name="media" class="form-control" placeholder="${postData.media}"></input>
                                </div>
                                
                                <div class="pb-4 text-end mx-3">
                                    <button class="btn btn-info">Update post</button>
                                </div>
                            </form>
                            </div>
                        </div>
                        <a href="/html/specific_post.html?postID=${postData.id}"><h5 class="card-title">${postData.title}</h5></a>
                        <div class="row px-5 pb-4">
                            <img src="${postData.media}" alt="Image for the post: ${postData.title}" class="pe-0">
                        </div>
                        <p class="card-text">${postData.body}</p>
                        <p class="card-text">Tags: ${postData.tags}</p>
                        <p class="card-text"><small class="text-muted">Posted: ${postData.created}</small></p>
                        <i class="fa-regular fa-user float-end text-info mx-1"></i>
                        <p class="card-text float-end mx-2">Someone</p>
                    </div>
                </div>
            </div>`;
	} else {
		container.innerHTML += `
        <div class="card mb-3 mt-3">
            <div class="row g-0">
                <div class="card-body">
                    <div class="float-end">
                    <div title="Delete button. You can't delete other users post">
                        <i class="fa-solid fa-trash-can py-2 delete-btn" id="${postData.id}"></i>
                    </div>
                    <div class="dropdown">
                        <i class="fa-solid fa-pencil py-2 edit-btn dropdown-toggle" id="${postData.id}" title="Edit button. You can't edit other users post" data-bs-toggle="dropdown"></i>
                        <form class="dropdown-menu" id="update">
                            <div class="mb-3 mx-4">
                                <label class="form-label">Post title</label>
                                <input type="text" name="title" class="form-control" placeholder="${postData.title}"  />
                            </div>
                            <div class="mb-3 mx-4">
                                <label class="form-label">Post message</label>
                                <textarea name="body" class="form-control" placeholder="${postData.body}" ></textarea>
                            </div>
                                                            
                            <div class="mb-3 mx-4">
                                <label class="form-label">Tags</label>
                                <input type="text" name="tags" class="form-control" placeholder="${postData.tags}"></input>
                            </div>
                            
                            <div class="mb-3 mx-4">
                                <label class="form-label">Media</label>
                                <input type="url" name="media" class="form-control"></input>
                            </div>
                            
                            <div class="pb-4 text-end mx-3">
                                <button class="btn btn-info">Update post</button>
                            </div>
                        </form>
                        </div>
                    </div>
                    <a href="/html/specific_post.html?postID=${postData.id}"><h5 class="card-title">${postData.title}</h5></a>
                    <p class="card-text">${postData.body}</p>
                    <p class="card-text">Tags: ${postData.tags}</p>
                    <p class="card-text"><small class="text-muted">Posted: ${postData.created}</small></p>
                    <i class="fa-regular fa-user float-end text-info mx-1"></i>
                    <p class="card-text float-end mx-2">Someone</p>
                </div>
            </div>
        </div>`;
	}
}

/**
 * This function loops though the array of multiple posts and give each post a html template.
 * @param {Array} postDataList This is a array of posts.
 * @param {Element} parent This is the html location to render the function. (div with id allPosts)
 */
export function renderPostTemplates(postDataList, parent) {
	parent.append(...postDataList.map(postTemplate));
}
