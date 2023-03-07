import { load } from "../storage/token.mjs";

export function displayProfile() {
	const profileContainer = document.querySelector("#profile-detail");
	const profile = load("profile");
	console.log(profile);

	profileContainer.innerHTML += `<div class=" fw-bold"><i class="fa-solid fa-star" ></i> Name: ${profile.name}</div>
                                    <div class=" fw-bold"><i class="fa-solid fa-star"></i> Email: ${profile.email}</div>
                                    <div class="m-3"> <b>Bio:</b> <br> Neque porro quisquam est qui dolorem ipsum quia dolor sit amet, consectetur, adipisci velit...</div>`;
}
