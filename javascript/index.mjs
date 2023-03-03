console.log("Hello");

import * as listeners from "./modules/index.mjs";
import * as templates from "./templates/index.mjs";
import * as postMethods from "./api/posts/index.mjs";
import { logout } from "./api//auth/logout.mjs";

const path = location.pathname;

if (path === "/html/login.html") {
	listeners.setLoginFormListener();
} else if (path === "/html/register.html") {
	listeners.setRegisterFormListener();
} else if (path === "/index.html") {
	listeners.setCreatePostFormListener();
	listeners.setUpdatePostFormListener();
	listeners.checkUser();
	logout();
} else if (path === "/html/profile.html") {
	listeners.setCreatePostFormListener();
	listeners.setUpdatePostFormListener();
	listeners.checkUser();
	logout();
}

if (path === "/index.html" || path === "/html/profile.html") {
	async function postFeatures() {
		//Create posts
		const posts = await postMethods.getPosts();
		const container = document.querySelector("#allPosts");
		templates.renderPostTemplates(posts, container);

		//Delete posts
		const deleteBtn = document.querySelectorAll(".delete-btn");
		listeners.deletePost();

		//Search posts
		listeners.fetchPostsWithToken();
	}

	postFeatures();

	//postMethods.removePost(1);
}

//import { createPost } from "./api/posts/post.mjs";
//import { updatePost } from "./api/posts/put.mjs";
//import { removePost } from "./api/posts/delete.mjs";
//import * as post from "./api/posts/index.mjs";

//createPost({
//	title: "Hello",
//	body: "Welcome",
//});

//updatePost({
//	id: 3742,
//	title: "Hello once again",
//	body: "Welcome once more",
//});

//removePost(3733);

//post.getPosts().then(console.log);
//post.getPost(3742).then(console.log);
