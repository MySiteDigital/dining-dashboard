/**
 * WordPress dependencies.
 */
const { InnerBlocks } = wp.blockEditor;

export default function save({ attributes, className }) {
    return (
        <div className={className} itemScope itemType="http://schema.org/MenuSection">
            <InnerBlocks.Content />
        </div>
    );
}
