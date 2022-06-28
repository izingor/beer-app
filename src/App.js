import { HashRouter as Router, Route, Switch } from 'react-router-dom';
import { HomePage } from './pages/HomePage';
import { Header } from './components/Header/Header';
import { Footer } from './components/Footer';
import { BeersPage } from './pages/BeersPage';
function App() {
  return (
    <Router>
      <div className="flex flex-col h-screen justify-netween relative">
        <Header />
        <Switch>

          <Route path='/beers' component={BeersPage} />
          <Route path='/' component={HomePage} />


        </Switch>
        <Footer />
      </div>
    </Router>

  );
}

export default App;
