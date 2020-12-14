import './App.css';
import { BrowserRouter as Router, Route, Switch } from 'react-router-dom'; 
import Home from './components/Home';

function App() {
  return (
    <div className="App">
      <Router>
      <Switch> 
        <Route exact path='/' component={Home}></Route> 
        <Route exact path='/about' component={Home}></Route> 
        <Route exact path='/contact' component={Home}></Route>
        <Route exact path='/education' component={Home}></Route>
        <Route exact path='/projects' component={Home}></Route>
        <Route exact path='/skill' component={Home}></Route>
        <Route path="" component={Home} />
      </Switch> 
      </Router>    </div>
  );
}

export default App;
