// swiper element
const swiperEl = document.querySelector("#swiper-insta");
if (swiperEl) {
  // swiper parameters
  const swiperParams = {
    slidesPerView: 1,
    breakpoints: {
      640: {
        slidesPerView: 2,
        spaceBetween: 16,
      },
      1024: {
        slidesPerView: 3,
        spaceBetween: 20,
      },
    },
    on: {
      init() {
        console.log("iniciado");
      },
    },
  };

  // now we need to assign all parameters to Swiper element
  Object.assign(swiperEl, swiperParams);

  // and now initialize it
  swiperEl.initialize();
  // console.log("INICIALIZADO");
}
