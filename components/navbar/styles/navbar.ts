import { styled } from '../../../stitches.config';

export const Container = styled('div', {
	display: 'flex',
	justifyContent: 'space-between',
	borderBottom: '1px solid $darkGrey',
	position: 'relative',

	'@md': {
		flexDirection: 'column',
		alignItems: 'center',
	},

	'@lg': {
		flexDirection: 'row',
	},
});

export const Brand = styled('div', {
	textTransform: 'uppercase',
	fontSize: 28,
	letterSpacing: -2.6,
	fontWeight: '500',
	display: 'flex',
	alignItems: 'center',
	padding: '30px 20px',

	'@lg': {
		paddingTop: 0,
		paddingBottom: 0,
	},
});

export const MenuButton = styled('span', {
	fontSize: 25,
	cursor: 'pointer',
	display: 'flex',
	alignItems: 'center',
	margin: '0 25px',

	'@md': {
		display: 'none',
	},
});

export const Links = styled('ul', {
	listStyle: 'none',
	alignItems: 'center',
	position: 'absolute',
	display: 'flex',
	flexDirection: 'column',
	left: 0,
	top: 87,
	zIndex: 9999,
	backgroundColor: '$darkBlue',

	'@sm': {
		padding: '20px 0',
		width: '100%',
		transition: 'transform .3s ease',
	},

	'@md': {
		position: 'static',
		flexDirection: 'row',
	},

	variants: {
		active: {
			false: {
				'@sm': {
					transform: 'translateX(-100%)',
				},
			},
			true: {
				'@sm': {
					transform: 'translateX(0)',
				},
			},
		},
	},
});

export const Item = styled('li', {
	padding: '30px 0',

	a: {
		textDecoration: 'none',
		color: '$white',
		textTransform: 'uppercase',
		fontWeight: 'bold',
		display: 'flex',
		alignItems: 'center',

		'&::before': {
			content: '',
			display: 'block',
			background: 'red',
			width: 20,
			height: 20,
			borderRadius: '50%',
			marginRight: 25,

			'@md': {
				display: 'none',
			},
		},

		svg: {
			marginLeft: 'auto',
			color: '$darkGrey',
			fontSize: 20,
		},

		'@md': {
			padding: '0 20px',
		},
	},

	'@sm': {
		borderBottom: '1px solid $darkGrey',
		width: '90%',

		'&:last-of-type': {
			borderBottom: 'none',
		},
	},

	'@md': {
		svg: {
			display: 'none',
		},

		'&:first-of-type': {
			paddingLeft: 0,
		},
	},
});
