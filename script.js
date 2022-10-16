const open = document.getElementById('menu');
const nav = document.getElementById('nav');
const container = document.getElementsByClassName(".container");

function toggle(e) 
{
    nav.classList.toggle('show');
}


function hide() {
    nav.classList.remove("show");
}