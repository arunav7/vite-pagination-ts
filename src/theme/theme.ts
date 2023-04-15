import createTheme from '@mui/material/styles/createTheme';

const theme = createTheme({
  palette: {
    neutral: {
      main: '#64748B',
      contrastText: '#fff',
    },
    cyan: {
      main: '#4dd0e1',
      contrastText: '#000',
    },
    lime: {
      main: '#d4e157',
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

export default theme;
