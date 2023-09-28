//=========== CHANGES NAV BACKGROUND SELECTION ON SCROLL ================//

function scrollHeader() {
  const header = document.getElementById("header");
  // When the scroll is greater than 50 viewport height, add the scroll-header class to the header tag
  if (this.scrollY >= 50) header.classList.add("scroll-header");
  else header.classList.remove("scroll-header");
}
window.addEventListener("scroll", scrollHeader);

const sections = document.querySelectorAll("section[id]");

//============== NAV BUTTONS SELECTION ON SCROLL ==============//

function scrollActive() {
  const scrollY = window.pageYOffset;

  sections.forEach((current) => {
    const sectionHeight = current.offsetHeight,
      sectionTop = current.offsetTop - 58,
      sectionId = current.getAttribute("id");

    if (scrollY > sectionTop && scrollY <= sectionTop + sectionHeight) {
      document
        .querySelector(".nav_menu a[href*=" + sectionId + "]")
        .classList.add("active-link");
    } else {
      document
        .querySelector(".nav_menu a[href*=" + sectionId + "]")
        .classList.remove("active-link");
    }
  });
}
window.addEventListener("scroll", scrollActive);

//=================== LIGHT AND DARK THEME =====================//

const themeButton = document.getElementById("theme-button");
const lightTheme = "light-theme";
const iconTheme = "bx-sun";

// Previously selected topic (if user selected)
const selectedTheme = localStorage.getItem("selected-theme");
const selectedIcon = localStorage.getItem("selected-icon");

// We obtain the current theme that the interface has by validating the light-theme class
const getCurrentTheme = () =>
  document.body.classList.contains(lightTheme) ? "dark" : "light";
const getCurrentIcon = () =>
  themeButton.classList.contains(iconTheme) ? "bx bx-moon" : "bx bx-sun";

// We validate if the user previously chose a topic
if (selectedTheme) {
  // If the validation is fulfilled, we ask what the issue was to know if we activated or deactivated the light
  document.body.classList[selectedTheme === "dark" ? "add" : "remove"](
    lightTheme
  );
  themeButton.classList[selectedIcon === "bx bx-moon" ? "add" : "remove"](
    iconTheme
  );
}

// Activate / deactivate the theme manually with the button
themeButton.addEventListener("click", () => {
  // Add or remove the light / icon theme
  document.body.classList.toggle(lightTheme);
  themeButton.classList.toggle(iconTheme);
  // We save the theme and the current icon that the user chose
  localStorage.setItem("selected-theme", getCurrentTheme());
  localStorage.setItem("selected-icon", getCurrentIcon());
});

const anime = ScrollReveal({
  origin: "top",
  distance: "70px",
  duration: 2000,
  delay: 400,
  reset: true,
});

anime.reveal(`.nav_menu`, {
  delay: 100,
  scale: 0.1,
  origin: "bottom",
  distance: "300px",
});

anime.reveal(`.home_data`);
anime.reveal(`.home_img_wrapper`, {
  delay: 100,
});

anime.reveal(`.social_handle, .scroll_down`, {
  delay: 100,
  origin: "bottom",
});

anime.reveal(`.about_image`, {
  delay: 100,
  origin: "left",
  scale: 0.9,
  distance: "30px",
});

anime.reveal(`.about_data, .about__button-contact, .about_description`, {
  scale: 0.9,
  origin: "right",
  distance: "30px",
});

anime.reveal(`.skills_content`, {
  scale: 0.9,
  origin: "bottom",
  distance: "30px",
});

anime.reveal(`.contact_info, .contact_title-info`, {
    scale: 0.9,
    origin: "left",
    distance: "30px",
})

anime.reveal(`contact_form, .contact_form`, {
    scale: 0.9,
    origin: "right",
    distance: "30px",
})

anime.reveal(`.footer, footer_wrapper`, {
    delay: 100,
    scale: 0.9,
    origin: "bottom",
    distance: "30px",
  });
