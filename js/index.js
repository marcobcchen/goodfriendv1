(function (){
  var winH, winW;
  var ratio = 1;

  $(window).on('resize', onResize);
  onResize();

  function onResize(){
    winW = $(window).innerWidth();
    winH = $(window).innerHeight();

    if(winH <= 700){
      ratio = 700 / 1143;
    }else{
      ratio = winH / 1143;
    }

    // ratio = winH / 1143;
    // console.log(ratio);
   
    TweenMax.set($('.kv-content'), {scale: ratio});
  }

})();