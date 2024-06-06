const GalleryItem = ({ image, onClick }) => {
  return (
    <li key={image.id} onClick={() => onClick(image)}>
      <img src={image.urls.small} alt={image.slug} id={image.id} />
    </li>
  );
};

export default GalleryItem;
