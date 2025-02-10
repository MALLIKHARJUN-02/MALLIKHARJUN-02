document.addEventListener("DOMContentLoaded", function () {
    const menuIcon = document.getElementById("menu_icon");
    const navList = document.getElementById("listitems");
    const heroSection = document.querySelector(".first_after_nav");

    menuIcon.addEventListener("click", function () {
        navList.classList.toggle("show"); 

        if (navList.classList.contains("show")) {
            heroSection.style.marginTop = navList.offsetHeight + "px"; 
        } else {
            heroSection.style.marginTop = "0"; 
        }
    });
});
