import { createTheme, Theme } from '@mui/material';

declare module '@mui/material/Button' {
  interface ButtonPropsVariantOverrides {
    custom: true;
  }
}

export enum Breakpoints {
  xs = 0,
  sm = 640,
  md = 768,
  lg = 1024,
  xl = 1280,
  xsMobile = 121,
  smMobile = 320,
  mobile = 480,
  smDesktop = 1376,
  desktop = 2016,
  lgDesktop = 2666,
  xlgDesktop = Number.POSITIVE_INFINITY,
}

enum CommonColors {
  PRIMARY_LIGHT = '#919dff',
}

export const theme: Theme = createTheme({
  breakpoints: {
    values: {
      xs: Breakpoints.xs,
      sm: Breakpoints.sm,
      md: Breakpoints.md,
      lg: Breakpoints.lg,
      xl: Breakpoints.xl,
    },
  },
  palette: {
    mode: 'light',
    background: {
      default: '#121212',
      paper: '#263238',
    },
    primary: {
      main: '#536DFE',
      light: CommonColors.PRIMARY_LIGHT,
    },
    secondary: {
      main: '#1D282E',
    },
    text: {
      primary: '#fff',
      secondary: 'rgba(255, 255, 255, 0.7)',
    },
    action: {
      active: 'rgba(255, 255, 255, 0.56);',
      disabled: '#FFFFFF1F',
    },
  },
  typography: {
    h4: {
      fontSize: '34px',
      lineHeight: '123.5%',
      letterSpacing: '0.25px',
    },
    h5: {
      fontSize: '24px',
      lineHeight: '133.4%',
      letterSpacing: '0.25px',
    },
    h6: {
      fontWeight: '500',
      fontSize: '20px',
      lineHeight: '160%',
      letterSpacing: '0.15px',
    },
    body1: {
      fontSize: '16px',
      lineHeight: '150%',
      letterSpacing: '0.15px',
    },
  },
  components: {
    MuiAutocomplete: {
      styleOverrides: {
        inputRoot: {
          width: '220px',
        },
        paper: {
          background: 'linear-gradient(180deg, rgba(255, 255, 255, 0.12) 0%, rgba(255, 255, 255, 0.12) 100%), #263238;',
        },
        option: {
          borderBottom: '1px solid rgba(255, 255, 255, 0.15)',
          '&:last-child': {
            borderBottom: 'none',
          },
        },
      },
    },
    MuiButton: {
      variants: [
        {
          props: { variant: 'custom' },
          style: {
            color: CommonColors.PRIMARY_LIGHT,
            borderWidth: '1px',
            borderStyle: 'solid',
            borderColor: CommonColors.PRIMARY_LIGHT,
            fontSize: '12px',
            textTransform: 'capitalize',
            borderRadius: '16px',
            lineHeight: '100%',
            paddingX: '12px',
            paddingY: '7px',
          },
        },
      ],
    },
  },
});
