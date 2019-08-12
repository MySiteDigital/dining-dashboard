<?php
/**
  * Registers post type for food and drink menus
 *
 * @class     MenuPostType
 * @Version: 0.0.1
 * @package   DiningDashboard/PostTypes
 * @category  Class
 * @author    MySite Digital
 */
namespace MySiteDigital\DiningDashboard;

if ( ! defined( 'ABSPATH' ) ) {
    exit;
}

/**
 * MenuPostType Class.
 */
class MenuPostType {

    public static $post_type_slug = 'menu';
    
    public function __construct()
    {
        add_action( 'init', [ $this , 'register_settings' ], 4 );
        add_action( 'init', [ $this , 'register_post_type' ], 5 );
        add_action( 'transition_post_status', [ $this , 'update_archive_slug' ], 10, 3 );

        // add_filter( 'single_template', [ $this , 'load_single_template' ] );
        // add_filter( 'archive_template', [ $this , 'load_archive_template' ] );
        // add_action( 'template_redirect', [ $this , 'template_redirect' ] );

        

        //add_filter( 'gettext',  [ $this, 'custom_translations' ] , 999 );
        //add_filter( 'the_title', array( $this, 'custom_translations' ), 10, 2 );
    }

    public function register_settings() {
        register_setting(
            'menu_post_type_archive_slug',
            'menu_post_type_archive_slug',
            array(
                'type' => 'string',
                'sanitize_callback' => 'sanitize_text_field',
                'show_in_rest' => true,
                'default' => self::$post_type_slug
            )
        );
    }

    public function register_post_type() {
        if ( post_type_exists( self::$post_type_slug ) ) {
            return;
        }

        $archive_slug = get_option( 'menu_post_type_archive_slug' );
        $menu_name = ucfirst( $archive_slug );
        
        $labels = [
            'name'                  => __( $menu_name, self::$post_type_slug ),
            'singular_name'         => _x(
                                            $menu_name,
                                            'Menus post type singular name',
                                            self::$post_type_slug
                                        ),
            'add_new'               => __( 'Add Menu', self::$post_type_slug ),
            'add_new_item'          => __( 'Add New Menu', self::$post_type_slug ),
            'edit'                  => __( 'Edit', self::$post_type_slug ),
            'edit_item'             => __( 'Edit Menu', self::$post_type_slug ),
            'new_item'              => __( 'New Menu', self::$post_type_slug ),
            'view'                  => __( 'View Menu', self::$post_type_slug ),
            'view_item'             => __( 'View Menu', self::$post_type_slug ),
            'search_items'          => __( 'Search Menu', self::$post_type_slug ),
            'not_found'             => __( 'No '.$menu_name.' found', self::$post_type_slug ),
            'not_found_in_trash'    => __( 'No '.$menu_name.' found in trash', self::$post_type_slug ),
            'parent'                => __( 'Parent Menu', self::$post_type_slug ),
            'menu_name'             => _x( $menu_name, 'Admin menu name', self::$post_type_slug ),
            'filter_items_list'     => __( 'Filter Menus', self::$post_type_slug ),
            'items_list_navigation' => __( 'Menus navigation', self::$post_type_slug ),
            'items_list'            => __( 'Menus list', self::$post_type_slug ),
        ];

        $args =  [
            'labels'              => $labels,
            'description'         => __( 'This is where Menus are stored.', self::$post_type_slug ),
            'public'              => true,
            'show_ui'             => true,
            'capability_type'     => 'page',
            'map_meta_cap'        => true,
            'publicly_queryable'  => true,
            'exclude_from_search' => true,
            'show_in_menu'        => false,
            'hierarchical'        => true,
            'show_in_nav_menus'   => false,
            'supports'            => [ 'editor', 'title', 'author' ],
            'show_in_rest'        => true,
            'has_archive'         => $archive_slug,
            'rewrite'             => [
                                        'slug' => 'menu',
                                        'with_front' => false
                                    ]
        ];

        $args =  [
            'labels'              => $labels,
            'description'         => __( 'This is where Menus are stored.', self::$post_type_slug ),
            'show_ui'             => true,
            'supports'            => [ 'editor', 'title', 'author' ],
        ];

        register_post_type(
            self::$post_type_slug,
            $args
        );

        $flush_rewrite = get_option( 'menu_post_type_flush_rewrite_rules' );

        if ( $flush_rewrite ) {
            flush_rewrite_rules( true );
            update_option( 'menu_post_type_flush_rewrite_rules', false, true );
        }
    }

    public function update_archive_slug( $new_status, $old_status, $post ) {

        if( $post->post_type == self::$post_type_slug ){
            $current_slug = get_option( 'menu_post_type_archive_slug' );
            $new_slug = ( self::count_menus() > 1 ) ? 'menus' : self::$post_type_slug;

            if( $new_slug !== $current_slug ){
                update_option( 'menu_post_type_archive_slug', $new_slug, false );
                update_option( 'menu_post_type_flush_rewrite_rules', true, false );
            }
        }
    }

    public function load_single_template( $template ){
		global $post;
		if( $post->post_type == self::$post_type_slug ){
            $themed_template = get_stylesheet_directory() . '/dining-dashboard/menu-single.php';

            if( file_exists( $themed_template ) ){
                $template = $themed_template;
            }
            else {
                $template = DD_PLUGIN_PATH . '/templates/menu-single.php';
            }

		}
		return $template;
	}

    public function load_archive_template( $template ){
        global $post;
		if( get_post_type( $post ) == self::$post_type_slug ){
            if( self::count_menus() > 1 ){
                $themed_template = get_stylesheet_directory() . '/dining-dashboard/menus-archive.php';

                if( file_exists( $themed_template ) ){
                    $template = $themed_template;
                }
                else {
                    $template = DD_PLUGIN_PATH . '/templates/menus-archive.php';
                }
            }
            else {
                $template = $this->load_single_template( $template );
            }
        }
        return $template;
    }

    public static function template_redirect(){
        global $post;

        if( ! is_singular( self::$post_type_slug ) ){
            return;
        }

        //if more than one location
        if( self::count_menus() > 1 ){
            return;
        }

        //if only one location redirect to archive page
        wp_redirect( get_post_type_archive_link( self::$post_type_slug ) );
        exit;
    }    

    public function custom_translations( $translated ) {

        //var_dump($translated);
        switch ( $translated ) {
			case 'Add title' :
                $translated = 'Add menu title';
                break;
            case 'Write heading…';
                $translated = 'Section title (eg Entree, Mains, Desert)';
                break;
        }

        return $translated;
    }

    public static function count_menus( $status = 'publish' ){

        $menu_count = 0;
        
        if( post_type_exists( self::$post_type_slug ) && $status != 'any' ){
            $menus = wp_count_posts( self::$post_type_slug );
            $menu_count = $menus->$status;
        }
        else {
            $published_menus = get_posts(
                [
                    'post_type'     => self::$post_type_slug,
                    'post_status'   => $status
                ]
            );
            $menu_count = count($published_locations);
        }
        return $menu_count;
    }
}

new MenuPostType();
