import { galleryItems } from "./gallery-items.js";
// Change code below this line
const ul = document.querySelector(".gallery");

galleryItems.map(({ preview, original, description }) => {
  const li = document.createElement("li");
  li.innerHTML = `
  <div>
      <a class="gallery__item" href="${original}">
      <img class="gallery__image" src="${preview}" alt="${description}" />
      </a>
  </div>`;

  ul.insertAdjacentElement("beforeend", li);
});

new SimpleLightbox(".gallery a", {
  captions: true,
  captionsData: "alt",
  captionDelay: 250,
});
