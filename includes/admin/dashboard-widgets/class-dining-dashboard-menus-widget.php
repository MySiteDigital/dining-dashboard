<?php

namespace MySiteDigital\DiningDashboard;

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
        
        echo '<a href="' . admin_url( 'post-new.php?post_type=page') . '" class="button-primary">Create Menu</a>';
    }

}
