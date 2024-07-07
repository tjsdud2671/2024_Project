$('.accordion-title').click(function () {
  $(this).next('.accordion-list').stop().slideToggle(300);
  $(this).toggleClass('on').siblings().removeClass('on');
  $(this).next('.accordion-list').siblings('.accordion-list').slideUp(300); // 1개씩 펼치기
});
