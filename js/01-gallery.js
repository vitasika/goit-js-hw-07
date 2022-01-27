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

function clickElCard(event) {
  event.preventDefault();

  if (originalImgEl = event.target.dataset.source) {
    return
  }
  
  const instance = basicLightbox.create(`
  <div class="modal"> <img width="1400" height="900" src= ${originalImgEl}></div>`,
        
    options);

  instance.show();
}





  function ESCclose(event) {
    if (event.key === 'Escape')
      instance.close();
    console.log('esc');
  }



  // ПРОВЕРКИ-----
  // console.log(clickElCard); //работает
  // console.log(originalImgEl); //работает
  // console.log(instance); //работает
  // console.log(galleryEl); //работает
  // console.log(galleryItems); //работает
  // console.log(galleryCardEl); //работает
  // console.log(allCardCreateEl); //работает


  // import * as basicLightbox from 'basiclightbox'
  
  // const instance = basicLightbox.create(`
  
  //     <img src="assets/images/image.png" width="800" height="600">
  // `)
  
  // instance.show()


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





{
// //Находим элемент div.gallery
// const galleryEl = document.querySelector('.gallery');
// //Генерируем строку с разметкой карточек галереи изображений
// const galleryMarkup = createGalleryCardsMarkup(galleryItems);
// //Добавляем разметку карточек галереи изображений в элемент galleryEl
// galleryEl.insertAdjacentHTML('beforeend', galleryMarkup);
// //Добавляем слушателя события 'click' на элемент galleryEl
// galleryEl.addEventListener('click', onGalleryCardClick);
// let instance;

// // Ф-ция: принимает массив объектов (galleryItems), с данными для карточек изображений, 
// //        возвращает строку с разметкой карточек галереи изображений
// function createGalleryCardsMarkup(galleryItems) {
//     return galleryItems.map(({ preview, original, description }) => {
//         return `
//         <div class="gallery__item">
//             <a class="gallery__link" href="${original}">
//                 <img class="gallery__image" src="${preview}" data-source="${original}" alt="${description}"/>
//             </a>
//         </div>`;
//     }).join('');
// }; 

// //Ф-ция:
// //     отменяет действия браузера по умолчанию;
// //     проверяет условие клика по элементу img (не реагирует на клик на др элементы);
// //     открывает модальное окно с оригинальным (большим - original) изображением;
// //     добавляет слушателя события  'keydown' на элемент window
// function onGalleryCardClick(evt) {
//     evt.preventDefault();

//     if(!evt.target.classList.contains('gallery__image')) {
//         return;
//     }

//     openModalLightbox(evt);

//     window.addEventListener('keydown', onEscKeyPress);
// };

// //Ф-ция - создает и открывает модальное окно (instance - библиотека basicLightbox, методы create(), show()), с оригинальным (большим - original) изображением;
// function openModalLightbox(e) {
//     instance = basicLightbox.create(`
// 		<img src="${e.target.dataset.source}">
// 	`);
//     instance.show();
// }

// //Ф-ция, при нашатии на клавишу 'Escape'
// //     закрывает модальное окно (instance - библиотека basicLightbox, метод close());
// //     убирает слушателя события 'keydown' с элемента window
// function onEscKeyPress(evt) {
//     if (evt.code === 'Escape') {
//         instance.close();
//         window.removeEventListener('keydown', onEscKeyPress);
//     };
// };

}