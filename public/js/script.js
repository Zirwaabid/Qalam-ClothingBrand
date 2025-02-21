window.addEventListener("scroll", function () {
    if (window.scrollY > 50) {
        document.body.classList.add("scrolled");
    } else {
        document.body.classList.remove("scrolled");
    }
});

document.addEventListener("DOMContentLoaded", () => {
    const brandIntro = document.getElementById("brand-intro");

    // Show brand intro on page load
    brandIntro.style.display = "flex";

    window.addEventListener("scroll", function hideIntro() {
        brandIntro.classList.add("fade-out"); // Add fade-out effect
        setTimeout(() => {
            brandIntro.style.display = "none"; // Hide after animation
        }, 1000); // Match this with CSS transition duration
        window.removeEventListener("scroll", hideIntro);
    });
});

