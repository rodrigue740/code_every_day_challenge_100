const card = document.querySelector('.card');

card.addEventListener('mousedown', () => {
  card.classList.add('squished'); // Add squish class on mouse down
});

card.addEventListener('mouseup', () => {
  card.classList.remove('squished'); // Remove squish class on mouse up
});

card.addEventListener('mouseleave', () => { // Optionally remove squish on mouse leave
  card.classList.remove('squished');
});

