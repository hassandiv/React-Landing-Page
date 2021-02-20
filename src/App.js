import './App.css';
import 'bootstrap/dist/css/bootstrap.min.css';
import Header from './header/Header';
import Footer from './footer/Footer';
import Home from './Home';

const App = () => {

  return (
    <div className="App">
      <Header />
      <Home />
      <Footer />
    </div>
  );
}

export default App;