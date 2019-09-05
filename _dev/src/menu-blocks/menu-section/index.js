import Editor from './js/Editor.js';
import Icons from '../utils/Icons';

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
        title: __('Menu Section'),

        icon: Icons.MenuSection,

        category: 'menu-blocks',

        supports: {
            align: ['wide', 'full'],
            default: "wide",
            customClassName: false
        },

        align: {
            type: "string",
            default: "full"
        },

        attributes: {
            id: {
                type: 'number',
            },
            columns: {
                type: 'number',
            },
            hasSlideToggle: {
                type: 'boolean',
                default: false
            },
            showImages: {
                type: 'boolean',
                default: true
            },
            showPrices: {
                type: 'boolean',
                default: true
            }
        },

        edit: Editor,

        save({ attributes, className }) {
            const { itemTitle } = attributes;
            return (
                <Fragment>
                    <RichText.itemTitle
                        tagName="h3"
                        className={className}
                        value={itemTitle}
                    />
                    <RichText.content
                        tagName="p"
                        className={className}
                        value={content}
                    />
                </Fragment>
            );
        },
    }
);
