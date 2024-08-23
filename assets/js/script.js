'use strict';



// element toggle function
const elementToggleFunc = function (elem) { elem.classList.toggle("active"); }



// sidebar variables
const sidebar = document.querySelector("[data-sidebar]");
const sidebarBtn = document.querySelector("[data-sidebar-btn]");

// sidebar toggle functionality for mobile
sidebarBtn.addEventListener("click", function () { elementToggleFunc(sidebar); });



// testimonials variables
const testimonialsItem = document.querySelectorAll("[data-testimonials-item]");
const modalContainer = document.querySelector("[data-modal-container]");
const modalCloseBtn = document.querySelector("[data-modal-close-btn]");
const overlay = document.querySelector("[data-overlay]");

// modal variable
const modalImg = document.querySelector("[data-modal-img]");
const modalTitle = document.querySelector("[data-modal-title]");
const modalText = document.querySelector("[data-modal-text]");

// modal toggle function
const testimonialsModalFunc = function () {
  modalContainer.classList.toggle("active");
  overlay.classList.toggle("active");
}

// add click event to all modal items
for (let i = 0; i < testimonialsItem.length; i++) {

  testimonialsItem[i].addEventListener("click", function () {

    modalImg.src = this.querySelector("[data-testimonials-avatar]").src;
    modalImg.alt = this.querySelector("[data-testimonials-avatar]").alt;
    modalTitle.innerHTML = this.querySelector("[data-testimonials-title]").innerHTML;
    modalText.innerHTML = this.querySelector("[data-testimonials-text]").innerHTML;

    testimonialsModalFunc();

  });

}

// add click event to modal close button
// modalCloseBtn.addEventListener("click", testimonialsModalFunc);
// overlay.addEventListener("click", testimonialsModalFunc);



// custom select variables
const select = document.querySelector("[data-select]");
const selectItems = document.querySelectorAll("[data-select-item]");
const selectValue = document.querySelector("[data-selecct-value]");
const filterBtn = document.querySelectorAll("[data-filter-btn]");

select.addEventListener("click", function () { elementToggleFunc(this); });

// add event in all select items
for (let i = 0; i < selectItems.length; i++) {
  selectItems[i].addEventListener("click", function () {

    let selectedValue = this.innerText.toLowerCase();
    selectValue.innerText = this.innerText;
    elementToggleFunc(select);
    filterFunc(selectedValue);

  });
}

// filter variables
const filterItems = document.querySelectorAll("[data-filter-item]");

const filterFunc = function (selectedValue) {

  for (let i = 0; i < filterItems.length; i++) {

    if (selectedValue === "all") {
      filterItems[i].classList.add("active");
    } else if (selectedValue === filterItems[i].dataset.category) {
      filterItems[i].classList.add("active");
    } else {
      filterItems[i].classList.remove("active");
    }

  }

}

// add event in all filter button items for large screen
let lastClickedBtn = filterBtn[0];

for (let i = 0; i < filterBtn.length; i++) {

  filterBtn[i].addEventListener("click", function () {

    let selectedValue = this.innerText.toLowerCase();
    selectValue.innerText = this.innerText;
    filterFunc(selectedValue);

    lastClickedBtn.classList.remove("active");
    this.classList.add("active");
    lastClickedBtn = this;

  });

}



// contact form variables
const form = document.querySelector("[data-form]");
const formInputs = document.querySelectorAll("[data-form-input]");
const formBtn = document.querySelector("[data-form-btn]");

// add event to all form input field
for (let i = 0; i < formInputs.length; i++) {
  formInputs[i].addEventListener("input", function () {

    // check form validation
    if (form.checkValidity()) {
      formBtn.removeAttribute("disabled");
    } else {
      formBtn.setAttribute("disabled", "");
    }

  });
}


// Variables de navigation des pages
const navigationLinks = document.querySelectorAll("[data-nav-link]");
const pages = document.querySelectorAll("[data-page]");
const projectItems = document.querySelectorAll('[data-index]');
const indexPageItems = document.querySelectorAll('[data-index-page]');

// Fonction pour activer les éléments en fonction du bouton cliqué
function activateElements(targetPage) {

  // Désactiver tous les éléments
  navigationLinks.forEach(link => {
    link.classList.remove('active');
  });

  pages.forEach(page => {
    page.classList.remove('active');
  });

  projectItems.forEach(item => {
    item.classList.add('active');
  });

  indexPageItems.forEach(item => {
    item.classList.remove('active');
  });

  // Activer les éléments correspondant à la cible
  navigationLinks.forEach(link => {
    if (link.textContent.trim().toLowerCase() === targetPage) {
      link.classList.add('active');
    }
  });

  pages.forEach(page => {
    if (page.dataset.page === targetPage) {
      page.classList.add('active');
    }
  });

  projectItems.forEach(item => {
    if (item.dataset.index === targetPage) {
      item.classList.add('active');
    }
  });

  indexPageItems.forEach(item => {
    if (item.classList.contains(targetPage)) {
      item.classList.add('active');
    }
  });

  window.scrollTo(0, 0); // Faire défiler la fenêtre vers le haut
}

// Ajouter un événement de clic à chaque lien de navigation
navigationLinks.forEach(link => {
  link.addEventListener('click', function () {
    const targetPage = this.textContent.trim().toLowerCase(); // Obtenir le nom de la page cible
    activateElements(targetPage);
  });
});

// Ajouter un événement de clic à chaque élément de projet
projectItems.forEach(item => {
  item.addEventListener('click', function () {
    const targetPage = this.dataset.index; // Obtenir l'index de l'élément de projet
    activateElements(targetPage);
  });
});

// Initialize the history state
window.history.pushState({ page: "current" }, "", "");

// Listen for the popstate event to detect back button press
window.addEventListener("popstate", function (event) {
  if (event.state) {
    // The back button was pressed

    if (!navigationLinks[0].classList.contains('active')) {
      window.location.href = "index.html"; // Redirect to index.html
    }
  }
});