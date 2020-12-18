import './App.css';
import { BrowserRouter as Router, Route, Switch } from 'react-router-dom'; 
import Home from './components/Home';
import About from './components/About'
import Project from './components/Project'
import Error from './components/Error'
import Userroute from './components/Userroute'

function App() {
  return (
    <div className="App">
      <Router>
      <Switch> 
        <Route exact path='/' component={Home}></Route> 
        <Route exact path='/about' component={About}></Route> 
        <Route exact path='/user/:username' component={Userroute}></Route> 
        <Route exact path='/contact' component={Home}></Route>
        <Route exact path='/education' component={Home}></Route>
        <Route exact path='/projects' component={Project}></Route>
        <Route exact path='/skill' component={Home}></Route>
        <Route path="" component={Error} />
      </Switch> 
      </Router>    </div>
  );
}

export default App;
