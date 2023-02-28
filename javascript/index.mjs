import { setRegisterFormListener } from "./modules/register.mjs";
import { setLoginFormListener } from "./modules/login.mjs";
//import * as post from "./api/posts/index.mjs";

const path = location.pathname;

if (path === "/html/login.html") {
	setLoginFormListener();
} else if (path === "/html/register.html") {
	setRegisterFormListener();
}

//post.cratePost();
//post.deletePost();
//post.updatePost();
//post.getPost();
//post.getPosts().then(console.log);
