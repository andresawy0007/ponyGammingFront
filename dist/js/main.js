
/* INIT AND SET REGISTER SWIPER STEPS
======================================================================================================================= */
const registerSteps = document.querySelector('.register-steps');
if (registerSteps) {
  const swiperRegisterSteps = new Swiper('.register-steps__swiper', {
    slidesPerView: 3,
    navigation: {
      nextEl: '.swiper-button-next',
      prevEl: '.swiper-button-prev',
    },
  });
}

/* INIT AND SET ROSTERS SWIPER TEAM
======================================================================================================================= */
const rostersTeam = document.querySelector('.rosters-team');
if (rostersTeam) {
  const swiperRosterTeam = new Swiper('.rosters-team__swiper', {
    slidesPerView: 3,
    navigation: {
      nextEl: '.swiper-button-next',
      prevEl: '.swiper-button-prev',
    },
  });
}

/* INIT AND SET ROSTER SWIPER PERSONS
======================================================================================================================= */
const rosterPersons = document.querySelector('.roster-persons');
if (rosterPersons) {
  const swiperRosterPersons = new Swiper('.roster-persons__swiper .swiper', {
    slidesPerView: 3,
    grid: {
      rows: 2,
    },
    navigation: {
      nextEl: '.swiper-button-next',
      prevEl: '.swiper-button-prev',
    },
  });
}

/* INIT AND SET ROSTER SWIPER PERSONS
======================================================================================================================= */
const rosterTips = document.querySelector('.roster-tips');
if (rosterTips) {
  const swiperRosterTips = new Swiper('.roster-tips__swiper', {
    slidesPerView: 3,
    navigation: {
      nextEl: '.swiper-button-next',
      prevEl: '.swiper-button-prev',
    },
  });
}

/* INIT AND SET ROSTER SWIPER VIDEOS HOME
======================================================================================================================= */
const homeVideoBanners = document.querySelector('.home-video-banner');
if (homeVideoBanners) {
  const swiperRosterTips = new Swiper('.home-video-banner__swiper', {
    slidesPerView: 3,
    navigation: {
      nextEl: '.swiper-button-next',
      prevEl: '.swiper-button-prev',
    },
  });
}

/* INIT AND SET ROSTER SWIPER PERSONS
======================================================================================================================= */
const rosterTrainings = document.querySelector('.roster-trainings');
if (rosterTrainings) {
  const swiperRosterTrainings = new Swiper('.roster-trainings__swiper .swiper', {
    direction: 'vertical',
    slidesPerView: 3,
    // spaceBetween: 20,
    navigation: {
      nextEl: '.swiper-button-next',
      prevEl: '.swiper-button-prev',
    },
  });
  setTimeout(() => {
    swiperRosterTrainings.slideTo(1, 0, false)
  }, 200);
  swiperRosterTrainings.on('slideChange', function () {
    setTimeout(() => {
      checkSlideActive();
    }, 200);
  });
}

function checkSlideActive() {
  const title = document.querySelector(' .roster-trainings .swiper-slide-next .swiper-title').textContent;
  const text = document.querySelector(' .roster-trainings .swiper-slide-next .swiper-text').textContent;
  const button = document.querySelector(' .roster-trainings .swiper-slide-next .swiper-button').getAttribute('href');

  document.querySelector('.roster-trainings__title').textContent = title;
  document.querySelector('.roster-trainings__text').textContent = text;
  document.querySelector('.roster-trainings__button').setAttribute('href', button);
}

