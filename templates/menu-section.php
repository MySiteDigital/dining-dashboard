<section itemscope itemtype="http://schema.org/MenuSection" class="wp-block-dining-dashboard-menu-section align-<?php echo $align; ?>">
    <?php 
        echo $section_title; 
        if( count( $rendered_columns ) ){
            echo '<div class="wp-block-dining-dashboard-menu-section-grid cols-' . $columns . '">';
            foreach( $rendered_columns as $rendered_column ){
                echo $rendered_column;
            }
            echo '</div>'; 
        }
    ?>
</section>