document.addEventListener("DOMContentLoaded", () => {
  const starsContainer = document.querySelector(".stars");
  const numberOfStars = 200;

  // Ensure the container exists
  if (!starsContainer) {
    console.error("Stars container not found!");
    return;
  }

  // Create random stars
  for (let i = 0; i < numberOfStars; i++) {
    const star = document.createElement("div");
    star.classList.add("star");

    // Random position for each star
    const x = Math.random() * 100;
    const y = Math.random() * 200;

    star.style.top = `${y}vh`;
    star.style.left = `${x}vw`;

    // Add random animation delay for each star to make them twinkle at different times
    const randomDelay = Math.random() * 4;
    star.style.animationDelay = `${randomDelay}s`;

    starsContainer.appendChild(star);
  }
  
});
