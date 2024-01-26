document.addEventListener('DOMContentLoaded', function () {
    const mainCarousel = document.getElementById('main-carousel');
    const thumbnailCarousel = document.getElementById('thumbnail-carousel');
    const thumbnails = thumbnailCarousel.querySelectorAll('img');

    thumbnails.forEach((thumbnail, index) => {
        thumbnail.addEventListener('click', () => {
            mainCarousel.style.transform = `translateX(${-index * 100}%)`;
        });
    });
});