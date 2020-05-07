
let menu = document.getElementById('drop');
let image = document.getElementById('image');

let open = false;

function toggleMenu() {
    if(open) {
        menu.style.display = "none";
        menu.style.opacity = "0";
        image.style.paddingTop = "5rem";
        open = !open;
    } else if (!open) {
        menu.style.display = "block";
        menu.style.opacity = "1";
        image.style.paddingTop = "0";
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