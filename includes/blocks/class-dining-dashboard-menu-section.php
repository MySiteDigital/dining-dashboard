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

    protected $styles = [
        'handle' => 'dining-dashboard-menu-section-block',
        'src' => 'menu-section-block.css'
    ];

    protected $scripts = [
        'handle' => 'dining-dashboard-menu-section-block',
        'src' => 'menu-section-block.js'
    ];

    public function __construct() {
        add_action( 'init', [ $this , 'init' ] );
	}
}

new MenuSection();
