<?php
/**
 * @trait     Blocks\MenuSection
 * @Version: 0.0.1
 * @package   DiningDashboard/Blocks
 * @category  Class
 * @author    MySite Digital
 */
namespace MySiteDigital\DiningDashboard\Blocks;


if ( ! defined( 'ABSPATH' ) ) {
    exit;
}

/**
 * MenuSection Class.
 */
class MenuItem {

    use BlockTrait;

    public $block_type = "dining-dashboard/menu-item";

    protected static $_instance = null;

    public static function instance()
    {
        if ( is_null( self::$_instance ) ) {
            self::$_instance = new self();
        }
        return self::$_instance;
    }

    public function __construct() {
       $this->init();
    }

    public function render( $attributes ){
        $variables[ 'image' ] = isset( $attributes[ 'mediaURL' ] ) ? $attributes[ 'mediaURL' ] : '';
        $variables[ 'alt_text' ] = isset( $attributes[ 'mediaAlt' ] ) ? $attributes[ 'mediaAlt' ] : '';
        $variables[ 'item_title' ] = isset( $attributes[ 'itemTitle' ] ) ? $attributes[ 'itemTitle' ] : '';
        $variables[ 'description' ] = isset( $attributes[ 'description' ] ) ? $attributes[ 'description' ] : '';
        $variables[ 'vegetarian' ] = isset( $attributes[ 'vegetarian' ] ) ? $attributes[ 'vegetarian' ] : false;
        $variables[ 'vegan' ] = isset( $attributes[ 'vegan' ] ) ? $attributes[ 'vegan' ] : false;
        $variables[ 'gluten_free' ] = isset( $attributes[ 'glutenFree' ] ) ? $attributes[ 'glutenFree' ] : false;
        $variables[ 'price' ] = isset( $attributes[ 'price' ] ) ? $this->format_price( $attributes[ 'price' ] ) : 0;
        $variables[ 'has_meta' ] = $this->has_meta( $variables );
        return self::render_template( 'menu-item', $variables ); 
    }

    public function format_price( $price ){
        $nice_price = "$";
        if( strpos( $price, '.' ) !== false ) {
            $nice_price .= $price . '0';
        }
        else {
            $nice_price .= $price . '.00';
        }
        return $nice_price;
    }

    public function has_meta( $variables ){
        extract( $variables );
        return $vegetarian || $vegan || $gluten_free || $price;
    }
}

new MenuItem();
 