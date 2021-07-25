import React from 'react';
// import PropTypes from 'prop-types';
import s from "./ImageGallery.module.css";


const ImageGalleryItem = ({ imageId, smallImg, tags, modalImg, onModalClick }) => {
    return (
        <img className={s.galleryImage} src={smallImg} alt={tags}
            onClick={({ modalImg, tags }) => onModalClick(modalImg, tags)}
        />
    );
};

// ImageGalleryItem.propTypes = {
//     imageId: pt
//     smallImg: 
// }

export default ImageGalleryItem;