document.addEventListener("DOMContentLoaded", function () {
    const button = document.getElementById("theme-toggle");
    const storedTheme = localStorage.getItem("theme") || "light";

    // Apply the stored theme
    document.documentElement.setAttribute("data-theme", storedTheme);
    button.textContent = storedTheme === "dark" ? "☀️" : "🌙";

    // Toggle the theme on button click
    button.addEventListener("click", function () {
        let currentTheme = document.documentElement.getAttribute("data-theme");
        let newTheme = currentTheme === "dark" ? "light" : "dark";
        
        document.documentElement.setAttribute("data-theme", newTheme);
        localStorage.setItem("theme", newTheme);
        button.textContent = newTheme === "dark" ? "☀️" : "🌙";
    });
});
