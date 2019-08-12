<?php get_header(); ?>

	<div id="primary" class="content-area">
		<main id="main" class="site-main menus-archive">
			<?php
			while ( have_posts() ) : the_post();


			endwhile; // End of the loop.
			?>

		</main><!-- #main -->
	</div><!-- #primary -->

<?php
    get_sidebar();
    get_footer();
?>
