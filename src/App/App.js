import './App.css';
import SideMenu from '../components/SideMenu'
import Header from '../components/Header'
import { makeStyles, CssBaseline } from '@material-ui/core';

const useStyles = makeStyles({
  appMain: {
    paddingLeft: '320px',
    width: '100%'
  },
})

function App() {
  const classes = useStyles()
  return (
    <>
      <SideMenu/>
      <div className={ classes.appMain }>
        <Header></Header>
      </div>
      <CssBaseline />
    </>
  );
}

export default App;
