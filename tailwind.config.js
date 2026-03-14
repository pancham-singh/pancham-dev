// tailwind.config.js
/** @type {import('tailwindcss').Config} */
module.exports = {
    content: [
        './pages/**/*.{js,ts,jsx,tsx,mdx}',
        './components/**/*.{js,ts,jsx,tsx,mdx}',
        './app/**/*.{js,ts,jsx,tsx,mdx}',
    ],
    theme: {
        extend: {
            colors: {
                ocean: {
                    50: '#eff6ff',
                    100: '#dbeafe',
                    200: '#bfdbfe',
                    300: '#93c5fd',
                    400: '#60a5fa',
                    500: '#3b82f6',
                    600: '#2563eb',
                    700: '#1d4ed8',
                    800: '#1e40af',
                    900: '#1e3a8a',
                    950: '#172554',
                },
                code: {
                    dark: '#0a0c10',
                    light: '#1e1e2e',
                    accent: '#569cd6',
                    green: '#6a9955',
                    orange: '#ce9178',
                    yellow: '#dcdcaa',
                    purple: '#c586c0',
                }
            },
            animation: {
                'float': 'float 6s ease-in-out infinite',
                'pulse-slow': 'pulse 4s cubic-bezier(0.4, 0, 0.6, 1) infinite',
                'matrix': 'matrix 20s linear infinite',
                'code-rain': 'codeRain 10s linear infinite',
                'glow': 'glow 2s ease-in-out infinite alternate',
            },
            keyframes: {
                float: {
                    '0%, 100%': { transform: 'translateY(0px) rotate(0deg)' },
                    '50%': { transform: 'translateY(-20px) rotate(2deg)' },
                },
                matrix: {
                    '0%': { transform: 'translateY(-100%)' },
                    '100%': { transform: 'translateY(100%)' },
                },
                codeRain: {
                    '0%': { opacity: 0, transform: 'translateY(-20px)' },
                    '50%': { opacity: 1 },
                    '100%': { opacity: 0, transform: 'translateY(20px)' },
                },
                glow: {
                    '0%': { textShadow: '0 0 5px #3b82f6, 0 0 10px #3b82f6' },
                    '100%': { textShadow: '0 0 10px #60a5fa, 0 0 20px #60a5fa, 0 0 30px #60a5fa' },
                },
            },
            backgroundImage: {
                'gradient-radial': 'radial-gradient(var(--tw-gradient-stops))',
                'code-pattern': "url(\"data:image/svg+xml,%3Csvg width='60' height='60' viewBox='0 0 60 60' xmlns='http://www.w3.org/2000/svg'%3E%3Cpath d='M20 20 L40 20 L30 40 Z' fill='%233b82f6' opacity='0.1'/%3E%3C/svg%3E\")",
            },
        },
    },
    plugins: [],
}