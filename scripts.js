var modal = document.getElementById("imageModal");
var modalContent = document.getElementById("modalContent");
var closeButton = document.getElementsByClassName("close-button")[0];
var sliderItems = document.querySelectorAll('.section-slider-item');
var mainContent = document.querySelector('.section-slider-container');

// Add click event to all section-slider-item elements
sliderItems.forEach(function(item) {
  item.onclick = function() {
    modal.style.display = "flex";

    var clone = this.cloneNode(true);
    modalContent.innerHTML = ''; // Clear previous content
    modalContent.appendChild(clone);
    mainContent.classList.add('blur');
  }
});

function closeModal() {
  modal.style.display = "none";
  mainContent.classList.remove('blur'); 
}

// Close the modal when the close button is clicked
closeButton.onclick = closeModal;

// Close the modal when clicking outside the content
window.onclick = function(event) {
  if (event.target == modal) {
    closeModal();
  }
}

// Close the modal when pressing the Esc key
document.addEventListener('keydown', function(event) {
  if (event.key === "Escape") {
    closeModal();
  }
});

// Mobile nav
const navToggle = document.querySelector('.nav__toggle');
const navItems = document.querySelectorAll('.nav__item'); // Add this line

navToggle.addEventListener('click', () => {
  document.body.classList.toggle('nav-open');
});

navItems.forEach(item => {
  item.addEventListener('click', () => {
    document.body.classList.remove('nav-open');
  });
});
