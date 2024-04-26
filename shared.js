const backdrop = document.querySelector('.backdrop');
const modal = document.querySelector('.modal');
const modalNoButton = document.querySelector('.modal__action--negative');
const selectPlanButtons = document.querySelectorAll('.plan button');
const toogleButton = document.querySelector('.toggle-button');
const mobileNav = document.querySelector('.mobile-nav');

// console.dir(backdrop);
for (let i = 0; i < selectPlanButtons.length; i++) {
  selectPlanButtons[i].addEventListener('click', () => {
    // modal.style.display = 'block';
    // backdrop.style.display = 'block';
    //modal.className = 'open'; // Will overwite full CSS ClassName

    modal.classList.add('open');
    backdrop.classList.add('open');
  });
}

mobileNav.addEventListener('click', closeModal);
backdrop.addEventListener('click', closeModal);

if (modalNoButton) {
  modalNoButton.addEventListener('click', closeModal);
}

function closeModal() {
  // modal.style.display = "none";
  // mobileNav.style.display = 'none';
  // backdrop.style.display = "none";

  mobileNav.classList.remove('open');
  backdrop.classList.remove('open');
  if (modal) {
    modal.classList.remove('open');
  }
}

toogleButton.addEventListener('click', () => {
  mobileNav.classList.add('open');
  backdrop.classList.add('open');
});
