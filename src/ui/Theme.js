import { createTheme } from "@material-ui/core/styles";

const green = "#687158";
const lightGreen = "#81814D";
const brown = "#312C1C";
const tan = "#C7BEAE";
const white = "#FFFFFF"

export default createTheme({
    palette: {
        common: {
            green: green,
            lightGreen: lightGreen,
            brown: brown,
            tan: tan,
            white: white,
        },
        primary: {
            main: green,
            mainGradient: "linear-gradient(to left, #687158, #81814D)"
        },
        secondary: {
            main: lightGreen
        },
    },
    typography: {
        tab: {
            fontFamily:"Jaldi",
            textTransform: "none",
            fontSize: "1.5rem",
            color: white,
        },
        h1: {
            fontFamily:"Satisfy",
            fontSize:"4.5rem",
            textTransform: "none"
        }
    },
});