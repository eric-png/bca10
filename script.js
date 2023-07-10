/* This script will add a fun feature to Bear's website. When the user clicks on the image of Bear, a message will appear saying "Hi, I'm Bear!" */

// Get a reference to the image element
const bearImage = document.querySelector('img');

// Add an event listener to the image element
bearImage.addEventListener('click', () => {
  // When the image is clicked, show an alert message
  alert("Hi, I'm Bear!");
});