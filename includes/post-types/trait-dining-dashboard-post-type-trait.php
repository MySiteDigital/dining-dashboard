<?php
/**

 *
 * @trait     PostTypes\PostTypeTrait
 * @Version: 1.0.0
 * @package   DiningDashboard/PostTypes
 * @category  Trait
 * @author    MySite Digital
*/

namespace MySiteDigital\DiningDashboard\PostTypes;

if ( ! defined( 'ABSPATH' ) ) {
    exit;
}

trait PostTypeTrait {

    public function init(){
        add_filter( 'single_template', [ $this , 'load_single_template' ] );
        add_filter( 'archive_template', [ $this , 'load_archive_template' ] );
        add_action( 'template_redirect', [ $this , 'template_redirect' ] );
    }

    public function load_single_template( $template ){
		global $post;
		if( $post->post_type == self::$post_type_slug ){
            $themed_template = get_stylesheet_directory() . '/dining-dashboard/' . self::$single_template;

            if( file_exists( $themed_template ) ){
                $template = $themed_template;
            }
            else {
                $template = DD_PLUGIN_PATH . '/templates/'  . self::$single_template;
            }

		}
		return $template;
	}

    public function load_archive_template( $template ){
        global $post;
		if( get_post_type( $post ) == self::$post_type_slug ){
            if( self::count_posts() > 1 ){
                $themed_template = get_stylesheet_directory() . '/dining-dashboard/' . self::$archive_template;

                if( file_exists( $themed_template ) ){
                    $template = $themed_template;
                }
                else {
                    $template = DD_PLUGIN_PATH . '/templates/' .  self::$archive_template;
                }
            }
            else {
                $template = $this->load_single_template( $template );
            }
        }
        return $template;
    }

    public function template_redirect(){
        global $post;

        if( ! is_singular( self::$post_type_slug ) ){
            return;
        }

        //if more than one location
        if( self::count_posts() > 1 ){
            return;
        }

        //if only one redirect to archive page
        wp_redirect( get_post_type_archive_link( self::$post_type_slug ) );
        exit;
    }

    public static function get_admin_menu_title(){
        return ucfirst( ( self::count_posts() > 1 ) ? self::$post_type_slug_plural : self::$post_type_slug );
    }

    public static function count_posts( $status = 'publish' ){

        $post_count = 0;
        
        if( post_type_exists( self::$post_type_slug ) && $status != 'any' ){
            $menus = wp_count_posts( self::$post_type_slug );
            $post_count = $menus->$status;
        }
        else {
            $published_posts = get_posts(
                [
                    'post_type'     => self::$post_type_slug,
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
            $post_count = count( $published_posts );
        }
        return $post_count;
    }
}