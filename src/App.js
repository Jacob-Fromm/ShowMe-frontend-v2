import './Style/App.css';
import Header from './Components/Header'
import Home from "./Components/Home"
import Landing from "./Components/Landing"

import React from "react"
import {
  BrowserRouter as Router,
  Switch,
  Route,
  Link,
  Redirect,
  withRouter
} from "react-router-dom"; 

class App extends React.Component {
  
  render(){
    return (
      <>
        <div className="App">
          <Switch>
            <Route exact path="/" component={Landing} />
            <Header />
            <Home />
          </Switch>
        </div>
      </>
    );

  }
}

export default App;
