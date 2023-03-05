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
} else if (path === "/index.html" || path === "/html/profile.html") {
	async function postFeatures() {
		// Check user or logout
		listeners.checkUser();
		logout();

		//show post feed
		const posts = await postMethods.getPosts();
		const container = document.querySelector("#allPosts");
		templates.renderPostTemplates(posts, container);

		// Create post
		listeners.setCreatePostFormListener();

		//Delete posts
		listeners.deletePost();

		//Search and filter posts
		postMethods.searchFilter();

		// Update post
		listeners.setUpdatePostFormListener();
	}

	postFeatures();
}
