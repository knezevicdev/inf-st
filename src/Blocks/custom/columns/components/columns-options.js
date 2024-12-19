import React from 'react';
import { __ } from '@wordpress/i18n';
import { Fragment } from '@wordpress/element';
import { PanelBody, Icon, RangeControl } from '@wordpress/components';
import { Responsive, HelpModal } from '@eightshift/frontend-libs/scripts/components';
import { icons, ucfirst } from '@eightshift/frontend-libs/scripts/editor';
import manifest from './../manifest.json';

const { attributes: reset, options } = manifest;

export const ColumnsOptions = ({ attributes, setAttributes }) => {
	const gutter = [
		attributes.gutterLarge,
		attributes.gutterDesktop,
		attributes.gutterTablet,
		attributes.gutterMobile,
	];

	const verticalSpacing = [
		attributes.verticalSpacingLarge,
		attributes.verticalSpacingDesktop,
		attributes.verticalSpacingTablet,
		attributes.verticalSpacingMobile,
	];

	return (
		<PanelBody title={__('Columns Details', 'Infinium')}>

			<HelpModal
				type="columns"
				buttonLabel={__('How to use columns?', 'Infinium')}
				modalLabel={__('Columns', 'Infinium')}
			/>

			<br /><br />

			<Responsive
				label={
					<Fragment>
						<Icon icon={icons.containerWidth} />
						{__('Gutter', 'Infinium')}
					</Fragment>
				}
			>
				{gutter.map((item, index) => {

					const point = ucfirst(options.breakpoints[index]);
					const attr = `gutter${point}`;

					return (
						<Fragment key={index}>
							<RangeControl
								label={point}
								allowReset={true}
								value={attributes[attr]}
								onChange={(value) => setAttributes({ [attr]: value })}
								min={options.gutters.min}
								max={options.gutters.max}
								step={options.gutters.step}
								resetFallbackValue={reset[attr].default}
							/>
						</Fragment>
					);
				})}
			</Responsive>

			<Responsive
				label={
					<Fragment>
						<Icon icon={icons.containerHeight} />
						{__('Vertical Spacing', 'Infinium')}
					</Fragment>
				}
			>
				{verticalSpacing.map((item, index) => {

					const point = ucfirst(options.breakpoints[index]);
					const attr = `verticalSpacing${point}`;

					return (
						<Fragment key={index}>
							<RangeControl
								label={point}
								allowReset={true}
								value={attributes[attr]}
								onChange={(value) => setAttributes({ [attr]: value })}
								min={options.gutters.min}
								max={options.gutters.max}
								step={options.gutters.step}
								resetFallbackValue={reset[attr].default}
							/>
						</Fragment>
					);
				})}
			</Responsive>
		</PanelBody>
	);
};
