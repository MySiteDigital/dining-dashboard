/**
 * External dependencies.
 */
import { noop } from 'lodash';

/**
 * WordPress dependencies.
 */
const { __ } = wp.i18n;
const { IconButton } = wp.components;

const CustomAppender = ({ onClick = noop }) => {
    return (
        <div>
            <IconButton
                icon="insert"
                label={__('Add New Menu Item')}
                labelPosition="bottom"
                onClick={onClick}
            >
                {__('Add New Menu Item')}
            </IconButton>
        </div>
    );
};

export default CustomAppender; 