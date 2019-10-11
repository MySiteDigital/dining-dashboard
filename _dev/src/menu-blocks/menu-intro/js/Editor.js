import InspectorControls from './Inspector';
import DietaryRequirements from './DietaryRequirements';
/**
 * WordPress dependencies
 */
const { RichText } = wp.blockEditor;
const { Component, Fragment } = wp.element;
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


        const formatControls = ['core/bold', 'core/italic', 'core/link', 'core/strikethrough'];

        return (
            <Fragment>
                <InspectorControls
                    attributes={attributes}
                    setAttributes={setAttributes}
                />
                <RichText
                    value={attributes.introContent}
                    placeholder={__('Intro  Content')}
                    onChange={(introContent) => setAttributes({ introContent })}
                    allowedFormats={formatControls}
                />
                {
                    !!attributes.showMenuLegend &&
                    <DietaryRequirements
                        attributes={attributes}
                        setAttributes={setAttributes}
                    />
                }
            </Fragment>
        );

    }

}

export default Editor;