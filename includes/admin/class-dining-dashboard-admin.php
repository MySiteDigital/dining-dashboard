<?php
/**
 * DiningDashboard Admin
 * @class    Admin
 * @version  1.0.0
 * @package  DiningDashboard/Admin
 * @category Admin
 * @author   MySite Digital
 */
namespace MySiteDigital\DiningDashboard\Admin;

use MySiteDigital\DiningDashboard\Admin\DashboardWidgets\MenusWidget;

if ( ! defined( 'ABSPATH' ) ) {
    exit; // Exit if accessed directly
}

class Admin {

    /**
     * Constructor.
     */
    public function __construct() {
        add_action( 'init', [ $this, 'init' ] );
    }

    public function init() {
        add_action( 'admin_init', [ $this, 'set_default_screen_options' ], 10, 2 );
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

    public function widget_setup()
    {
        global $wp_meta_boxes;
        wp_add_dashboard_widget( 'dining-dashboard-menus-widget', 'My Menus',  [ MenusWidget::class, 'output' ] );
    }
}

new Admin();
