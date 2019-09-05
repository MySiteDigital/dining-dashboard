/**
 * Internal dependencies
 */
import InspectorControls from './Inspector';
import Icons from '../../utils/Icons';
import RowIcons from './RowIcons';

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

const ALLOWED_BLOCKS = [
    'dining-dashboard/menu-section-heading',
    'dining-dashboard/menu-section-column'
];

const TEMPLATE = {
    1: [
        ['dining-dashboard/menu-section-heading'],
        ['dining-dashboard/menu-section-column'],
    ],
    2: [
        ['dining-dashboard/menu-section-heading'],
        ['dining-dashboard/menu-section-column'],
        ['dining-dashboard/menu-section-column'],
    ],
    3: [
        ['dining-dashboard/menu-section-heading'],
        ['dining-dashboard/menu-section-column'],
        ['dining-dashboard/menu-section-column'],
        ['dining-dashboard/menu-section-column'],
    ],
    4: [
        ['dining-dashboard/menu-section-heading'],
        ['dining-dashboard/menu-section-column'],
        ['dining-dashboard/menu-section-column'],
        ['dining-dashboard/menu-section-column'],
        ['dining-dashboard/menu-section-column'],
    ]
};

const columnOptions = [
    { columns: 1, name: __('One Column'), icon: RowIcons.colOne },
    { columns: 2, name: __('Two Columns'), icon: RowIcons.colTwo },
    { columns: 3, name: __('Three Columns'), icon: RowIcons.colThree },
    { columns: 4, name: __('Four Columns'), icon: RowIcons.colFour },
];

const columnClasses = [
    '',
    'one-col',
    'two-cols',
    'three-cols',
    'four-cols'
];

class Editor extends Component {

    constructor() {
        super(...arguments);
    }

    render() {
        const {
            attributes,
            setAttributes,
        } = this.props;

        const {
            sectionColumns
        } = attributes;

        if (!sectionColumns) {
            return (
                <Fragment>
                    <Placeholder
                        key="placeholder"
                        icon={Icons.MenuSection}
                        label={<span>{__('Menu Section')}</span>}
                        instructions={__('Select the number of columns for this menu section.')}
                    >
                        <ButtonGroup aria-label={__('Select Menu Section Columns')}>
                            {
                                map(columnOptions, ({ name, columns, icon }) =>
                                    (
                                        <Tooltip text={name}>
                                            <Button
                                                isLarge
                                                onClick={
                                                    () => {
                                                        setAttributes(
                                                            {
                                                                sectionColumns: columns,
                                                            }
                                                        );
                                                    }
                                                }
                                            >
                                                {icon}
                                            </Button>
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
                    setAttributes={setAttributes}
                    columnOptions={columnOptions}
                />
                <div className={columnClasses[sectionColumns]}>
                    <InnerBlocks
                        template={TEMPLATE[sectionColumns]}
                        allowedBlocks={ALLOWED_BLOCKS}
                        renderAppender={() => (null)}
                    />
                </div>
            </Fragment>
        );

    }

}

export default Editor;