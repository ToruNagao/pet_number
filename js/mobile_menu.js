const menuId = "mobile-menu";

function openMobileMenu() {
    document.getElementById(menuId).classList.add("visible");
    document.getElementById("mobile-menu-icon").style.display = "none";
}

function closeMobileMenu() {
    document.getElementById(menuId).classList.remove("visible");
    document.getElementById("mobile-menu-icon").style.display = "block";
}