/* JQUERY
======================================================================================================================= */
(function ($) {

  // PERSONS TEAM
  const rostersPerson = $('.roster-persons .swiper-item');
  $(rostersPerson).on('click', function() {
    refillDataPerson($(this));
    $('.roster-persons .swiper-item').removeClass('active');
    $(this).addClass('active');
  })

  setTimeout(() => {
    $('.roster-persons .swiper-item')[0].click();
  }, 200);

  function refillDataPerson(person) {
    $('.roster-persons .card-item__image').attr('src', $(person).find('.swiper-image').attr('src'));
    $('.roster-persons .card-item__title').text($(person).find('.swiper-title').text());
    $('.roster-persons .card-item__text').text($(person).find('.swiper-text').text());
    $('.roster-persons .links-item.discord').attr('href', $(person).find('.swiper-twitch').text());
    $('.roster-persons .links-item.twitch').attr('href', $(person).find('.swiper-twitch').text());
  }

  // INSERT VOID SLIDES
  $('.roster-trainings__swiper .swiper-wrapper').append('<div class="swiper-slide"><div class="swiper-item d-none"></div></div>');
  $('.roster-trainings__swiper .swiper-wrapper').prepend('<div class="swiper-slide"><div class="swiper-item d-none"></div></div>');

  // OPEN MODAL VIDEO
  $('.roster-tips__play').on('click', function() {
    $('.modal-video').addClass('active');
    $('body').addClass('modal-visible');
  })

  // OPEN MODAL DETAIL ROSTER
  $('.roster-persons .card-item__button').on('click', function() {
    $('.modal-detail').addClass('active');
    $('body').addClass('modal-visible');
  })

  // CLOSE MODAL
  $('.modal-video__close, .modal-detail__close').on('click', function() {
    $('.modal-video, .modal-detail').removeClass('active');
    $('body').removeClass('modal-visible');
  })



  // setTimeout(() => {
  //   const headerSocialMobile = $('.header .header-social');
  //   headerSocialMobile.appendTo('.header .header-menu');
  // }, 200);

  // // MENU MOBILE
  // let windowViewport = window.innerWidth;
  // if (windowViewport < 768) {
  //   let submenu = $('.header .header-submenu');
  //   submenu.parent().addClass('arrow')
  //   submenu.parent().click(function(e) {
  //     submenu.toggleClass('active');
  //     if ($('.header-submenu__item.title').length < 1) {
  //       let tilteSubmenu = $('<li class="header-submenu__item item-mobile title"> <a class="header-submenu__link"> Maltas</a></li>');
  //       $('.header .header-submenu').prepend(tilteSubmenu);
  //     }
  //   });

  //   setTimeout(() => {
  //     const buttonRegisterMobile = $('.header .header-button').not('.principal').clone();
  //     buttonRegisterMobile.removeClass('item-desktop');
  //     buttonRegisterMobile.addClass('item-mobile');
  //     buttonRegisterMobile.appendTo('.header .header-menu');

  //     let usermenu = $('.header .header-account.item-mobile .header-user');
  //     let username = $('.header .header-account.item-mobile .header-account__username').text();
  //     let avatar = $('.header .header-account.item-mobile .header-account__avatar').attr('src');
  //     usermenu.parent().click(function(e) {
  //       usermenu.toggleClass('active');
  //       if ($('.header-user__item.title').length < 1) {
  //         let titleUsermenu = $('<li class="header-user__item item-mobile title"> <a class="header-user__link"> <img src="'+ avatar +'" alt="" class="header-account__avatar"> <span class="header-account__username">' + username +'</span></a></li>');
  //         $('.header .header-user').prepend(titleUsermenu);
  //       }
  //     });

  //     const buttonRedMobile = $('.header .header-button.principal');
  //     buttonRedMobile.appendTo('.header .header-menu');
  //   }, 200);
  // }

  // // HOME VIDEO
  // $('.home-video .home-video__icon').on('click', function() {
  //   let videoURL = $('.home-video__iframe').prop('src');
  //   videoURL += "?enablejsapi&autoplay=1";
  //   $('.home-video__iframe').prop('src',videoURL);

  //   $('.home-video .home-video__poster').addClass('hide');
  //   $('.home-video .home-video__icon').fadeOut();
  // })

  // // HOME OPTIONS VIDEO
  // $('.home-options .info-video__icon').on('click', function() {
  //   let videoURL = $('.home-options .info-video iframe').prop('src');
  //   videoURL += "?enablejsapi&autoplay=1";
  //   $('.home-options .info-video iframe').prop('src',videoURL);

  //   $('.home-options .info-video__icon, .home-options .info-video__poster').fadeOut();
  // })

  // // BACK BUTTONS
  // $('.button-back').prop('href', 'javascript:window.history.back()');

  // // ANIMATION PRODUCTS IN PONY MALTA AND PONY VITAL PAGE
  // $('.pony-products .swiper-button__open').click(function() {
  //   openProduct($(this));
  // })

  // function openProduct(item) {
  //   $('.pony-products .swiper-item').addClass('hide');
  //   $('.pony-products .swiper-slide').addClass('hide');

  //   $('.pony-products #title-products-initial').addClass('d-none');
  //   $('.pony-products #title-products-active').removeClass('d-none');
  //   $('.pony-products .pony-products__subtitle').addClass('active');
  //   $('.pony-products__swiper .swiper-wrapper').addClass('disabled');
  //   $('.pony-products__swiper .swiper-pagination').addClass('disabled');

  //   const itemProduct = $(item).parent().parent();
  //   const itemSlide = itemProduct.parent();
  //   $(itemProduct).removeClass('hide');
  //   $(itemProduct).addClass('active');
  //   $(itemSlide).removeClass('hide');
  //   $(itemSlide).addClass('active');
  // }

  // $('.pony-products .swiper-button__close').click(function() {
  //   closeProduct();
  // })

  // function closeProduct() {
  //   $('.pony-products #title-products-initial').removeClass('d-none');
  //   $('.pony-products #title-products-active').addClass('d-none');
  //   $('.pony-products .pony-products__subtitle').removeClass('active');

  //   $('.pony-products .swiper-item').removeClass('hide');
  //   $('.pony-products .swiper-item').removeClass('active');
  //   $('.pony-products .swiper-slide').removeClass('hide');
  //   $('.pony-products .swiper-slide').removeClass('active');

  //   $('.pony-products__swiper .swiper-wrapper').removeClass('disabled');
  //   $('.pony-products__swiper .swiper-pagination').removeClass('disabled');
  // }

  // if ($('.pony-products__swiper .swiper-slide').length % 2 && window.innerWidth > 991) {
  //   let slide = $('<div class="swiper-slide"></div>');
  //   $(slide).appendTo('.pony-products__swiper .swiper-wrapper');

  //   const lastSlide = $('.pony-products__swiper .swiper-slide:last-child()').prev();
  //   $(lastSlide).addClass('last');
  // }

  // // CHECK BG MALTA'S PAGES
  // $(window).resize(checkBg);
  // $(document).ready(checkBg);

  // function checkBg() {
  //   var width = window.innerWidth;
  //   if (width < 768) {
  //     $("section[img-mob]").each(function() {
  //       var img = $(this).attr('img-mob');
  //       $(this).css('background-image', 'url(' + img + ')');
  //     });
  //   } else {
  //     $("section[img-mob]").each(function() {
  //       var img = $(this).attr('img-desk');
  //     $(this).css('background-image', 'url(' + img + ')');
  //     });
  //   }
  // }

})(jQuery);