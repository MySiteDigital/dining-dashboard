import Editor from './js/Editor.js';
import Icons from '../utils/Icons';
/**
 * WordPress dependencies
 */
const { __ } = wp.i18n;
const { registerBlockType } = wp.blocks;
const { RichText } = wp.editor;


registerBlockType(
    'dining-dashboard/menu-section-column',
    {
        title: __('Section Column'),

        description: __('A column within a menu section'),

        icon: Icons.MenuSectionColumn,

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

        supports: {
            inserter: false,
        },

        edit: Editor,

        save({ attributes, className }) {
            const { sectionTitle } = attributes;

            return (
                <RichText.sectionTitle
                    tagName="h3"
                />
            );
        }
    }
);
