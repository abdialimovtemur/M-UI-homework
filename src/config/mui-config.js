import { createTheme } from "@mui/material/styles";

export const theme = createTheme({
    breakpoints: {
        values: {
            xs: 0,
            sm: 600,
            md: 900,
            lg: 1200,
            xl: 1536,
        }
    },
    palette: {
        primary: {
            main: "#618C78",
            50: "#F0F5F2",
            100: "#DEE8E3",
            200: "#C0D3CA",
            300: "#9FBCAE",
            400: "#7EA593",
            500: "#618C78",
            600: "#4D6F5F",
            700: "#3A5448",
            800: "#283931",
            900: "#131B17",
            950: "#0A0F0D"
        },

        secondary: {
            main: "#CA4A4A",
            50: "#F9EBEB",
            100: "#F5DBDB",
            200: "#EAB8B8",
            300: "#DF9191",
            400: "#D46D6D",
            500: "#CA4A4A",
            600: "#AA3232",
            700: "#7E2525",
            800: "#571919",
            900: "#2B0D0D",
            950: "#140606"
        }
    },
    components: {
        MuiButton: {
            defaultProps: {
                disableRipple: true,
            },
        },
        MuiContainer: {
            styleOverrides: {
               root: {
                maxWidth: 1280,
               },
            },
        },
    },
});