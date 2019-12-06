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
class SVG {

    use AssetsTrait;

    public static function icon( $icon )
    {
        echo 
            '<svg xmlns="http://www.w3.org/2000/svg" xmlns:xlink="http://www.w3.org/1999/xlink">
                <use xlink:href="' . self::icons_link( $icon ) . '"/>
            </svg>';
    }

    public static function icons_link( $icon ){
        $cacheBust = '?v=';
        $iconsFile = 'assets/icons.svg';
        $file_location = DD_PLUGIN_PATH . $iconsFile;
        if( file_exists( $file_location ) ){
            $cacheBust .= @filemtime( $file_location );
        }
        //make sure this is a relative url
        $file_url = parse_url( DD_PLUGIN_URL, PHP_URL_PATH ) . $iconsFile . $cacheBust . '#' . $icon;
        return $file_url;
    }

}


