/**
 * Internal dependencies.
 */
import CustomAppender from './CustomAppender';

/**
 * WordPress dependencies
 */
const { Component, Fragment } = wp.element;
const { InnerBlocks } = wp.blockEditor;
const { dispatch, select } = wp.data;

const ALLOWED_BLOCKS = ['core/paragraph'];
//const ALLOWED_BLOCKS = ['dining-dashboard/menu-item'];

const TEMPLATE = [
    ['core/paragraph'],
];

class Editor extends Component {

    constructor() {
        super(...arguments);
        this.insertNewItem = this.insertNewItem.bind(this);
    }

    insertNewItem() {
        const { clientId, attributes } = this.props;

        const blockOrder = select('core/block-editor').getBlockOrder();
        const insertAtIndex = blockOrder.indexOf(clientId) + 1;

        console.log(attributes);

        console.log('blockOrder');

        console.log(blockOrder);
        console.log(insertAtIndex);


        const innerBlocks = TEMPLATE.map(
            ([blockName, blockAttributes]) => (
                wp.blocks.createBlock(
                    blockName,
                    Object.assign(
                        {},
                        blockAttributes,
                        {
                            showImage: attributes.showImages,
                            showPrice: attributes.showPrices,
                        }
                    )
                )
            )
        );

        console.log(innerBlocks);

        const newItem = wp.blocks.createBlock(
            'dining-dashboard/menu-section-column',
            attributes,
            innerBlocks
        );


        console.log(newItem);

        dispatch('core/block-editor').insertBlock(newItem, insertAtIndex);
    }

    render() {
        const {
            isSelected,
            clientId,
            selectedParentClientId,
        } = this.props;

        return (
            <Fragment>
                <div>
                    <InnerBlocks
                        allowedBlocks={ALLOWED_BLOCKS}
                        template={TEMPLATE}
                        templateInsertUpdatesSelection={false}
                    />
                    <CustomAppender
                        onClick={this.insertNewItem}
                    />
                </div>
            </Fragment>
        );
    }


}

export default Editor;