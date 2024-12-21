// Image Carousel
const imageCarousel = document.getElementById("image-carousel");
const imageItems = imageCarousel ? Array.from(imageCarousel.children) : [];
const imageCarouselContainer = document.getElementById('image-carousel-container');
let imageCurrentIndex = 0;

function imageScrollLeft() {
    if (imageCurrentIndex > 0) {
        imageCurrentIndex--;
        imageUpdateCarousel();
    }
}

function imageScrollRight() {
    if (imageCurrentIndex < imageItems.length - 1) {
        imageCurrentIndex++;
        imageUpdateCarousel();
    }
}

function imageUpdateCarousel() {
    if (!imageCarousel || !imageCarouselContainer || imageItems.length === 0) return; // Prevent errors if elements don't exist
    let scrollPosition = 0;
    if (imageCurrentIndex > 0) {
        scrollPosition = imageItems[imageCurrentIndex].offsetLeft - imageCarouselContainer.offsetLeft;
    }

    imageCarouselContainer.scrollTo({
        left: scrollPosition,
        behavior: 'smooth'
    });

    imageItems.forEach((item, index) => {
        if (index === imageCurrentIndex) {
            item.classList.add("active");
        } else {
            item.classList.remove("active");
        }
    });
}

const imageLeftButton = document.getElementById('image-left-scroll');
const imageRightButton = document.getElementById('image-right-scroll');

if (imageLeftButton) imageLeftButton.addEventListener('click', imageScrollLeft);
if (imageRightButton) imageRightButton.addEventListener('click', imageScrollRight);

if (imageCarousel && imageCarouselContainer && imageItems.length > 0) {
    window.addEventListener('load', imageUpdateCarousel);
    window.addEventListener('resize', imageUpdateCarousel);
}


// Video Carousel
const videoCarousel = document.getElementById("video-carousel");
const videoItems = videoCarousel ? Array.from(videoCarousel.children) : [];
const videoCarouselContainer = document.getElementById('video-carousel-container');
let videoCurrentIndex = 0;

function videoScrollLeft() {
    if (videoCurrentIndex > 0) {
        videoCurrentIndex--;
        videoUpdateCarousel();
    }
}

function videoScrollRight() {
    if (videoCurrentIndex < videoItems.length - 1) {
        videoCurrentIndex++;
        videoUpdateCarousel();
    }
}

function videoUpdateCarousel() {
    if (!videoCarousel || !videoCarouselContainer || videoItems.length === 0) return; // Prevent errors if elements don't exist

    let scrollPosition = 0;
    if (videoCurrentIndex > 0) {
        scrollPosition = videoItems[videoCurrentIndex].offsetLeft - videoCarouselContainer.offsetLeft;
    }

    videoCarouselContainer.scrollTo({
        left: scrollPosition,
        behavior: 'smooth'
    });

    videoItems.forEach((item, index) => {
        if (index === videoCurrentIndex) {
            item.classList.add("active");
        } else {
            item.classList.remove("active");
        }
    });
}

const videoLeftButton = document.getElementById('video-left-scroll');
const videoRightButton = document.getElementById('video-right-scroll');

if (videoLeftButton) videoLeftButton.addEventListener('click', videoScrollLeft);
if (videoRightButton) videoRightButton.addEventListener('click', videoScrollRight);

if (videoCarousel && videoCarouselContainer && videoItems.length > 0) {
    window.addEventListener('load', videoUpdateCarousel);
    window.addEventListener('resize', videoUpdateCarousel);
}