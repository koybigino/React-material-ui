import './App.css';
import { makeStyles, CssBaseline } from '@material-ui/core';
import { createTheme } from '@material-ui/core/styles'
import { ThemeProvider } from '@mui/material';
import SideMenu from '../components/SideMenu'
import Header from '../components/Header'


const theme = createTheme({
  palette: {
    primary: {
      main: "#ff0000",
      light: "#3c44b126",
    },
    secondary: {
      main: "#f83245",
      light: "#f8324526",
    },
    backgroundColor:{
      default: "#f4f5fd"
    }
  }
})

const useStyles = makeStyles({
  appMain: {
    paddingLeft: '320px',
    width: '100%'
  },
})

function App() {
  const classes = useStyles()
  return (
    <ThemeProvider theme={theme}>
      <SideMenu/>
      <div className={ classes.appMain }>
        <Header></Header>
      </div>
      <CssBaseline />
    </ThemeProvider>
  );
}

export default App;
