/**
 * WordPress dependencies
 */
const { __ } = wp.i18n;
const { Component, Fragment } = wp.element;
const { IconButton } = wp.components;
const { dispatch, select } = wp.data;

class Editor extends Component {

    constructor() {
        super(...arguments);
        this.insertNewItem = this.insertNewItem.bind(this);
    }

    insertNewItem() {
        const { clientId, attributes } = this.props;
        const menuItems = select('core/block-editor').getBlocksByClientId(clientId)[0].innerBlocks;
        const newMenuItem = wp.blocks.createBlock('dining-dashboard/menu-section-column', attributes);
        console.log(menuItems);
        dispatch('core/block-editor').insertBlock(newMenuItem, menuItems.length, clientId, true);

        this.forceUpdate()
    }

    render() {
        const {
            isSelected,
            clientId,
            selectedParentClientId,
        } = this.props;

        const menuItems = select('core/block-editor').getBlocksByClientId(clientId)[0].innerBlocks;
        console.log(menuItems);
        
        return (
            <Fragment>
                <div>
                    <div className="menu-items">
                        {
                            menuItems.map(
                                (item, index) => 
                                <p>
                                    {item.clientId}
                                </p>
                            )
                        }
                    </div>
                    <IconButton
                        icon="insert"
                        label={__('Add New Menu Item')}
                        labelPosition="bottom"
                        onClick={this.insertNewItem}
                    >
                        {__('Add New Menu Item')}
                    </IconButton>
                </div>
            </Fragment>
        );
    }


}

export default Editor;