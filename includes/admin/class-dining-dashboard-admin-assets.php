<?php
/**
 * @class    Admin\Assets
 * @version  1.0.0
 * @package  DiningDashboard/Admin
 * @category Admin
 * @author   MySite Digital
 */
namespace MySiteDigital\DiningDashboard\Admin;

if ( ! defined( 'ABSPATH' ) ) {
    exit; // Exit if accessed directly.
}

class Assets {

    public function __construct() {
        add_action( 'admin_enqueue_scripts', [ $this, 'admin_styles' ] );
        add_action( 'admin_enqueue_scripts', [ $this, 'admin_scripts' ] );
    }

    /**
     * Enqueue styles.
     */

    private $styles = [
        'dining-dashboard' => 'assets/css/dining-dashboard-admin.css',
    ];

    public function admin_styles() {

        foreach( $this->styles as $style => $file ){
            $cache_bust = '?v='.filemtime( DD_PLUGIN_PATH . $file );
            $style_location = DD_PLUGIN_URL  . $file . $cache_bust;

            wp_enqueue_style(
                $style,
                $style_location,
                [],
                NULL
            );
        }
    }

    /**
     * Enqueue scripts.
     */
   
    public function admin_scripts() {
        
    }
}

new Assets();
