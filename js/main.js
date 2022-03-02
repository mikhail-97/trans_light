const header = document.querySelector('#header_fixed');
window.onscroll = function showHeader() {
  if (window.pageYOffset > 20) {
    header.classList.add('change_color');
  } else {
    header.classList.remove('change_color');
  }
};

const floatignHeader = document.querySelector('#header_fixed');

function init() {
  if (window.pageYOffset > 20) {
    floatignHeader.classList.add('change_color');
  }
}
init();

$(function () {
  $('.burger_menu').click(function () {
    $('.header_list').toggleClass('show_menu');

  });
});

const swiper = new Swiper('.swiper1', {
  // Optional parameters
  direction: 'horizontal',
  loop: true,

  // If we need pagination
  pagination: {
    el: '.swiper-pagination',
  },

  // Navigation arrows
  navigation: {
    nextEl: '.next1',
    prevEl: '.prev1',
  },

  // And if we need scrollbar
  scrollbar: {
    el: '.swiper-scrollbar',
  },
  breakpoints: {
    768: {
      slidesPerView: 2,
      spaceBetween: 22.22,
    }
  }

});

const swiper2 = new Swiper('.swiper2', {
  // Optional parameters
  direction: 'horizontal',
  loop: true,

  // If we need pagination
  pagination: {
    el: '.swiper-pagination',
  },

  // Navigation arrows
  navigation: {
    nextEl: '.next2',
    prevEl: '.prev2',
  },

  slidesPerView: 1,

});



