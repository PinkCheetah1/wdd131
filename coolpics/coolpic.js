const menuButton = document.querySelector('.menu-button'); // Gets the menu button by class name
const nav = document.querySelector('nav'); // Gets the nav element by tag name

menuButton.addEventListener('click', () => { // Adds event listener to toggle menu when button clicked
    nav.classList.toggle('hidden'); // Toggles the "hidden" class, hiding or showing the menu
})



// MODAL

const gallery = document.querySelector('.gallery'); // Gets gallery container by class
const modal = document.querySelector('dialog'); // get dialog box by tag
const modalImg = modal.querySelector('img'); // get image element inside dialog box
const closeBtn = modal.querySelector('.close-viewer'); // get close button inside the dialog box by class name

gallery.addEventListener('click', openModal); // run openModal when gallery is clicked

function openModal(e) {
    
    const item = e.target; // Getting the element that was clicked on
    const src = item.getAttribute('src').replace('small', 'full'); // Get the source of the image that was clicked on, turn it into the full picture
    const alt = item.getAttribute('alt');

    modalImg.src = src; // Set the full image source to the modal img
    modalImg.alt = alt; // Set the alt text of the modal image to the alt text of the clicked image

    modal.showModal(); // Show the dialog box. Q: is "showModal" a method of the dialog element? Can it only be used in JS?
}

closeBtn.addEventListener('click', () => { // Adds an event listener to the close button that listens for a click
    modal.close(); // Close the dialog box when the close button is clicked
});

modal.addEventListener('click', (e) => { // Adds an event listener to the modal that listens for a click
    if (e.target === modal) { // If the click is on the modal itself (not the image or close button)
        modal.close(); // Close the dialog box
    }
});

