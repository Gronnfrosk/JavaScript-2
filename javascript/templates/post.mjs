export function postTemplateA(postData) {
	const container = document.querySelector("#allPosts");

	console.log(postData);

	if (postData.media) {
		container.innerHTML += `<div class="card mb-3 mt-3">
                <div class="row g-0">
                    <div class="card-body">
                        <div class="float-end">
                            <i class="fa-solid fa-pencil px-1" id="${postData.id}"></i>
                            <i class="fa-solid fa-trash-can px-1 id="${postData.id}--${postData.id}"></i>
                        </div>
                        <h5 class="card-title">${postData.title}</h5>
                        <div class="row px-5 pb-4">
                            <img src="${postData.media}" alt="Image for the post: ${postData.title}" class="pe-0">
                        </div>
                        <p class="card-text">${postData.body}</p>
                        <p class="card-text"><small class="text-muted">Posted: ${postData.created}</small></p>
                        <i class="fa-regular fa-user float-end text-info mx-1"></i>
                        <p class="card-text float-end mx-2">${postData.profile}</p>
                    </div>
                </div>
            </div>`;
	} else {
		container.innerHTML += `<div class="card mb-3 mt-3">
        <div class="row g-0">
        <div class="card-body">
            <div class="float-end">
                <i class="fa-solid fa-pencil px-1"></i>
                <i class="fa-solid fa-trash-can px-1"></i>
            </div>
            <h5 class="card-title">${postData.title}</h5>
            <p class="card-text">${postData.body}</p>
            <p class="card-text"><small class="text-muted">Posted: ${postData.created}</small></p>
            <i class="fa-regular fa-user float-end text-info mx-1"></i>
            <p class="card-text float-end mx-2">${postData.author}</p>
        </div>
    </div>
</div>`;
	}
}

export function renderPostTemplate(postData, parent) {
	parent.innerHTML += postTemplateA(postData);
}

export function renderPostTemplates(postDataList, parent) {
	parent.append(...postDataList.map(postTemplateA));
}
