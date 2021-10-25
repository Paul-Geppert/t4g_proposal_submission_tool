import { blue } from '@mui/material/colors';
import { createTheme } from '@mui/material/styles';

export default createTheme({
  palette: {
    background: {
      default: blue[50],
    },
    primary: {
      main: '#2a95f2',
    },
    secondary: {
      main: blue[50],
    },
    header: {
      main: '#fff',
      text: '#707070',
    },
    text: {
      primary: '#707070',
    },
  },
  spacing: 4,
  typography: {
    allVariants: {
      color: '#707070',
      fontFamily: [
        'Bundessans',
        'BundessansBold',
      ].join(','),
    },
    h5: {
      fontFamily: [
        'BundessansBold',
      ],
    },
  },
  components: {
    MuiStepButton: {
      defaultProps: {
        disableRipple: true,
      },
    },
    MuiStepIcon: {
      styleOverrides: {
        root: {
          fontWeight: 'bold',
        },
      },
    },
  },
});
