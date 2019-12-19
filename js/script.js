$(document).ready(function() {
  var parallaxSlider;
  var parallaxSliderOptions = {
    speed: 1000,
    autoplay: true,
    parallax: true,
    loop: true,
    grabCursor: true,
    centeredSlides: true,
    pagination: {
      el: '.swiper-pagination',
      clickable: true
    },
    on: {
      init: function() {
        let swiper = this;
        for (let i = 0; i < swiper.slides.length; i++) {
          $(swiper.slides[i])
            .find('.img-container')
            .attr({
              'data-swiper-parallax': 0.75 * swiper.width,
              'data-swiper-paralalx-opacity': 0.5
            });

          $(swiper.slides[i])
            .find('.title')
            .attr('data-swiper-parallax', 0.65 * swiper.width);
          $(swiper.slides[i])
            .find('.description')
            .attr('data-swiper-parallax', 0.5 * swiper.width);
        }
      },
      resize: function() {
        this.update();
      }
    },
    navigation: {
      nextEl: '.parallax-slider .next-ctrl',
      prevEl: '.parallax-slider .prev-ctrl'
    }
  };

  parallaxSlider = new Swiper('.parallax-slider', parallaxSliderOptions);
  $(window).on('resize', function() {
    parallaxSlider.destroy();
    parallaxSlider = new Swiper('.parallax-slider', parallaxSliderOptions);
  });
});
