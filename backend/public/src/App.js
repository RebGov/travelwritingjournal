import React, { Component } from 'react';
import {
  Route,
  Switch,
  Redirect,
  withRouter
} from "react-router-dom";
import './App.css';
import Header from './components/Header';
import UserSignIn from './components/UserSignIn';
import UserSignUp from './components/UserSignUp';
import HomePage from './Pages/HomePage';
import AboutPage from './Pages/AboutPage';
import ContactPage from './Pages/ContactPage';
import UserNotePage from './Pages/UserNotePage';
import UserProfile from './Pages/UserProfile';

//App Class: imports from items above and exports the

class App extends Component {
  state = {
    currentUser: {
      notes: []
    },
    // loginError: "",
    userSignedIn: false,
    currentNote: {},
    displaySearchResults: [],
    isSearchResults: false,
  }

  componentDidMount() {
    this.getUser()
  }
  componentWillMount() {
    this.updateUser()
  }

  getUser(){
    const token = localStorage.token;
    if(token){
      fetch("http://localhost:3000/api/v1/profile", {
        method: "GET",
        headers: {
          Authorization: `Bearer ${token}`
        }
      })
      .then(resp => resp.json())
      .then(data => {
        if (!data.error) {
          this.setState({
            currentUser: data,
            userSignedIn: true,
            currentNote: data.notes[0],
            isCurrentNote:true
          });
        }
      });
    }
  }

  updateUser(){
    const token = localStorage.token;
    if(token){
      fetch("http://localhost:3000/api/v1/profile", {
        method: "GET",
        headers: {
          Authorization: `Bearer ${token}`
        }
      })
      .then(resp => resp.json())
      .then(data => {
        if (!data.error) {
          this.setState({
            currentUser: data,
            userSignedIn: true
          });
        }
      });
    }
  }

  logInApp = data => {
    if (!data.error) {
      localStorage.token = data.token;
      this.getUser()
    } else {
      window.confirm(data.error)
      this.setState({
        loginError: data.error
      });
    }
  };

  signUpApp = data => {
    // debugger
    console.log(data.error)
    if (!data.error){
      localStorage.token = data.token;
      this.getUser()
    } else {
      window.confirm(data.error)
      this.setState({
        loginError: data.error
      });
    };
  };

  userLogOut = () => {
    this.setState({
      currentUser: {},
      userSignedIn: false,
      currentNote: {},
      displaySearchResults:[],
      isSearchResults: false
    });
  };

  createNoteApp = data => {
    this.updateUser()
    this.setState({
      currentNote: data
    })
  };
  editNoteApp = data => {
    this.updateUser()
    this.setState({
      currentNote: data
    })
    // this.setState({
    //   currentNote: data,
    //   currentUser: {...this.state.currentUser, notes: [this.state.currentNote, data]}
    // });
  };
  deleteNoteApp = data => {
    this.getUser()

  }

  handleUpdateCurrentNote = (id, title, location, content) => {
    this.setState({
      currentNote: {id, title, location, content}
    });
  };

  handleSearch = (searchTerm) => {

    let searchResults = this.state.currentUser.notes.filter(note => note.title.toLowerCase().includes(searchTerm.toLowerCase())|| note.location.toLowerCase().includes(searchTerm.toLowerCase())|| note.content.toLowerCase().includes(searchTerm.toLowerCase()));
    if (this.state.displaySearchResults) {
      this.setState({
       displaySearchResults: searchResults,
       isSearchResults: true
     });
    } else {
      this.setState({
        displaySearchResults: null,
        isSearchResults: false
      })
    }
  };


  render() {


    return (
      <div className="App">
        <Header
          userSignedIn={this.state.userSignedIn}
          username={this.state.currentUser.username}
          userLogOut={this.userLogOut}
          currentNote={this.state.currentNote}
        />
        <Switch>
          <Route path="/about" component={AboutPage} />
          <Route path="/contact" component={ContactPage} />
          { this.state.userSignedIn ? (
            <React.Fragment>
              <Route path='/:user/journal_entries' render={(routerProps)=>{
                return <UserNotePage
                  userSignedIn={this.state.userSignedIn}
                  currentUser={this.state.currentUser}
                  userNotes={this.state.currentUser.notes}
                  currentNote={this.state.currentNote}
                  handleUpdateCurrentNote={this.handleUpdateCurrentNote}
                  handleSearch={this.handleSearch}
                  displaySearchResults={this.state.displaySearchResults}
                  createNoteApp={this.createNoteApp}
                  isSearchResults={this.state.isSearchResults} editNoteApp={this.editNoteApp}
                  deleteNoteApp={this.deleteNoteApp}/>
                }}/>
              <Route path='/:user/profile' render={(routerProps)=>{
                return <UserProfile
                  userSignedIn={this.state.userSignedIn}
                  currentUser={this.state.currentUser}
                />
                }} />
              <Route exact path="/" component={HomePage} />
              <Redirect to={`/${this.state.currentUser.username}/journal_entries/current`} />
            </React.Fragment>
          ) : (
          <React.Fragment>
            <Route path="/login" render={(routerProps)=>{
              return <UserSignIn
                logInApp={this.logInApp} />}}
              />
            <Route path="/signup" render={(routerProps)=>{
              return <UserSignUp signUpApp={this.signUpApp}/>
              }}/>
            <Route exact path="/" component={HomePage} />
            <Redirect to='/'/>
          </React.Fragment>
          )}

        </Switch>

        {/* <Footer /> */}
      </div>
    );
  }
}
export default withRouter(App);
