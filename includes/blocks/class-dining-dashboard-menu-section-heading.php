<?php
/**
 * @class     Blocks\MenuSectionHeading
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
 * MenuSectionHeading Class.
 */
class MenuSectionHeading {

    use BlockTrait;

    public function __construct() {
       $this->init();
    }

    public static function inner_block_content( $attributes ){
        $variables[ 'section_title' ] = isset( $attributes[ 'sectionTitle' ] ) ? self::parse_html( $attributes[ 'sectionTitle' ] ) : '';
        return self::render_template( 'menu-section-heading', $variables );
    }
}

new MenuSectionHeading();
