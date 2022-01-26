import { galleryItems } from './gallery-items.js';
// Change code below this line

// Найти строку в html с названием class="gallery"
const galleryEl = document.querySelector('.gallery');

//Преобразовал galleryItems в одну строку с параметрами
const galleryCardEl = galleryItems.map(({ preview, original, description }) => {
  return `
  <div class="gallery__item">
    <a class="gallery__link" href="${original}">
      <img
        class="gallery__image"
        src="${preview}"
        data-source="${original}"
        alt="${description}"
      />
    </a>
  </div>`
});

//Добавляю galleryCardEl с разметкой по очереди во все карточки
const allCardCreateEl = (galleryCardEl).join('');

// Добавляет все карточки в html ("beforeend" - внутри elem, после всех детей)
galleryEl.insertAdjacentHTML('beforeend', allCardCreateEl); 

console.log(galleryEl);
// console.log(galleryItems); //работает
// console.log(galleryCardEl); //работает
// console.log(allCardCreateEl); //работает






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


