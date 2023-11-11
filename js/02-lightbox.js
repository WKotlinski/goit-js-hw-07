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

const openModal = function (event) {
  event.preventDefault();
  const target = event.target;
  if (!target.classList.contains("gallery__image")) {
    return;
  }
  new SimpleLightbox(".gallery a", {
    captions: true,
    captionSelector: "img",
    captionsData: "alt",
    captionDelay: "250ms",
  });
};

ul.addEventListener("click", openModal);
