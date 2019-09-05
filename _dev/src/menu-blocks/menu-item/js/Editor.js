import DietaryIcons from './DietaryIcons';
/**
 * WordPress dependencies
 */
const { __ } = wp.i18n;
const { Component } = wp.element;
const { RichText, MediaPlaceholder } = wp.blockEditor;

class Editor extends Component {

    constructor() {
        super(...arguments);
    }

    renderImage() {
        const { attributes, setAttributes, isSelected } = this.props;

        const classes = classnames('wp-block-coblocks-food-item__figure', {
            'is-transient': isBlobURL(attributes.url),
            'is-selected': isSelected,
        });

        const dropZone = (
            <DropZone
                onFilesDrop={this.replaceImage}
                label={__('Drop image to replace')}
            />
        );

        return (
            <Fragment>
                <figure className={classes}>
                    {isSelected && (
                        <div className="wp-block-coblocks-food-item__remove-menu">
                            <IconButton
                                icon="no-alt"
                                onClick={() => setAttributes({ url: '' })}
                                className="coblocks-gallery-item__button"
                                label={__('Remove Image')}
                                disabled={!isSelected}
                            />
                        </div>
                    )}
                    {dropZone}
                    {isBlobURL(attributes.url) && <Spinner />}
                    <img
                        src={attributes.url}
                        alt={attributes.alt}
                        style={{
                            objectPosition: attributes.focalPoint ?
                                `${attributes.focalPoint.x * 100}% ${attributes.focalPoint.y *
                                100}%` :
                                undefined,
                        }}
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
                labels={{
                    title: ' ',
                }}
                onSelect={el => setAttributes({ url: el.url, alt: el.alt })}
            />
        );
    }

    render() {
        const { attributes, setAttributes, isSelected } = this.props;
        const { showImage, imageURL, itemTitle, description, price } = attributes;
        const allowedFormats = ['bold', 'italic'];

        return (
            <div class="wp-block-dining-dashboard-menu-item">
                {
                    !!attributes.showImage && 
                    ( attributes.imageURL ? this.renderImage() : this.renderPlaceholder() ) 
                }
                <div class="details">
                    <RichText
                        tagName="h3"
                        placeholder={__('Menu Item Title')}
                        onChange={this.onChangeTitle}
                        allowedFormats={allowedFormats}
                        value={itemTitle}
                    />
                    <RichText
                        tagName="p"
                        placeholder={__('Menu Item Description')}
                        onChange={this.onChangeDescription}
                        allowedFormats={allowedFormats}
                        value={description}
                    />
                    <div class="meta">
                        <span title="Vegetarian">
                            {DietaryIcons.Vegetarian}
                        </span>
                        <span title="Vegan">
                            {DietaryIcons.Vegan}
                        </span>
                        <span title="Gluten Free">
                            {DietaryIcons.GlutenFree}
                        </span>
                        <span class="price">
                            {price}
                        </span>
                    </div>  
                </div>  
            </div>
        );
    }


}

export default Editor;
