<?php
/**
 * @class    MenusWidget
 * @version  1.0.0
 * @package  DiningDashboard/Admin/DashboadWidgets
 * @category Admin
 * @author   MySite Digital
 */
namespace MySiteDigital\DiningDashboard\Admin\DashboardWidgets;

use MySiteDigital\DiningDashboard\PostTypes\Menu;

if ( ! defined( 'ABSPATH' ) ) {
    exit; // Exit if accessed directly.
}

class MenusWidget {

    public static function output() {
        $menus = get_posts( 
            [
                'posts_per_page'   => -1,
                'post_type'        => 'menu',
                'post_status'      => [
                    'publish', 
                    'pending', 
                    'draft', 
                    'auto-draft', 
                    'future', 
                    'private', 
                    'inherit', 
                    'trash'
                ],
            ]
        );
        
        if( empty( $menus ) ){
            echo 
            '<div class="notice-info">
                <p>
                    No menus yet, create your first one today!
                </p>
            </div>';
        }
        else {
            if( Menu::count_posts() > 1){
                echo 
                '<a href="' . esc_url( get_post_type_archive_link( Menu::$post_type_slug ) ) . '" target="_blank" class="archive-link">
                    <strong>
                        View All Menus
                        <span class="dashicons dashicons-external"></span>    
                    </strong>
                </a>';
            }
            echo 
            '
            <table class="wp-list-table widefat fixed striped posts">
                <tr>
                    <th>Menu</th>
                    <th>Status</th>
                    <th>Actions</th>
                </tr>';
                    
                foreach ( $menus as $menu ) {
                    self::output_table_row( $menu );# code...
                }

            echo '
            </table>';
        }
        
        echo '
            <a href="' . esc_url( admin_url( 'post-new.php?post_type=' . Menu::$post_type_slug ) ) . '" class="button-primary">
                Create Menu
            </a>
            <a href="' . esc_url( admin_url( 'edit.php?post_type=' . Menu::$post_type_slug ) ) . '" class="button-primary">
                Edit All Menus
            </a>
            <div class="clear"></div>';
    }

    public static function output_table_row( $menu ) {
        echo
        '<tr>
            <td>' . self::render_title_column( $menu ) . '</td>
            <td>' . self::render_status_column( $menu ) . '</td>
            <td>' . self::render_actions_column( $menu ) . '</td>
        </tr>';
    }

	public static function render_title_column( $menu ) {
        $html = '
            <a href="' . esc_url( admin_url( 'post.php?post=' . absint( $menu->ID ) ) . '&action=edit' ) . '" target="_blank">
                <strong>' . esc_html( $menu->post_title ) . '</strong>
            </a>';
        return $html;
    }
    
    public static function render_status_column( $menu ) {
        $status = get_post_status_object( get_post_status( $menu ) );
        $html = '
            <span class="menu-status ' . esc_attr( sanitize_html_class( 'status-' . $status->name ) ) . '">
                <span>' . esc_html( $status->label ) . '</span>
            </span>';
        return $html;
	}

    public static function render_actions_column( $menu ) {
        $html = '
            <p>
               
                <a 
                    href="' . esc_url( admin_url( 'post.php?post=' . absint( $menu->ID ) ) . '&action=edit' ) . '"
                    target="_blank"
                    class="button edit-button" 
                    title="Edit"
                    aria-label="Edit"
                >
                    <span class="dashicons dashicons-welcome-write-blog"></span>
                </a>';
        if( ! in_array( get_post_status( $menu ) , [ 'auto-draft', 'draft', 'trash' ] ) ){
            $html .= '
                <a 
                    href="' . esc_url( get_permalink( $menu ) ) . '"
                    target="_blank"
                    class="button" 
                    title="View"
                    aria-label="View"
                >
                    <span class="dashicons dashicons-external"></span>
                </a>';
        }
        $html .= '
			</p>';
        return $html;
    }
    
}
