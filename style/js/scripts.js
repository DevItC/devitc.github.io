$(document).ready(function() {
    'use strict';
    /*-----------------------------------------------------------------------------------*/
    /*	SCROLL NAVIGATION HIGHLIGHT
    /*-----------------------------------------------------------------------------------*/
    var headerWrapper = parseInt($('.navbar').height(), 10);
    var header_height = $('.navbar').height();
    var shrinked_header_height = 76;
    var firstStyle=
    {
        'padding-top':''+shrinked_header_height+'px',
        'margin-top':'-'+shrinked_header_height+'px'
    };
    $('.onepage section').css(firstStyle);
    var secondStyle=
    {
      'padding-top':''+header_height+'px',
      'margin-top':'-'+header_height+'px'
    };
    $('.onepage section:first-of-type').css(secondStyle);
    var offsetTolerance = -(header_height);
    //Detecting user's scroll
    $(window).scroll(function() {
        //Check scroll position
        var scrollPosition = parseInt($(this).scrollTop(), 10);
        //Move trough each menu and check its position with scroll position then add current class
        $('.onepage .navbar ul.navbar-nav a').each(function() {
            var thisHref = $(this).attr('href');
            var thisTruePosition = parseInt($(thisHref).offset().top, 10);
            var thisPosition = thisTruePosition - headerWrapper - offsetTolerance;
            if (scrollPosition >= thisPosition) {
                $('.current').removeClass('current');
                $('.navbar ul.navbar-nav a[href=' + thisHref + ']').parent('li').addClass('current');
            }
        });
        //If we're at the bottom of the page, move pointer to the last section
        var bottomPage = parseInt($(document).height(), 10) - parseInt($(window).height(), 10);
        if (scrollPosition == bottomPage || scrollPosition >= bottomPage) {
            $('.current').removeClass('current');
            $('.onepage .navbar ul.navbar-nav a:last').parent('li').addClass('current');
        }
    });
    /*-----------------------------------------------------------------------------------*/
    /*	CUBE PORTFOLIO
    /*-----------------------------------------------------------------------------------*/
    $('#grid-container').cubeportfolio({
        filters: '#filters-container',
        loadMore: '#loadMore-container',
        loadMoreAction: 'click',
        layoutMode: 'grid',
        mediaQueries: [{
            width: 1100,
            cols: 3
        }, {
            width: 800,
            cols: 3
        }, {
            width: 500,
            cols: 2
        }, {
            width: 320,
            cols: 1
        }],
        defaultFilter: '*',
        animationType: 'quicksand',
        gapHorizontal: 15,
        gapVertical: 15,
        gridAdjustment: 'responsive',
        caption: 'fadeIn',
        displayType: 'sequentially',
        displayTypeSpeed: 100,
        // lightbox
        lightboxDelegate: '.cbp-lightbox',
        lightboxGallery: true,
        lightboxTitleSrc: 'data-title',
        lightboxCounter: '<div class="cbp-popup-lightbox-counter">{{current}} of {{total}}</div>',
        // singlePageInline
        singlePageInlineDelegate: '.cbp-singlePageInline',
        singlePageInlinePosition: 'top',
        singlePageDeeplinking: true,
        singlePageInlineInFocus: true,
        offsetValue: 100,
        singlePageInlineCallback: function(url, element) {
            // to update singlePageInline content use the following method: this.updateSinglePageInline(yourContent)
            var t = this;
            $.ajax({
                url: url,
                type: 'GET',
                dataType: 'html',
                timeout: 10000
            }).done(function(result) {
                t.updateSinglePageInline(result);
            }).fail(function() {
                t.updateSinglePageInline('AJAX Error! Please refresh the page!');
            });
        },
    });
    /*-----------------------------------------------------------------------------------*/
    /*	CUBE PORTFOLIO 2
    /*-----------------------------------------------------------------------------------*/
    $('#grid-container2').cubeportfolio({
        filters: '#filters-container2',
        loadMore: '#loadMore-container2',
        loadMoreAction: 'click',
        layoutMode: 'grid',
        mediaQueries: [{
            width: 1100,
            cols: 4
        }, {
            width: 800,
            cols: 3
        }, {
            width: 500,
            cols: 2
        }, {
            width: 320,
            cols: 1
        }],
        defaultFilter: '*',
        animationType: 'quicksand',
        gapHorizontal: 15,
        gapVertical: 15,
        gridAdjustment: 'responsive',
        caption: 'fadeIn',
        displayType: 'sequentially',
        displayTypeSpeed: 100,
        // lightbox
        lightboxDelegate: '.cbp-lightbox',
        lightboxGallery: true,
        lightboxTitleSrc: 'data-title',
        lightboxCounter: '<div class="cbp-popup-lightbox-counter">{{current}} of {{total}}</div>',
        // singlePageInline
        singlePageInlineDelegate: '.cbp-singlePageInline',
        singlePageInlinePosition: 'below',
        singlePageDeeplinking: true,
        singlePageInlineInFocus: true,
        offsetValue: 300,
        singlePageInlineCallback: function(url, element) {
            // to update singlePageInline content use the following method: this.updateSinglePageInline(yourContent)
            var t = this;
            $.ajax({
                url: url,
                type: 'GET',
                dataType: 'html',
                timeout: 10000
            }).done(function(result) {
                t.updateSinglePageInline(result);
            }).fail(function() {
                t.updateSinglePageInline('AJAX Error! Please refresh the page!');
            });
        },
    });

    /*-----------------------------------------------------------------------------------*/
    /*	OWL CAROUSEL
	/*-----------------------------------------------------------------------------------*/
    $('.carousel-boxed').owlCarousel({
        loop: false,
        margin: 30,
        nav: true,
        navText: ['', ''],
        dots: false,
        responsive: {
            0: {
                items: 1
            },
            768: {
                items: 2
            },
            992: {
                items: 3
            }
        }
    });
    $('.basic-slider').owlCarousel({
        items: 1,
        nav: true,
        navText: ['', ''],
        dots: true,
        autoHeight: false,
        loop: true,
        margin: 0
    });
    $('.clients').owlCarousel({
        autoplay: true,
        autoplayTimeout: 3000,
        loop: true,
        margin: 50,
        nav: false,
        dots: false,
        responsive: {
            0: {
                items: 3
            },
            768: {
                items: 5
            },
            1200: {
                items: 6
            }
        }
    });
    $('.testimonials').owlCarousel({
        items: 1,
        nav: false,
        dots: false,
        autoHeight: true,
        autoplay: true,
        autoplayTimeout: 5000,
        loop: true,
        margin: 0
    });
    /*-----------------------------------------------------------------------------------*/
    /*	SHARE BAR
	/*-----------------------------------------------------------------------------------*/
    $('#share-bar').share({
        networks: ['twitter', 'facebook', 'tumblr', 'pinterest', 'googleplus', 'email'],
        orientation: 'vertical',
        affix: 'right center'
    });
    /*-----------------------------------------------------------------------------------*/
    /*	STICKY HEADER
	/*-----------------------------------------------------------------------------------*/
    var menu = $('.navbar'),
        pos = menu.offset();
    $(window).scroll(function() {
        if ($(this).scrollTop() > pos.top + menu.height() && menu.hasClass('default') && $(this).scrollTop() > 300) {
            menu.fadeOut('fast', function() {
                $(this).removeClass('default').addClass('fixed').fadeIn('fast');
            });
        } else if ($(this).scrollTop() <= pos.top + 300 && menu.hasClass('fixed')) {
            menu.fadeOut(0, function() {
                $(this).removeClass('fixed').addClass('default').fadeIn(0);
            });
        }
    });
    /*-----------------------------------------------------------------------------------*/
    /*	MENU
	/*-----------------------------------------------------------------------------------*/
    $('.js-activated').dropdownHover({
        instantlyCloseOthers: false,
        delay: 0
    }).dropdown();
    $('.btn.responsive-menu').on('click', function() {
        $(this).toggleClass('opn');
    });
    $('.onepage .navbar .nav li a').on('click', function() {
        $('.navbar .navbar-collapse.in').collapse('hide');
        $('.btn.responsive-menu').removeClass('opn');
    });
    /*-----------------------------------------------------------------------------------*/
    /*	FITVIDS VIDEO
	/*-----------------------------------------------------------------------------------*/
    $('.player').fitVids();
    /*-----------------------------------------------------------------------------------*/
    /*	IMAGE ICON HOVER
	/*-----------------------------------------------------------------------------------*/
    $('.icon-overlay a').prepend('<span class="icn-more"></span>');
    /*-----------------------------------------------------------------------------------*/
    /*	REVOLUTION
	/*-----------------------------------------------------------------------------------*/
    $('.tp-fullscreen').revolution({
        delay: 9000,
        startwidth: 1170,
        startheight: 750,
        hideThumbs: 200,
        hideArrowsOnMobile: "off",
        fullWidth: "on",
        fullScreen: "on",
        soloArrowLeftHOffset: 0,
        soloArrowRightHOffset: 0
    });
    $('.tp-fullwidth').revolution({
        delay: 9000,
        startwidth: 1170,
        startheight: 650,
        hideThumbs: 200,
        hideArrowsOnMobile: "off",
        fullWidth: "on",
        fullScreen: "off",
        soloArrowLeftHOffset: 0,
        soloArrowRightHOffset: 0
    });
    $('.tp-banner').revolution({
        delay: 9000,
        startwidth: 1170,
        startheight: 550,
        hideThumbs: 200,
        hideArrowsOnMobile: "off",
        fullWidth: "off",
        fullScreen: "off",
        soloArrowLeftHOffset: 0,
        soloArrowRightHOffset: 0
    });
    /*-----------------------------------------------------------------------------------*/
    /*	FANCYBOX
	/*-----------------------------------------------------------------------------------*/
    $(".fancybox-media").fancybox({
        arrows: true,
        padding: 0,
        closeBtn: true,
        openEffect: 'fade',
        closeEffect: 'fade',
        prevEffect: 'fade',
        nextEffect: 'fade',
        helpers: {
            media: {},
            overlay: {
                locked: false
            },
            buttons: false,
            thumbs: false,
            /*thumbs: {
                width: 50,
                height: 50
            },*/
            title: {
                type: 'inside'
            }
        },
        beforeLoad: function() {
            var el, id = $(this.element).data('title-id');
            if (id) {
                el = $('#' + id);
                if (el.length) {
                    this.title = el.html();
                }
            }
        }
    });
    /*-----------------------------------------------------------------------------------*/
    /*	TABS
	/*-----------------------------------------------------------------------------------*/
    $('.tabs.tabs-top').easytabs({
        animationSpeed: 300,
        updateHash: false
    });
    /*-----------------------------------------------------------------------------------*/
    /*	TOGGLE
	/*-----------------------------------------------------------------------------------*/
    $('.panel-group').find('.panel-default:has(".in")').addClass('panel-active');
    $('.panel-group').on('shown.bs.collapse', function(e) {
        $(e.target).closest('.panel-default').addClass(' panel-active');
    }).on('hidden.bs.collapse', function(e) {
        $(e.target).closest('.panel-default').removeClass(' panel-active');
    });
    /*-----------------------------------------------------------------------------------*/
    /*	BACKGROUND VIDEO PARALLAX
	/*-----------------------------------------------------------------------------------*/
    $('#video-office').backgroundVideo({
        $outerWrap: $('.outer-wrap'),
        pauseVideoOnViewLoss: false,
        parallaxOptions: {
            effect: 1.9
        }
    });
    /*-----------------------------------------------------------------------------------*/
    /*	PARALLAX MOBILE
	/*-----------------------------------------------------------------------------------*/
    if (navigator.userAgent.match(/Android/i) || navigator.userAgent.match(/webOS/i) || navigator.userAgent.match(/iPhone/i) || navigator.userAgent.match(/iPad/i) || navigator.userAgent.match(/iPod/i) || navigator.userAgent.match(/BlackBerry/i)) {
        $('.parallax').addClass('mobile');
    }
    /*-----------------------------------------------------------------------------------*/
    /*	DATA REL
	/*-----------------------------------------------------------------------------------*/
    $('a[data-rel]').each(function() {
        $(this).attr('rel', $(this).data('rel'));
    });
    /*-----------------------------------------------------------------------------------*/
    /*	LOCALSCROLL
	/*-----------------------------------------------------------------------------------*/
    $('.navbar, .scroll').localScroll({
        hash: true
    });
    /*-----------------------------------------------------------------------------------*/
    /*	PRETTIFY
	/*-----------------------------------------------------------------------------------*/
    window.prettyPrint && prettyPrint()
        /*-----------------------------------------------------------------------------------*/
        /*	TOOLTIP
        /*-----------------------------------------------------------------------------------*/
    if ($("[rel=tooltip]").length) {
        $("[rel=tooltip]").tooltip();
    }
    /*-----------------------------------------------------------------------------------*/
    /* WIDTH CLASS
	/*-----------------------------------------------------------------------------------*/
    assign_bootstrap_mode();
    $(window).resize(function() {
        assign_bootstrap_mode();
    });

    function assign_bootstrap_mode() {
        var width = $(window).width();
        var mode = '';
        if (width < 768) {
            mode = "mode-xs";
        } else if (width < 992) {
            mode = "mode-sm";
        } else if (width < 1200) {
            mode = "mode-md";
        } else if (width > 1200) {
            mode = "mode-lg";
        }
        $("body").removeClass("mode-xs").removeClass("mode-sm").removeClass("mode-md").removeClass("mode-lg").addClass(mode);
    }

    /*-----------------------------------------------------------------------------------*/
    /*	WOW ANIMATION
    /*-----------------------------------------------------------------------------------*/
    new WOW().init();
    /*-----------------------------------------------------------------------------------*/
    /*	INSTAGRAM
    /*-----------------------------------------------------------------------------------*/
    var instagramFeed = new Instafeed({
        get: 'user',
        limit: 8,
        userId: 1215763826,
		accessToken: '1215763826.f1627ea.dad6ca96bd7642519b573d52c3ef467f',
        resolution: 'low_resolution',
        template: '<div class="item"><figure><a href="{{link}}"><div class="text-overlay"><div class="info"><span>View</span></div></div><img src="{{image}}" /></a></figure></div>',
        after: function() {
            var $portfoliogrid = $('.portfolio-grid .isotope');
            $portfoliogrid.isotope({
                itemSelector: '.item',
                transitionDuration: '0.7s',
                masonry: {
                    columnWidth: $portfoliogrid.width() / 12
                },
                layoutMode: 'masonry'
            });
            $(window).resize(function() {
                $portfoliogrid.isotope({
                    masonry: {
                        columnWidth: $portfoliogrid.width() / 12
                    }
                });
            });
            $portfoliogrid.imagesLoaded(function() {
                $portfoliogrid.isotope('layout');
            });
        }
    });
    $('#instafeed').each(function() {
        instagramFeed.run();
    });
    /*-----------------------------------------------------------------------------------*/
    /*	ISOTOPE GRID VIEW COL3
    /*-----------------------------------------------------------------------------------*/
    var $gridviewcol3 = $('.grid-view.col3 .isotope');
    $gridviewcol3.isotope({
        itemSelector: '.grid-view-post',
        transitionDuration: '0.6s',
        masonry: {
            columnWidth: '.col-sm-6.col-md-4'
        },
        layoutMode: 'masonry'
    });
    $(window).resize(function() {
        $gridviewcol3.isotope({
            masonry: {
                columnWidth: '.col-sm-6.col-md-4'
            }
        });
    });
    $gridviewcol3.imagesLoaded(function() {
        $gridviewcol3.isotope('layout');
    });
    /*-----------------------------------------------------------------------------------*/
    /*	ISOTOPE GRID VIEW COL2
    /*-----------------------------------------------------------------------------------*/
    var $gridviewcol2 = $('.grid-view.col2 .isotope');
    $gridviewcol2.isotope({
        itemSelector: '.grid-view-post',
        transitionDuration: '0.6s',
        masonry: {
            columnWidth: '.col-md-6.col-sm-12'
        },
        layoutMode: 'masonry'
    });
    $(window).resize(function() {
        $gridviewcol2.isotope({
            masonry: {
                columnWidth: '.col-md-6.col-sm-12'
            }
        });
    });
    $gridviewcol2.imagesLoaded(function() {
        $gridviewcol2.isotope('layout');
    });
    /*-----------------------------------------------------------------------------------*/
    /*	ISOTOPE PORTFOLIO GRID
    /*-----------------------------------------------------------------------------------*/
    var $portfoliogrid = $('.portfolio-grid .isotope');
    $portfoliogrid.isotope({
        itemSelector: '.item',
        transitionDuration: '0.7s',
        masonry: {
            columnWidth: $portfoliogrid.width() / 12
        },
        layoutMode: 'masonry'
    });
    $(window).resize(function() {
        $portfoliogrid.isotope({
            masonry: {
                columnWidth: $portfoliogrid.width() / 12
            }
        });
    });
    $portfoliogrid.imagesLoaded(function() {
        $portfoliogrid.isotope('layout');
    });
});
/*-----------------------------------------------------------------------------------*/
/*	LOADING
/*-----------------------------------------------------------------------------------*/
$(window).load(function() {
    $('#status').fadeOut();
    $('#preloader').delay(350).fadeOut('slow');
    $('body').delay(350).css({
        'overflow': 'visible'
    });
});
/*-----------------------------------------------------------------------------------*/
/*	FORM
/*-----------------------------------------------------------------------------------*/
document.addEventListener("DOMContentLoaded", function() {
    var myForm;
    myForm = new VanillaForm(document.querySelector("form.vanilla"));
});