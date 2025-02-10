document.addEventListener("DOMContentLoaded", function () {
    updateHeading();
    window.addEventListener("resize", updateHeading);
});

function updateHeading() {
    let mainElement = document.querySelector("#mainintro");
    let updatedElement = document.querySelector("#updatedintro");

    if (window.innerWidth < 650) {
        mainElement.style.display = "none";
        updatedElement.style.display = "block";
    } else {
        mainElement.style.display = "block";
        updatedElement.style.display = "none";
    }
}
