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

    public function __construct() {
       $this->init();
    }

    public function render( $attributes ){
        $variables[ 'item_title' ] = $attributes[ 'itemTitle' ];
        $variables[ 'description' ] = $attributes[ 'description' ];
        $variables[ 'vegetarian' ] = isset( $attributes[ 'vegetarian' ] ) ? $attributes[ 'vegetarian' ] : false;
        $variables[ 'vegan' ] = isset( $attributes[ 'vegan' ] ) ? $attributes[ 'vegan' ] : false;
        $variables[ 'gluten_free' ] = isset( $attributes[ 'glutenFree' ] ) ? $attributes[ 'glutenFree' ] : false;
        $variables[ 'price' ] = isset( $attributes[ 'price' ] ) ? $this->format_price( $attributes[ 'price' ] ) : 0;
        $variables[ 'has_meta' ] = $this->has_meta( $variables );
        if( is_admin() ){
            return self::render_template( 'menu-item', $variables );    
        }
        else {
            extract( $variables );
            include self::load_template( 'menu-item' );
        }
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
 