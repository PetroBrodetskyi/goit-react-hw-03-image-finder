import React from "react";
import css from './ImageGalleryItem.module.css';


const ImageGalleryItem = ({ src, alt, largeImageURL, openModal }) => {
  return (
    <li className={css.imagegalleryitem} onClick={() => openModal(largeImageURL)}>
      <img src={src} alt={alt} className={css.imagegalleryitemimage} />
    </li>
  );
};

export default ImageGalleryItem;
