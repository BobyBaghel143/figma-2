$("#owl-carousel").owlCarousel({
  loop: true,
  margin: 10,
  nav: false,
  dots: false,
  // navText: [
  //   `<img src="images/vector-left.png" alt="">`,
  //   `<img src="images/vector-right.png" alt="">`,
  // ],
  responsive: {
    0: {
      items: 1,
    },
    600: {
      items: 3,
    },
    1000: {
      items: 4.5,
    },
  },
});
$("#owl-carousel1").owlCarousel({
  loop: true,
  margin: 10,
  nav: true,
  dots: false,
  // navText: [
  //   `<img src="images/vector-left.png" alt="">`,
  //   `<img src="images/vector-right.png" alt="">`,
  // ],
  responsive: {
    0: {
      items: 1,
    },
    600: {
      items: 2,
    },
    1000: {
      items: 3,
    },
  },
});
