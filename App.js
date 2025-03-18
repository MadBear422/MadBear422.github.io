function setThemeBasedOnPreference() {
    const prefersDarkScheme = window.matchMedia("(prefers-color-scheme: dark)");

    if (prefersDarkScheme.matches) {
        document.body.classList.add("dark-mode");
        document.body.classList.remove("light-mode");
    } else {
        document.body.classList.add("light-mode");
        document.body.classList.remove("dark-mode");
    }

    // Listen for changes in the system's color scheme preference
    prefersDarkScheme.addEventListener('change', (event) => {
        if (event.matches) {
            document.body.classList.add("dark-mode");
            document.body.classList.remove("light-mode");
        } else {
            document.body.classList.add("light-mode");
            document.body.classList.remove("dark-mode");
        }
    });
}

// Call the function to set the initial theme
setThemeBasedOnPreference();