(function (){
  
  var ww, wh;
  var bodyH;
  var $fg1 = $('.fg-1');
  var $fg2 = $('.fg-2');
  var $bg1 = $('.bg-1');
  var $bg2 = $('.bg-2');
  var fg1Top, fg2Top;
  var bg1Top, bg2Top;

  function init(){    
    $(window).on('resize', onResize);
    onResize();

    $(window).on('scroll', onScroll);
    onScroll();
  }
  init();

  function onResize(){
    ww = $(window).innerWidth();
    wh = $(window).innerHeight();
    bodyH = $('body').innerHeight();

    if (ww > 768) {
      fg1Top = 34;
      fg2Top = 27;
      
      bg1Top = 0;
      bg2Top = 0;
    }else{
      bg1Top = 60;
      bg2Top = 80;
    }

    onScroll();

    var _r;
    if(ww < 768){
      _r = (ww * 0.8) / 420;
    } else{
      _r = $('.kv-title').innerWidth() / 504;
    }

    TweenMax.set($('.text-container'), {scale: _r});
  }

  function onScroll(){
    var scrollTop = $(window).scrollTop();
    var ratio = scrollTop / (bodyH - wh);

    TweenMax.to($fg1, 0.3, {top: fg1Top + (ratio * 30) + '%'})
    TweenMax.to($fg2, 0.3, {top: fg2Top + (ratio * 20) + '%'})
    // TweenMax.to($bg1, 0.4, {top: bg1Top - (ratio * 30) + '%'})
    // TweenMax.to($bg2, 0.4, {top: bg2Top - (ratio * 20) + '%'})
  }

  
  
})();