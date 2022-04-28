import { styled } from '../../../stitches.config';
import { Button } from '../../../styles/globalStyles';

export const Tabs = styled('ul', {
	listStyle: 'none',
	display: 'flex',
	justifyContent: 'space-around',
	borderBottom: '1px solid $darkGrey',

	'@md': {
		display: 'none',
	},
});

export const Tab = styled('li', {
	padding: 20,
	textTransform: 'uppercase',
	fontWeight: 'bold',
	cursor: 'pointer',

	variants: {
		active: {
			true: {
				borderBottom: '4px solid transparent',
			},
		},
		name: {
			mercury: {
				borderColor: '$mercury',

				a: {
					'&::before': { backgroundColor: '$mercury' },
				},
			},
			venus: {
				borderColor: '$venus',

				a: {
					'&::before': { backgroundColor: '$venus' },
				},
			},
			earth: {
				borderColor: '$earth',

				a: {
					'&::before': { backgroundColor: '$earth' },
				},
			},
			mars: {
				borderColor: '$mars',

				a: {
					'&::before': { backgroundColor: '$mars' },
				},
			},
			jupiter: {
				borderColor: '$jupiter',

				a: {
					'&::before': { backgroundColor: '$jupiter' },
				},
			},
			saturn: {
				borderColor: '$saturn',

				a: {
					'&::before': { backgroundColor: '$saturn' },
				},
			},
			uranus: {
				borderColor: '$uranus',

				a: {
					'&::before': { backgroundColor: '$uranus' },
				},
			},
			neptune: {
				borderColor: '$neptune',

				a: {
					'&::before': { backgroundColor: '$neptune' },
				},
			},
		},
	},
});

export const Container = styled('div', {
	padding: 30,
	maxWidth: 1600,
	margin: 'auto',

	'@sm': {
		width: '100%',
	},
});

export const MainInformation = styled('div', {
	display: 'flex',
	flexDirection: 'column',
	background: 'url("/images/background-stars.svg")',

	'@lg': {
		flexDirection: 'row',
	},
});

export const Group = styled('div', {
	display: 'flex',
	flexDirection: 'column',
	width: '50%',

	'@sm': {
		width: '100%',
		alignItems: 'center',

		'&:last-of-type': {
			display: 'none',
		},
	},

	'@lg': {
		width: '100%',
	},
});

export const Picture = styled('div', {
	display: 'flex',
	justifyContent: 'center',
	alignItems: 'center',
	padding: 120,
	position: 'relative',
	marginBottom: 100,

	'.image': {
		width: '100% !important',
		maxWidth: '400px !important',
		minWidth: 'unset !important',
		objectFit: 'contain',
	},

	'span:last-of-type': {
		top: 210,
	},

	'@lg': {
		width: '60%',
	},

	variants: {
		show: {
			true: {
				'.info': {
					display: 'block !important',
				},
			},
			false: {
				'.info': {
					display: 'none !important',
				},
			},
		},
	},
});

export const Info = styled('div', {
	display: 'flex',
	flexDirection: 'column',
	alignItems: 'center',

	'@md': {
		flexDirection: 'row',
	},

	'@lg': {
		flexDirection: 'column',
		width: '40%',
	},
});

export const Name = styled('h1', {
	fontSize: 60,
});

export const Description = styled('p', {
	textAlign: 'center',
	fontSize: 16,
	color: '$grey',
	padding: '20px 0',
	width: '80%',

	'@md': {
		textAlign: 'start',
		fontSize: 20,
	},
});

export const Source = styled('div', {
	padding: '20px 0',
	fontSize: 18,
	fontWeight: 500,
	display: 'flex',

	a: {
		color: '$grey',
		fontWeight: 'bold',
		display: 'flex',
		alignItems: 'center',
		marginLeft: 5,
	},
});

export const Btn = styled(Button, {
	margin: '15px 0',

	'@md': {
		fontSize: 16,
	},
});

export const MoreInformation = styled('div', {
	display: 'flex',
	flexDirection: 'column',
	padding: '40px 0',

	'@md': {
		flexDirection: 'row',
		justifyContent: 'space-between',
	},
});

export const Item = styled('div', {
	margin: '10px 0',
	padding: '20px 30px',
	border: '2px solid $darkGrey',
	display: 'flex',
	justifyContent: 'space-between',
	width: '100%',

	'@md': {
		width: 'calc(100% / 4 - 1%)',
		flexDirection: 'column',
	},
});

export const Title = styled('div', {
	textTransform: 'uppercase',
	color: '$grey',
	display: 'flex',
	alignItems: 'center',
});

export const Value = styled('h2', {
	fontSize: 30,
	fontWeight: 'bold',

	'@md': {
		fontSize: 30,
	},

	'@lg': {
		fontSize: 45,
	},
});
