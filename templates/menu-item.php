<?php use MySiteDigital\DiningDashboard\Assets\SVG; ?>
<figure class="wp-block-dining-dashboard-menu-item column-<?php echo $column; ?>"  itemscope itemtype="http://schema.org/MenuItem" data-top="" data-bottom="">
    <?php
        if ( is_array( $image ) ) {
            ?>
            <div class="img" data-image="<?php echo $image[ 'medium' ]; ?>">
                <meta itemprop="image" content="<?php echo $image[ 'medium' ]; ?>"></meta>
            </div>
            <?php
        }
    ?>
    <div class="details">
        <h3 itemprop="name"><?php echo $item_title; ?></h3>
        <p  itemprop="description"><?php echo $description; ?></p>
        <?php
            if ( $has_meta ) {
                ?>
                    <div class="meta">
                        <?php
                            if ( $vegetarian ) {
                                ?>
                                    <span title="Vegetarian">
                                        <span class="screen-reader-text">
                                            Vegetarian                                   
                                        </span>
                                        <?php SVG::icon( 'vegetarian' ); ?>
                                    </span>
                                <?php
                            }

                            if ( $vegan ) {
                                ?>
                                    <span title="Vegan">
                                        <span class="screen-reader-text">
                                            Vegan                                   
                                        </span>
                                        <?php SVG::icon( 'vegan' ); ?>
                                    </span>
                                <?php
                            }

                            if ( $gluten_free ) {
                                ?>
                                    <span title="Gluten Free">
                                        <span class="screen-reader-text">
                                            Gluten Free
                                        </span>
                                        <?php SVG::icon( 'gluten-free' ); ?>
                                    </span>
                                <?php
                            }

                            if ( $price ) {
                                ?>
                                <span class="price">
                                    <?php echo $price; ?>
                                </span>
                                <?php
                            }
                        ?>
                    </div>
                <?php
            }
        ?>                                                                                           
    </div>
</figure>