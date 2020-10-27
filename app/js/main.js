$(function(){

   $('ul.tabs__caption').on('click', 'li:not(.active)', function() {
      $(this)
        .addClass('active').siblings().removeClass('active')
        .closest('div.tabs').find('div.tabs__content').removeClass('active').eq($(this).index()).addClass('active');
    });

    $('.slider').slick({
      prevArrow: '<button type="button" class="slick-prev"><img src="images/icons/arrow-left.svg"></button>',
      nextArrow: '<button type="button" class="slick-next"><img src="images/icons/arrow-right.svg"></button>'
    });

});