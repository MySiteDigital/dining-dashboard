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
class MenuSection {

    use BlockTrait;

    public $block_type = "dining-dashboard/menu-section";

    protected $styles = [
        'post_types' => [ 'menu' ],
        'handle' => 'dining-dashboard-menu-blocks',
        'src' => 'menu-blocks.css',
    ];

    protected $scripts = [
        'post_types' => [ 'menu' ],
        'handle' => 'dining-dashboard-menu-blocks',
        'src' => 'menu-blocks.js',
    ];

    public function __construct() {
       $this->init();
    }

    public function filter_block_content( $block_content, $block ){
        if( $block[ 'blockName' ] == $this->block_type ){
            $attributes = $block["attrs"];
            $columns = intval( $attributes[ 'sectionColumns' ] );
            $slide_toggle = isset( $attributes[ 'hasSlideToggle' ] ) ? $attributes[ 'hasSlideToggle' ] : false;
            $section_title = MenuSectionHeading::render(
                $block[ 'innerBlocks' ][ 0 ][ 'attrs' ]
            );
            $rendered_columns =  $this->render_columns( $block[ 'innerBlocks' ] );
            include self::load_template( 'menu-section' );
        }  
    }

    public function render_columns( $inner_blocks ){
        unset( $inner_blocks[ 0 ] );
        echo '<pre>';
        print_r( $inner_blocks );
        echo '</pre>';
    }
}

new MenuSection();
