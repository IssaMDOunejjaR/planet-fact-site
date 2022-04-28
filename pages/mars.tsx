import Head from 'next/head';
import { Content } from '../components';

export default function Mars() {
	return (
		<>
			<Head>
				<title>Mars</title>
			</Head>
			<Content name="Mars" />
		</>
	);
}
