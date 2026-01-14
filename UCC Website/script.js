let i = 0;
let scrollPosition = 0;
let menuOpen = false;
let wasMobileView = window.innerWidth <= 1000;

window.addEventListener('resize', handleResize);

function handleResize () {
  const isMobileView = window.innerWidth <= 1000;
  if (isMobileView !== wasMobileView) {
    wasMobileView = isMobileView;
    window.location.reload();
  }
}

window.onload = function() {
  i = 0;
  wasMobileView = window.innerWidth <= 1000;
}

window.onscroll = function() {
    if (!menuOpen) {
      scrollFunction()
    }
  };

function scrollFunction() {
  const header = document.getElementById("header");
  const headerOptions = document.getElementById("optionsDiv");
  const image = document.getElementById("homeImageDiv");
  const logo = document.getElementById("headLogo");
  const title = document.getElementById("title");
  const hamburger = document.getElementById("hamburger");
  const instagram = document.getElementById("instagram");
  if (document.body.scrollTop > 75 || document.documentElement.scrollTop > 70) {
    logo.classList.add("vanish");
    logo.classList.remove("appear");
  } else {
    logo.classList.remove("vanish");
  }

  if (document.body.scrollTop > 75 || document.documentElement.scrollTop > 75) {
    header.classList.add("shrink");
    title.classList.add("move");
    headerOptions.classList.add("move");
    logo.classList.add("getSmaller");
    hamburger.classList.add("shift");
    instagram.classList.add("moveLocation");
    try {
      image.classList.add("rescale");
    } catch {
      return;
    }
  } else {
    header.classList.remove("shrink");
    title.classList.remove("move");
    headerOptions.classList.remove("move");
    logo.classList.add("appear");
    logo.classList.remove("getSmaller");
    hamburger.classList.remove("shift");
    instagram.classList.remove("moveLocation");
    try {
     image.classList.remove("rescale");
    } catch {
      return;
    }
  }
}

function openMenu () {
  const hamburger = document.getElementById("hamburger");
  const hamMenu = document.getElementById("hamMenu");
  const footer = document.getElementById("footer");
  const header = document.getElementById("header");

  if (i % 2 == 0) {
    scrollPosition = window.scrollY;
    document.body.style.position = "fixed";
    header.style.opacity = "1";
    document.body.style.top = `-${scrollPosition}px`;
    header.classList.remove("shrink");
    hamMenu.style.display = "block";
    document.body.style.overflow = "hidden";
    setTimeout(() => {
      hamMenu.classList.add("slideIn");
      hamburger.textContent = "X";
      hamMenu.classList.remove("slideOut");
    }, 10)
    try {
      footer.style.display = "none";
    } catch {
      
    }
    menuOpen = true;
    i++;
  } else {
      document.body.style.position = '';
      document.body.style.top = '';
      header.style.opacity = "0.9";
      window.scrollTo(0, scrollPosition);
      if (document.body.scrollTop > 15 || document.documentElement.scrollTop > 10) {
        header.classList.remove("shrink");
      }
      document.body.style.overflow = "";
      hamburger.innerHTML = "&#8801;";
      hamMenu.classList.remove("slideIn");
      hamMenu.classList.add("slideOut");
      try {
        footer.style.display = "grid";
      } catch {

      }
      setTimeout (() => {
        hamMenu.style.display = "none";
      }, 300)
      menuOpen = false;
      i++;
  }
}

function resi() {
  i = 0;
  menuOpen = false;
}
