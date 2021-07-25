import * as imageApi from "../../services/apiFetch";
import React, { Component } from "react";
import SearchBar from "../SearchBar";
import mapper from "../../helpers/mapper";
import ImageGallery from "../ImageGallery";
import Section from "../Section";
import Button from "../Button";
import Loader from "../Loader";
import Modal from "../Modal";

export default class App extends Component {
  state = {
    images: [],
    query: "",
    page: 1,
    visible: false,
    modalShow: false,
  };

  componentDidUpdate(prevProps, prevState) {
    const { query, page } = this.state;

    if (query !== prevState.query || page !== prevState.page) {
      this.fetchImages(query, page);
    };
  };

  fetchImages = (query, page) => {
    this.setState({ visible: true });
    imageApi
      .fetchImg(query, page)
      .then(({ data: { hits } }) =>
        this.setState((prevState) => ({
          images: [...prevState.images, ...mapper(hits)],
        }))
      )
      .catch((error) => console.log("error", error)).finally(() => this.setState({ visible:false}));
  };

  reset = () => {
    this.setState({
      images: [],
      query: "",
      page: 1,
    });
  };

  handleSubmit = (query) => {
    this.reset();
    this.setState({ query: query });
  };

  handleNextPage = () => {
    this.setState((prevState) => ({ page: prevState.page + 1 }));
  };

  toggleModal = () => {
    this.setState(({ modalShow }) => ({ modalShow: !modalShow }));
  };

  render() {
    const { images, visible, modalShow } = this.state;
    return (
      <>
        <SearchBar onSubmit={this.handleSubmit} />
        <Section>
          {!!images.length && <ImageGallery images={images} onModalOpen={this.toggleModal} />}
          {visible && <Loader />}
          {images.length >= 12 && <Button onLoadMore={this.handleNextPage} />}
        </Section>
        {modalShow && <Modal onClose={this.toggleModal}
          // modalImg={""}
          // tags={"dsd"} 
          />
        }
      </>
    )
  }
}
