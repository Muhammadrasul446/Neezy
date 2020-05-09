// Needed variables
let drop_down_menu = document.getElementById('drop');
let checkbox = document.getElementById("mode");
let style = document.getElementById("style");
let open = false;

// reload the page
function reload() {
	location.reload();
}

// hide/show the settings menu
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

// Switch dark/light modes
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

// Smooth scrolling
document.querySelectorAll('a[href^="#"]').forEach(anchor => {
	anchor.addEventListener('click', function (e) {
		e.preventDefault();

		document.querySelector(this.getAttribute('href')).scrollIntoView({
			behavior: 'smooth'
		});
	});
});