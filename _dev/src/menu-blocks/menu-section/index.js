import BlockIcons from '../icons/BlockIcons';
import Editor from './js/Editor.js';
import save from './js/Save.js';

/**
 * Get WordPress libraries from the wp global
 */
const { __ } = wp.i18n;
const { registerBlockType } = wp.blocks;
const { InnerBlocks } = wp.blockEditor;

registerBlockType(
    'dining-dashboard/menu-section',
    {
        title: __('Menu Section'),

        description: __('A menu section is a collection of menu items that belong together, eg entrees, mains, deserts.'),

        icon: BlockIcons.MenuSection,

        category: 'menu-blocks',

        supports: {
            align: ['wide', 'full'],
            customClassName: false,
            html: false,
        },

        attributes: {
            sectionColumns: {
                type: 'number',
            },
            hasSlideToggle: {
                type: 'boolean',
                default: false
            },
            showImages: {
                type: 'boolean',
                default: true
            },
            showPrices: {
                type: 'boolean',
                default: true
            }
        },

        edit: Editor,

        save
    }
);
