import { Theme as ThemeType } from "theme-ui"
// theme-ui polaris preset
export const theme: ThemeType = {
  initialColorModeName: "Light",
  useColorSchemeMediaQuery: true,
  space: [0, 4, 8, 16, 32, 64, 128],
  breakpoints: ["512px", "768px", "1024px", "1280px"],
  radii: [0, 3, 6],
  shadows: {
    card: "0 0 4px rgba(0, 0, 0, .125)",
    sm: "0 1px 3px 0 rgba(0, 0, 0, 0.1), 0 1px 2px 0 rgba(0, 0, 0, 0.06)",
    md: "0 4px 6px -1px rgba(0, 0, 0, 0.1), 0 2px 4px -1px rgba(0, 0, 0, 0.06)",
    lg:
      "0 10px 15px -3px rgba(0, 0, 0, 0.1), 0 4px 6px -2px rgba(0, 0, 0, 0.05)",
    xl:
      "0 20px 25px -5px rgba(0, 0, 0, 0.1), 0 10px 10px -5px rgba(0, 0, 0, 0.04)",
    "2xl": "0 25px 50px -12px rgba(0, 0, 0, 0.25)",
    outline: "0 0 0 3px rgba(66, 153, 225, 0.6)",
    inner: "inset 0 2px 4px 0 rgba(0,0,0,0.06)",
    none: "none",
  },
  fonts: {
    body:
      'system-ui, -apple-system, BlinkMacSystemFont, "Segoe UI", Roboto, "Helvetica Neue", sans-serif',
    heading:
      'system-ui, -apple-system, BlinkMacSystemFont, "Segoe UI", Roboto, "Helvetica Neue", sans-serif',
    monospace: "Menlo, monospace",
  },
  fontSizes: [12, 14, 16, 20, 24, 32, 48, 64, 96],
  fontWeights: {
    body: 400,
    heading: 600,
    bold: 700,
  },
  lineHeights: {
    body: 1.75,
    heading: 1.25,
  },
  colors: {
    initialColorModeName: "light",
    // My colors: primary, secondary, background, text,
    text: "#1b1e21",
    background: "#fff",
    primary: "#076873",
    secondary: "#1B98A6",
    accent: "#F2055C",
    white: "#fff",
    black: "#000",
    muted: "#eee",
    modes: {
      dark: {
        text: "#fff",
        background: "#1b1e21",
        secondary: "#076873",
        primary: "#1B98A6",
        accent: "#F2055C",
        muted: "#333",
      },
      retro: {
        primary: "#016F94",
        secondary: "#032859",
        background: "#FFE4B6",
        muted: "#FFB06D",
        text: "#1b1e21",
        accent: "#FE6A2C",
      },
    },
  },
  text: {
    heading: {
      fontFamily: "heading",
      fontWeight: "heading",
      lineHeight: "heading",
    },
  },
  buttons: {
    primary: {
      fontSize: 3,
      px: 3,
      py: 2,
      bg: "primary",
      color: "white",
      boxShadow: "none",
      borderRadius: "4px",
      border: "none",
      cursor: "pointer",
    },
    outline: {
      fontSize: 3,
      px: 3,
      py: 2,
      boxShadow: "none",
      borderRadius: "4px",
      cursor: "pointer",
      bg: "secondary",
      color: "white",
      border: "2px solid green",
    },
  },
  styles: {
    root: {
      fontFamily: "body",
      lineHeight: "body",
      fontWeight: "body",
    },
    h1: {
      color: "text",
      fontFamily: "heading",
      lineHeight: "heading",
      fontWeight: "heading",
      fontSize: 5,
    },
    h2: {
      color: "text",
      fontFamily: "heading",
      lineHeight: "heading",
      fontWeight: "heading",
      fontSize: 4,
    },
    h3: {
      color: "text",
      fontFamily: "heading",
      lineHeight: "heading",
      fontWeight: "heading",
      fontSize: 3,
    },
    h4: {
      color: "text",
      fontFamily: "heading",
      lineHeight: "heading",
      fontWeight: "heading",
      fontSize: 2,
    },
    h5: {
      color: "text",
      fontFamily: "heading",
      lineHeight: "heading",
      fontWeight: "heading",
      fontSize: 1,
    },
    h6: {
      color: "text",
      fontFamily: "heading",
      lineHeight: "heading",
      fontWeight: "heading",
      fontSize: 0,
    },
    p: {
      color: "text",
      fontFamily: "body",
      fontWeight: "body",
      lineHeight: "body",
      code: {
        background: "black",
        color: "accent",
        borderRadius: 1,
        px: 1,
        fontFamily: "monospace",
        fontSize: "inherit",
      },
    },
    a: {
      color: "primary",
    },
    pre: {
      fontFamily: "monospace",
      overflowX: "auto",
      code: {
        color: "inherit",
      },
    },
    code: {
      fontFamily: "monospace",
      fontSize: "inherit",
    },
    table: {
      width: "100%",
      borderCollapse: "separate",
      borderSpacing: 0,
    },
    th: {
      textAlign: "left",
      borderBottomStyle: "solid",
    },
    td: {
      textAlign: "left",
      borderBottomStyle: "solid",
    },
    img: {
      maxWidth: "100%",
    },
  },
}
