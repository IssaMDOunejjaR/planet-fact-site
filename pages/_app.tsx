import type { AppProps } from 'next/app';
import { Navbar } from '../components';
import { globalStyles } from '../styles/globalStyles';

function MyApp({ Component, pageProps }: AppProps) {
	return (
		<>
			{globalStyles()}
			<Navbar />
			<Component {...pageProps} />
		</>
	);
}

export default MyApp;
