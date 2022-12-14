import './App.css';
import { Route, Switch, Redirect } from 'react-router-dom';
import { useState, useEffect } from 'react';
import { auth } from './utils/firebase';
import useOwner from './components/Hooks/useOwner';

import Top from './components/TopAndHeader/Top/Top';
import Header from './components/TopAndHeader/Header/Header';
import Login from './components/Login/Login';
import Register from './components/Register/Register';
import Intro from './components/Intro/Intro';
import Quote from './components/Quote/Quote';
import About from './components/About/About';
import ClientServices from './components/ClientServices/ClientServices';
import Clients from './components/Clients/Clients';
import History from './components/History/History';
import TeamSection from './components/TeamSection/TeamSection';
import Works from './components/Works/Works';
import ConnectMe from './components/ConnectMe/ConnectMe'
import WorkCreate from './components/WorkCreate/WorkCreate';
import WorkDetailsEdit from './components/WorkDetailsEdit/WorkDetailsEdit';
import ContactUs from './components/ContactUs/ContactUs';
import Footer from './components/Footer/Footer';
import ErrorBaundary from './components/ErrorBaundary/ErrorBaundary';
import AuthContext from './components/contexts/authContext';
import OwnerContext from './components/contexts/ownerContext';
import AddVideo from './components/AddVideo/AddVideo';
import WorkDetails from './components/WorkDetails/WorkDetails';


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

  const [ownerInfo] = useOwner(authInfo.username, {});

  return (
    <AuthContext.Provider value={authInfo}>
      <ErrorBaundary>
        <Top />
        <Header />
        <main id="main" className="site-main">
          <Switch>
            <Route path="/login" component={Login} />
            <Route path="/register" component={Register} />
            <Route path="/logout" exact render={() => {
              auth.signOut();
              return <Redirect to="/intro" />
            }} />
            <OwnerContext.Provider value={ownerInfo}>
              <Route path="/intro" component={Intro} />
              <Route path="/intro" component={Quote} />
              <Route path="/about" component={About} />
              <Route path="/about" component={AddVideo} />
              <Route path="/services" component={ClientServices} />
              <Route path="/services" component={Clients} />
              <Route path="/team" component={TeamSection} />
              <Route path="/history" component={History} />
              <Route path="/works/:grup" exact component={props => <Works {...props} {...ownerInfo} />} />
              <Route path="/works/:grup" exact component={ConnectMe} />
              {/* <Route path="/works/:grup" component={Works} /> unneeded component rout*/}
              <Route path="/work/create" exact component={WorkCreate} />
              <Route path="/work/details/:workId" exact component={WorkDetails} />
              <Route path="/work/details/:workId/edit" component={props => <WorkDetailsEdit {...props} {...authInfo} />} />
              <Route path="/contact" component={ContactUs} />
            </OwnerContext.Provider>
          </Switch>
        </main>
        <Footer />
      </ ErrorBaundary>
    </AuthContext.Provider>
  );
}

export default App;
