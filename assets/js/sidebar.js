function elementToggleFunc(elem) {
  if (elem) {
    elem.classList.toggle("active");
  }
}
function initSidebarToggle() {
  const sidebar = document.querySelector("[data-sidebar]");
  const sidebarBtn = document.querySelector("[data-sidebar-btn]");

  if (!sidebar || !sidebarBtn) {
    return;
  }

  sidebarBtn.addEventListener("click", () => {
    elementToggleFunc(sidebar);
  });
}