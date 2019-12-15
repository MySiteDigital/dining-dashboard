<?php
/**
 * @trait     Assets\Admin
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
 * MenuPostType Class.
 */
class Admin {

    use AssetsTrait;

    protected $admin_styles = [
        'handle' => 'dining-dashboard-admin',
        'src' => 'dining-dashboard-admin.css',
    ];

    public function __construct() {
       $this->init();
    }
}

new Admin();

