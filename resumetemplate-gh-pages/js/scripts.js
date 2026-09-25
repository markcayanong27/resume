document.addEventListener("DOMContentLoaded", () => {
    const sidebarToggleBtn = document.getElementById("theme-toggle");
    const topToggleBtn = document.getElementById("top-theme-toggle");
    
    // Alamin ang naka-save na preference o i-check ang system theme Preference
    const savedTheme = localStorage.getItem("theme");
    const prefersDark = window.matchMedia("(prefers-color-scheme: dark)").matches;

    // Naka-default sa dark mode batay sa portfolio design kung walang na-save
    if (savedTheme === "dark" || (!savedTheme && prefersDark)) {
        document.body.classList.add("dark-mode");
        updateToggleIcons(true);
    } else if (savedTheme === "light") {
        document.body.classList.remove("dark-mode");
        updateToggleIcons(false);
    } else {
        // Naka-default dark mode para mag-match sa theme
        document.body.classList.add("dark-mode");
        updateToggleIcons(true);
    }

    function toggleTheme() {
        const isDarkMode = document.body.classList.toggle("dark-mode");
        localStorage.setItem("theme", isDarkMode ? "dark" : "light");
        updateToggleIcons(isDarkMode);
    }

    function updateToggleIcons(isDark) {
        const iconClass = isDark ? "fa-sun" : "fa-moon";
        const labelText = isDark ? "Light Mode" : "Dark Mode";

        if (sidebarToggleBtn) {
            const icon = sidebarToggleBtn.querySelector("i");
            const text = sidebarToggleBtn.querySelector("span");
            if (icon) icon.className = `fa-solid ${iconClass}`;
            if (text) text.textContent = labelText;
        }

        if (topToggleBtn) {
            const icon = topToggleBtn.querySelector("i");
            if (icon) icon.className = `fa-solid ${iconClass}`;
        }
    }

    if (sidebarToggleBtn) sidebarToggleBtn.addEventListener("click", toggleTheme);
    if (topToggleBtn) topToggleBtn.addEventListener("click", toggleTheme);
});