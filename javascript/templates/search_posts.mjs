const container = document.querySelector("#allPosts");
const hide = document.querySelector("#hide");

/**
 * This function uses data from searched posts to display each post in html with and without image.
 * @param {Array} posts Array of searched posts.
 * @param {Array} Array This is a list of data of a post.
 * @param {Element} container This is a html element where all generated posts data are displayed.
 * @param {Element} hide html element to hide unwanted text.
 */

export function showSearchResults(posts) {
	hide.style.display = "none";
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
						<div class="dropdown"><i class="fa-solid fa-pencil py-2 edit-btn dropdown-toggle" id="${id}" title="Edit button. You can't edit other users post" data-bs-toggle="dropdown"></i>
						<form class="dropdown-menu" id="update">
							<div class="mb-3 mx-4">
								<label class="form-label">Post title</label>
								<input type="text" name="title" class="form-control" placeholder="${title}" />
							</div>
							<div class="mb-3 mx-4">
								<label class="form-label">Post message</label>
								<textarea name="body" class="form-control" placeholder="${body}"></textarea>
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
					</div>
					<a href="/html/specific_post.html?postID=${id}"><h5 class="card-title">${title}</h5></a>
					<div class="row px-5 pb-4">
						<img src="${media}" alt="Image for the post: ${title}" class="pe-0">
					</div>
					<p class="card-text">${body}</p>
					<p class="card-text">Tags: ${tags}</p>
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
                    <div title="Delete button. You can't delete other users post">
                        <i class="fa-solid fa-trash-can py-2 delete-btn" id="${id}"></i>
                    </div>
                    <div class="dropdown">
                        <i class="fa-solid fa-pencil py-2 edit-btn dropdown-toggle" id="${id}" title="Edit button. You can't edit other users post" data-bs-toggle="dropdown"></i>
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
                                <input type="url" name="media" class="form-control"></input>
                            </div>
                            
                            <div class="pb-4 text-end mx-3">
                                <button class="btn btn-info">Update post</button>
                            </div>
                        </form>
                        </div>
                    </div>
                    <a href="/html/specific_post.html?postID=${id}"><h5 class="card-title">${title}</h5></a>
                    <p class="card-text">${body}</p>
                    <p class="card-text">Tags: ${tags}</p>
                    <p class="card-text"><small class="text-muted">Posted: ${created}</small></p>
                    <i class="fa-regular fa-user float-end text-info mx-1"></i>
                    <p class="card-text float-end mx-2">Someone</p>
                </div>
            </div>
        </div>`;
		}
	});
}
