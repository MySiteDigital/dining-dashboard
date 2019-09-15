import * as MenuSection from './menu-section';
import * as MenuSectionHeading from './menu-section-heading';
import * as MenuSectionColumn from './menu-section-column';
import * as MenuItem from './menu-item';

import * as foodAndDrinks from './food-and-drinks';
import * as foodItem from './food-and-drinks/food-item';

const { registerBlockType } = wp.blocks;

export function registerBlocks() {
    [
        foodAndDrinks,
        foodItem
    ].forEach(block => {
        if (!block) {
            return;
        }

        const { name,  settings } = block;

        console.log(name);
        console.log(settings);
        

        registerBlockType(`dining-dashboard/${name}`, {
            category: 'menu-blocks',
            ...settings,
        });
    });
}
registerBlocks();