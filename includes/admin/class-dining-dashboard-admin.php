<?php

namespace MySiteDigital\DiningDashboard\Admin;
/**
 * DiningDashboard Admin
 *
 * @class    Admin
 * @version  1.0.0
 * @package  DiningDashboard/Admin
 * @category Admin
 * @author   MySite Digital
 */

if ( ! defined( 'ABSPATH' ) ) {
    exit; // Exit if accessed directly
}

class Admin {

    /**
     * Constructor.
     */
    public function __construct() {
        add_action( 'init', [ $this, 'includes' ] );
    }

    /**
     * Include any classes we need within admin.
     */
    public function includes() {
        include_once( DD_PLUGIN_PATH . 'includes/admin/class-dining-dashboard-admin-assets.php' );
        include_once( DD_PLUGIN_PATH . 'includes/admin/class-dining-dashboard-admin-menus.php' );
        include_once( DD_PLUGIN_PATH . 'includes/admin/dashboard-widgets/class-dining-dashboard-menus-widget.php' );
    }
}

new Admin();
