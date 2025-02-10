document.addEventListener("DOMContentLoaded", function () {
    const searchInput = document.getElementById("search");

    searchInput.addEventListener("keypress", function (event) {
        if (event.key === "Enter") { // Detect Enter key press
            event.preventDefault(); // Prevent default form submission
            searchAndScroll(searchInput.value.trim().toLowerCase());
        }
    });

    function searchAndScroll(query) {
        if (!query) return;

        let elements = document.querySelectorAll("p, h1, h2, h3, h4, h5, h6, li, a"); // Search in text elements
        let found = false;

        for (let el of elements) {
            if (el.textContent.toLowerCase().includes(query)) {
                el.scrollIntoView({ behavior: "smooth", block: "center" }); // Scroll to the first match
                found = true;
                break;
            }
        }

        if (!found) {
            alert("No match found!"); // Alert if no match is found
        }
    }
});
