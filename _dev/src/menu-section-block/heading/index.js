/**
 * WordPress dependencies
 */
const { __ } = wp.i18n;
const { createBlock } = wp.blocks;

const name = 'column';

const title = __('Column');

const settings = {

    title: 'Test',

    description: __('Add a structured wrapper for column blocks, then add content blocks you’d like to the columns.'),

    attributes: {
        sectionTitle: {
            type: 'string',
            default: ''
        }
    },

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
};

export { name, title, settings };
