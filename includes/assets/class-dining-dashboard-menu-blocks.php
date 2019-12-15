<?php
/**
 * @trait     Assets\MenuBlocks
 * @Version: 0.0.1
 * @package   DiningDashboard/Assets
 * @category  Class
 * @author    MySite Digital
 */
namespace MySiteDigital\DiningDashboard\Assets;


if ( ! defined( 'ABSPATH' ) ) {
    exit;
}

/**
 * MenuBlocks Class.
 */
class MenuBlocks {

    use AssetsTrait;

    protected $editor_styles = [
        'post_types' => [ 'menu' ],
        'handle' => 'dining-dashboard-menu-blocks',
        'src' => 'menu-blocks.css',
    ];

    protected $editor_scripts = [
        'post_types' => [ 'menu' ],
        'handle' => 'dining-dashboard-menu-blocks',
        'src' => 'menu-blocks.js',
    ];


    public function __construct() {
       $this->init();
    }
}

new MenuBlocks();
