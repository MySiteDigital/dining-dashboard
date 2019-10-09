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

use MySiteDigital\DiningDashboard\Admin\DashboardWidgets\MenusWidget;

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

        if( is_admin() ) {
            add_action( 'init', [ $this, 'init' ] );
        }
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
        include_once( DD_PLUGIN_PATH . 'includes/blocks/class-dining-dashboard-menu-item.php' );
        include_once( DD_PLUGIN_PATH . 'includes/blocks/class-dining-dashboard-menu-section.php' );
        include_once( DD_PLUGIN_PATH . 'includes/blocks/class-dining-dashboard-menu-section-heading.php' );

        include_once( DD_PLUGIN_PATH . 'includes/assets/trait-dining-dashboard-assets-trait.php' );
        include_once( DD_PLUGIN_PATH . 'includes/assets/class-dining-dashboard-menu-blocks.php' );
        include_once( DD_PLUGIN_PATH . 'includes/assets/class-dining-dashboard-menu-post-type.php' );
        include_once( DD_PLUGIN_PATH . 'includes/assets/class-dining-dashboard-svg.php' );

        if ( is_admin() ) {
            include_once( DD_PLUGIN_PATH . 'includes/admin/class-dining-dashboard-admin.php' );
        }
    }

    public function init() {
        add_action( 'admin_init', [ $this, 'set_default_screen_options' ], 10, 2 );
        add_filter( 'admin_title', [ $this, 'dashboard_title' ], 999, 2 );
        add_action( 'admin_menu', [ $this, 'admin_menu' ] );
        add_action( 'wp_dashboard_setup', [ $this, 'widget_setup' ] );
    }
    
    public function set_default_screen_options( $user_id = NULL ){
        $meta_keys = [
            'metaboxhidden_dashboard' => [
                "dashboard_right_now",
                "dashboard_activity",
                "dashboard_quick_press",
                "dashboard_primary",
            ]
        ];

        // So this can be used without hooking into user_register
        if ( ! $user_id ) {
            $user_id = get_current_user_id(); 
        }   

        foreach( $meta_keys as $meta_key => $meta_value ){
            $options = get_user_meta( $user_id, $meta_key, true );

            // Set the default value/s if it has not been set yet
            if ( ! $options ) {
                update_user_meta( $user_id, $meta_key, $meta_value );
            }
        }
    }

    /**
     * Fixes the page title in the browser.
     *
     * @param string $admin_title
     * @param string $title
     * @return string $admin_title
     */
    public function dashboard_title( $admin_title, $title ) {
        global $pagenow;

        if( in_array( $pagenow, [ 'index.php', 'update-core.php' ] ) ) {
            $admin_title = $this->title . ' &rsaquo; ' . $title;
        }

        return $admin_title;
    }

    public function admin_menu() {
        
        global $menu, $submenu;
        $menu[2][0] = $this->title;
        $submenu['index.php'][0][0] = $this->title;
    }

    public function widget_setup()
    {
        global $wp_meta_boxes;
        wp_add_dashboard_widget( 'dining-dashboard-menus-widget', 'My Menus',  [ MenusWidget::class, 'output' ] );
    }

}

new DiningDashboard();
