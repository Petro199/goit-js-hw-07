import { galleryItems } from './gallery-items.js';
// Change code below this line

const gallDivEl = document.querySelector(".gallery");

const gallCards = galleryItems
  .map(
    (img) =>
      `<div class="gallery__item"><a class="gallery__link" href="${img.original}"><img class="gallery__image" src="${img.preview}" data-source="${img.original}" alt="${img.description}"/></a></div>`
  )
  .join("");

gallDivEl.innerHTML = gallCards;

gallDivEl.addEventListener("click", openImg);

let modalEl;

function openImg(event) {
  event.preventDefault();
  if (event.target.nodeName === "DIV") {
    return;
  }
  modalEl = basicLightbox.create(`
  <img src=${event.target.dataset.source} alt="${event.target.alt}"> 
  `);
  modalEl.show();
  document.addEventListener("keydown", closeModal);
}

function closeModal(event) {
  if (event.key === "Escape") {
    modalEl.close();
    document.removeEventListener("keydown", closeModal);
  }
}


console.log(galleryItems);
