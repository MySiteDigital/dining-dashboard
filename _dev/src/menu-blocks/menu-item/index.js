import Editor from './js/Editor.js';
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
            },
            itemTitle: {
                type: 'string',
            },
            description: {
                type: 'string',
                source: 'html',
                default: '',
            },
        },

        edit: Editor,

        save({ attributes, className }) {
            console.log(attributes);
            return (
                <div className="menu-item">
                </div>
            );
        },
    }
);
