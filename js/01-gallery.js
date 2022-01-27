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

const options = {
  onShow: () => {
    window.addEventListener('keydown', ESCclose);
  }, onClose: () => { window.removeEventListener('keydown', ESCclose); },
  
};


// Добавляет класс modal и размер картинки в html
const instance = basicLightbox.create(`
  <div class="modal"> <img width="1400" height="900" src=""></div>`,
    options); 

instance.show();


const originalImgEl = e.target.dataset.source;
 

function ESCclose(event) {
  if (event.key === 'Escape')
    instance.close();
  console.log('esc');
}



// ПРОВЕРКИ-----

console.log(originalImgEl); //работает
// console.log(instance); //работает
// console.log(galleryEl); //работает
// console.log(galleryItems); //работает
// console.log(galleryCardEl); //работает
// console.log(allCardCreateEl); //работает


/*import * as basicLightbox from 'basiclightbox'

const instance = basicLightbox.create(`

    <img src="assets/images/image.png" width="800" height="600">
`)

instance.show()*/


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


