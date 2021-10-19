import { createTheme } from '@material-ui/core/styles';
import { blue, grey } from '@material-ui/core/colors';

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
