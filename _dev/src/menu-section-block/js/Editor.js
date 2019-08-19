/**
 * Get WordPress libraries from the wp global
 */
const { __ } = wp.i18n;
const { InspectorControls, AlignmentToolbar, RichText, MediaUpload } = wp.editor;
const { ToggleControl, TextControl, SelectControl, Button, PanelBody }  = wp.components;
const { Component, Fragment } = wp.element;

export default class Editor extends Component {

    constructor() {
        super( ...arguments );
        this.onChangeTitle = this.onChangeTitle.bind(this);
        this.onChangeContent = this.onChangeContent.bind(this);
    }

    onChangeTitle( newTitle ) {
        this.props.setAttributes( { itemTitle: newTitle } );
    }

    onChangeContent( newContent ) {
        this.props.setAttributes( { content: newContent } );
    }



    render() {
        const { attributes, setAttributes, isSelected } = this.props;
        const { mediaID, mediaURL, itemTitle, content, currency, currencyPosition } = attributes;
        const formatControls = [ 'bold', 'italic'];


        return [
            (
                <InspectorControls>
                    <PanelBody title={ __( 'Item Image' ) }>
                        <p>
                            <strong>Menu Item Image</strong><br/>
                            <span class="components-base-control__help">width should be 180px</span>
                        </p>
                    </PanelBody>
                </InspectorControls>
            ),
            (
                <div>
                    <div>
                        <RichText
                            tagName="h3"
                            placeholder={ __( 'Menu Item Title' ) }
                            onChange={ this.onChangeTitle }
                            formattingControls= { formatControls }
                            value={ itemTitle }
                        />
                        <RichText
                            tagName="p"
                            placeholder={ __( 'Menu Item Description' ) }
                            onChange={ this.onChangeContent }
                            formattingControls= { formatControls }
                            value={ content }
                        />
                    </div>
                </div>
            )
        ];

    }

}
