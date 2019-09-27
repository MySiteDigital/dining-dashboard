<?php
/**
 * @trait     Blocks\MenuSection
 * @Version: 0.0.1
 * @package   DiningDashboard/Blocks
 * @category  Class
 * @author    MySite Digital
 */
namespace MySiteDigital\DiningDashboard\Assets;


if ( ! defined( 'ABSPATH' ) ) {
    exit;
}

/**
 * MenuPostType Class.
 */
class MenuPostType {

    use AssetsTrait;

    protected $frontend_styles = [
        'post_types' => [ 'menu' ],
        'handle' => 'dining-dashboard-menu',
        'src' => 'menu-post-type.css',
    ];

    public function __construct() {
       $this->init();
    }
}

new MenuPostType();
