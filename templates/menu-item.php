<figure class="wp-block-dining-dashboard-menu-item"  itemscope itemtype="http://schema.org/MenuItem">
    <div class="img">
        <meta itemprop="image" content="bg.jpg"></meta>
    </div>
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
                            Vegan
                        </span>
                    ';
                }

                if ( $vegan ) {
                    echo '
                        <span title="Vegan">
                            <span class="screen-reader-text">
                                Vegan                                        
                            </span>
                            Vegan
                        </span>
                    ';
                }

                if ( $gluten_free ) {
                    echo '
                        <span title="Gluten Free">
                            <span class="screen-reader-text">
                                Gluten Free                                  
                            </span>
                            Vegan
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