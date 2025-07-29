const heading = document.querySelector("h1");

heading.addEventListener("mouseenter", function() {
    heading.style.fontSize = "15rem";
})


heading.addEventListener("mouseleave", function() {
    heading.style.fontSize = "10rem";
})