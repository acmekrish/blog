import Nav from './nav';
import Home from './home';
import Create from './Create';
import { BrowserRouter as Router, Route, Switch} from 'react-router-dom';

function App() {



  return (
    <Router>
      <div className="App">
      <Nav />
      <div className="content">
      <Switch>
        <Route exact path ="/">
        <Home />
        </Route>
        <Route path ="/create">
        <Create />
        </Route>
      </Switch>
      </div>
      
    </div>
    </Router>
  );
}

export default App;
