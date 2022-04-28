import { createStitches } from '@stitches/react';

export const { styled, getCssText, globalCss, css } = createStitches({
	theme: {
		fonts: {
			antonio: '"Antonio", sans-serif',
			spartan: '"League Spartan", sans-serif',
		},
		colors: {
			white: '#ffffff',
			darkBlue: '#070724',
			darkGrey: '#38384f',
			grey: '#838391',
			mercury: '#419ebb',
			venus: '#eda249',
			earth: '#6f2ed6',
			mars: '#d14c32',
			jupiter: '#d83a34',
			saturn: '#cd5120',
			uranus: '#1ec2a4',
			neptune: '#2d68f0',
		},
	},
	media: {
		sm: '(max-width: 779px)',
		md: '(min-width: 780px)',
		lg: '(min-width: 1000px)',
	},
});
