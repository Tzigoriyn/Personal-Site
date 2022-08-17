// import './App.css';
import { Route, Switch, Redirect } from 'react-router-dom';
import { useState, useEffect } from 'react';
import { auth } from './utils/firebase';

import Top from './components/TopAndHeader/Top/Top';
import Header from './components/TopAndHeader/Header/Header';
import Login from './components/Login/Login';
import Register from './components/Register/Register';
import Intro from './components/Intro/Intro';
import TeamSection from './components/TeamSection/TeamSection';
import Footer from './components/Footer/Footer';
import ErrorBaundary from './components/ErrorBaundary/ErrorBaundary';
import AuthContext from './components/contexts/authContext';
import OwnerContext from './components/contexts/ownerContext';

function App() {
  const [user, setUser] = useState(null);
  const [uid, setUid] = useState(null);

  useEffect(() => {
    auth.onAuthStateChanged(setUser);
    auth.onAuthStateChanged(setUid);
  }, []);

  const authInfo = {
    isAuthenticated: Boolean(user),
    username: user?.email,
    uid: uid?.uid
  }


  return (
    <AuthContext.Provider value={authInfo}>
      <ErrorBaundary>
        <Top />
        <Header />

        <OwnerContext.Provider value={ownerInfo}>
          <Switch>
            <Route path="/login" component={Login} />
            <Route path="/register" component={Register} />
            <Route path="/logout" exact render={() => {
              auth.signOut();
              return <Redirect to="/intro" />
            }} />
            <Route path="/intro" component={Intro} />
            <Route path="/team" component={TeamSection} />
          </Switch>
        </OwnerContext.Provider>

        <Footer />
      </ ErrorBaundary>
    </AuthContext.Provider>
  );
}

export default App;
