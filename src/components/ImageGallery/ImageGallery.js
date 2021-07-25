import React from 'react';
import ImageGallerryItem from "./ImageGalleryItem";
import PropTypes from 'prop-types';
import s from "./ImageGallery.module.css";

const ImageGallery = ({ images, onModalOpen }) => (
    <ul className={s.gallery}>
        {images.map(({ imageId, smallImg, modalImg, tags }) =>
            <li className={s.item} key={imageId}>
            
            
                <ImageGallerryItem smallImg={smallImg} tags={tags} modalImg={modalImg} onModalClick={onModalOpen} />
    
            </li>
        )}
    </ul>
);

ImageGallery.propTypes = {
    images: PropTypes.arrayOf(PropTypes.shape({
        imageId: PropTypes.number.isRequired,
        smallImg: PropTypes.string.isRequired,
        modalImg: PropTypes.string.isRequired,
        tags: PropTypes.string.isRequired,
    }).isRequired).isRequired,
    onModalOpen: PropTypes.func.isRequired,
}

export default ImageGallery;
