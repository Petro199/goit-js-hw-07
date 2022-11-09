import { galleryItems } from './gallery-items.js';
// Change code below this line


const gallDivEl = document.querySelector(".gallery");

const gallCards = galleryItems
  .map(
    (img) =>
      `<a class="gallery__item" href="${img.original}"><img class="gallery__image" src="${img.preview}" data-source="${img.original}" alt="${img.description}"/></a>`
  )
  .join("");

gallDivEl.innerHTML = gallCards;

const lightbox = new SimpleLightbox(".gallery a", {
  captionsData: "alt",
  captionDelay: 250,
});