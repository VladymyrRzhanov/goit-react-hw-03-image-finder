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
    modalImg: '',
    tags: '',
    page: 1,
    loading: false,
    modalShow: false,
    error: '',
    status: 'idle'
  };

  componentDidUpdate(prevProps, prevState) {
    const { query, page } = this.state;

    if (query !== prevState.query || page !== prevState.page) {
      this.fetchImages(query, page);
    };
    window.scrollTo({
          top: document.documentElement.scrollHeight,
          behavior: 'smooth',
        });
  };

  fetchImages = (query, page) => {
    this.setState({ loading: true, status: 'pending' });
    imageApi
      .fetchImg(query, page)
      .then(({ data: { hits } }) => {
        this.setState((prevState) => ({
          images: [...prevState.images, ...mapper(hits)], status: 'resolved'
        }));
      }
      )
      .catch((error) => this.setState({ error, status: 'rejected' }))
    .finally(() => this.setState({ loading: false }));
  };

  reset = () => {
    this.setState({
      images: [],
      query: "",
      page: 1,
    });
  };

  handleSubmit = query => {
    this.reset();
    this.setState({ query });
  };

  handleNextPage = () => {
    this.setState((prevState) => ({ page: prevState.page + 1 }));
  };

  toggleModal = (modalImg, tags) => {
    this.setState(({ modalShow }) => ({ modalShow: !modalShow, modalImg, tags }));
  };



// ------------------------------------------------ Вариант 1 ------------------------------------------------------
  
                                            
  render() {
    const { images, loading, modalShow, modalImg, tags, error } = this.state;

    return (
      <>
        <SearchBar
          onSubmit={this.handleSubmit}
        />
        <Section>
          {
            error &&
            <h2>
              {error.message}
            </h2>
          }
          {
            !!images.length &&
            <ImageGallery
              images={images}
              onModalOpen={this.toggleModal}
            />
          }
          {
            loading &&
            <Loader />
          }
          {
            (images.length % 12===0 && !!images.length) &&
            <Button
              onLoadMore={this.handleNextPage}
            />
          }
        </Section>
        {
          modalShow &&
          <Modal
            onClose={this.toggleModal}
            modalImg={modalImg}
            tags={tags}
          />
        }
      </>
    );
  };
  


// ------------------------------------------Вариант 2----------------------------------------------------

  // render() {
  //   const { images, status, modalShow, modalImg, tags, error } = this.state;
  //   if (this.state.status === 'idle') {
  //     return <>
  //       <SearchBar
  //         onSubmit={this.handleSubmit}
  //       />;
  //       <Section />
  //     </>
  //   }

  //   if (status === 'pending') {
  //     return <>
  //       <SearchBar
  //         onSubmit={this.handleSubmit}
  //       />;
  //       <Section>
  //         <ImageGallery
  //           images={images}
  //           onModalOpen={this.toggleModal}
  //         />
  //         <Loader />
  //       </Section>
  //     </>
  //   }

  //   if (status === 'resolved') {
  //     return <>
  //       <SearchBar
  //         onSubmit={this.handleSubmit}
  //       />;
  //       <Section>
  //         <ImageGallery
  //           images={images}
  //           onModalOpen={this.toggleModal}
  //         />
  //         {(images.length % 12 === 0 && images.length!==0) &&
  //           <Button
  //             onLoadMore={this.handleNextPage}
  //           />}
  //       </Section>
  //       {
  //         modalShow &&
  //         <Modal
  //           onClose={this.toggleModal}
  //           modalImg={modalImg}
  //           tags={tags}
  //         />
  //       }
  //     </>
  //   }

  //   if (status === "rejected") {
  //     return <>
  //       <SearchBar
  //         onSubmit={this.handleSubmit}
  //       />
  //       <Section>
  //         <h2>{error.message}</h2>
  //       </Section>
  //     </>
  //   }
  // }
    

// ------------------------------ Вариант 3-------------------------------------------
// render() {
  //   const { images, status, modalShow, modalImg, tags, error } = this.state;
  //   return (
  //     <>
  //       <SearchBar
  //         onSubmit={this.handleSubmit}
  //       />
  //       <Section>
  //         {(status === 'pending') &&
  //           <>
  //             <ImageGallery
  //               images={images}
  //               onModalOpen={this.toggleModal}
  //             />
  //             <Loader />
  //           </>
  //         }

  //         {
  //           (status === "rejected") &&
  //           <h2>
  //             {error.message}
  //           </h2>
  //         }

  //         {(status === 'resolved') &&
  //           <>
  //             <ImageGallery
  //               images={images}
  //               onModalOpen={this.toggleModal}
  //             />
  //             {(images.length % 12 === 0 && images.length!==0) &&
  //               <Button
  //                 onLoadMore={this.handleNextPage}
  //               />
  //             }
  //             {
  //               modalShow &&
  //               <Modal
  //                 onClose={this.toggleModal}
  //                 modalImg={modalImg}
  //                 tags={tags}
  //               />
  //             }
  //           </>
  //         }
  //       </Section>
  //     </>
  //   )
  // };

};
