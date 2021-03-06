import { galleryItems } from './gallery-items.js';
// Change code below this line


// console.log(galleryItems);

// Найти строку в html с названием class="gallery"
const galleryEl = document.querySelector('.gallery');
console.log(galleryEl);

galleryEl.addEventListener('click', onGalleryCardClick);

  //Преобразовал galleryItems в одну строку с параметрами
const galleryCardEl = galleryItems.map(({ preview, original, description }) => {
    return `
    <a class="gallery__item" href="${original}">
        <img class="gallery__image" src="${preview}" alt="${description}" />
    </a>`
});

// console.log(galleryCardEl);

//Добавляю galleryCardEl с разметкой по очереди во все карточки
const allCardCreateEl = (galleryCardEl).join(''); 
  
// console.log(allCardCreateEl);

//Добавляю galleryEl в разметку html ("beforeend" - внутри elem, после всех детей)
galleryEl.insertAdjacentHTML('beforeend', allCardCreateEl);


//Ф-ция:
//     отменяет действия браузера по умолчанию;
//     проверяет условие клика по элементу img (не реагирует на клик на др элементы);
//     открывает слайдер (lightbox)    
function onGalleryCardClick(evt) {
    evt.preventDefault();

    if(!evt.target.classList.contains('gallery__image')) {
        return;
    }

    openLightbox();
};

// console.log(onGalleryCardClick);

//Ф-ция - создает и открывает слайдер (lightbox - библиотека SimpleLightbox, класс SimpleLightbox, метод open()), с оригинальными (большими - original) изображениями;
//     свойства - для описания изображений (подпись изображений):
//             captionSelector - указывает элемент который содержит описание
//             captionType - указывает где именно в элементе находится описание (атрибут, дата-атрибут, текст)
//             captionsData - указывает в каком атрибуте хранится описание
//             captionPosition - указывает положение описания (вверху, внизу, за пределами изображения)
//             captionDelay - указывает задержку появления подписи
//             enableKeyboard - позволяет навигацию с клавиатуры (<- ->) и выход при нажатии Esc
function openLightbox() {
    let lightbox = new SimpleLightbox('.gallery a',
        {
            captionSelector: 'img',
            captionType: 'attr',
            captionsData: 'alt',
            captionPosition: 'bottom',
            captionDelay: 250,
            enableKeyboard: true,
        });
    lightbox.open();
};

// console.log(openLightbox);


/*
//Находим элемент div.gallery
const galleryEl = document.querySelector('.gallery');
//Генерируем строку с разметкой карточек галереи изображений
const galleryMarkup = createGalleryCardsMarkup(galleryItems);
//Добавляем разметку карточек галереи изображений в элемент galleryEl
galleryEl.insertAdjacentHTML('beforeend', galleryMarkup);
//Добавляем слушателя события 'click' на элемент galleryEl
galleryEl.addEventListener('click', onGalleryCardClick);

// Ф-ция: принимает массив объектов (galleryItems), с данными для карточек изображений, 
//        возвращает строку с разметкой карточек галереи изображений
function createGalleryCardsMarkup(galleryItems) {
    return galleryItems.map(({ preview, original, description }) => {
        return `
            <a class="gallery__item" href="${original}">
                <img class="gallery__image" src="${preview}" alt="${description}" />
            </a>`;
    }).join('');
}; 

//Ф-ция:
//     отменяет действия браузера по умолчанию;
//     проверяет условие клика по элементу img (не реагирует на клик на др элементы);
//     открывает слайдер (lightbox)    
function onGalleryCardClick(evt) {
    evt.preventDefault();

    if(!evt.target.classList.contains('gallery__image')) {
        return;
    }

    openLightbox();
};

//Ф-ция - создает и открывает слайдер (lightbox - библиотека SimpleLightbox, класс SimpleLightbox, метод open()), с оригинальными (большими - original) изображениями;
//     свойства - для описания изображений (подпись изображений):
//             captionSelector - указывает элемент который содержит описание
//             captionType - указывает где именно в элементе находится описание (атрибут, дата-атрибут, текст)
//             captionsData - указывает в каком атрибуте хранится описание
//             captionPosition - указывает положение описания (вверху, внизу, за пределами изображения)
//             captionDelay - указывает задержку появления подписи
//             enableKeyboard - позволяет навигацию с клавиатуры (<- ->) и выход при нажатии Esc
function openLightbox() {
    let lightbox = new SimpleLightbox('.gallery a',
        {
            captionSelector: 'img',
            captionType: 'attr',
            captionsData: 'alt',
            captionPosition: 'bottom',
            captionDelay: 250,
            enableKeyboard: true,
        });
    lightbox.open();
};
*/
