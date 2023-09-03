const hamburgerButton = document.getElementById('hamburger')
const navList = document.getElementById('nav-list')

function toggleButton() {
    navList.classList.toggle('show')
}

hamburgerButton.addEventListener('click', toggleButton)

// Function to generate a random number within a specified range
function randomInRange(min, max) {
    return Math.random() * (max - min) + min;
}

// Function to create a new star element with randomized animation properties
function createStar() {
    const star = document.createElement("div");
    const size = Math.random() * 2; // Adjust the size range of stars
    const duration = Math.random() * 80 + 5; // Adjust the duration of the animation
    const initialOpacity = Math.random(); // Random initial opacity

    star.style.width = size + "px";
    star.style.height = size + "px";
    star.style.opacity = initialOpacity; // Set the initial opacity
    star.classList.add("star");
    star.style.left = `${randomInRange(0, 100)}%`;
    star.style.top = `${randomInRange(0, 50)}%`; // Start some stars halfway down
    star.style.animationDelay = Math.random() * 5 + "s";
    star.style.animationDuration = duration + "s";

    return star;
}

// Function to initialize the falling stars
function initStars() {
    const starsContainer = document.querySelector(".stars");

    // Number of stars you want
    const numberOfStars = 1000;

    for (let i = 0; i < numberOfStars; i++) {
        const star = createStar();
        starsContainer.appendChild(star);
    }
}

// Call initStars to generate stars when the script is loaded
initStars();