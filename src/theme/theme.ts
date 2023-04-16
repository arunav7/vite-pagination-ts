import { createTheme } from '@mui/material/styles';

const theme = createTheme({
  palette: {
    neutral: {
      main: '#64748BD9',
      dark: '#64748B',
      contrastText: '#fff',
    },
    cyan: {
      main: '#4dd0e1',
      dark: '#006064',
      light: '#e0f7fa',
      contrastText: '#000',
    },
    lime: {
      main: '#d4e157',
      dark: '#9e9d24',
      light: '#e6ee9c',
      contrastText: '#000',
    },
  },
});

declare module '@mui/material/styles' {
  interface Palette {
    neutral: Palette['primary'];
    cyan: Palette['secondary'];
    lime: Palette['warning'];
  }

  interface PaletteOptions {
    neutral?: PaletteOptions['primary'];
    cyan?: PaletteOptions['secondary'];
    lime?: PaletteOptions['warning'];
  }
}

declare module '@mui/material/Pagination' {
  interface PaginationPropsColorOverrides {
    neutral: true;
    cyan: true;
    lime: true;
  }
}
declare module '@mui/material/Button' {
  interface ButtonPropsColorOverrides {
    neutral: true;
    cyan: true;
    lime: true;
  }
}

export default theme;
