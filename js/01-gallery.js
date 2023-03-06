import { galleryItems } from './gallery-items.js';
// Change code below this line

 console.log(galleryItems);

const galleryContainer = document.querySelector('.gallery');
function createGalleryCardsMarkup(items) {
    return items.map(({preview, original, description}) => {
        return `
        <div class="gallery__item">
            <a class="gallery__link" href="${original}">
            <img
                class="gallery__image"
                src="${preview}"
                data-source="${original}"
                alt="${description}"/>
            </a>
        </div>
        `;
        }).join('');
};

const cardsMarkup = createGalleryCardsMarkup(galleryItems);
galleryContainer.insertAdjacentHTML('beforeend', cardsMarkup);  

galleryContainer.addEventListener('click', ongalleryContainerClick)
function ongalleryContainerClick(event) {
    event.preventDefault();

    if(event.target.nodeName !== 'IMG') {
        return
    }

    const bigImageUrl = event.target.dataset.source;
   
    const instance = basicLightbox.create(`
		<img width="1400" height="900" src="${bigImageUrl}">
	`);
    instance.show();

    window.addEventListener('keydown', (event) => {
        if (event.code === "Escape") {
            instance.close();
        }
    })
}

    









