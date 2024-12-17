import SimpleLightbox from 'simplelightbox';
import 'simplelightbox/dist/simple-lightbox.min.css';
import { galleryImages } from '../main';

const galleryModal = new SimpleLightbox('.gallery-item a', {
  captions: true,
  captionDelay: 250,
  captionsData: 'alt',
});

export function createGallery(arr) {
  const markup = arr
    .map(
      ({
        webformatURL,
        largeImageURL,
        tags,
        likes,
        views,
        comments,
        downloads,
      }) => `
    <li class="gallery-item">
      <a href="${largeImageURL}" class="gallery-link">
        <img  class="gallery-image" 
        src="${webformatURL}" 
        alt="${tags} 
        "width="360"
        height="200"/>
        <div class="info">
          <p class= "info-title"> Likes: ${likes}</p>
          <p class= "info-title">Views: ${views}</p>
          <p class= "info-title">Comments: ${comments}</p>
          <p class= "info-title">Downloads: ${downloads}</p>
        </div>
      </a>
    </li>
    `
    )
    .join('');
  galleryImages.insertAdjacentHTML('beforeend', markup);
  galleryModal.refresh();
}
