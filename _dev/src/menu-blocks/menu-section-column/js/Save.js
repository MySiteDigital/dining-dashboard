/**
 * WordPress dependencies.
 */
const { InnerBlocks } = wp.blockEditor;

export default function save({ attributes, className }) {
    return (
        <InnerBlocks.Content />
    );
}
