import React, { Component } from 'react';
import { fetchImages } from './servises/api';
import Searchbar from './Searchbar/Searchbar';
import Loader from './Loader/Loader';
import ImageGallery from './ImageGallery/ImageGallery';
import Button from './Button/Button';
import { animateScroll } from 'react-scroll';
import Modal from './Modal/Modal';
import { Notify } from 'notiflix';



class App extends Component {
  state = {
    searchQuery: '',
    images: [],
    page: 1,
    per_page: 12,
    isLoading: false,
    loadMore: false,
    error: null,
    showModal: false,
    isModalOpen: false,
    largeImageURL: 'largeImageURL',
    id: null,
  };

  componentDidUpdate(_, prevState) {
    const { searchQuery, page } = this.state;
    if (prevState.searchQuery !== searchQuery || prevState.page !== page) {
      this.getImages(searchQuery, page);
    }
  }

  getImages = async (query, page) => {
  this.setState({ isLoading: true });
  if (!query) {
    return;
  }
  try {
    const { hits, totalHits } = await fetchImages(query, page);

    if (hits.length === 0) {
      Notify.failure('Зображення не знайдено. Спробуйте інший запит.', {
        position: 'center-bottom',
        timeout: 5000,
        width: '290px',
        fontSize: '18px'
      });
      return;
    }

    this.setState((prevState) => ({
      images: [...prevState.images, ...hits],
      loadMore: page < Math.ceil(totalHits / this.state.per_page),
    }));
  } catch (error) {
    this.setState({ error: error.message });
  } finally {
    this.setState({ isLoading: false });
  }
};

  formSubmit = (searchQuery) => {
  const trimmedQuery = searchQuery.trim();

  if (trimmedQuery && trimmedQuery !== this.state.searchQuery) {
    this.setState({
      searchQuery: trimmedQuery,
      images: [],
      page: 1,
      loadMore: false,
    });
  }
};

  onloadMore = () => {
  this.setState((prevState) => ({ page: prevState.page + 1 }));
  this.scrollOnMoreButton();
};

  scrollOnMoreButton = () => {
  animateScroll.scrollMore(1000, { delay: 10, smooth: 'linear' });
};

  openModal = (largeImageURL) => {
  if (!this.state.showModal) {
    this.setState({
      showModal: true,
      largeImageURL: largeImageURL,
      isModalOpen: true,
    });
  }
};

  closeModal = () => {
  this.setState({
    showModal: false,
    isModalOpen: false,
  });
};

  render() {
    const { images, isLoading, loadMore, page, showModal, largeImageURL, isModalOpen } =
      this.state;
    return (
      <>
        {!isModalOpen && <Searchbar onSubmit={this.formSubmit} />}

        {isLoading ? (
          <Loader />
        ) : (
          <ImageGallery images={images} openModal={this.openModal} />
        )}

        {loadMore && !isLoading && (<Button onloadMore={this.onloadMore} page={page} />
        )}
        {showModal && (
          <Modal
            isOpen={showModal}
            onClose={this.closeModal}
            largeImageURL={largeImageURL}
          />
        )}
      </>
    );
  }
}

export default App;