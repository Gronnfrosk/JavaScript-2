export function checkUser() {
	const token = localStorage.getItem("token");
	const userToken = localStorage.getItem("profile");

	if (!token && !userToken) {
		window.location.href = "/html/login.html";
	}
}
