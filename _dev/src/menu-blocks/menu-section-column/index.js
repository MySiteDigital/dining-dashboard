import Icons from '../utils/Icons';
import Editor from './js/Editor';


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
        title: __('Section Column'),

        description: __('A column within a menu section'),

        icon: Icons.MenuSectionColumn,

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

        save({ attributes, className }) {
            return (
                <InnerBlocks.Content />
            );
        },
    }
);
