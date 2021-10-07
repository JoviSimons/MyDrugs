import './App.css';
import { useAuth0 } from '@auth0/auth0-react'; 
import Home from './pages/Home';
import {BrowserRouter as Router, Switch, Route} from 'react-router-dom';
import Product from './pages/Product';
import Profile from './components/Profile';

function App() {

  const { isLoading } = useAuth0();

  if (isLoading) return <div>Loading...</div>

  return (
    <div className="App">
      <Router>
        <div className="App">
          <Switch>
              <Route exact path='/' component={Home} />
              <Route exact path='/products'>
                <Product/>
              </Route>
              <Route path='/product/:id'>
                <Product/>
              </Route>
              <Route path='/profile'>
                <Profile/>
              </Route>
          </Switch>
        </div>
      </Router>
    </div>
  );
}

export default App;
