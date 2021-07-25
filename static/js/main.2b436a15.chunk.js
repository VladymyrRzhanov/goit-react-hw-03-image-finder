(this["webpackJsonpgoit-react-hw-03-image-finder"]=this["webpackJsonpgoit-react-hw-03-image-finder"]||[]).push([[0],{12:function(e,t,a){e.exports={section:"Section_section__2QykX",container:"Section_container__30Ijz"}},13:function(e,t,a){e.exports={overlay:"Modal_overlay__xPXOl",modal:"Modal_modal__2OyxV"}},24:function(e,t,a){e.exports={button:"Button_button__1Oxc2"}},30:function(e,t,a){},70:function(e,t,a){"use strict";a.r(t);var n=a(1),o=a.n(n),r=a(10),c=a.n(r),s=(a(30),a(14)),l=a(4),i=a(5),u=a(7),m=a(6),h=a(23),d=a.n(h),g=function(e,t){return d.a.get("".concat("https://pixabay.com/api/","?image_type=photo&orientation=horizontal&q=").concat(e,"&page=").concat(t,"&per_page=").concat(12,"&key=").concat("21924211-a56ef8093bc4c324081574229"))},b=a(8),p=a.n(b),j=a(0),f=function(e){Object(u.a)(a,e);var t=Object(m.a)(a);function a(){var e;Object(l.a)(this,a);for(var n=arguments.length,o=new Array(n),r=0;r<n;r++)o[r]=arguments[r];return(e=t.call.apply(t,[this].concat(o))).state={value:""},e.handleChangeInput=function(t){var a=t.currentTarget.value;e.setState({value:a})},e.handleSubmit=function(t){var a=e.props.onSubmit,n=e.state.value;t.preventDefault(),n.trim()&&(a(n),e.setState({value:""}))},e}return Object(i.a)(a,[{key:"render",value:function(){return Object(j.jsx)("header",{className:p.a.searchBar,children:Object(j.jsxs)("form",{className:p.a.searchForm,onSubmit:this.handleSubmit,children:[Object(j.jsx)("button",{className:p.a.searchButton,type:"submit",children:Object(j.jsx)("span",{className:p.a.buttonLabel,children:"Search"})}),Object(j.jsx)("input",{className:p.a.formInput,type:"text",autoComplete:"off",autoFocus:!0,placeholder:"Search images and photos",onChange:this.handleChangeInput})]})})}}]),a}(n.Component),v=function(e){return e.map((function(e){return{imageId:e.id,smallImg:e.webformatURL,modalImg:e.largeImageURL,tags:e.tags}}))},O=a(9),y=a.n(O),_=function(e){var t=e.smallImg,a=e.modalImg,n=e.tags,o=e.onModalClick;return Object(j.jsx)("img",{className:y.a.galleryImage,src:t,alt:n,onClick:function(){return o(a,n)}})},x=function(e){var t=e.images,a=e.onModalOpen;return Object(j.jsx)("ul",{className:y.a.gallery,children:t.map((function(e){var t=e.imageId,n=e.smallImg,o=e.modalImg,r=e.tags;return Object(j.jsx)("li",{className:y.a.item,children:Object(j.jsx)(_,{smallImg:n,tags:r,modalImg:o,onModalClick:a})},t)}))})},S=a(12),I=a.n(S),k=function(e){var t=e.children;return Object(j.jsx)("section",{className:I.a.section,children:Object(j.jsx)("div",{className:I.a.container,children:t})})},w=a(24),C=a.n(w),B=function(e){var t=e.onLoadMore;return Object(j.jsx)("button",{className:C.a.button,type:"button",onClick:function(){return t()},children:"Load more"})},N=a(25),M=a.n(N),L=function(e){Object(u.a)(a,e);var t=Object(m.a)(a);function a(){return Object(l.a)(this,a),t.apply(this,arguments)}return Object(i.a)(a,[{key:"render",value:function(){return Object(j.jsx)(M.a,{type:"ThreeDots",color:"#3f51b5",height:100,width:100,timeout:3e3})}}]),a}(n.Component),q=a(13),E=a.n(q),F=document.querySelector("#modal"),D=function(e){Object(u.a)(a,e);var t=Object(m.a)(a);function a(){var e;Object(l.a)(this,a);for(var n=arguments.length,o=new Array(n),r=0;r<n;r++)o[r]=arguments[r];return(e=t.call.apply(t,[this].concat(o))).modalClose=function(t){var a=e.props.onClose;"Escape"===t.code&&a()},e.handleBackdropClick=function(t){var a=e.props.onClose;t.currentTarget===t.target&&a()},e}return Object(i.a)(a,[{key:"componentDidMount",value:function(){window.addEventListener("keydown",this.modalClose)}},{key:"componentWillUnmount",value:function(){window.removeEventListener("keydown",this.modalClose)}},{key:"render",value:function(){return Object(r.createPortal)(Object(j.jsx)("div",{className:E.a.overlay,onClick:this.handleBackdropClick,children:Object(j.jsx)("div",{className:E.a.modal,children:Object(j.jsx)("img",{src:this.props.modalImg,alt:this.props.tags})})}),F)}}]),a}(n.Component),P=function(e){Object(u.a)(a,e);var t=Object(m.a)(a);function a(){var e;Object(l.a)(this,a);for(var n=arguments.length,o=new Array(n),r=0;r<n;r++)o[r]=arguments[r];return(e=t.call.apply(t,[this].concat(o))).state={images:[],query:"",modalImg:"",tags:"",page:1,visible:!1,modalShow:!1},e.fetchImages=function(t,a){e.setState({visible:!0}),g(t,a).then((function(t){var a=t.data.hits;e.setState((function(e){return{images:[].concat(Object(s.a)(e.images),Object(s.a)(v(a)))}})),window.scrollTo({top:document.documentElement.scrollHeight,behavior:"smooth"})})).catch((function(e){return console.log("error",e)})).finally((function(){return e.setState({visible:!1})}))},e.reset=function(){e.setState({images:[],query:"",page:1})},e.handleSubmit=function(t){e.reset(),e.setState({query:t})},e.handleNextPage=function(){e.setState((function(e){return{page:e.page+1}}))},e.toggleModal=function(t,a){e.setState((function(e){return{modalShow:!e.modalShow,modalImg:t,tags:a}}))},e}return Object(i.a)(a,[{key:"componentDidUpdate",value:function(e,t){var a=this.state,n=a.query,o=a.page;n===t.query&&o===t.page||this.fetchImages(n,o)}},{key:"render",value:function(){var e=this.state,t=e.images,a=e.visible,n=e.modalShow,o=e.modalImg,r=e.tags;return Object(j.jsxs)(j.Fragment,{children:[Object(j.jsx)(f,{onSubmit:this.handleSubmit}),Object(j.jsxs)(k,{children:[!!t.length&&Object(j.jsx)(x,{images:t,onModalOpen:this.toggleModal}),a&&Object(j.jsx)(L,{}),t.length>=12&&Object(j.jsx)(B,{onLoadMore:this.handleNextPage})]}),n&&Object(j.jsx)(D,{onClose:this.toggleModal,modalImg:o,tags:r})]})}}]),a}(n.Component);c.a.render(Object(j.jsx)(o.a.StrictMode,{children:Object(j.jsx)(P,{})}),document.getElementById("root"))},8:function(e,t,a){e.exports={searchBar:"SearchBar_searchBar__2wzxk",searchForm:"SearchBar_searchForm__3phfb",searchButton:"SearchBar_searchButton__9jSSs",buttonLabel:"SearchBar_buttonLabel__1e0fd",formInput:"SearchBar_formInput__1sW50"}},9:function(e,t,a){e.exports={gallery:"ImageGallery_gallery__3nfW3",item:"ImageGallery_item__1lfaH",galleryImage:"ImageGallery_galleryImage__3pHg0"}}},[[70,1,2]]]);
//# sourceMappingURL=main.2b436a15.chunk.js.map