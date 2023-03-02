export function logout() {
	const logoutButton = document.querySelector("#logout");

	logoutButton.addEventListener("click", () => {
		localStorage.removeItem("token");
		localStorage.removeItem("profile");
		window.location.href = "/html/login.html";
	});
}
