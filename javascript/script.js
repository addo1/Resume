document.getElementById("toggle-theme").addEventListener("click", function() {
    document.body.classList.toggle("dark-mode");
});

document.addEventListener("DOMContentLoaded", function() {
    const style = document.createElement("style");
    style.innerHTML = `
        .dark-mode {
            background-color: #222;
            color: #ddd;
        }
        .dark-mode section {
            background-color: #333;
            color: #fff;
        }
    `;
    document.head.appendChild(style);
});
