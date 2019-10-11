import DietaryIcons from '../../utils/DietaryIcons';
/**
 * WordPress dependencies
 */
const { RichText } = wp.blockEditor;
const { Component, Fragment } = wp.element;
const { __ } = wp.i18n;

class DietaryRequirements extends Component {

    constructor() {
        super(...arguments);
    }

    render() {
        const {
            attributes,
            setAttributes,
        } = this.props;


        const formatControls = ['core/bold', 'core/italic'];

        return (
            <Fragment>
                <RichText
                    value={attributes.legendTitle}
                    tagName="h4"
                    placeholder={__('Legend Title')}
                    onChange={(legendTitle) => setAttributes({ legendTitle })}
                    allowedFormats={formatControls}
                />
                {
                    !!attributes.showVegetarianDesc &&
                    <Fragment>
                        <span title="Vegetarian">
                            {DietaryIcons.Vegetarian}
                        </span>
                        <RichText
                            value={attributes.vegetarianDescription}
                            tagName="span"
                            placeholder={__('Vegetarian Description')}
                            onChange={(vegetarianDescription) => setAttributes({ vegetarianDescription })}
                            allowedFormats={formatControls}
                        />
                    </Fragment>
                }
                {
                    !!attributes.showVeganDesc &&
                    <Fragment>
                        <span title="Vegan">
                            {DietaryIcons.Vegan}
                        </span>
                        <RichText
                            value={attributes.veganDescription}
                            tagName="span"
                            placeholder={__('Vegan Description')}
                            onChange={(veganDescription) => setAttributes({ veganDescription })}
                            allowedFormats={formatControls}
                        />
                    </Fragment>
                }
                {
                    !!attributes.showGlutenFreeDesc &&
                    <Fragment>
                        <span title="Gluten Free">
                            {DietaryIcons.GlutenFree}
                        </span>
                        <RichText
                            value={attributes.glutenFreeDescription}
                            tagName="span"
                            placeholder={__('Gluten Free Description')}
                            onChange={(glutenFreeDescription) => setAttributes({ glutenFreeDescription })}
                            allowedFormats={formatControls}
                        />
                    </Fragment>
                }
            </Fragment>
        );

    }

}

export default DietaryRequirements;