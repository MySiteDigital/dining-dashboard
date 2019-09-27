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

    public function __construct() {
       $this->init();
    }

    public function filter_block_content( $block_content, $block ){
        if( $block[ 'blockName' ] == $this->block_type ){
            $attributes = $block["attrs"];
            $inner_blocks = $block[ 'innerBlocks' ];
            $columns = intval( $attributes[ 'sectionColumns' ] );

            $variables[ 'columns' ] = $columns;
            $variables[ 'align' ] = isset( $attributes[ 'align' ] ) ? $attributes[ 'align' ] : 'narrow';
            $variables[ 'slide_toggle' ] = isset( $attributes[ 'hasSlideToggle' ] ) ? $attributes[ 'hasSlideToggle' ] : false;
            $variables[ 'section_title' ] = MenuSectionHeading::inner_block_content(
                $inner_blocks[ 0 ][ 'attrs' ]
            );
            $variables[ 'rendered_columns' ] =  $this->render_columns( $inner_blocks, $columns );
            
            return self::render_template( 'menu-section', $variables ); 
        }  
        return $block_content;
    }

    public function render_columns( $inner_blocks, $num_of_cols ){
        unset( $inner_blocks[ 0 ] );
        $menu_item_class = MenuItem::instance();
        $rendered_columns = [];
        $menu_columns = [];
        $most_items = 0;

        $index = 0;
        while( $index < $num_of_cols ) {
            $index++;
            $menu_columns[ $index ] = [];
            if( isset( $inner_blocks[ $index ] ) ){
                $menu_columns[ $index ] = $inner_blocks[ $index ][ 'innerBlocks' ];
                $count = count( $menu_columns[ $index ] );
                if( $count > $most_items ){
                    $most_items = $count;
                }
            }
        }

        $index = 0;
        while( $index < $most_items ) {
            foreach( $menu_columns as $menu_column ){
                if( isset( $menu_column[ $index ] ) ){
                    $attributes = $menu_column[ $index ][ 'attrs' ];
                    $rendered_columns[] = $menu_item_class->render( $attributes );
                }
                else {
                    $rendered_columns[] = '<div class="wp-block-dining-dashboard-menu-item empty-item"></div>';
                }
            }
            $index++;
        }
        return $rendered_columns;
    }
}

new MenuSection();
