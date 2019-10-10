<?php use MySiteDigital\DiningDashboard\Assets\SVG; ?>
<figure class="wp-block-dining-dashboard-menu-item"  itemscope itemtype="http://schema.org/MenuItem">
    <?php
        if ( $image ) {
            ?>
            <div class="img" data-image="<?php echo $image; ?>">
                <meta itemprop="image" content="<?php echo $image; ?>"></meta>
            </div>
            <?php
        }
    ?>
    <div class="details">
        <?php
            echo '<h3 itemprop="name">' . $item_title . '</h3>';
            echo '<p  itemprop="description">' . $description . '</p>';
            if ( $has_meta ) {
                echo '<div class="meta">';
                
                if ( $vegetarian ) {
                    echo '
                        <span title="Vegetarian">
                            <span class="screen-reader-text">
                                Vegetarian                                   
                            </span>
                            ' .  SVG::icon( 'vegetarian' ) . '
                        </span>
                    ';
                }

                if ( $vegan ) {
                    echo '
                        <span title="Vegan">
                            <span class="screen-reader-text">
                                Vegan                                        
                            </span>
                            ' .  SVG::icon( 'vegan' ) . '
                        </span>
                    ';
                }

                if ( $gluten_free ) {
                    echo '
                        <span title="Gluten Free">
                            <span class="screen-reader-text">
                                Gluten Free                                  
                            </span>
                            ' .  SVG::icon( 'gluten-free' ) . '
                        </span>
                    ';
                }

                if ( $price ) {
                    echo '<span class="price">' . $price . '</span>';
                }

                echo '</div>';
            }
        ?>                                                                                           
    </div>
</figure>