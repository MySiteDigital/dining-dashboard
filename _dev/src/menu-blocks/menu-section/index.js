import Editor from './js/Editor.js';
import save from './js/Save.js';
import BlockIcons from '../utils/BlockIcons';

import './scss/style.scss';

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

        icon: BlockIcons.MenuSection,

        category: 'menu-blocks',

        supports: {
            align: ['wide', 'full'],
            customClassName: false,
            html: false,
        },

        align: {
            type: "string",
            default: "full"
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
