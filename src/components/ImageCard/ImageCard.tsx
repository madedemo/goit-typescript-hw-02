import css from './ImageCard.module.css'
import { FC } from 'react'

interface ImageCardProps {
  src: string
  alt: string
  onClick?: () => void
}

const ImageCard: React.FC<ImageCardProps> = ({ src ,alt, onClick }) => (
  <div>
    <img
      className={css.image}
      src={src}
      alt={alt}
      onClick={onClick}
    />
  </div>
);

export default ImageCard