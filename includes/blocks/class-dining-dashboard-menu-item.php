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

    public function filter_block_content( $block_content, $block ){
        if( $block[ 'blockName' ] == $this->block_type ){
            $attributes = $block["attrs"];

            $vegetarian = isset( $attributes[ 'vegetarian' ] ) ? $attributes[ 'vegetarian' ] : false;
            $vegan = isset( $attributes[ 'vegan' ] ) ? $attributes[ 'vegan' ] : false;
            $glutenFree = isset( $attributes[ 'glutenFree' ] ) ? $attributes[ 'glutenFree' ] : false;
            $price = isset( $attributes[ 'price' ] ) ? $this->format_price( $attributes[ 'price' ] ) : 0;
            echo '<pre>';
            print_r($price);
            echo '</pre>';
            die('sdfsdf');
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
}

new MenuItem();
