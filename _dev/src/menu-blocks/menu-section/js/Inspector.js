import AlignmentText from './AlignmentText';
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

const Inspector = props => {
	const {
		attributes,
		setAttributes,
		columnOptions,
	} = props;

	const {
		sectionColumns
	} = attributes;

	//for a future version
	const columnsPanel = 
		<PanelBody title={__('Columns')} initialOpen={true}>
			<ButtonGroup aria-label={__('Select Columns')} class="menu-section-inspector-columns">
				{
					map(
						columnOptions, ({ name, columns, icon }) => (
							<Tooltip text={name}>
								<Button
									isSmall
									className={(columns === sectionColumns) ? 'is-selected' : 'test'}
									onClick={
										() => {
											setAttributes(
												{
													sectionColumns: columns,
												}
											);
										}
									}
								>
									{icon}
								</Button>
							</Tooltip>
						)
					)
				}
			</ButtonGroup>
		</PanelBody>

	return (
		<InspectorControls>
			<PanelBody title={__('Section Settings')} initialOpen={true}>
				<ToggleControl
					label={__('Slide Toggle')}
					help={
						attributes.hasSlideToggle ?
						__('Menu Items in this section are initially hidden and open via Slide Toggle') :
						__('Menu Items in this section are always shown') 
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
				<AlignmentText/>
			</PanelBody>
		</InspectorControls>
	);
};

export default Inspector;
