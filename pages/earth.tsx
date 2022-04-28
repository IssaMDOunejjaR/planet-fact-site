import Head from 'next/head';
import { Content } from '../components';

export default function Earth() {
	return (
		<>
			<Head>
				<title>Earth</title>
			</Head>
			<Content name="Earth" />
		</>
	);
}
