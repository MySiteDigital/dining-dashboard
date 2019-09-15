/**
 * Internal dependencies.
 */
import './styles/editor.scss';
import './styles/style.scss';

import edit from './edit';
import save from './save';

/**
 * WordPress dependencies.
 */
const { __ } = wp.i18n;

/**
 * Block constants.
 */
const name  = "food-and-drinks";


const settings = {
	title: __( 'Food & Drinks' ),
	description: __( 'Display a menu or price list.' ),
	keywords: [ __( 'restaurant' ), __( 'menu' ) ],
	attributes:  {
		"showImages": {
			"type": "boolean",
			"default": false
		},
		"showPrices": {
			"type": "boolean",
			"default": true
		},
		"columns": {
			"type": "number",
			"default": 2
		}
	},
	supports: {
		align: [ 'wide' ],
	},
	edit,
	save,
};

export { name, settings };
