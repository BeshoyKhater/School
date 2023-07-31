// toggle show nav in small screens
const menuBtn = document.querySelector(".menuBtn");
const linksContainer = document.querySelector(".linksContainer");
const linksNav = document.querySelectorAll(".navContainer .linksContainer li ")

linksNav.forEach((link) => {
  link.addEventListener("click", () => {

    menuBtn.classList.toggle('closeMenu');
    linksContainer.classList.remove('open-nav');
  })
})

menuBtn?.addEventListener("click", toggleMenu);

function toggleMenu() {
  menuBtn.classList.toggle('closeMenu');
  linksContainer.classList.toggle('open-nav');
}



// show button to top by add class active
const toTop = document.querySelector(".scroll-top");

window.addEventListener("scroll", () => {
  if (window.pageYOffset > 400) {
    toTop.classList.add("active");
  } else {
    toTop.classList.remove("active");
  }
});

toTop?.addEventListener("click", toTopFunction);

function toTopFunction() {
  window.scrollTo({
    top: 0,
    behavior: "smooth"
  })
}


// change lang
const langs = document.querySelectorAll(".lang");
const html = document.querySelector("html");
langs.forEach(lang => {
  lang.addEventListener('click', () => {
    if (html.getAttribute("dir") == 'ltr') {
      html.setAttribute("dir", "rtl");
      html.setAttribute("lang", "ar");
      lang.textContent = 'EN'
    } else {
      html.setAttribute("dir", "ltr");
      html.setAttribute("lang", "en");
      lang.textContent = 'ع'
    }
  })
})

function changeLanguage() {
  // console.log('LOADEDDDD');
  langs.forEach(lang => {
    if (html.getAttribute("lang") == 'ar') {
      lang.textContent = 'EN'
    } else {
      lang.textContent = 'ع'
    }
  })
}

window.addEventListener("load", changeLanguage, false);

//active or links navbar
const links = document.querySelectorAll(".navContainer .navContent ul li a")

links.forEach((link) => {
  link.addEventListener("click", () => {

    links.forEach((link) => {
      link.classList.remove("active-link")
    })
    link.classList.add("active-link")
  })
})


// buttons show ro hide
const buttons = document.querySelectorAll(".service .main-div .group-buttons button")
const divs = document.querySelectorAll(".service .main-div .row .div")


buttons.forEach((btn) => {
  btn.addEventListener("click", (e) => {
    buttons.forEach((btn) => {
      btn.classList.remove("active-btn")
    })
    btn.classList.add("active-btn")

    divs.forEach((div) => {
      div.classList.add("d-none")
      if (e.target.dataset.type === div.dataset.type) {
        div.classList.remove("d-none")
      }
    })
  })
})