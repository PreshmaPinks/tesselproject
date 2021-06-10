import './App.css';
import Login from './components/Login/index.js';
import {Route, Switch } from "react-router-dom";
import InformationPage from './components/InformationPage/index.js';
import WelcomePage from './components/WelcomePage/index.js';
import {LoginContextProvider} from '././components/userDataContext.js';

function App() {
  return (
    <LoginContextProvider>
    <Switch>
    <Route exact path='/' component={Login}/>
    <Route  path='/Welcome' component={WelcomePage}/>
    <Route  path='/Information' component={InformationPage}/>
    </Switch>
    </LoginContextProvider>
    
  );
}

export default App;
