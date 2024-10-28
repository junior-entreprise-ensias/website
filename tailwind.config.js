/** @type {import('tailwindcss').Config} */
module.exports = {
    darkMode: ["class"],
    content: [
    "./app/**/*.{js,ts,jsx,tsx,mdx}",
    "./pages/**/*.{js,ts,jsx,tsx,mdx}",
    "./components/**/*.{js,ts,jsx,tsx,mdx}",

    // Or if using `src` directory:
    "./src/**/*.{js,ts,jsx,tsx,mdx}",
  ],
  theme: {
  	colors: {
  		transparent: 'transparent',
  		current: 'currentColor',
  		white: '#ffffff',
  		black: '#000000',
  		red: '#d80c0c',
  		lightred: '#FFD6D6',
  		lightgrey: '#e4aeae',
  		navyred: '#340000',
  		beach: '#c18e8e',
  		circlebg: 'rgba(77, 213, 143, 0.25)',
  		darkred: '#210000',
  		offwhite: 'rgba(255, 255, 255, 0.75);',
  		bordertop: 'rgba(196, 196, 196, 0.5);',
  		'red-500': '#cb0000',
  		darkgray: '#b49090',
  		babyred: '#f9e2e2',
  		grey500: '#ECECEC',
  		redgray: '#a17d7d',
  		redgrey: '#9e7c7c',
  		midnightred: '#891212',
  		midred: '#820101',
  		redbg: 'rgba(227, 47, 47, 0.2)',
  		border: 'rgba(137, 128, 128, 0.35)',
  		cinnabar: {
  			'50': '#fff1f1',
  			'100': '#ffdfdf',
  			'200': '#ffc5c5',
  			'300': '#ff9d9d',
  			'400': '#ff6665',
  			'500': '#ff3534',
  			'600': '#ee2827',
  			'700': '#c70f0e',
  			'800': '#a5100f',
  			'900': '#881514',
  			'950': '#4a0505'
  		}
  	},
  	fontSize: {
  		xs: ["0.75rem", { lineHeight: "1rem" }],
  		sm: ["0.875rem", { lineHeight: "1.25rem" }],
  		base: ["1rem", { lineHeight: "1.5rem" }],
  		lg: ["1.125rem", { lineHeight: "1.75rem" }],
  		xl: ["1.25rem", { lineHeight: "1.75rem" }],
  		'2xl': ["1.5rem", { lineHeight: "2rem" }],
  		'3xl': ["1.875rem", { lineHeight: "2.25rem" }],
  		'4xl': ["2.25rem", { lineHeight: "2.5rem" }],
  		'5xl': ["3rem", { lineHeight: "1" }],
  		'6xl': ["3.75rem", { lineHeight: "1" }],
  		'7xl': ["4.5rem", { lineHeight: "1" }],
  		'8xl': ["6rem", { lineHeight: "1" }],
  		'9xl': ["8rem", { lineHeight: "1" }],
  		'65xl': ["65px", { lineHeight: "1" }],
  		'80xl': ["80px", { lineHeight: "6rem" }]
  	},
  	extend: {
  		borderRadius: {
  			lg: 'var(--radius)',
  			md: 'calc(var(--radius) - 2px)',
  			sm: 'calc(var(--radius) - 4px)'
  		},
  		colors: {
  			background: 'hsl(var(--background))',
  			foreground: 'hsl(var(--foreground))',
  			card: {
  				DEFAULT: 'hsl(var(--card))',
  				foreground: 'hsl(var(--card-foreground))'
  			},
  			popover: {
  				DEFAULT: 'hsl(var(--popover))',
  				foreground: 'hsl(var(--popover-foreground))'
  			},
  			primary: {
  				DEFAULT: 'hsl(var(--primary))',
  				foreground: 'hsl(var(--primary-foreground))'
  			},
  			secondary: {
  				DEFAULT: 'hsl(var(--secondary))',
  				foreground: 'hsl(var(--secondary-foreground))'
  			},
  			muted: {
  				DEFAULT: 'hsl(var(--muted))',
  				foreground: 'hsl(var(--muted-foreground))'
  			},
  			accent: {
  				DEFAULT: 'hsl(var(--accent))',
  				foreground: 'hsl(var(--accent-foreground))'
  			},
  			destructive: {
  				DEFAULT: 'hsl(var(--destructive))',
  				foreground: 'hsl(var(--destructive-foreground))'
  			},
  			border: 'hsl(var(--border))',
  			input: 'hsl(var(--input))',
  			ring: 'hsl(var(--ring))',
  			chart: {
  				'1': 'hsl(var(--chart-1))',
  				'2': 'hsl(var(--chart-2))',
  				'3': 'hsl(var(--chart-3))',
  				'4': 'hsl(var(--chart-4))',
  				'5': 'hsl(var(--chart-5))'
  			}
  		},
  		animation: {
  			'background-position-spin': 'background-position-spin 3000ms infinite alternate'
  		},
  		keyframes: {
  			'background-position-spin': {
  				'0%': {
  					backgroundPosition: 'top center'
  				},
  				'100%': {
  					backgroundPosition: 'bottom center'
  				}
  			}
  		}
  	}
  },
  plugins: [require("tailwindcss-animate")],
};
