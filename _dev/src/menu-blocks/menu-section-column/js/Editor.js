/**
 * WordPress dependencies
 */
const { __ } = wp.i18n;
const { Component, Fragment } = wp.element;
const { InnerBlocks } = wp.blockEditor;
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
        const newMenuItem = wp.blocks.createBlock('dining-dashboard/menu-item', attributes);
        
        dispatch('core/block-editor').insertBlock(newMenuItem, menuItems.length, clientId, true);
    }

    render() {
        const {
            clientId,
        } = this.props;

        const menuItems = select('core/block-editor').getBlocksByClientId(clientId)[0].innerBlocks;

        if(!menuItems.length){
            this.insertNewItem();
        }

        return (
            <Fragment>
                <div>
                    <InnerBlocks
                        template={menuItems}
                        allowedBlocks={['dining-dashboard/menu-item']}
                        renderAppender={() => (null)}
                    />
                    <IconButton
                        icon="insert"
                        label={__('Add New Menu Item')}
                        className="add-new-menu-item"
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
