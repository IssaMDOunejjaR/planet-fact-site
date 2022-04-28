import Link from 'next/link';
import { SetStateAction, useState, Dispatch } from 'react';
import { useRouter } from 'next/router';
import { Container, Brand, MenuButton, Links, Item } from './styles/navbar';
import { GiHamburgerMenu } from 'react-icons/gi';
import { MdKeyboardArrowRight } from 'react-icons/md';

const NavLink = ({
	name,
	setActive,
}: {
	name: string;
	setActive: (val: boolean) => Dispatch<SetStateAction<boolean>>;
}) => {
	const { pathname } = useRouter();

	return (
		<Item
			active={pathname === '/' + name.toLowerCase()}
			name={name.toLowerCase()}
		>
			<Link href={'/' + name.toLowerCase()}>
				<a onClick={() => setActive(false)}>
					{name}
					<MdKeyboardArrowRight />
				</a>
			</Link>
		</Item>
	);
};

export default function Navbar() {
	const [active, setActive] = useState(false);

	return (
		<Container>
			<Brand>The Planets</Brand>
			<MenuButton onClick={() => setActive((active) => !active)}>
				<GiHamburgerMenu />
			</MenuButton>
			<Links active={active}>
				<NavLink name="Mercury" setActive={setActive} />
				<NavLink name="Venus" setActive={setActive} />
				<NavLink name="Earth" setActive={setActive} />
				<NavLink name="Mars" setActive={setActive} />
				<NavLink name="Jupiter" setActive={setActive} />
				<NavLink name="Saturn" setActive={setActive} />
				<NavLink name="Uranus" setActive={setActive} />
				<NavLink name="Neptune" setActive={setActive} />
			</Links>
		</Container>
	);
}
