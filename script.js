const open = document.getElementById('menu');
const nav = document.getElementById('nav');

function toggle() 
{
    nav.classList.add('show');
}


function hide() {
    nav.classList.remove("show");
}


//  ------------------
const form = document.querySelector("form");
const userName = document.getElementById("name");
const email = document.getElementById("email");

form.addEventListener("submit", (e) => {
	const userNameValue = userName.value.trim();
	const emailValue = email.value.trim();

	// prevent the form from submitting
	if (userNameValue === "" || emailValue === "") {
		e.preventDefault();
	}
});