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
        diningDashboard.menuMasonry();
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
                let gridCols = grid.data('columns');
                if (gridCols > 1) {
                    console.log('grid', grid.data('columns'));
                    //reset margin-top
                    grid.find(diningDashboard.menuItemClass).css('marginTop', 0);
                    //find out actual columns as set in the css
                    let cols = grid.css('grid-template-columns');
                    cols = (cols.match(/px/g) || []).length;
                    if(cols > 1){
                        let gridTop = parseInt(grid.offset().top);
                        for (let i = 1; i <= gridCols; i++) {
                            let columnClass = '.column-' + i;
                            let columnItems = grid.find(diningDashboard.menuItemClass + columnClass);
                            console.log(columnClass);
                            
                            if (columnItems.length){
                                diningDashboard.columnMasonry(gridTop, columnItems);
                            }
                        }
                    }
                }
            }
        );
    },

    columnMasonry: function (gridTop, columnItems){
        let previousItem = {};
        let previousItemBottom = 0
        console.log('grid top', gridTop);
        for (let index = 0; index < columnItems.length; index++) {
            let distance = 0;
            let currentItem = columnItems.eq(index);
            currentItem.height(currentItem.outerHeight())
            let currentTop = parseInt(currentItem.offset().top);
            currentItem.data('top', currentTop);
            currentItem.data('bottom', currentItem.outerHeight());
            console.log('index', index);
            console.log('current item top', currentTop);    
            console.log('current item outerHeight', currentItem.outerHeight(true));
            
            if (index < 1){
                distance = currentTop - gridTop;
            }
            else {
                distance = currentTop - previousItemBottom - 20;
            }

            if (distance < 0){
                distance = 0;
            }
            // currentItem.animate(
            //     { marginTop: -distance },
            //     500
            // );
            currentItem.css('marginTop', -distance);

            previousItem = currentItem;
            previousItemBottom = currentTop - distance + currentItem.outerHeight();
            console.log('prviou test');
            console.log('distance', distance);
            console.log('previous bottom', previousItemBottom);
            
        }
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

function resizeGridItem(item) {
    grid = document.getElementsByClassName("grid")[0];
    rowHeight = parseInt(window.getComputedStyle(grid).getPropertyValue('grid-auto-rows'));
    rowGap = parseInt(window.getComputedStyle(grid).getPropertyValue('grid-row-gap'));
    rowSpan = Math.ceil((item.querySelector('.content').getBoundingClientRect().height + rowGap) / (rowHeight + rowGap));
    item.style.gridRowEnd = "span " + rowSpan;
}

function resizeAllGridItems() {
    allItems = document.getElementsByClassName("item");
    for (x = 0; x < allItems.length; x++) {
        resizeGridItem(allItems[x]);
    }
}