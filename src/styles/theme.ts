import { extendTheme } from "@chakra-ui/react";
import { createBreakpoints } from '@chakra-ui/theme-tools';

const breakpoints = createBreakpoints({
    sm: '30em',
    md: '46em',
    lg: '62em',
    xl: '80em',
    '2xl': '96em',
})
 
export const theme = extendTheme({
    fonts: {
        body: `'Lato', sans-serif`,
    },
    fontSizes: {
        sm: "0.75rem",
        md: "0.875rem",
        lg: "1rem",
        xl: "1.125rem",
        "2xl": "1.25rem",
        "3xl": "1.5rem",
        "4xl": "1.875rem",
        "5xl": "2.25rem",
        
    },
    breakpoints,
    colors: {
        brand: {
            // bg: '#09090a',
            bg: '#181818',
            title_bg_black: '#E8C548',
            title_bg_black_active: '#d69e2e',
            // success: "#2d9544"
            success: "#49a167"
        }
    },
})