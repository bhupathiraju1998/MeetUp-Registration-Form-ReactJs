import {useState, useEffect, Component} from 'react'
import {Route, Switch, Redirect} from 'react-router-dom'
import MeetUpContext from './context/MeetUp'
import MainPage from './components/MainPage'
import NotFound from './components/NotFound'
import RePage from './components/RePage'
import './App.css'

// These are the lists used in the application. You can move them to any component needed.

// Replace your code here

class App extends Component {
  state = {
    name: '',
    objDetails: {},
  }

  getDetails = obj => {
    const {history} = this.props
    this.setState({objDetails: obj})
  }

  render() {
    const {name, objDetails} = this.state
    return (
      <MeetUpContext.Provider
        value={{name, objDetails, setDetails: this.getDetails}}
      >
        <Switch>
          <Route exact path="/" component={MainPage} />
          <Route exact path="/register" component={RePage} />
          <Route path="/not-found" component={NotFound} />
          <Redirect to="/not-found" />
        </Switch>
      </MeetUpContext.Provider>
    )
  }
}

export default App
