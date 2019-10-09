import InspectorControls from './Inspector';
import DietaryIcons from './DietaryIcons';
import formatPrice from './formatPrice';
/**
 * WordPress dependencies
 */
const { __ } = wp.i18n;
const { Component, Fragment } = wp.element;
const { IconButton, DropZone, Spinner } = wp.components;
const { RichText, MediaPlaceholder } = wp.blockEditor;
const { isBlobURL } = wp.blob;

class Editor extends Component {

    constructor() {
        super(...arguments);
    }

    renderImage() {
        const { attributes, setAttributes, isSelected } = this.props;

        return (
            <MediaPlaceholder
                allowedTypes={['image']}
                multiple={false}
                icon="format-image"
                labels={
                    {
                        title: ' ',
                    }
                }
                onSelect={
                    el => setAttributes(
                        {
                            mediaURL: el.url,
                            mediaAlt: el.alt
                        }
                    )
                }
            />
        );
    }

    replaceImage(files) {
        mediaUpload(
            {
                allowedTypes: ['image'],
                filesList: files,
                onFileChange: (
                    [media]
                ) => this.props.setAttributes(
                    {
                        mediaURL: media.url,
                        mediaAlt: media.alt
                    }
                )
            }
        );
    }


    renderImage() {
        const { attributes, setAttributes, isSelected } = this.props;

        const dropZone = (
            <DropZone
                onFilesDrop={this.replaceImage}
                label={__('Drop image to replace')}
            />
        );

        return (
            <Fragment>
                <figure>
                    {
                        isSelected && 
                        (
                            <div>
                                <IconButton
                                    icon="no-alt"
                                    onClick={() => setAttributes({ mediaURL: '' })}
                                    label={__('Remove Image')}
                                    disabled={!isSelected}
                                />
                            </div>
                        )
                    }
                    {dropZone}
                    {isBlobURL(attributes.mediaURL) && <Spinner />}
                    <img
                        src={attributes.mediaURL}
                        alt={attributes.mediaAlt}
                    />
                </figure>
            </Fragment>
        );
    }


    renderPlaceholder() {
        const { setAttributes } = this.props;
        return (
            <MediaPlaceholder
                allowedTypes={['image']}
                multiple={false}
                icon="format-image"
                labels={
                    {
                        title: ' ',
                    }
                }
                onSelect={
                    el => setAttributes(
                        { 
                            mediaURL: el.url, 
                            mediaAlt: el.alt 
                        }
                    )
                }
            />
        );
    }

    render() {
        const { attributes, setAttributes, isSelected } = this.props;
        const { showImage, imageURL } = attributes;
        const richTextAttributes = {
            keepPlaceholderOnFocus: true,
            formattingControls: ['bold', 'italic'],
        };

        return (
            <Fragment>
                <InspectorControls
                    {...this.props}
                />
                <div>
                    {
                        !!attributes.showImage &&
                        (
                            attributes.mediaURL ? this.renderImage() : this.renderPlaceholder()
                        )
                    }
                    <div class="wp-block-dining-dashboard-menu-item">
                        <div class="details">
                            <RichText
                                value={attributes.itemTitle}
                                tagName="h3"
                                wrapperClassName="wp-block-coblocks-food-item__heading"
                                placeholder={__('Menu Item Title')}
                                onChange={itemTitle => setAttributes({ itemTitle })}
                                {...richTextAttributes}
                            />
                            <RichText
                                value={attributes.description}
                                tagName="p"
                                wrapperClassName="wp-block-coblocks-food-item__description"
                                placeholder={__('Menu Item Description')}
                                onChange={description => setAttributes({ description })}
                                {...richTextAttributes}
                            />
                            <div class="meta">
                                {
                                    !!attributes.vegetarian &&
                                    <span title="Vegetarian">
                                        {DietaryIcons.Vegetarian}
                                    </span>
                                }
                                {
                                    !!attributes.vegan &&
                                    <span title="Vegan">
                                        {DietaryIcons.Vegan}
                                    </span>
                                }
                                {
                                    !!attributes.glutenFree &&
                                    <span title="Gluten Free">
                                        {DietaryIcons.GlutenFree}
                                    </span>
                                }
                                {
                                    !!attributes.price &&
                                    attributes.price > 0 &&
                                    <span class="price">
                                        {
                                            formatPrice(attributes.price)
                                        }
                                    </span>
                                }
                            </div>  
                        </div>
                    </div>
                </div>
            </Fragment>
        );
    }


}

export default Editor;
