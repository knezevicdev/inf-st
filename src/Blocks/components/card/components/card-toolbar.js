import React from 'react';
import { Fragment } from '@wordpress/element';
import { ImageToolbar } from '../../../components/image/components/image-toolbar';
import { HeadingToolbar } from '../../../components/heading/components/heading-toolbar';
import { ParagraphToolbar } from '../../../components/paragraph/components/paragraph-toolbar';
import { ButtonToolbar } from '../../../components/button/components/button-toolbar';

export const CardToolbar = (attributes) => {
	const {
		setAttributes,
	} = attributes;

	return (
		<Fragment>

			<ImageToolbar
				{...attributes}
				setAttributes={setAttributes}
			/>

			<HeadingToolbar
				{...attributes}
				componentName={'intro'}
				headingAlign={attributes.introAlign}
				headingLevel={attributes.introLevel}
				setAttributes={setAttributes}
			/>

			<HeadingToolbar
				{...attributes}
				setAttributes={setAttributes}
			/>

			<ParagraphToolbar
				{...attributes}
				setAttributes={setAttributes}
			/>

			<ButtonToolbar
				{...attributes}
				setAttributes={setAttributes}
			/>
		</Fragment>
	);
};
