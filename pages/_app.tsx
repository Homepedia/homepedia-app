import type { AppProps } from 'next/app';
import '@/style/globals.css';
import Header from '@/components/app/header';

export default function MyApp({ Component, pageProps }: AppProps) {
    return (
        <main className="h-screen">
            <Header />
            <Component {...pageProps} />
        </main>
    );
}