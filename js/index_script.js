
let drop_down_menu = document.getElementById('drop');

let open = false;

function toggleMenu() {
    if(open) {
        drop_down_menu.style.display = "none";
        drop_down_menu.style.opacity = "0";
        open = !open;
    } else if (!open) {
        drop_down_menu.style.display = "block";
        drop_down_menu.style.opacity = "1";
        open = !open;
    }
}

let checkbox = document.getElementById("mode");
let style = document.getElementById("style");

dark = false;

if (checkbox.checked) {
    dark = true;
} else {
    dark = false;
}

if (dark) {
    style.removeAttribute("href");
    style.setAttribute("href", "css/index_dark.css");
} else if (!dark) {
    style.removeAttribute("href");
    style.setAttribute("href", "css/index_light.css");
}

function reload() {
    location.reload();
}
document.querySelectorAll('a[href^="#"]').forEach(anchor => {
    anchor.addEventListener('click', function (e) {
        e.preventDefault();

        document.querySelector(this.getAttribute('href')).scrollIntoView({
            behavior: 'smooth'
        });
    });
});