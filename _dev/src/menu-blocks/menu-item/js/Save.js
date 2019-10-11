import DietaryIcons from '../../utils/DietaryIcons';
import formatPrice from './formatPrice';
/**
 * WordPress dependencies.
 */
const { RichText, InnerBlocks } = wp.blockEditor;

export default function save({ attributes }) {
    return (
        <div
            className={attributes.className}
            itemScope
            itemType="http://schema.org/MenuItem"
        >
            <div class="wp-block-dining-dashboard-menu-item">
                <div class="details">
                    <RichText.Content
                        tagName="h3"
                        className="wp-block-coblocks-food-item__heading"
                        value={attributes.itemTitle}
                        itemprop="itemTitle"
                    />
                    <RichText.Content
                        tagName="p"
                        className="wp-block-coblocks-food-item__description"
                        value={attributes.description}
                        itemprop="description"
                    />
                    {
                        (
                            !!attributes.vegetarian ||
                            !!attributes.vegan ||
                            !!attributes.glutenFree ||
                            !!attributes.price
                        ) && 
                        (
                            <div class="meta">
                                {
                                    !!attributes.vegetarian &&
                                    <span title="Vegetarian">
                                        {DietaryIcons.Vegetarian}
                                    </span>
                                }
                                {
                                    !!attributes.vegan &&
                                    <span title="Vegan">
                                        {DietaryIcons.Vegan}
                                    </span>
                                }
                                {
                                    !!attributes.glutenFree &&
                                    <span title="Gluten Free">
                                        {DietaryIcons.GlutenFree}
                                    </span>
                                }
                                {
                                    !!attributes.price &&
                                    attributes.price > 0 &&
                                    <span class="price">
                                        {
                                            formatPrice(attributes.price)
                                        }
                                    </span>
                                }
                            </div>
                        )
                    }
                </div>
            </div>
        </div>
    );
}
