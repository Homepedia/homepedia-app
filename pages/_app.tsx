import type { AppProps } from 'next/app';
import '@/style/globals.css';
import Header from '@/components/app/header';
import { memo } from 'react';

export default function App({ Component, pageProps }: AppProps) {
    const LazyHeader = memo(Header);

    return (
        <main className="bg-white h-full w-full">
            <LazyHeader />
            <Component {...pageProps} />
        </main>
    );
}
