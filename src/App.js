import React, { useState } from 'react';
import './App.css';
import Navbar from './components/Navbar';
import Accordion from './components/Accordion';
import Video from './components/Video';
import { BrowserRouter as Router, Switch, Route, Redirect } from "react-router-dom";
import Home from './components/Home';
import Contact from './components/Contact'
import Feedback from './components/Feedback'
import Footer from './components/Footer'
import PrivacyPolicy from './components/PrivacyPolicy'
import TermsOfService from './components/TermsOfService'
import Learning from './components/Learning';
import American from './components/American';
import BSL from './components/BSL';
import ISL from './components/ISL';

function App() {
  const [darkMode, setDarkMode] = useState(false);

  const toggleDarkMode = () => {
    setDarkMode(!darkMode);
  };

  return (
    <Router>
      <div className={darkMode ? 'dark-mode' : 'light-mode'}>
        <Navbar darkMode={darkMode} toggleDarkMode={toggleDarkMode} />
        <Switch>
          <Route exact path="/">
            <Redirect to="/home" />
          </Route>
          <Route path="/home" component={Home} />
          <Route path="/accordion" component={Accordion} />
          <Route path="/video" component={Video} />
          <Route path="/Contact" component={Contact} />
          <Route path="/feedback" component={Feedback} />
          <Route path="/PrivacyPolicy" component={PrivacyPolicy} />
          <Route path="/TermsOfService" component={TermsOfService} />
          <Route path="/Learning" component={Learning} />
          <Route path="/asl" component={American} />
          <Route path="/bsl" component={BSL} />
          <Route path="/isl" component={ISL} />     
        </Switch>
        <Footer/>
      </div>
    </Router>
  );
}

export default App;
