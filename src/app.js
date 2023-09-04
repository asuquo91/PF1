const hamburgerButton = document.getElementById('hamburger');
const navList = document.getElementById('nav-list');
const logo = document.getElementById('logo'); // Select the logo element

function toggleButton() {
  navList.classList.toggle('show');

  // Get the <i> element inside the button
  const iconElement = hamburgerButton.querySelector('i');

  // Toggle the Font Awesome classes
  if (iconElement.classList.contains('fa-bars')) {
    iconElement.classList.remove('fa-bars');
    iconElement.classList.add('fa-x');
    logo.style.display = 'none'; // Hide the logo
  } else {
    iconElement.classList.remove('fa-x');
    iconElement.classList.add('fa-bars');
    logo.style.display = 'block'; // Show the logo
  }
}

hamburgerButton.addEventListener('click', toggleButton)

// Function to generate a random number within a specified range
function randomInRange(min, max) {
    return Math.random() * (max - min) + min;
  }
  
  // Function to create a new star element with randomized animation properties
  function createStar() {
    const star = document.createElement("div");
    let size = Math.random() * 2; // Adjust the size range of stars
    const duration = Math.random() * 80 + 5; // Adjust the duration of the animation
    const initialOpacity = Math.random(); // Random initial opacity
  
    // Check window.innerWidth and adjust star size if it's under 700px
    if (window.innerWidth < 700) {
      size /= 2; // Halve the size for smaller screens
    }
  
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
    let numberOfStars = 1000; // Default number of stars
  
    // Check screen width and adjust numberOfStars if it's under 700px
    if (window.innerWidth < 700) {
      numberOfStars = 1000; // Adjust the number of stars for smaller screens
    }
  
    for (let i = 0; i < numberOfStars; i++) {
      const star = createStar();
      starsContainer.appendChild(star);
    }
  }
  
  // Call initStars to generate stars when the script is loaded
  initStars();

  function submitForm() {
    // Display the success message
    document.getElementById('success-message').style.display = 'block';
    
    // Prevent the form from submitting
    return false;
  }
  
  