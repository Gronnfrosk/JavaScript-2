import { setRegisterFormListener } from "./modules/register.mjs";
import { setLoginFormListener } from "./modules/login.mjs";

const path = location.pathname;

if (path === "/html/login.html") {
	setLoginFormListener();
} else if (path === "/html/register.html") {
	setRegisterFormListener();
}
