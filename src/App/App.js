import './App.css';
import { makeStyles, CssBaseline } from '@material-ui/core';
import { createTheme } from '@material-ui/core/styles'
import { ThemeProvider } from '@mui/material';
import SideMenu from '../components/SideMenu'
import Header from '../components/Header'
import PageHeader from '../components/PageHeader'
import PeopleOutlineTwoToneIcon from '@material-ui/icons/PeopleOutlineTwoTone'

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
    background:{
      default: "#f4f5fd"
    }
  },
  overrides: {
    MuiAppBar: {
      transform: 'translateZ(0)',
    }
  },
  props: {
    MuiIconButton: {
      disableRipple: true
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
        <Header />
        <PageHeader
          title="Page Header"
          subTitle="Page Description"
          icon={<PeopleOutlineTwoToneIcon fontSize="large" />}
          />
      </div>
      <CssBaseline />
    </ThemeProvider>
  );
}

export default App;
