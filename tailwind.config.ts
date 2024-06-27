import type { Config } from 'tailwindcss';
import animate from 'tailwindcss-animate';

const config = {
    content: [
        './**/*.{ts,tsx}'
    ],
    theme: {
        colors: {
            white: '#FFF',
            gray: {
                DEFAULT: '#cfcfcf',
                dark: '#b7b7b7',
                light: '#e9e9e9'
            },
            primary: {
                DEFAULT: '#6057FE',
                dark: '#112858'
            },
            error: '#e32323',
            input: 'hsl(var(--input))',
            ring: 'hsl(var(--ring))',
            background: 'hsl(var(--background))',
            foreground: 'hsl(var(--foreground))',
            secondary: {
                DEFAULT: 'hsl(var(--secondary))',
                foreground: 'hsl(var(--secondary-foreground))'
            },
            destructive: {
                DEFAULT: 'hsl(var(--destructive))',
                foreground: 'hsl(var(--destructive-foreground))'
            },
            muted: {
                DEFAULT: 'hsl(var(--muted))',
                foreground: 'hsl(var(--muted-foreground))'
            },
            accent: {
                DEFAULT: 'hsl(var(--accent))',
                foreground: 'hsl(var(--accent-foreground))'
            },
            popover: {
                DEFAULT: 'hsl(var(--popover))',
                foreground: 'hsl(var(--popover-foreground))'
            },
            card: {
                DEFAULT: 'hsl(var(--card))',
                foreground: 'hsl(var(--card-foreground))'
            }
        },
        transitionDuration: {
            '200': '200ms'
        },
        keyframes: {
            'fadeSlide': {
                from: {
                    opacity: '0',
                    transform: 'translateY(-10px)'
                },
                to: {
                    opacity: '1',
                    transform: 'translateY(10px)'
                }
            }
        },
        animation: {
            'fadeSlide': 'fadeSlide 0.2s both',
            'spin': 'spin 1s linear infinite'
        },
        zIndex: {
            'map-tooltip': '999'
        }
    },
    plugins: [animate]
} satisfies Config;

export default config;
