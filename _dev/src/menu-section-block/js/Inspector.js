/**
 * WordPress dependencies.
 */
const { __ } = wp.i18n;
const { PanelBody, ToggleControl } = wp.components;
const { InspectorControls } = wp.blockEditor;
const { ENTER, SPACE } = wp.keycodes;

const Inspector = props => {
	const {
		attributes,
		columnOptions,
		onToggleSlideToggle,
		onToggleImages,
		onTogglePrices,
		onUpdateColumns,
	} = props;

	return (
		<InspectorControls>
			<PanelBody title={ __( 'Columns' ) } initialOpen={ true }>
				<div className="editor-block-styles block-editor-block-styles coblocks-editor-block-styles">
					{ columnOptions.map( column => (
						<div
							key={ `style-${ column.name }` }
							onClick={ () => onUpdateColumns( column ) }
							onKeyDown={ event => {
								if ( ENTER === event.keyCode || SPACE === event.keyCode ) {
									event.preventDefault();
									onUpdateColumns( column );
								}
							} }
							role="button"
							tabIndex="0"
							aria-label={ column.label || column.name }
						>
							<div className="editor-block-styles__item-preview block-editor-block-styles__item-preview">
								{ attributes.showImages ? column.iconWithImages : column.icon }
							</div>
							<div className="editor-block-styles__item-label block-editor-block-styles__item-label">
								{ column.label || column.name }
							</div>
						</div>
					) ) }
				</div>
			</PanelBody>

			<PanelBody title={ __( 'Section Settings' ) } initialOpen={ true }>
				<ToggleControl
					label={ __( 'Slide Toggle' ) }
					help={
						attributes.showImages ?
							__( 'Menu Section has Slide Toggle display?' ) :
							__( 'Set Slide Toggle settings for this Menu Section' )
					}
					checked={ attributes.hasSlideToggle }
					onChange={ onToggleSlideToggle }
				/>
				<ToggleControl
					label={ __( 'Images' ) }
					help={
						attributes.showImages ?
							__( 'Showing images for each item' ) :
							__( 'Toggle to show images for each item.' )
					}
					checked={ attributes.showImages }
					onChange={ onToggleImages }
				/>
				<ToggleControl
					label={ __( 'Prices' ) }
					help={
						attributes.showPrices ?
							__( 'Showing the price of each item' ) :
							__( 'Toggle to show the price of each item.' )
					}
					checked={ attributes.showPrices }
					onChange={ onTogglePrices }
				/>
			</PanelBody>
		</InspectorControls>
	);
};

export default Inspector;
