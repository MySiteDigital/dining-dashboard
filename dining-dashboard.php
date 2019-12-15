<?php
/**
 * Plugin Name: Dining Dashboard
 * Description: Provides the functionality required to manage your restaurant or cafe's website.
 * Version: 1.0.0
 * Author: MySite Digital
 * Author URI: https://mysite.digital
 * Requires at least: 5.3
 * Tested up to: 5.3
 */
namespace MySiteDigital;


if ( ! defined( 'ABSPATH' ) ) {
    exit; // Exit if accessed directly.
}


/**
 * Main DiningDashboard Class.
 *
 * @class DiningDashboard
 * @version    1.0.0
 */

final class DiningDashboard {

    /**
     * DiningDashboard title.
     * @var string
     */
    protected $title = 'Dining Dashboard';

    
    /**
     * DiningDashboard Constructor.
     */
    public function __construct()
    {
        $this->define_constants();
        $this->includes();
    }

    /*
        *
        * Define DiningDashboard Constants.
        */
    private function define_constants() {
        if ( ! defined( 'DD_PLUGIN_PATH' ) ) {
            define( 'DD_PLUGIN_PATH', plugin_dir_path( __FILE__ ) );
        }
        if ( ! defined( 'DD_PLUGIN_URL' ) ) {
            define( 'DD_PLUGIN_URL', plugin_dir_url( __FILE__ ) );
        }
    }

    /**
     * Include required core files used in admin and on the frontend.
     */
    public function includes()
    {
        include_once( DD_PLUGIN_PATH . 'includes/post-types/trait-dining-dashboard-post-type-trait.php' );
        include_once( DD_PLUGIN_PATH . 'includes/post-types/class-dining-dashboard-menu.php' );
        
        include_once( DD_PLUGIN_PATH . 'includes/blocks/trait-dining-dashboard-block-trait.php' );
        include_once( DD_PLUGIN_PATH . 'includes/blocks/class-dining-dashboard-menu-intro.php' );
        include_once( DD_PLUGIN_PATH . 'includes/blocks/class-dining-dashboard-menu-item.php' );
        include_once( DD_PLUGIN_PATH . 'includes/blocks/class-dining-dashboard-menu-section.php' );
        include_once( DD_PLUGIN_PATH . 'includes/blocks/class-dining-dashboard-menu-section-heading.php' );

        include_once( DD_PLUGIN_PATH . 'includes/assets/trait-dining-dashboard-assets-trait.php' );
        include_once( DD_PLUGIN_PATH . 'includes/assets/class-dining-dashboard-admin.php' );
        include_once( DD_PLUGIN_PATH . 'includes/assets/class-dining-dashboard-menu-blocks.php' );
        include_once( DD_PLUGIN_PATH . 'includes/assets/class-dining-dashboard-menu-post-type.php' );
        include_once( DD_PLUGIN_PATH . 'includes/assets/class-dining-dashboard-svg.php' );

        if ( is_admin() ) {
            include_once( DD_PLUGIN_PATH . 'includes/admin/class-dining-dashboard-admin.php' );
            include_once( DD_PLUGIN_PATH . 'includes/admin/class-dining-dashboard-admin-menus.php' );
            include_once( DD_PLUGIN_PATH . 'includes/admin/dashboard-widgets/class-dining-dashboard-menus-widget.php' );
        }
    }

}

new DiningDashboard();
