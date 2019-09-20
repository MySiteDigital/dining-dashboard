/**
 * WordPress dependencies.
 */
const { __ } = wp.i18n;
const { PanelBody, ToggleControl, TextControl } = wp.components;
const { InspectorControls } = wp.blockEditor;

const Inspector = props => {
    const { attributes, setAttributes } = props;

    return (
        <InspectorControls>
            <PanelBody title={__('Item Settings')} initialOpen={true}>
                <TextControl
                    label={'Price'}
                    value={attributes.price}
                    type={'number'}
                    min={"0"}
                    step={"0.50"}
                    onChange={price => setAttributes({ price })}
                />
                <ToggleControl
                    label={__('Vegetarian')}
                    help={
                        attributes.vegetarian ?
                            __('Show vegetarian icon for this menu item.') :
                            __('Toggle to show the vegetarian icon for this menu item.')
                    }
                    checked={attributes.vegetarian}
                    onChange={() => setAttributes({ vegetarian: !attributes.vegetarian })}
                />
                <ToggleControl
                    label={__('Vegan')}
                    help={
                        attributes.vegan ?
                            __('Show vegan icon for this menu item.') :
                            __('Toggle to show the vegan icon for this menu item.')
                    }
                    checked={attributes.vegan}
                    onChange={() => setAttributes({ vegan: !attributes.vegan })}
                />
                <ToggleControl
                    label={__('Gluten Free')}
                    help={
                        attributes.glutenFree ?
                            __('Show gluten free icon for this menu item.') :
                            __('Toggle to show the gluten free icon for this menu item.')
                    }
                    checked={attributes.glutenFree}
                    onChange={() => setAttributes({ glutenFree: !attributes.glutenFree })}
                />
            </PanelBody>
        </InspectorControls>
    );
};

export default Inspector;
