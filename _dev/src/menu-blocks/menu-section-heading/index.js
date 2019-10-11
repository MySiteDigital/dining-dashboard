import BlockIcons from '../utils/BlockIcons';
import Editor from './js/Editor';
/**
 * WordPress dependencies
 */
const { __ } = wp.i18n;
const { registerBlockType } = wp.blocks;

registerBlockType(
    'dining-dashboard/menu-section-heading',
    {
        title: __('Section Heading'),

        description: __('A column inside the menu sections where menu items can be added'),

        icon: BlockIcons.MenuSectionHeading,

        category: 'menu-blocks',

        supports: {
            html: false,
        },

        attributes: {
            sectionTitle: {
                type: 'string',
                default: ""
            },
        },

        edit: Editor,
    }
);
