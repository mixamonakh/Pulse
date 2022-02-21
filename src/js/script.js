const slider = tns({
    container: '.carousel__inner',
    items: 1,
    slideBy: 'page',
    autoplay: false,
    controls: false,
    nav: true,
    responsive: {
        320: {
          nav: true
        },
        640: {
          edgePadding: 20,
          gutter: 20,
          items: 1,
        },
        700: {
          gutter: 30
        },
        900: {
          items: 1,
        },
        1200: {
          nav: false
        }
      }
});

document.querySelector('.prev').addEventListener('click', function () {
    slider.goTo('prev');
});

document.querySelector('.next').addEventListener('click', function () {
    slider.goTo('next');
});