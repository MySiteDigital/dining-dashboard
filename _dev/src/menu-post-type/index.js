import './style.scss';

; (
    function ($) {

        jQuery(document).ready(
            function () {
                diningDashboard.init();
            }
        );

    }
)(jQuery);



var diningDashboard = {

    slideToggleTrigger: jQuery('.has-slide-toggle header'),

    menuSectionClass: '.wp-block-dining-dashboard-menu-section',
    
    gridHolderClass: '.grid-holder',

    imageClass: '.img',

    init: function () {
        
        diningDashboard.loadImages();
        diningDashboard.scrollListener();
        diningDashboard.resizeListener();

        if (diningDashboard.slideToggleTrigger.length) {
            diningDashboard.buttonListener();
        }
    },

    loadImages: function() {
        jQuery(diningDashboard.imageClass).each(
            function (i, el) {
                let element = jQuery(el);
                if (diningDashboard.isElementInView(element)){
                    let imageUrl = element.data('image');
                    element.css('background-image', 'url(' + imageUrl + ')');
                }
            }
        );
    },

    scrollListener: function(){
        jQuery(window).scroll(
            function () {
                diningDashboard.loadImages();
            }
        );
    },

    resizeListener: function(){
        jQuery(window).on(
            'resize', 
            function () {
                diningDashboard.loadImages();
            }
        );
    },

    buttonListener: function () {
        diningDashboard.slideToggleTrigger.on(
            'click',
            function () {
                jQuery(this).toggleClass('open');
                jQuery(this).closest(diningDashboard.menuSectionClass).find(diningDashboard.gridHolderClass).slideToggle();
            }
        );
    },

    isElementInView: function (element) {
        let pageTop = jQuery(window).scrollTop();
        let pageBottom = pageTop + jQuery(window).height();
        let elementTop = element.offset().top;
        let elementBottom = elementTop + element.height();
        return ((elementTop <= pageBottom) && (elementBottom >= pageTop));
    }
}