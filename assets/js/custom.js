jQuery(function(){
    var total_items = jQuery(".testimonialsDog_item").length;
    var total_itemsMath = Math.ceil(total_items / 4);

    var testimonialsDog_slider = jQuery(".testimonialsDog_slider");
    testimonialsDog_slider.owlCarousel({
        loop:false,
        margin:0,
        nav:true,
        mouseDrag: true,
        touchDrag: true,
        dots:true,
        slideBy: 1,
        dotsEach: total_itemsMath,
        responsiveClass:true,
        responsive:{
            0:{
                items:1
            },
        }
    });

    // var testimonialsDog_slider = jQuery(".testimonialsDog_side");
    // testimonialsDog_slider.owlCarousel({
    //     loop:false,
    //     margin:0,
    //     nav:true,
    //     mouseDrag: true,
    //     touchDrag: true,
    //     dots:true,
    //     slideBy: 1,
    //     dotsEach: total_itemsMath,
    //     responsiveClass:true,
    //     responsive:{
    //         0:{
    //             items:1
    //         },
    //     }
    // });

    // expadCarousels_silder
    var expadCarousels_silder = jQuery(".RightexpadCarousels_silder");
    expadCarousels_silder.owlCarousel({
        loop:false,
        margin:0,
        items:1.9,
        nav:true,
        mouseDrag: false,
        touchDrag: true,
        dots:false,
        slideBy: 1,
        responsiveClass:true,
        responsive:{
            0:{
                items:1,
                loop: true,
                dots:true,
            },
            992:{
                items:1.999,
            },
            1025:{
                items:1.999,
            },
            1367:{
                items:1.999,
            },
            1441:{
                items:1.9,
            },
           1921:{
                items:2.8,
            },
        }
    });

    // expadCarousels_silderReverse
    var expadCarousels_silderReverse = jQuery(".LeftexpadCarousels_silder");
    expadCarousels_silderReverse.owlCarousel({
        loop:false,
        margin:0,
        items: 1.99,
        navText: ['<span class="fa ion-chevron-right"></span>','<span class="fa ion-chevron-left"></span>'],
        nav:true,
        mouseDrag: false,
        touchDrag: true,
        dots:false,
        rtl: true,
        slideBy: 1,
        responsiveClass:true,
        responsive:{
            0:{
                items:1,
                loop: true,
                dots:true,
                rtl: false,
            },
            // 992:{
            //     items:2,
            // },

            992:{
                items:1.999,
            },
            1025:{
                items:1.999,
            },
            1367:{
                items:1.999,
            },
            1441:{
                items:1.999,
            },
           1921:{
                items:2.999,
            },
        }
    });
});  

jQuery(document).ready(function(){
    function checkClasses(){

        var total = jQuery('.owl-stage .owl-item.active').length;
        jQuery('.owl-stage .owl-item').removeClass('first_item last_item');
        jQuery('.owl-stage .owl-item.active').each(function(index){
            if (index % 2 === 0) {
                jQuery(this).addClass('first_item');
            }else {
                jQuery(this).addClass('last_item');
            }
        });
    }

    checkClasses();
    jQuery(".owl-carousel").on('translated.owl.carousel', function(event) {
        checkClasses();
    });

    if (window.matchMedia('(min-width: 992px)').matches){
        jQuery('.expadCarousels_area .owl-nav > button').bind('click', function() {
            var curCarouselNode = jQuery(this).closest('.owl-nav');        
            var carouselParents = jQuery(this).parents('.owl-carousel');
            if(carouselParents.find('.owl-item:last').hasClass('active')){
                curCarouselNode.find('.owl-next').hide();
                curCarouselNode.find('.owl-prev').show();

            }else if(carouselParents.find('.owl-item:first').hasClass('active')){

                curCarouselNode.find('.owl-prev').hide();
                curCarouselNode.find('.owl-next').show();
            }

        });
    }
});

