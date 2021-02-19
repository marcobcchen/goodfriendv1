
var ww, wh;
var headerH;
var hamburgerC;
var navW;
var $nav, $hamburger, $hamburgerLine;
var isNavOpen = false;

$(function(){
	// $.html5Loader({
    //     filesToLoad: 'js/resource.json',
    //     onBeforeLoad: function () {
    //         //console.log('on BeforeLoad');
    //     },
    //     onComplete: function () {
    //         //console.log('on complete');
    //         // $(".loading").fadeOut();
    //         // init();
    //     },
    //     onElementLoaded: function ( obj, elm) {
    //         //console.log(elm);
            
    //     },
    //     onUpdate: function ( percentage ) {
    //         //console.log(loadingAlpha);
    //     }
    // });

    init();

	function init(){
        $nav = $("nav");
        $hamburger = $(".hamburger");
        $hamburgerLine = $hamburger.find(".line");

        TweenMax.set($nav, {autoAlpha:0});

        // $(window).on('scroll', onScroll);
        // onScroll();

        $(window).on('resize', onResize);
        onResize();

        $hamburger.on("click", toMenu);
    }
    
    // function onScroll(){
    //     var st = $(window).scrollTop();

    //     var shopTop = $(".shop").offset().top - 200;

    //     if(st < shopTop){
    //         TweenMax.to($('.btn-cfa'), 0.4, {autoAlpha:1});
    //     }else{
    //         TweenMax.to($('.btn-cfa'), 0.4, {autoAlpha:0});
    //     }
    // }

    function onResize() {
        ww = $(window).innerWidth();
        wh = $(window).innerHeight();

        if (ww < 768) {
            if (isNavOpen) {
                TweenMax.set($nav, {autoAlpha: 1});
                $hamburgerLine.addClass("active");
                isNavOpen = true;
            } else {
                TweenMax.set($nav, {autoAlpha: 0});
                $hamburgerLine.removeClass("active");
                isNavOpen = false;
            }
        } else {
            TweenMax.set($nav, {autoAlpha: 1});
            $hamburgerLine.removeClass("active");
            isNavOpen = false;
        }
    }

    function toMenu(){
        if(!isNavOpen){
            // 選單打開
            $hamburgerLine.addClass("active");
            TweenMax.to($nav, 0.4, {autoAlpha:1});
            isNavOpen = true;
        }else{
            // 選單關閉
            $hamburgerLine.removeClass("active");
            TweenMax.to($nav, 0.4, {autoAlpha:0});
            isNavOpen = false;
        }
    }
    
}); 

function scrollToSection(id){
    var top = $("." + id).offset().top - 100;
    TweenMax.to($(window), 1, {scrollTo:top, ease:Power2.easeOut, delay:0.4});

    // return false;
}