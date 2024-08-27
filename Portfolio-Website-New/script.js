function toggleMenu(){
    const menu = document.querySelector(".menu-links");
    const icon = document.querySelector(".hamburger-icon");
    menu.classList.toggle("open");//adding class by js not from html
    icon.classList.toggle("open");
}

// gsap.to(".section_pic-container", { 
//     x: -100,
//     delay:0.5,
//     duration: 1.5,

//  });

const moveHand = document.querySelector(".hello");
let angle = 0;
const rotationAmount = 40;
const intervalDuration = 2000;

function rotateHand() {
    // Rotate left by 40 degrees
    moveHand.style.transform = `rotate(${angle - rotationAmount}deg)`;

    // After a short delay, return to the initial position
    setTimeout(() => {
        moveHand.style.transform = `rotate(${angle}deg)`;
    }, 800); // Duration of the rotation back to the initial position
}

// Repeat the rotation every intervalDuration milliseconds
setInterval(rotateHand, intervalDuration);



var prevScrollpos = window.pageYOffset; // Store the initial scroll position
const navbar = document.getElementById("desktop-nav"); // Get the navbar element

window.onscroll = function() {
    var currentScrollPos = window.pageYOffset; // Get the current scroll position

    if (prevScrollpos > currentScrollPos) {
        // Scrolling up
        navbar.style.top = "0"; // Show the navbar
    } else {
        // Scrolling down
        navbar.style.top = "-60px"; // Hide the navbar completely (adjust based on navbar height)
    }

    prevScrollpos = currentScrollPos; // Update the previous scroll position
};









