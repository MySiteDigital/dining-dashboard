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
        add_action( 'init', [ $this , 'register_styles_and_scripts' ] );
        add_action( 'enqueue_block_editor_assets', [ $this , 'enqueue_block_editor_assets' ] );
        add_action( 'wp_enqueue_scripts', [ $this, 'enqueue_frontend_styles' ] );
    }

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

        if( property_exists( self::class, 'styles' ) ){
            wp_enqueue_style( $this->styles['handle'] );
        }

        if( property_exists( self::class, 'scripts' ) ){
            wp_enqueue_script( $this->scripts['handle'] );
        }

    }

    public function enqueue_frontend_styles(){

        if( property_exists( self::class, 'styles' ) ){
            wp_enqueue_style( $this->styles[ 'handle' ] );
        }

    }
    
    public function get_asset_location( $filename, $dir = false ){
        
        $base = DD_PLUGIN_URL;
        
        if( $dir ){
            $base = DD_PLUGIN_PATH;
        }
        $type = substr( strrchr( $filename, '.' ), 1 );

        return $base . 'assets/blocks/' . $type . '/' . $filename;
        
    }

    public function get_asset_version( $filename ){
        return @filemtime( $this->get_asset_location( $filename, true ) );
    }
}