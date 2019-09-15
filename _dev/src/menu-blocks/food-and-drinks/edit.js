

/**
 * WordPress dependencies.
 */
const { __ } = wp.i18n;
const { Component, Fragment } = wp.element;
const { InnerBlocks } = wp.blockEditor;

const ALLOWED_BLOCKS = [ 'coblocks/food-item' ];

const TEMPLATE = [
	[ 'core/heading', { level: 3, placeholder: __( 'Menu title...' ), align: 'center' } ],
	[ 'coblocks/food-item' ],
	[ 'coblocks/food-item' ],
];


class FoodItem extends Component {


	render() {


		return (
			<Fragment>
				<div
				>
					<InnerBlocks
						allowedBlocks={ ALLOWED_BLOCKS }
						template={ TEMPLATE }
					/>
				</div>
			</Fragment>
		);
	}
}


export default  FoodItem;
