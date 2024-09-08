// Get the modal
var modal = document.getElementById("imageModal");

// Get the modal content
var modalContent = document.getElementById("modalContent");

// Get the <span> element that closes the modal
var closeButton = document.getElementsByClassName("close-button")[0];

// Get all section-slider-item elements
var sliderItems = document.querySelectorAll('.section-slider-item');

// Get the main content container
var mainContent = document.querySelector('.section-slider-container');

// Add click event to all section-slider-item elements
sliderItems.forEach(function(item) {
  item.onclick = function() {
    modal.style.display = "flex";
    // Clone the content
    var clone = this.cloneNode(true);
    modalContent.innerHTML = ''; // Clear previous content
    modalContent.appendChild(clone);
    mainContent.classList.add('blur'); // Add blur effect
  }
});

// Function to close modal and remove blur
function closeModal() {
  modal.style.display = "none";
  mainContent.classList.remove('blur'); // Remove blur effect
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