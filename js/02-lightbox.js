import { galleryItems } from './gallery-items.js';
// Change code below this line

// console.log(galleryItems);

// Найти строку в html с названием class="gallery"
  const galleryEl = document.querySelector(".gallery");  


  //Преобразовал galleryItems в одну строку с параметрами
const galleryCardEl = galleryItems.map(({ preview, original, description }) => {
    return `
    <a class="gallery__item" href=""${original}">
        <img class="gallery__image" src="${preview}" alt="${description}" />
    </a>`
});


  