// const burgerMenu = document.querySelector("burger-menu");

// const burgerMenuContent = document.querySelector("burger-menu-content");

// burgerMenu.addEventListener("click", () => {
//   burgerMenu.classList.toggle("active");
//   burgerMenuContent.classList.toggle("active");
// });

// document
//   .getElementById("burger-menu")
//   .addEventListener("click", function showMenu() {
//     document.getElementById("burger-menu-content").style.display = "block";
//   });
// document.getElementById("burger-menu").classList.remove("");

document.addEventListener("DOMContentLoaded", () => {
  const buttons = document.querySelectorAll(".sidenav-buttons button");
  const background = document.querySelector(".section-slideshow");
  const wrapper = document.querySelector(".slideshow-page");

  const backgrounds = [
    {
      image:
        'url("https://images.pexels.com/photos/1292115/pexels-photo-1292115.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1")',
      color: "#12241b",
      // map
    },
    {
      image:
        'url("https://images.pexels.com/photos/691668/pexels-photo-691668.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1")',
      color: "#22272D",
      // mountain
    },
    {
      image:
        'url("https://images.pexels.com/photos/12638564/pexels-photo-12638564.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1")',
      color: "#111111",
      // camera
    },
  ];

  // Function to add 'active' class to the clicked button
  function setActiveButton(slideNumber) {
    buttons.forEach((button, index) => {
      // Remove the 'active' class from all buttons
      button.classList.remove("active");

      // Add the 'active' class to the button corresponding to the slide
      if (index + 1 === slideNumber) {
        button.classList.add("active");
      }
    });

    // Update the wrapper background
    const { image, color } = backgrounds[slideNumber - 1];
    wrapper.style.backgroundImage = image;

    background.style.setProperty("--slideshow-bg-color", color);
    background.style.setProperty("--slideshow-shadow-color", color); // Smoothly transitions
  }

  window.scrollToSlide = function (slideNumber) {
    const slide = document.getElementById(`slide${slideNumber}`);
    if (slide) {
      slide.scrollIntoView({
        behavior: "smooth", // Smooth animation
        block: "center", // Align to the top of the viewport
      });

      setActiveButton(slideNumber);
    }
  };

  setActiveButton(1);
});
