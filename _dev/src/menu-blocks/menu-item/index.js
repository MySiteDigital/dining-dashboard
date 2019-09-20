import Editor from './js/Editor.js';
import save from './js/Save.js';
import Icons from '../utils/Icons';
/**
 * WordPress dependencies
 */
const { __ } = wp.i18n;
const { registerBlockType } = wp.blocks;
const { RichText } = wp.editor;


registerBlockType(
    'dining-dashboard/menu-item',
    {
        title: __('Menu Item'),

        description: __('A menu item which can be either added to a Menu Section or directly to a Menu'),

        icon: Icons.MenuItem,

        category: 'menu-blocks',

        supports: {
            html: false,
        },

        supports: { 
            html: true, 
            customClassName: false 
        },

        attributes: {
            itemTitle: {
                type: 'string'
            },
            description: {
                type: 'string'
            },
            showImage: {
                type: 'boolean',
                default: true,
            },
            mediaID: {
                type: 'number',
            },
            mediaURL: {
                type: 'string',
                source: 'attribute',
                selector: 'img',
                attribute: 'src',
                default: ""
            },
            mediaAlt: {
                type: 'string',
                source: 'attribute',
                selector: 'img',
                attribute: 'alt',
                default: ""
            },
            vegetarian: {
                type: "boolean",
                default: false,
            },
            vegan: {
                type: "boolean",
                default: false,
            },
            glutenFree: {
                type: "boolean",
                default: false,
            },
            price: {
                type: "string"
            },
        },

        edit: Editor
    }
);
