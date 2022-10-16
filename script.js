const open = document.getElementById('menu');
const nav = document.getElementById('nav');
const container = document.getElementsByClassName(".container");

function toggle(e) 
{
    
    nav.classList.toggle('show');

    if (nav.classList.contains('show')) {
        open.src = "images/close-svgrepo-com.svg";

    } else {
        open.src = "images/menu-svgrepo-com.svg";
    }
}


function hide() {
    nav.classList.remove("show");
    if (nav.classList.contains("show")) {
			open.src = "images/close-svgrepo-com.svg";
		} else {
			open.src = "images/menu-svgrepo-com.svg";
		}
}