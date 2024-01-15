document.addEventListener('DOMContentLoaded', function () {
    const categories = document.querySelectorAll('.category-checkbox');
    const gallery = document.getElementById('gallery');

    // Define your image data (replace this with your actual data)
    const imageData = [
        { url: 'assets/img (1).jpg', categories: ['category1', 'category2'], caption: 'Image 1' },
        { url: 'assets/img (2).jpg', categories: ['category2'], caption: 'Image 2' },
        { url: 'assets/img (3).jpg', categories: ['category3'], caption: 'Image 1' },
        { url: 'assets/img (4).jpg', categories: ['category4'], caption: 'Image 2' },
        { url: 'assets/culo (1).jpg', categories: ['category5'], caption: 'Image 2' },
        { url: 'assets/culo (1).png', categories: ['category1'], caption: 'Image 1' },
        { url: 'assets/culo (2).png', categories: ['category2'], caption: 'Image 2' },
        { url: 'assets/img (5).jpg', categories: ['category5'], caption: 'Image 1' },
        { url: 'assets/img (6).jpg', categories: ['category1'], caption: 'Image 2' },
        { url: 'assets/img (7).jpg', categories: ['category2'], caption: 'Image 1' },
        { url: 'assets/img (8).jpg', categories: ['category3'], caption: 'Image 2' },
        { url: 'assets/img (9).jpg', categories: ['category4'], caption: 'Image 1' },
        { url: 'assets/img (10).jpg', categories: ['category5'], caption: 'Image 2' },
        { url: 'assets/img (11.jpg', categories: ['category1'], caption: 'Image 1' },
        { url: 'assets/img (12).jpg', categories: ['category2'], caption: 'Image 2' },

        // Add more image data
    ];

    function updateGallery() {
        const selectedCategories = Array.from(categories)
            .filter(category => category.checked)
            .map(category => category.getAttribute('data-category'));

        gallery.innerHTML = '';

        imageData.forEach((image, index) => {
            if (selectedCategories.length === 0 || selectedCategories.some(category => image.categories.includes(category))) {
                const imgElement = document.createElement('img');
                imgElement.src = image.url;
                imgElement.alt = image.caption;

                const captionElement = document.createElement('p');
                captionElement.textContent = image.caption;

                const divElement = document.createElement('div');
                divElement.appendChild(imgElement);
                divElement.appendChild(captionElement);
                divElement.classList.add('grid-item');

                gallery.appendChild(divElement);
            }
        });
    }

    categories.forEach(category => {
        category.addEventListener('change', updateGallery);
    });

    updateGallery();
});
