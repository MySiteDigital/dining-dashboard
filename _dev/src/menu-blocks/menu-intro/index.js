import BlockIcons from '../icons/BlockIcons';
import Editor from './js/Editor';
/**
 * WordPress dependencies
 */
const { __ } = wp.i18n;
const { registerBlockType } = wp.blocks;

registerBlockType(
    'dining-dashboard/menu-intro',
    {
        title: __('Menu Intro'),

        description: __('A introduction block for the Menu post type with optional Dietary Requirements legend area.'),

        icon: BlockIcons.MenuIntro,

        category: 'menu-blocks',

        supports: {
            align: ['wide', 'full'],
            html: false,
        },

        attributes: {
            introContent: {
                type: 'string',
                default: ""
            },
            showMenuLegend: {
                type: 'boolean',
                default: false
            },
            twoColumnLayout: {
                type: 'boolean',
                default: false
            },
            legendTitle: {
                type: 'string',
                default: "Dietary Requirements"
            },
            showVegetarianDesc: {
                type: 'boolean',
                default: true
            },
            vegetarianDescription: {
                type: 'string',
                default: "Vegetarian or vegetarian options available."
            },
            showVeganDesc: {
                type: 'boolean',
                default: true
            },
            veganDescription: {
                type: 'string',
                default: "Vegan or vegan options available."
            },
            showGlutenFreeDesc: {
                type: 'boolean',
                default: true
            },
            glutenFreeDescription: {
                type: 'string',
                default: "Gluten free or gluten free options available."
            },
        },

        edit: Editor,
    }
);
