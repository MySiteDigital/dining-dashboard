
import DietaryRequirements from './DietaryRequirements';
/**
 * WordPress dependencies.
 */
const { __ } = wp.i18n;
const { PanelBody, ToggleControl } = wp.components;
const { InspectorControls } = wp.blockEditor;

const Inspector = props => {
    const {
        attributes,
        setAttributes
    } = props;

    return (
        <InspectorControls>
            <PanelBody title={__('Intro Settings')} initialOpen={true}>
                <ToggleControl
                    label={__('Dietary Requirements Legend')}
                    help={
                        attributes.showMenuLegend ?
                            __('Dietary Requirements Legend is shown as part of the intro.') :
                            __('Dietary Requirements Legend not shown')
                    }
                    checked={attributes.showMenuLegend}
                    onChange={
                        () => {
                            setAttributes(
                                {
                                    showMenuLegend: !attributes.showMenuLegend
                                }
                            );
                        }
                    }
                />
                <ToggleControl
                    label={__('Intro Layout')}
                    help={
                        attributes.twoColumnLayout ?
                            __('Intro layout is two columns with Dietary Requirements legend shown in the second column. ') :
                            __('Intro layout is a single column with Dietary Requirements legend shown below the intro content.')
                    }
                    checked={attributes.twoColumnLayout}
                    onChange={
                        () => {
                            setAttributes(
                                {
                                    twoColumnLayout: !attributes.twoColumnLayout
                                }
                            );
                        }
                    }
                />
            </PanelBody>
            {
                !!attributes.showMenuLegend &&
                <PanelBody title={__('Legend Settings')} initialOpen={false}>
                    <ToggleControl
                        label={__('Vegetarian Icon/Description')}
                        help={
                            attributes.showVegetarianDesc ?
                                __('Show Vegetarian Icon and Description.') :
                                __('Hide Vegetarian Icon and Description.')
                        }
                        checked={attributes.showVegetarianDesc}
                        onChange={
                            () => {
                                setAttributes(
                                    {
                                        showVegetarianDesc: !attributes.showVegetarianDesc
                                    }
                                );
                            }
                        }
                    />
                    <ToggleControl
                        label={__('Vegan Icon/Description')}
                        help={
                            attributes.showVeganDesc ?
                                __('Show Vegan Icon and Description.') :
                                __('Hide Vegan Icon and Description.')
                        }
                        checked={attributes.showVeganDesc}
                        onChange={
                            () => {
                                setAttributes(
                                    {
                                        showVeganDesc: !attributes.showVeganDesc
                                    }
                                );
                            }
                        }
                    />
                    <ToggleControl
                        label={__('Gluten Free Icon/Description')}
                        help={
                            attributes.showGlutenFreeDesc ?
                                __('Show Gluten Free Icon and Description.') :
                                __('Hide Gluten Free Icon and Description.')
                        }
                        checked={attributes.showGlutenFreeDesc}
                        onChange={
                            () => {
                                setAttributes(
                                    {
                                        showGlutenFreeDesc: !attributes.showGlutenFreeDesc
                                    }
                                );
                            }
                        }
                    />
                </PanelBody>
            }
        </InspectorControls>
    );
};

export default Inspector;
