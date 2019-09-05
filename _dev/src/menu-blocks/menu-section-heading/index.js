import Icons from '../utils/Icons';
/**
 * WordPress dependencies
 */
const { __ } = wp.i18n;
const { registerBlockType } = wp.blocks;
const { RichText } = wp.editor;


registerBlockType(
    'dining-dashboard/menu-section-heading',
    {
        title: __('Section Heading'),

        description: __('A column inside the menu sections where menu items can be added'),

        icon: Icons.MenuSectionHeading,

        category: 'menu-blocks',

        edit({ attributes, className }) {
            const { sectionTitle } = attributes;
            const formatControls = ['bold', 'italic'];

            return (
                <RichText
                    tagName="h3"
                    placeholder={__('Menu Section Title')}
                    formattingControls={formatControls}
                    value={sectionTitle}
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
