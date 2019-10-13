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

        const columnClass = !!attributes.twoColumnLayout ? "cols-2" : "cols-1";

        return (
            <div className={columnClass}>
                <InspectorControls
                    attributes={attributes}
                    setAttributes={setAttributes}
                />
                <div className="intro-column">
                    <RichText
                        value={attributes.introContent}
                        placeholder={__('Intro  Content')}
                        onChange={(introContent) => setAttributes({ introContent })}
                        allowedFormats={formatControls}
                    />
                </div>
                {
                    !!attributes.showMenuLegend &&
                    <div className="intro-column">
                        <DietaryRequirements
                            attributes={attributes}
                            setAttributes={setAttributes}
                        />
                    </div>
                }
            </div>
        );

    }

}

export default Editor;