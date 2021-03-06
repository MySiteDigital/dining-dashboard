<?php
get_header();
	
	if ( have_posts() ) : ?>

		<header class="page-header">
			<h1 class="page-title">
				<?php echo __( 'Menus', 'menu' ); ?>
			</h1>
		</header>

		<?php

		while ( have_posts() ) :
			the_post();

			?>
			<article id="post-<?php the_ID(); ?>" <?php post_class(); ?> itemscope itemtype="http://schema.org/Menu">
				<header class="entry-header">
					<?php
						the_title( sprintf( '<h2 class="entry-title"><a href="%s" rel="bookmark">', esc_url( get_permalink() ) ), '</a></h2>' );
					?>
				</header>

				<div class="entry-content">
					<?php the_excerpt(); ?>
				</div>

				<?php include DD_PLUGIN_PATH . '/templates/entry-footer.php'; ?>
			</article>
			<?php

		endwhile;

	else :
		?>
		<div class="page-content">
			Sorry, there are currently no published menus.
		</div>
		<?php
	endif;

get_footer();
