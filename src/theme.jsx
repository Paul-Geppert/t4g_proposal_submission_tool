import { blue, grey } from '@mui/material/colors';
import { createTheme } from '@mui/material/styles';

export default createTheme({
  palette: {
    background: {
      default: blue[50],
    },
    primary: {
      main: blue[800],
    },
    secondary: {
      main: blue[50],
    },
    text: {
      primary: grey[800],
    },
  },
  overrides: {
    MuiTab: {
      wrapper: {
        flexDirection: 'row',
      },
    },
  },
});
