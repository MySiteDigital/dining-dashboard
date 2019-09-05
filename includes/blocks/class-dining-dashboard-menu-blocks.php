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
}

new MenuSection();
