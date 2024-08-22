const image = document.querySelector('.image img');
const likeCount = document.querySelector('.text span');
const heart = document.querySelector('.heart');


let count = 0;

image.addEventListener('click', () => {
    count++; 
    likeCount.textContent = count; 
});

image.addEventListener('click', (event) => {
 
    const x = event.clientX;
    const y = event.clientY;
    heart.style.left = `${x}px`;
    heart.style.top = `${y}px`;
    heart.style.display = 'block'; 
    heart.style.opacity = '0.7'; 
    heart.style.transform = 'scale(10)'; 

    setTimeout(() => {
        heart.style.opacity = '0'; 
        heart.style.transform = 'scale(2)'; 
    }, 0); 

    setTimeout(() => {
        heart.style.display = 'none'; 
        heart.style.opacity = '1'; 
        heart.style.transform = 'scale(0)'; 
    }, 1000); 
});