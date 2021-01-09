import React, { Fragment } from "react";
import { BrowserRouter as Router, Route, Switch } from "react-router-dom";
import Navbar from "./components/Home/Navbar";
import Header from "./components/Home/Header";
import Translate from "./components/Translate/Translate";
import About from "./components/Home/About";
import Feedback from "./components/Home/Feedback";
import Footer from "./components/Home/Footer";
import Alert from "./components/Home/ErrorMsg";
import { Provider } from "react-redux";
import store from "./store";

import "./App.css";
const App = () => {
  return (
    <Provider store={store}>
      <Router>
        <Fragment>
          <Navbar />
          <Route exact path='/' component={Header} />
          <section>
            <Alert />
            <Switch>
              <Route exact path='/translate' component={Translate} />
              <Route exact path='/about' component={About} />
              <Route exact path='/feedback' component={Feedback} />
            </Switch>
          </section>
          <Footer />
        </Fragment>
      </Router>
    </Provider>
  );
};

export default App;
