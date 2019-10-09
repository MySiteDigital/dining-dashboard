/**
 * WordPress dependencies.
 */
const { __ } = wp.i18n;
const { IconButton } = wp.components;

const AlignmentText = () => {

    const alignInstructionsHeading = __('Alignment Recommendations.');
    const alignInstructions = __('"Wide Width" alignment is recommended when selecting three columns and "Full Width" alignment is recommended when selecting four columns.');

    return (
        <p>
            <h3>{alignInstructionsHeading}</h3>
            {alignInstructions}
        </p>    
    );
};

export default AlignmentText;
