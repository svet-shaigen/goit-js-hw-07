import { galleryItems } from './gallery-items.js';

const galleryContainer = document.querySelector('.gallery');

function createGalleryItemsMarkup(items) {
  return items.map(({ preview, original, description }) => {
    return `<li>
              <a class="gallery__item" href="${original}">
               <img
                class="gallery__image"
                src="${preview}"
                alt="${description}"
               />
             </a>
           </li>`
  }).join('');
}

const itemsMarkup = createGalleryItemsMarkup(galleryItems);
galleryContainer.insertAdjacentHTML('beforeend', itemsMarkup);

const modalLightbox = new SimpleLightbox('.gallery .gallery__item', {
    captionsData: 'alt',
    captionDelay: 250,
  });
  
