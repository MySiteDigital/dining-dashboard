<?php 
    use MySiteDigital\DiningDashboard\Assets\SVG; 
    $slide_toggle_class = '';
    if( $slide_toggle ){
        $slide_toggle_class = ' has-slide-toggle';
    }
?>
<section itemscope itemtype="http://schema.org/MenuSection" class="wp-block-dining-dashboard-menu-section align-<?php echo $align; ?> cols-<?php echo $columns . $slide_toggle_class; ?>">
    <header>
        <?php 
            echo $section_title; 

            if( $slide_toggle ){
                echo '
                    <button>
                        ' . SVG::icon( 'down' ) . '
                    </button>
                    ';
            }
        ?>
    </header>
    <div class="grid-holder">
        <?php 
            if( count( $rendered_columns ) ){
                echo '<div class="wp-block-dining-dashboard-menu-section-grid cols-' . $columns . $slide_toggle_class . '">';
                foreach( $rendered_columns as $rendered_column ){
                    echo $rendered_column;
                }
                echo '</div>'; 
            }
        ?>
    </div>
</section>