import { galleryItems } from './gallery-items.js';
// Change code below this line
const picturesGallery = document.querySelector(".gallery");
const pictureMarkup = createPictureMarkup(galleryItems)

picturesGallery.insertAdjacentHTML("beforeend", pictureMarkup)
picturesGallery.addEventListener('click', imageGalleryClick )

function createPictureMarkup (pictures){
    return pictures.map(({ preview, original, description }) => 
    `  
    <div class="gallery__item">
        <a class="gallery__link" href="${original}">
            <img
                class="gallery__image"
                src="${preview}"
                data-source="${original}"
                alt="${description}"
            />
        </a>
    </div>
    `
    )
    .join('');
}

function imageGalleryClick (event){
    event.preventDefault() 
        if(!event.target.classList.contains("gallery__image")){
        return
        }
        const instance = basicLightbox.create(`
            <img src="${event.target.dataset.source}"/>
        `)
        instance.show()
}





// import * as basicLightbox from './basic-lightbox.js' ?????treba


