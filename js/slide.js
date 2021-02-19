(function (){
  var nowId = 0;
  var viewNum = 4;

  function init() {

    slideShow(0, slide1);
    dot(0);
  }

  function slideShow(id, completeFn) {
    var $mask = $(".view-" + id +" .mask");
    var $step = $(".step-" + id);

    // fadeIn
    TweenMax.to($mask, 0.4, {
      opacity: 1,
      delay: 1,
      ease: Power3.easeOut
    });
    TweenMax.set($step, { scale: 0.6, opacity: 0 });
    TweenMax.to($step, 0.4, {
      scale: 1,
      opacity: 1,
      delay: 1.4,
      ease: Power3.easeOut
    });
    // fadeOut
    TweenMax.to($step, 0.4, {
      scale: 0.6,
      opacity: 0,
      delay: 3,
      ease: Power3.easeOut
    });
    TweenMax.to($mask, 0.4, {
      opacity: 0,
      delay: 3.5,
      ease: Power3.easeOut,
      onComplete: completeFn
    });
  }

  function slideMove(now, next){
    var $nowView = $(".view-" + now);
    var $nextView = $(".view-" + next);

    TweenMax.to($nowView, 1, {
      left: "-100%",
      ease: Power3.easeOut
    });
    TweenMax.set($nextView, { left: "100%" });
    TweenMax.to($nextView, 1, {
      left: "0%",
      ease: Power3.easeOut
    });
  }

  function dot(id){
    $('.dot-con div').removeClass('active');
    $('.dot-con .dot-' + id).addClass('active');
    TweenMax.set($('.number-con div'), {opacity: 0});
    TweenMax.to($('.number-con .number-' + id), 0.6, {opacity: 1});
  }

  function slide1() {
    slideMove(0, 1);
    slideShow(1, slide2);
    dot(1);
  }

  function slide2() {
    slideMove(1, 2);
    slideShow(2, slide3);
    dot(1);
  }

  function slide3() {
    slideMove(2, 3);
    slideShow(3, slide4);
    dot(2);
  }

  function slide4() {
    slideMove(3, 0);
    slideShow(0, slide1);
    dot(0);
  }

  init();
})();