import { galleryItems } from './gallery-items.js';
// Change code below this line

const gallery = document.querySelector("div.gallery");
const instance = basicLightbox.create(`<img src="" />`);

const newGallery = galleryItems
    .map(
        (image) =>
            `<div class="gallery__item">
  <a class="gallery__link" href="${image.original}">
    <img
      class="gallery__image"
      src="${image.preview}"
      data-source="${image.original}"
      alt="${image.description}"
    />
  </a>
</div>`)
    .join("");

gallery.insertAdjacentHTML("beforeend", newGallery);

gallery.addEventListener("click", onOpenModal);

const url = instance.element().querySelector("img");

function onOpenModal(event) {
    event.preventDefault();
    if (event.target.nodeName !== "IMG") {
        return;
    }
    url.src = event.target.dataset.source;
    instance.show();
    window.addEventListener("keydown", onEscapeClick);
}

function onEscapeClick(event) {
    if (event.key === "Escape") {
        console.log("Close modalwindow");
        instance.close();
        window.removeEventListener("keydown", onEscapeClick);
        return;
    }
}
console.log(galleryItems);