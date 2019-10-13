<?php
/**
 * @class     Blocks\MenuIntro
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
 * MenuIntro Class.
 */
class MenuIntro {

    use BlockTrait;

    public $block_type = "dining-dashboard/menu-intro";

    public function __construct() {
       $this->init();
    }

    public function render( $attributes ){

        $variables[ 'align' ] = $this->get_default_alignment( $attributes );
        $variables[ 'intro_content' ] = isset( $attributes[ 'introContent' ] ) ? self::parse_html( $attributes[ 'introContent' ], true ) : '';
        $variables[ 'show_legend' ] = isset( $attributes[ 'showMenuLegend' ] ) ? $attributes[ 'showMenuLegend' ] : false;
        $variables[ 'columns' ] = isset( $attributes[ 'twoColumnLayout' ] ) && $attributes[ 'twoColumnLayout' ] ? 2 : 1;
        $variables[ 'legend_title' ] = isset( $attributes[ 'legendTitle' ] ) ? self::parse_html( $attributes[ 'legendTitle' ] ) : '';
        $variables[ 'show_vegetarian' ] = isset( $attributes[ 'showVegetarianDesc' ] ) ? $attributes[ 'showVegetarianDesc' ] : true;
        $variables[ 'vegetarian_description' ] = isset( $attributes[ 'vegetarianDescription' ] ) ? self::parse_html( $attributes[ 'vegetarianDescription' ] ) : '';
        $variables[ 'show_vegan' ] = isset( $attributes[ 'showVeganDesc' ] ) ? $attributes[ 'showVeganDesc' ] : true;
        $variables[ 'vegan_description' ] = isset( $attributes[ 'veganDescription' ] ) ? self::parse_html( $attributes[ 'veganDescription' ] ) : '';
        $variables[ 'show_gluten_free' ] = isset( $attributes[ 'showGlutenFreeDesc' ] ) ? $attributes[ 'showGlutenFreeDesc' ] : true;
        $variables[ 'gluten_free_description' ] = isset( $attributes[ 'glutenFreeDescription' ] ) ? self::parse_html( $attributes[ 'glutenFreeDescription' ] ) : '';

        return self::render_template( 'menu-intro', $variables ); 
    }
}

new MenuIntro();
 