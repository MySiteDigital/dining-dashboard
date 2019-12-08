import InspectorControls from './Inspector';
import DietaryIcons from '../../utils/DietaryIcons';
import formatPrice from './formatPrice';
/**
 * WordPress dependencies
 */
const { __ } = wp.i18n;
const { compose } = wp.compose;
const { Component, Fragment } = wp.element;
const { IconButton, DropZone, Spinner, withNotices } = wp.components;
const { RichText, MediaPlaceholder } = wp.blockEditor;
const { isBlobURL } = wp.blob;

class Editor extends Component {

    constructor() {
        super(...arguments);
        this.onUploadError = this.onUploadError.bind(this);
    }

    onUploadError(message) {
        console.log(message);
        
        const { noticeOperations } = this.props;
        noticeOperations.removeAllNotices();
        noticeOperations.createErrorNotice(message);
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
                        mediaID: media.id, 
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
        const { setAttributes, noticeUI } = this.props;
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
                notices={noticeUI}
                onSelect={
                    el => setAttributes(
                        { 
                            mediaID: el.id, 
                            mediaURL: el.url, 
                            mediaAlt: el.alt 
                        }
                    )
                }
                onError={ this.onUploadError }
            />
        );
    }

    render() {
        const { attributes, setAttributes, isSelected, noticeUI } = this.props;
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

export default compose([withNotices])(Editor);
