// import './App.css';
import { Route, Switch } from 'react-router-dom';

import Top from './components/TopAndHeader/Top/Top';
import Header from './components/TopAndHeader/Header/Header';
import Footer from './components/Footer/Footer';
import Inro from './components/Inro/Inro';
import ErrorBaundary from './components/ErrorBaundary/ErrorBaundary';

function App() {
  return (
    <ErrorBaundary>
      <Top />
      <Header />

      <Switch>
        <Route path="/inro" component={Inro} />
      </Switch>

      <Footer />
    </ ErrorBaundary>
  );
}

export default App;
