import css from './ImageGallery.module.css';
import ImageCard from '../ImageCard/ImageCard';
import { FC } from 'react';

interface ImageGalleryProps {
  images: any[];
  onImageClick: (url: string) => void;
}

const ImageGallery: React.FC<ImageGalleryProps> = ({ images, onImageClick }) => {

  return (
    <ul className={css.ImageGallery}>
      {images.map((image, id) => (
        <li key={id}> 
          <ImageCard
            src={image.urls.small}
            alt={image.alt}
            onClick={() => onImageClick(image.urls.regular)} />
        </li>
      ))}
    </ul>
  );
};

export default ImageGallery;

