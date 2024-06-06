import css from "./ImageGallery.module.css";

import ImageCard from "../ImageCard/ImageCard";

const ImageGallery = ({ images, onClick }) => {
  return (
    <ul className={css.gallery}>
      {images.map((image) => (
        <ImageCard key={image.id} image={image} onClick={onClick} />
      ))}
    </ul>
  );
};

export default ImageGallery;
