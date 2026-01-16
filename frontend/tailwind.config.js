/** @type {import('tailwindcss').Config} */
export default {
    content: [
        "./index.html",
        "./src/**/*.{js,ts,jsx,tsx}",
    ],
    theme: {
        extend: {
            colors: {
                primary: {
                    50: '#f0f9ff',
                    100: '#e0f2fe',
                    200: '#bae6fd',
                    300: '#7dd3fc',
                    400: '#38bdf8',
                    500: '#0ea5e9',
                    600: '#0284c7',
                    700: '#0369a1',
                    800: '#075985',
                    900: '#0c4a6e',
                    950: '#082f49',
                },
                accent: {
                    500: '#8b5cf6', // Violet
                    600: '#7c3aed',
                },
                dark: {
                    900: '#0f172a', // Slate 900
                    950: '#020617', // Slate 950
                    800: '#1e293b',
                },
                success: '#10b981',
                warning: '#f59e0b',
                info: '#3b82f6',
                royal: '#8b5cf6',
                rose: '#f43f5e',
            },
            fontFamily: {
                sans: ['Inter', 'system-ui', 'sans-serif'],
            },
            animation: {
                'fade-in-up': 'fadeInUp 0.5s ease-out forwards',
                'pulse-slow': 'pulse 4s cubic-bezier(0.4, 0, 0.6, 1) infinite',
                'float': 'float 6s ease-in-out infinite',
                'bounce-slow': 'bounceSlow 4s ease-in-out infinite',
                'scan': 'scan 3s linear infinite',
            },
            keyframes: {
                fadeInUp: {
                    '0%': { opacity: '0', transform: 'translateY(20px)' },
                    '100%': { opacity: '1', transform: 'translateY(0)' },
                },
                float: {
                    '0%, 100%': { transform: 'translateY(0) rotate(12deg)' },
                    '50%': { transform: 'translateY(-20px) rotate(10deg)' },
                },
                bounceSlow: {
                    '0%, 100%': { transform: 'translateY(0) rotate(-6deg)' },
                    '50%': { transform: 'translateY(-15px) rotate(-8deg)' },
                },
                scan: {
                    '0%': { top: '0%' },
                    '100%': { top: '100%' },
                }
            }
        },
    },
    plugins: [],
}
