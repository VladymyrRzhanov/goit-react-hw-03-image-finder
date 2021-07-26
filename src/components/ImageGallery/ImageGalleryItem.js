import React from 'react';
import PropTypes from 'prop-types';
import s from "./ImageGallery.module.css";


const ImageGalleryItem = ({ smallImg, modalImg, tags, onModalClick }) => {
    return (
        <img
            className={s.galleryImage}
            src={smallImg}
            alt={tags}
            onClick={() => onModalClick(modalImg, tags)}
        />
    );
};

ImageGalleryItem.propTypes = {
    smallImg: PropTypes.string.isRequired,
        modalImg: PropTypes.string.isRequired,
    tags: PropTypes.string.isRequired,
    onModalClick: PropTypes.func.isRequired,
};

export default ImageGalleryItem;