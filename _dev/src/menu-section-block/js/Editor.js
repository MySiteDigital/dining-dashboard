/**
 * external dependencies
 */
import map from 'lodash/map';
/**
 * WordPress dependencies
 */
const { __ } = wp.i18n;
const { Placeholder, ButtonGroup, Button, Tooltip } = wp.components;
const { InnerBlocks } = wp.blockEditor;
const { Component, Fragment } = wp.element;

/**
 * Internal dependencies
 */
import InspectorControls from './Inspector';
import Icons from './../../utils/Icons';
import RowIcons from './RowIcons';

const ALLOWED_BLOCKS = [
    'core/heading',
    'core/column'
];

const TEMPLATE = {
    1: [
        ['dining-dashboard/menu-section'],
        ['core/column', { width: '100' }],
    ],
    2: [
        ['dining-dashboard/menu-section'],
        ['core/column', { width: '50' }],
        ['core/column', { width: '50' }],
    ],
    3: [
        ['dining-dashboard/menu-section'],
        ['core/column', { width: '33.333' }],
        ['core/column', { width: '33.333' }],
        ['core/column', { width: '33.333' }],
    ],
    4: [
        ['dining-dashboard/menu-section'],
        ['core/column', { width: '75' }],
        ['core/column', { width: '75' }],
        ['core/column', { width: '75' }],
        ['core/column', { width: '75' }],
    ]
};

const columnOptions = [
    { columns: 1, name: __('One Column'), icon: RowIcons.colOne },
    { columns: 2, name: __('Two Columns'), icon: RowIcons.colTwo },
    { columns: 3, name: __('Three Columns'), icon: RowIcons.colThree },
    { columns: 4, name: __('Four Columns'), icon: RowIcons.colFour },
];

function getActiveColumn(columns) {
    // for ( const style of new TokenList( className ).values() ) {
    // 	if ( style.indexOf( 'is-style-' ) === -1 ) {
    // 		continue;
    // 	}

    // 	const potentialStyleName = style.substring( 9 );
    // 	const activeStyle = find( styles, { name: potentialStyleName } );

    // 	if ( activeStyle ) {
    // 		return activeStyle;
    // 	}
    // }

    // return find( styles, 'isDefault' );
}



class Editor extends Component {

    constructor() {
        super(...arguments);
    }

    updateColumns(column) {
        const { attributes, setAttributes } = this.props;

        const activeColumn = getActiveColumn(layoutOptions);
        const updatedClassName = replaceActiveColumn(
            activeColumn,
            column
        );
    }

    render() {
        const {
            attributes,
            setAttributes,
        } = this.props;

        const {
            id,
            columns
        } = attributes;

        console.log(columns);

        if (!columns) {
            return (
                <Fragment>
                    <Placeholder
                        key="placeholder"
                        icon={Icons.menu}
                        label={__('Menu Section')}
                        instructions={__('Select the number of columns for this menu section.')}
                    >
                        <ButtonGroup aria-label={__('Select Menu Section Columns')}>
                            {
                                map(columnOptions, ({ name, columns, icon }) =>
                                    (
                                        <Tooltip text={name}>
                                            <div>
                                                <Button
                                                    isLarge
                                                    onClick={
                                                        () => {
                                                            setAttributes(
                                                                {
                                                                    columns: columns,
                                                                }
                                                            );
                                                        }
                                                    }
                                                >
                                                    {icon}
                                                </Button>
                                            </div>
                                        </Tooltip>
                                    )
                                )
                            }
                        </ButtonGroup>
                    </Placeholder>
                </Fragment>
            );
        }

        return (
            <Fragment>
                <InspectorControls
                    attributes={attributes}
                    columnOptions={columnOptions}
                />
                <div>
                    <div>
                        <InnerBlocks
                            template={TEMPLATE[columns]}
                            templateLock="all"
                            allowedBlocks={ALLOWED_BLOCKS}
                            renderAppender={() => (null)} />
                    </div>
                </div>
            </Fragment>
        );

    }

}

export default Editor;