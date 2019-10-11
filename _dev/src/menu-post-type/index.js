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

    menuGridClass: '.wp-block-dining-dashboard-menu-section-grid',

    menuItemClass: '.wp-block-dining-dashboard-menu-item',
    
    gridHolderClass: '.grid-holder',

    imageClass: '.img',

    init: function () {
        
        diningDashboard.loadImages();
        //diningDashboard.menuMasonry();
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

    menuMasonry: function() {
        jQuery(diningDashboard.menuGridClass).each(
            function (i, el) {
                let grid = jQuery(el);
                if (grid.hasClass('cols-2') || grid.hasClass('cols-3') || grid.hasClass('cols-4')) {
                    let gridColumns = grid.css('grid-template-columns');
                    let cols = (gridColumns.match(/px/g) || []).length;
                    if(cols > 1){
                        let gridItems = grid.find(diningDashboard.menuItemClass).length;
                        for (let i = cols; i < gridItems; i++) {
                            let currentItem = grid.find(diningDashboard.menuItemClass).eq(i);
                            let itemAbove = grid.find(diningDashboard.menuItemClass).eq(i - cols);
                            let itemAboveBottom = itemAbove.offset().top + itemAbove.outerHeight();
                            let currentTop = currentItem.offset().top;
                            let gap = itemAbove.hasClass('empty-item') ? 0 : 20;
                            let distance = currentTop - itemAboveBottom - gap;
                            currentItem.css('marginTop', -distance);
                        }
                    }
                    else {
                        grid.find(diningDashboard.menuItemClass).css('marginTop', 0);
                        grid.find(diningDashboard.menuItemClass).css('marginTop', 0);
                    }
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
                diningDashboard.menuMasonry();
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