import { load } from "../storage/token.mjs";

export function displayProfile() {
	const profileContainer = document.querySelector("#profile-detail");
	const profileAvatar = document.querySelector("#avatar");
	const profile = load("profile");

	if (profile.avatar) {
		profileAvatar.innerHTML += `<img src="${profile.avatar}" alt="Image for the user: ${profile.name}" class="pe-0">`;
	} else {
		profileAvatar.innerHTML += `<i class="fa-regular fa-user"></i>`;
	}

	profileContainer.innerHTML += `<div class="fw-bold">- Name: ${profile.name}</div>
                                    <div class="fw-bold">- Email: ${profile.email}</div>
                                    <div class="m-3"> <b>Bio:</b> <br> Neque porro quisquam est qui dolorem ipsum quia dolor sit amet, consectetur, adipisci velit...</div>`;
}
