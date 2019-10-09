import './style.scss';

; (
    function ($) {

        jQuery(document).ready(
            function () {
                menuNav.init();
            }
        );

    }
)(jQuery);



var menuNav = {

    slideToggleTrigger: jQuery('.has-slide-toggle header'),

    menuSectionClass: '.wp-block-dining-dashboard-menu-section',

    gridHolderClass: '.grid-holder',

    init: function () {
        if (menuNav.slideToggleTrigger.length) {
            menuNav.buttonListener();
        }
    },

    buttonListener: function () {
        menuNav.slideToggleTrigger.on(
            'click',
            function () {
                jQuery(this).toggleClass('open');
                jQuery(this).closest(menuNav.menuSectionClass).find(menuNav.gridHolderClass).slideToggle();
            }
        );
    }
}