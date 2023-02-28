export function postTemplateA(postData) {
	const container = document.querySelector("#allPosts");

	container.innerHTML += `<div class="card mb-3 mt-3">
                <div class="row g-0">
                    <div class="card-body">
                    <h5 class="card-title">${postData.title}</h5>
                    <p class="card-text">${postData.body}</p>
                    <p class="card-text"><small class="text-muted">${postData.created}</small></p>
                    <i class="fa-regular fa-user float-end text-info"></i>
                    </div></div></div>`;
}

export function renderPostTemplate(postData, parent) {
	parent.innerHTML += postTemplateA(postData);
}

export function renderPostTemplates(postDataList, parent) {
	parent.append(...postDataList.map(postTemplateA));
}
