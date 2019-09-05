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

        attributes: {
            itemTitle: {
                type: 'string',
            },
        },

        edit({ attributes, className }) {
            const { itemTitle } = attributes;
            const formatControls = ['bold', 'italic'];

            return (
                <RichText
                    tagName="h4"
                    placeholder={__('Menu Section Title')}
                    formattingControls={formatControls}
                    value={itemTitle}
                />
            );
        },

        save({ attributes, className }) {
            const { sectionTitle } = attributes;

            return (
                <RichText.sectionTitle
                    tagName="h3"
                    className={className}
                    value={itemTitle}
                />
            );
        }
    }
);
