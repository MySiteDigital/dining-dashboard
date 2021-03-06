<?php 
    use MySiteDigital\DiningDashboard\Assets\SVG; 
    $columns_class = '';
    if( $show_legend ){
        $columns_class = ' cols-' . $columns;
    }
?>
<div class="wp-block-dining-dashboard-menu-intro align<?php echo $align . $columns_class; ?>">
    <div class="intro-content">
        <p>
            <?php echo $intro_content; ?>
        </p>
    </div>
    <?php 
        if( $show_legend ){
            ?>
            <div class="menu-legend">
                <strong><?php echo $legend_title; ?></strong>
                <dl>
                    <?php 
                        if( $show_vegetarian ){
                            ?>      
                            <dt>
                                <span title="Vegetarian">
                                    <span class="screen-reader-text">
                                        Vegetarian                                   
                                    </span>
                                    <?php SVG::icon( 'vegetarian' ); ?>
                                </span>
                            </dt>
                            <dd>
                                <span>
                                    <?php echo $vegetarian_description; ?>
                                </span>
                            </dd>
                            <?php
                        }   

                        if( $show_vegan ){
                            ?>      
                            <dt>
                                <span title="Vegan">
                                    <span class="screen-reader-text">
                                        Vegan                                   
                                    </span>
                                    <?php SVG::icon( 'vegan' ); ?>
                                </span>
                            </dt>
                            <dd>
                                <span>
                                    <?php echo $vegan_description; ?>
                                </span>
                            </dd>
                            <?php
                        }   

                        if( $show_gluten_free ){
                            ?>      
                            <dt>
                                <span title="Gluten Free">
                                    <span class="screen-reader-text">
                                        Gluten Free
                                    </span>
                                    <?php SVG::icon( 'gluten-free' ); ?>
                                </span>
                            </dt>
                            <dd>
                                <span>
                                    <?php echo $gluten_free_description; ?>
                                </span>
                            </dd>
                            <?php
                        }   
                    ?>
                </dl>
            </div>
            <?php
        }   
    ?>
</div>