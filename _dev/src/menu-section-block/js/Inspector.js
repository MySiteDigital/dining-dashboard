/**
 * External dependencies
 */
import map from 'lodash/map';

/**
 * WordPress dependencies.
 */
const { __ } = wp.i18n;
const { PanelBody, ToggleControl, ButtonGroup, Button, Tooltip } = wp.components;
const { InspectorControls } = wp.blockEditor;
const { ENTER, SPACE } = wp.keycodes;

const Inspector = props => {
	const {
		attributes,
		setAttributes,
		columnOptions,
		onToggleSlideToggle,
		onToggleImages,
		onTogglePrices
	} = props;

	return (
		<InspectorControls>
			<PanelBody title={__('Columns')} initialOpen={true}>
				<ButtonGroup aria-label={__('Select Columns')}>
					{
						map(
							columnOptions, ({ name, columns, icon }) => (
								<Tooltip text={name}>
									<div >
										<Button
											isSmall
											onClick={
												() => {
													setAttributes(
														{
															columns: columns,
														}
													);
												}
											}
										>
											{icon}
										</Button>
									</div>
								</Tooltip>
							)
						)
					}
				</ButtonGroup>
			</PanelBody>

			<PanelBody title={__('Section Settings')} initialOpen={true}>
				<ToggleControl
					label={__('Slide Toggle')}
					help={
						attributes.hasSlideToggle ?
							__('Menu Section has Slide Toggle display?') :
							__('Set Slide Toggle settings for this Menu Section')
					}
					checked={attributes.hasSlideToggle}
					onChange={
						() => {
							setAttributes(
								{
									hasSlideToggle: !attributes.hasSlideToggle
								}
							);
						}
					}
				/>
				<ToggleControl
					label={__('Images')}
					help={
						attributes.showImages ?
							__('Showing images for each item') :
							__('Toggle to show images for each item.')
					}
					checked={attributes.showImages}
					onChange={
						() => {
							setAttributes(
								{
									showImages: !attributes.showImages
								}
							);
						}
					}
				/>
				<ToggleControl
					label={__('Prices')}
					help={
						attributes.showPrices ?
							__('Showing the price of each item') :
							__('Toggle to show the price of each item.')
					}
					checked={attributes.showPrices}
					onChange={
						() => {
							setAttributes(
								{
									showPrices: !attributes.showPrices
								}
							);
						}
					}
				/>
			</PanelBody>
		</InspectorControls>
	);
};

export default Inspector;
