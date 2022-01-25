import { galleryItems } from './gallery-items.js';
// Change code below this line

// Найти строку в html с названием class="gallery"
const galleryEl = document.querySelector('.gallery');

console.log('работает');
console.log(galleryEl);
console.log(galleryItems);


/*  шаблон элемента галереи по которому создается список картинок

<div class="gallery__item">
  <a class="gallery__link" href="large-image.jpg">
    <img
      class="gallery__image"
      src="small-image.jpg"
      data-source="large-image.jpg"
      alt="Image description"
    />
  </a>
</div>

*/