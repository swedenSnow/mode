import type { Config } from 'tailwindcss';

const config = {
    content: [
        './pages/**/*.{js,ts,jsx,tsx,mdx}',
        './components/**/*.{js,ts,jsx,tsx,mdx}',
        './app/**/*.{js,ts,jsx,tsx,mdx}',
    ],
    theme: {
        extend: {
            fontFamily: {
                sans: ['var(--font-inter)', 'system-ui', 'sans-serif'],
            },
            colors: {
                background: 'var(--background)',
                foreground: 'var(--foreground)',
                primary: {
                    50: '#faf5ff',
                    100: '#f3e8ff',
                    200: '#e9d5ff',
                    300: '#d8b4fe',
                    400: '#c084fc',
                    500: '#a855f7',
                    600: '#9333ea',
                    700: '#7e22ce',
                    800: '#6b21a8',
                    900: '#581c87',
                    950: '#3b0764',
                },
                dark: {
                    base: '#121212',
                    elevated: '#1A1A1A',
                    high: '#222222',
                    border: {
                        subtle: '#2A2A2A',
                        default: '#333333',
                        medium: '#444444',
                        strong: '#555555',
                    },
                },
            },
            boxShadow: {
                mode: '0 1px 3px 0 rgba(0, 0, 0, 0.1), 0 1px 2px -1px rgba(0, 0, 0, 0.1)',
            },
            keyframes: {
                synthwaveGlitch: {
                    '0%': { transform: 'translate(0)' },
                    '20%': { transform: 'translate(-2px, 2px)' },
                    '40%': { transform: 'translate(-2px, -2px)' },
                    '60%': { transform: 'translate(2px, 2px)' },
                    '80%': { transform: 'translate(2px, -2px)' },
                    '100%': { transform: 'translate(0)' },
                },
            },
            animation: {
                synthWaveGlitch:
                    '0.4s cubic-bezier(0.25, 0.46, 0.45, 0.94) infinite',
            },
        },
    },
    plugins: [],
    darkMode: 'media',
} satisfies Config;

export default config;
