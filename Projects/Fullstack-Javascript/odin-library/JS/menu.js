//? This function hides the hamburger menu when the user clicks the outer area.
function hideMenu() {
	const menu = document.getElementById('menu-toggle');
	if (menu.checked)
		menu.checked = false;
}

const page = document.querySelector('main');
page.addEventListener('click', hideMenu)