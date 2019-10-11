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
        if( method_exists( $this,'render' ) ){
            add_action( 'init', [ $this , 'register_block' ] );
        }
        if( method_exists( $this,'filter_block_content' ) ){
            add_filter( 'render_block', [ $this , 'filter_block_content' ], 999, 2 );
        }
    }

    public function register_block(){
        register_block_type( 
            $this->block_type, 
            [
                'render_callback' => [ $this, 'render' ]
            ]
        );
    }

    public static function parse_html( $string, $advanced = false ){
        $allowed_html = [
            'em' => [],
            'strong' => [],
        ];

        if( $advanced ){
            $allowed_html['a'] = [
                'href' => [],
                'target' => [],
            ];
            $allowed_html['s'] = [];
            $allowed_html['br'] = [];
        }

        return wp_kses( 
            $string,
            $allowed_html
            );
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