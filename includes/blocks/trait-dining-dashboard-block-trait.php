<?php
/**
 * @trait     Blocks\BlockTrait
 * @Version: 1.0.0
 * @package   DiningDashboard/Blocks
 * @category  Trait
 * @author    MySite Digital
*/

namespace MySiteDigital\DiningDashboard\Blocks;


if ( ! defined( 'ABSPATH' ) ) {
    exit;
}

trait BlockTrait {

    public function init(){
        if( method_exists( $this,'filter_block_content' ) ){
            add_filter( 'render_block', [ $this , 'filter_block_content' ], 999, 2 );
        }
        add_action( 'init', [ $this , 'register_styles_and_scripts' ] );
        add_action( 'enqueue_block_editor_assets', [ $this , 'enqueue_block_editor_assets' ] );
        add_action( 'wp_enqueue_scripts', [ $this, 'enqueue_frontend_styles' ] );
    }

    // public function register_block(){
    //     register_block_type( 
    //         $this->block_type, 
    //         [
    //             'render_callback' => [ $this, 'render' ]
    //         ]
    //     );
    // }

    public function register_styles_and_scripts() {

        if( property_exists( self::class, 'styles' ) ){
            wp_register_style(
                $this->styles[ 'handle' ],
                $this->get_asset_location( $this->styles['src'] ),
                [ 'wp-edit-blocks' ],
                $this->get_asset_version( $this->styles['src'] )
            );
        }

        if( property_exists( self::class, 'scripts' ) ){
            $test = wp_register_script(
                $this->scripts[ 'handle' ],
                $this->get_asset_location( $this->scripts['src'] ),
                ['wp-blocks','wp-i18n','wp-element'],
                $this->get_asset_version( $this->scripts['src'] ),
                true
            );
        }
    }

    public function enqueue_block_editor_assets(){
        global $post;

        if( property_exists( self::class, 'styles' ) ){
            if( in_array( $post->post_type, $this->styles[ 'post_types' ] ) ){
                wp_enqueue_style( $this->styles[ 'handle' ] );
            }
        }

        if( property_exists( self::class, 'scripts' ) ){
            if( in_array( $post->post_type, $this->styles[ 'post_types' ] ) ){
                wp_enqueue_script( $this->scripts[ 'handle' ] );
            }
        }

    }

    public function enqueue_frontend_styles(){
        global $post;

        if( property_exists( self::class, 'styles' ) ){
            if( in_array( $post->post_type, $this->styles[ 'post_types' ] ) ){
                wp_enqueue_style( $this->styles[ 'handle' ] );
            }
        }

    }
    
    public function get_asset_location( $filename, $dir = false ){
        
        $base = DD_PLUGIN_URL;
        
        if( $dir ){
            $base = DD_PLUGIN_PATH;
        }
        $type = substr( strrchr( $filename, '.' ), 1 );

        return $base . 'assets/' . $type . '/' . $filename;
        
    }

    public function get_asset_version( $filename ){
        return @filemtime( $this->get_asset_location( $filename, true ) );
    }

    public static function load_template( $block_slug ){
        $themed_template = get_stylesheet_directory() . '/dining-dashboard/' . $block_slug . '.php';
        if( file_exists( $themed_template ) ){
            $template = $themed_template;
        }
        else {
            $template = DD_PLUGIN_PATH . 'templates/' .  $block_slug . '.php';
        }
        return $template;
    }

    public static function render_template( $file, $variables ){
        extract( $variables );
        ob_start();
        include self::load_template( $file );
        return ob_get_clean();
    }
}