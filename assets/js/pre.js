var loader = document.querySelector(".loader")

window.addEventListener("load", vanish);

function vanish() {
    loader.classList.add("disppear");
    window.addEventListener("transitioned", removeCode);
} 

function removeCode() {
    while (loader.hasChildNodes()) {
      loader.removeChild(loader.firstChild);
    }
}

/*
//DARK - MODE
const darkModeToggle = document.getElementById('darkModeToggle');
        const body = document.body;
        const isDarkMode = localStorage.getItem('darkMode') === 'enabled';
        if (isDarkMode) {
            body.classList.add('dark-mode');
            darkModeToggle.checked = true;
        }
        darkModeToggle.addEventListener('change', () => {
            if (darkModeToggle.checked) {
                body.classList.add('dark-mode');
                localStorage.setItem('darkMode', 'enabled');
            } else {
                body.classList.remove('dark-mode');
                localStorage.setItem('darkMode', 'disabled');
            }
        });  */