import './App.css';
import { BrowserRouter as Router, Switch, Route } from 'react-router-dom'
import 'bootstrap/dist/css/bootstrap.min.css';
import Header from './header/Header';
import Footer from './footer/Footer';
import Home from './Home';

const App = () => {

  return (
    <>
      <Router>
        <Header />
        <Switch>
          <Route exact path="/mtc-test" component={Home} />
        </Switch>
        <Footer />
      </Router>
    
    </>
  );
}

export default App;