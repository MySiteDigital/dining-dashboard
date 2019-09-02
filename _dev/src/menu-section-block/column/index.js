/**
 * WordPress dependencies
 */
const { __ } = wp.i18n;
const { registerBlockType } = wp.blocks;
const { RichText } = wp.editor;

import Editor from './js/Editor.js';


registerBlockType(
    'dining-dashboard/menu-section-column',
    {
        title: __('Section Column'),

        description: __('A column within a menu section'),

        category: 'menu-blocks',

        attributes: {
            width: {
                type: 'string',
            },
            showInserter: {
                type: 'boolean',
                default: true,
            }
        },

        parent: ['dining-dashboard/menu-section'],

        supports: {
            inserter: false,
        },

        edit: Editor,

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
    }
);
