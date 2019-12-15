import BlockIcons from '../icons/BlockIcons';
import Editor from './js/Editor';
import save from './js/Save.js';

/**
 * WordPress dependencies
 */
const { __ } = wp.i18n;
const { registerBlockType } = wp.blocks;
const { RichText } = wp.editor;
const { InnerBlocks } = wp.blockEditor;

registerBlockType(
    'dining-dashboard/menu-section-column',
    {
        title: __('Menu Section Column'),

        description: __('A column within a menu section.'),

        icon: BlockIcons.MenuSectionColumn,

        category: 'menu-blocks',

        attributes: {
            showInserter: {
                type: 'boolean',
                default: true,
            }
        },

        supports: {
            inserter: false,
            html: false,
        },

        edit: Editor,

        save
    }
);
