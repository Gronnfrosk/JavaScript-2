import { setRegisterFormListener } from "./modules/register.mjs";
import { setLoginFormListener } from "./modules/login.mjs";

const path = location.pathname;

console.log("Hello");

if (path === "/html/login.html") {
	setLoginFormListener();
} else if (path === "/html/register.html") {
	setRegisterFormListener();
}
