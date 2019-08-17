
/**
 * Import internal dependencies
 */
import './scss/style.scss';

/**
 * Get WordPress libraries from the wp global
 */
 const { __ } = wp.i18n;
 const { registerBlockType } = wp.blocks;
 const { RichText, MediaUpload, InspectorControls } = wp.editor;
 const { Component, Fragment } = wp.element;
 const el = wp.element.createElement;

registerBlockType(
    'dining-dashboard/menu-section',
    {
        title: __( 'Menu Section' ),
        category: 'menu-blocks',
        supports: {
            html: true, 
            customClassName: false
        },
        attributes: {
            itemTitle: {
              type: 'string',
            },
            content: {
               type: 'array',
               source: 'children',
               selector: 'p',
            }
        },

        edit: Editor,

        save( { attributes, className } ) {
            const { itemTitle } = attributes;

            return (
                <Fragment>
                    <RichText.itemTitle
                        tagName="h3"
                        className={ className }
                        value={ itemTitle }
                    />
                    <RichText.content
                        tagName="p"
                        className={ className }
                        value={ content }
                    />
                </Fragment>
            );
        },
    }
);
