const photos = [
    'images/photo1.png',
    'images/photo2.png',
    'images/photo3.png',
    'images/photo4.png',
    'images/photo5.png'
];

const captions = [
    'This is a head model that I made for my current project, an indie low poly style horror game.',
    'The Man this was a project in which I used clay to make a figure laying on their side',
    'There Be ELMO!! One of my pieces that was put up in a art show when I was at college.',
    'This was part of a series of photos in which I messed around with the cover. All of them looks like album covers from the early 2000s.',
    'This is a flying skull that I made for a fantasy style game '
];

let currentIndex = 0;

const photoElement = document.getElementById('photo');
const captionElement = document.getElementById('caption-text');
const prevButton = document.getElementById('prev');
const nextButton = document.getElementById('next');

function updatePhoto() {
    photoElement.src = photos[currentIndex];
    captionElement.textContent = captions[currentIndex]; // Update the caption
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
