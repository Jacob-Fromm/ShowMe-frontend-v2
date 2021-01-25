import './Style/App.css';
import Header from './Components/Header'
import Home from "./Components/Home"
import Landing from "./Components/Landing"
import {getComics} from "./Redux/actions"
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
  componentDidMount(){
    this.props.fetchComics()
  }

  render(){
    return (
      <>
        <div className="App">
          <Switch>
            <Route exact path="/" component={Landing} />
            <Home path="/home" />
          </Switch>
        </div>
      </>
    );

  }
}

const mdp = (dispatch) => {
  return {
    // fetchShows: () => dispatch(getShows()),
    fetchComics: () => dispatch(getComics()),
    // fetchFans: () => dispatch(getFans()),
    // saveUser: (userObj) => dispatch(setUser(userObj))
  }

}

const msp = (state) => {
  return { state: state }
}

export default withRouter(connect(msp, mdp)((App)))
