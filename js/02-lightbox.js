import { galleryItems } from './gallery-items.js';
// Change code below this line

const gallery = document.querySelector("div.gallery");

const newImages = galleryItems
    .map(
        (image) =>
            `<a class="gallery__item" href="${image.original}">
  <img class="gallery__image" src="${image.preview}" alt="${image.description}" />
</a>`
    )
    .join("");

gallery.insertAdjacentHTML("beforeend", newImages);

const lightbox = new SimpleLightbox(".gallery a", {
    captionsData: "alt",
    captionDelay: 250,
    captionPosition: "bottom",
});

console.log(galleryItems);