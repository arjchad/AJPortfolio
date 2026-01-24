import '../styles/globals.css'
import '../styles/animations.css'
import { useEffect } from 'react';
import { LenisSetup } from '../lib/lenis';

export default function MyApp({ Component, pageProps }) {
    useEffect(() => {
        // Initialize Lenis for smooth scrolling
        LenisSetup();
    }, []);

    return <Component {...pageProps} />
}
