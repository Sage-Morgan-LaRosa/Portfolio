const photos = [
    'images/photo1.png',
    'images/photo2.png',
    'images/photo3.png',
    'images/photo4.png',
    'images/photo5.png'
];

let currentIndex = 0;

const photoElement = document.getElementById('photo');
const prevButton = document.getElementById('prev');
const nextButton = document.getElementById('next');

function updatePhoto() {
    photoElement.src = photos[currentIndex];
}

prevButton.addEventListener('click', () => {
    currentIndex = (currentIndex > 0) ? currentIndex - 1 : photos.length - 1;
    updatePhoto();
});

nextButton.addEventListener('click', () => {
    currentIndex = (currentIndex < photos.length - 1) ? currentIndex + 1 : 0;
    updatePhoto();
});

// Initialize the first photo
updatePhoto();