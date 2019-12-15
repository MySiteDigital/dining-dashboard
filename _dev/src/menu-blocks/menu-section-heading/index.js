import BlockIcons from '../icons/BlockIcons';
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

        description: __('The heading of a menu section.'),

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
