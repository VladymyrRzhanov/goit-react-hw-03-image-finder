const mapper = hits => {
    return hits.map(({ id: imageId, webformatURL: smallImg, largeImageURL: modalImg, tags }) => ({ imageId, smallImg, modalImg,tags }))
};

export default mapper;