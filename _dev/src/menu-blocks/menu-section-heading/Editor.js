/**
 * WordPress dependencies
 */
const { RichText } = wp.blockEditor;
const { Component } = wp.element;
const { __ } = wp.i18n;

class Editor extends Component {

    constructor() {
        super(...arguments);
    }

    render() {
        const {
            attributes,
            setAttributes,
        } = this.props;

        const formatControls = ['bold', 'italic'];

        return (
            <RichText
                value={attributes.sectionTitle}
                tagName="h2"
                placeholder={__('Menu Section Title')}
                onChange={(sectionTitle) => setAttributes({ sectionTitle })}
                formattingControls={formatControls}
            />
        );

    }

}

export default Editor;