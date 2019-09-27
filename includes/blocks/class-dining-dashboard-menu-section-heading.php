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
class MenuSectionHeading {

    use BlockTrait;

    public function __construct() {
       $this->init();
    }

    public static function inner_block_content( $attributes ){
        $variables[ 'section_title' ] = wp_kses( 
            $attributes[ 'sectionTitle' ],
            [
                'em' => [],
                'strong' => [],
            ]
        );
        return self::render_template( 'menu-section-heading', $variables );
    }
}

new MenuSectionHeading();
