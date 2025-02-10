document.addEventListener("DOMContentLoaded", function () {
    const searchInput = document.getElementById("search");

    searchInput.addEventListener("keypress", function (event) {
        if (event.key === "Enter") { 
            event.preventDefault(); 
            const sanitizedQuery = sanitizeInput(searchInput.value);
            searchAndScroll(sanitizedQuery);
        }
    });

    function sanitizeInput(input) {
        return input.replace(/[&<>"'/]/g, function (char) {
            return ({
                '&': '&amp;',
                '<': '&lt;',
                '>': '&gt;',
                '"': '&quot;',
                "'": '&#39;',
                '/': '&#47;'
            })[char];
        });
    }

    function searchAndScroll(query) {
        query = query.trim().toLowerCase();
        if (!query) return;

        let elements = document.querySelectorAll("p, h1, h2, h3, h4, h5, h6, li, a"); 
        let found = false;

        for (let el of elements) {
            if (el.textContent.toLowerCase().includes(query)) {
                el.scrollIntoView({ behavior: "smooth", block: "center" });
                found = true;
                break;
            }
        }

        if (!found) {
            alert("No match found!");
        }
    }
});
