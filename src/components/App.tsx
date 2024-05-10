import './App.css';
import { useState, useEffect, useRef } from 'react';
import SearchBar from './SearchBar/SearchBar';
import SearchHeader from './SearchHeader/SearchHeader';
import ImageGallery from './ImageGallery/ImageGallery';
import Loader from './Loader/Loader';
import LoadMoreBtn from './LoadMoreBtn/LoadMoreBtn';
import searchPhotos from './services/api';
import ImageModal from './ImageModal/ImageModal';

interface Image {
  id: string;
  alt: string;
}

function App() {
  const [query, setQuery] = useState<string>('');
  const [images, setImages] = useState<Image[]>([]);
  const [loading, setLoading] = useState<boolean>(false);
  const [error, setError] = useState<Error | null>(null);
  const [page, setPage] = useState<number>(1);
  const [isOpenModal, setIsOpenModal] = useState<boolean>(false);
  const [selectedImage, setSelectedImage] = useState<string>('');

  useEffect(() => {
    if (!query) {
      return;
    }
    const getPhotos = async () => {
      setLoading(true);
      try {
        const data = await searchPhotos(query, page);
        setImages(prevImages => [...prevImages, ...data as Image[]]);
        setError(null);
      } catch (err) {
        setError(err as Error);
      }
      setLoading(false);
    };
    getPhotos();
  }, [query, page]);


  const handleSearch = async (query: string) => {
    setQuery(query);
    setPage(1);
    setImages([]);
  };

  const handlePage = () => {
    setPage(prevPage => prevPage + 1);
  };

  const handleImageClick = (imageUrl: string) => {
    setSelectedImage(imageUrl);
    setIsOpenModal(true);
  }

  const closeModal = () => {
    setSelectedImage('');
    setIsOpenModal(false);
  }

  return (
    <div>
      <SearchHeader>
        <SearchBar onSubmit={handleSearch} />
      </SearchHeader>
      {error && <p>{error.message}</p>}
      {images.length > 0 && (<ImageGallery images={images} onImageClick={handleImageClick} />)}
      {images.length > 0 && !loading && (<LoadMoreBtn onClick={handlePage} />
      )}
      {loading && <Loader />}
      <ImageModal
        imageUrl={selectedImage}
        isOpen={isOpenModal}
        closeModal={closeModal} />
    </div>
  );
}

export default App;


