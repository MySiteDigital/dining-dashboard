<?php
/**
 * DiningDashboard Admin
 *
 * @class    Menus
 * @version  1.0.0
 * @package  DiningDashboard/Admin
 * @category Admin
 * @author   MySite Digital
 */

namespace MySiteDigital\DiningDashboard\Admin;

use MySiteDigital\DiningDashboard\PostTypes\Menu;

if ( ! defined( 'ABSPATH' ) ) {
    exit; // Exit if accessed directly
}

class Menus {

    /**
     * Constructor.
     */
    public function __construct() {
        add_action( 'admin_head', [ $this, 'modify_menu' ] );
    }

    /**
     * Add menu items.
     */
    public function modify_menu() {
        global $submenu;
        

        if ( isset( $submenu['index.php'] ) ) {
            $dashboard_submenu = [];
            $index = [];
            $menus = [];
            $dashboard_menu_items = $submenu['index.php'];
            foreach ( $dashboard_menu_items as $dashboard_menu_item ) {
                if( in_array( 'index.php', $dashboard_menu_item) ){
                    $index = $dashboard_menu_item;
                }
                else if( in_array( 'edit.php?post_type=menu', $dashboard_menu_item) ){
                    $menus = $dashboard_menu_item;
                }
                else {
                    $dashboard_submenu[] = $dashboard_menu_item;
                }
            }
            array_unshift( $dashboard_submenu, $menus );
            array_unshift( $dashboard_submenu, $index );
            $submenu['index.php'] = $dashboard_submenu;
        }
    }

    
}

new Menus();
