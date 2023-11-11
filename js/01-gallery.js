import { galleryItems } from "./gallery-items.js";
// Change code below this line
const ul = document.querySelector(".gallery");

galleryItems.map(({ preview, original, description }) => {
  const li = document.createElement("li");
  li.innerHTML = `
  <div class="gallery__item">
    <a class="gallery__link" href="${original}">
        <img
            class="gallery__image"
            src="${preview}"
            data-source="${original}"
            alt="${description}"
        />
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

  const modalInstance = basicLightbox.create(`
  <img src="${target.dataset.source}" alt="${target.alt}">
`);

  modalInstance.show();
  document.addEventListener("keydown", function (event) {
    if (event.code === "Escape") {
      modalInstance.close();
    }
  });
};

ul.addEventListener("click", openModal);
