import * as listeners from "./modules/index.mjs";
import * as templates from "./templates/index.mjs";
import * as postMethods from "./api/posts/index.mjs";

const path = location.pathname;

if (path === "/html/login.html") {
	listeners.setLoginFormListener();
} else if (path === "/html/register.html") {
	listeners.setRegisterFormListener();
} else if (path === "/index.html") {
	listeners.setCreatePostFormListener();
	listeners.setUpdatePostFormListener();
}

console.log("Hello");

if (path === "/index.html" || path === "/html/profile.html") {
	async function testTemplate() {
		const posts = await postMethods.getPosts();
		const container = document.querySelector("#allPosts");
		templates.renderPostTemplates(posts, container);
	}

	testTemplate();
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
