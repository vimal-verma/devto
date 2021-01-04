import './App.css';
import { BrowserRouter as Router, Route, Switch } from 'react-router-dom'; 
import Home from './HomeRoute/Home';
import About from './AboutRoute/About'
import user from './UserRoute/User'
import Error from './ErrorRoute/Error'
import Api from './ApiRoute/Home'
import Userroute from './UserRoute/Usersroute'

function App() {
  return (
    <div className="App">
      <Router>
      <Switch> 
        <Route exact path='/' component={Home}></Route> 
        <Route exact path='/about' component={About}></Route> 
        <Route exact path='/user/:username' component={Userroute}></Route> 
        <Route exact path='/user' component={user}></Route>
        <Route exact path='/api' component={Api}></Route>
        <Route path="" component={Error} />
      </Switch> 
      </Router>    </div>
  );
}

export default App;
