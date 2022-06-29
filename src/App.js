import { HashRouter as Router, Route, Switch } from 'react-router-dom';
import { HomePage } from './pages/HomePage';
import { Header } from './components/Header/Header';
import { Footer } from './components/Footer';
import { BeersPage } from './pages/BeersPage';
import { FavoritesPage } from './pages/FavoritesPage';
function App() {
  return (
    <Router>
      <div className="flex flex-col min-h-screen relative">
        <Header />
        <Switch>

          <Route path='/favorites' component={FavoritesPage} />
          <Route path='/beers' component={BeersPage} />
          <Route path='/' component={HomePage} />


        </Switch>
        <Footer />
      </div>
    </Router>

  );
}

export default App;
