document.addEventListener("DOMContentLoaded", function () {
    const themeToggle = document.createElement("button");
    themeToggle.innerText = "🌙 / ☀️";
    themeToggle.classList.add("theme-toggle");
    document.body.appendChild(themeToggle);

    function setTheme(mode) {
        document.documentElement.setAttribute("data-bs-theme", mode);
        localStorage.setItem("theme", mode);
    }

    // Load saved theme
    const savedTheme = localStorage.getItem("theme") || "light";
    setTheme(savedTheme);

    themeToggle.addEventListener("click", function () {
        const currentTheme = document.documentElement.getAttribute("data-bs-theme");
        const newTheme = currentTheme === "light" ? "dark" : "light";
        setTheme(newTheme);
    });
});
