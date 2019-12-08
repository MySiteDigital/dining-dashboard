<?php
/**
 * @class     Blocks\MenuItem
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
 * MenuItem Class.
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
        $variables[ 'column' ] = isset( $attributes[ 'column' ] ) ? $attributes[ 'column' ] : 1;
        $variables[ 'media_id' ] = isset( $attributes[ 'mediaID' ] ) ? $attributes[ 'mediaID' ] : 0;
        $variables[ 'image' ] = $this->get_images( $variables[ 'media_id' ] );
        $variables[ 'item_title' ] = isset( $attributes[ 'itemTitle' ] ) ? self::parse_html( $attributes[ 'itemTitle' ] ) : '';
        $variables[ 'description' ] = isset( $attributes[ 'description' ] ) ? self::parse_html( $attributes[ 'description' ] ) : '';
        $variables[ 'vegetarian' ] = isset( $attributes[ 'vegetarian' ] ) ? $attributes[ 'vegetarian' ] : false;
        $variables[ 'vegan' ] = isset( $attributes[ 'vegan' ] ) ? $attributes[ 'vegan' ] : false;
        $variables[ 'gluten_free' ] = isset( $attributes[ 'glutenFree' ] ) ? $attributes[ 'glutenFree' ] : false;
        $variables[ 'price' ] = isset( $attributes[ 'price' ] ) ? $this->format_price( $attributes[ 'price' ] ) : 0;
        $variables[ 'has_meta' ] = $this->has_meta( $variables );
        return self::render_template( 'menu-item', $variables ); 
    }

    public function get_images( $attachment_id ){
        
        if ( ! wp_attachment_is_image( $attachment_id ) ){
            return '';
        }

        $images[ 'alt_text' ] = get_post_meta( $attachment_id, '_wp_attachment_image_alt', true );

        $sizes = get_intermediate_image_sizes();
        $sizes[] = 'full';
        
        foreach ( $sizes as $size ) {
            $image = wp_get_attachment_image_src( $attachment_id, $size );
            if( is_array( $image ) ){
                $images[ $size ] = $image[0];
            }
        }

        return $images;
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

    public function attributes( $column, $index ){
        if( isset( $column[ $index ] ) && isset( $column[ $index ][ 'attrs' ] ) && $column[ $index ][ 'attrs' ] ){
            $column[ $index ][ 'attrs' ][ 'column' ] = $column[ 'column '];
            return $column[ $index ][ 'attrs' ];
        }
        return false;
    }
}

new MenuItem();
 