import Icons from '../utils/Icons';
import Editor from './Editor';
import save from './save';
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

        icon: Icons.MenuSectionHeading,

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

        save,
    }
);
