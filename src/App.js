import { HashRouter as Router, Route, Switch } from 'react-router-dom';
import { HomePage } from './pages/HomePage';
import { Header } from './components/Header/Header';
import { Footer } from './components/Footer';
function App() {
  return (
    <Router>
      <div className="flex flex-col h-screen justify-netween relative">
        <Header />
        <Switch>

          <Route path='/' component={HomePage} />


        </Switch>
        <Footer />
      </div>
    </Router>

  );
}

export default App;
