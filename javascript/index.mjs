import * as listeners from "./modules/index.mjs";
import * as templates from "./templates/index.mjs";
import * as postMethods from "./api/posts/index.mjs";

const path = location.pathname;

/**
 * This conditional statement controls which function is called at different URL location.
 * @param {string} path This is a string containing the path of the URL for the location
 * @function postFeatures() This function calls posts features allowing viewing, posting, updating and deleting of post on site.
 * @param {Array} posts This is an array of post data retrieved from API.
 * @param {element} Container This is the html location to render the function. (div with id allPosts)
 *
 */
if (path === "/html/login.html") {
	listeners.setLoginFormListener();
} else if (path === "/html/register.html") {
	listeners.setRegisterFormListener();
} else if (path === "/index.html" || path === "/html/profile.html") {
	listeners.logout();
	listeners.checkUser();

	//show post feed, search and filter
	postMethods.getPosts();

	// Create post
	listeners.setCreatePostFormListener();

	//Delete posts
	listeners.deletePost();

	// Update post
	listeners.setUpdatePostFormListener();

	if (path === "/html/profile.html") {
		templates.displayProfile();
	}
} else if (path === "/html/specific_post.html") {
	listeners.displaySpecificPost();
}
