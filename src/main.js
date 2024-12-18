import iziToast from 'izitoast';
import 'izitoast/dist/css/iziToast.min.css';

import { createGallery } from './js/render-functions.js';
import { pixabayCreate } from './js/pixabay-api.js';

const form = document.querySelector('.gallery-form');
export const galleryImages = document.querySelector('.gallery');
const loadMoreBtn = document.querySelector('.load-more');
const loader = document.querySelector('.loader');

let page = 1;
let totalPage = 0;
let query = '';

form.addEventListener('submit', getPhoto);
loadMoreBtn.addEventListener('click', onLoadMore);

async function getPhoto(event) {
  event.preventDefault();
  query = event.currentTarget.elements.query.value.trim();
  if (!query) {
    iziToast.error({ message: 'Please enter a correct query' });
    return;
  }
  loadMoreBtn.classList.add('hidden');
  galleryImages.innerHTML = '';
  loader.classList.remove('hidden');
  page = 1;
  try {
    const data = await pixabayCreate(query, page);

    if (data.hits.length === 0) {
      return iziToast.error({
        title: '',
        backgroundColor: 'red',
        messageColor: 'white',
        position: 'topRight',
        message:
          'Sorry, there are no images matching your search query. Please try again!',
      });
    }

    createGallery(data.hits);
    form.reset();
    if (data.totalHits > 15) {
      loadMoreBtn.classList.remove('hidden');
      totalPage = Math.ceil(data.totalHits / 15);
    }
  } catch (error) {
    iziToast.error({
      backgroundColor: 'red',
      position: 'topRight',
      message: error.message,
    });
  } finally {
    loader.classList.add('hidden');
  }
}

async function onLoadMore() {
  page += 1;
  loadMoreBtn.disabled = true;
  loader.classList.remove('hidden');
  try {
    const data = await pixabayCreate(query, page);
    createGallery(data.hits);
    if (page === totalPage) {
      loadMoreBtn.classList.add('hidden');
      iziToast.info({
        position: 'topRight',
        message: "We're sorry, but you've reached the end of search results.",
      });
    } else {
      loadMoreBtn.classList.remove('hidden');
    }
    const { height: cardHeight } = document
      .querySelector('.gallery-item')
      .getBoundingClientRect();
    window.scrollBy({
      left: 0,
      top: cardHeight * 2,
      behavior: 'smooth',
    });
  } catch (error) {
    iziToast.error({
      backgroundColor: 'red',
      position: 'topRight',
      message: error.message,
    });
  } finally {
    loadMoreBtn.disabled = false;
    loader.classList.add('hidden');
  }
}
