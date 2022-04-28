import { globalCss, styled } from '@stitches/react';

export const globalStyles = globalCss({
	'*': {
		margin: 0,
		padding: 0,
		boxSizing: 'border-box',
	},

	'::-webkit-scrollbar': {
		width: 8,
		borderRadius: 20,
	},

	'::-webkit-scrollbar-track': {
		background: '$darkGrey',
	},

	'::-webkit-scrollbar-thumb': {
		background: '#888',

		'&:hover': {
			background: '#555',
		},
	},

	body: {
		fontFamily: '$spartan',
		background: '$darkBlue',
		fontSize: 16,
		color: '$white',
		height: '100vh',
	},

	'h1, h2': {
		fontFamily: '$antonio',
	},

	h1: {
		fontSize: 80,
		lineHeight: '103px',
		fontWeight: '500',
	},

	h2: {
		fontSize: 40,
		lineHeight: '52px',
		letterSpacing: -1.5,
		fontWeight: '500',
	},

	h3: {
		fontSize: 12,
		lineHeight: '25px',
		letterSpacing: 2.6,
		fontWeight: 'bold',
	},

	h4: {
		fontSize: 11,
		lineHeight: '25px',
		letterSpacing: 1,
		fontWeight: 'bold',
	},

	p: {
		fontSize: 14,
		lineHeight: '25px',
	},

	'#__next': {
		height: '100%',
	},
});

export const Button = styled('button', {
	width: '100%',
	padding: '15px 25px',
	color: '$white',
	border: '1px solid $darkGrey',
	display: 'flex',
	textTransform: 'uppercase',
	fontWeight: 'bold',
	background: 'transparent',
	cursor: 'pointer',
	transition: 'background .3s ease',
	fontSize: 12,

	span: {
		color: '$grey',
		marginRight: 25,
	},

	'&:hover': {
		background: '$darkGrey',
	},

	'&:hover, &:focus, &:active': {
		outline: 'none',
	},
});
