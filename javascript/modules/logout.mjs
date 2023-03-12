/**
 * This function initiate when logout button is clicked and the user logs out by removing JSON Web Tokens.
 * @param {Element} logoutButton This is a html element where a button is displayed.
 */
export function logout() {
	const logoutButton = document.querySelector("#logout");

	logoutButton.addEventListener("click", () => {
		localStorage.removeItem("token");
		localStorage.removeItem("profile");
		window.location.href = "/html/login.html";
	});
}
