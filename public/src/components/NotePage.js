import React, { Component } from 'react';
import { Button, Nav, NavItem, Row, Col } from 'reactstrap';
import { Route, Switch, withRouter, NavLink as RouterNavLink} from 'react-router-dom';
import FullNote from '../containers/FullNote';
import CreateNoteForm from './CreateNoteForm';
import EditNoteForm from './EditNoteForm';


//NavLin as NavTab1
import '../App.css'
//Goal: have some user notes public and some private/drafts. Private/drafts only show when user logged in. (would need to update backend first)
class NotePage extends Component {
  handleClickEdit = e => {
    this.props.history.push(`/${this.props.currentUser.username}/journal_entries/edit`)
  }
  handleClickNew = e => {
    this.props.history.push(`/${this.props.currentUser.username}/journal_entries/new`)
  }
  render() {
// console.log("NotePage-currentNote: ", this.props.currentUser.username)
    return (

      <div className="Note-page">
        <Nav tabs>
          <NavItem componentclass="span2">
            {/* <NavTab1 > */}
              <RouterNavLink
                style={{border: "3px solid rgb(180,135,105)", background:"rgb(180,135,105)", "borderRadius": "5px","textDecoration": "none", color: "black", fontSize:" 2.5rem"}}
                // className={classnames({ active: this.state.activeTab === '1' })}
                // onClick={() => { this.toggle('1'); }}
                to={`/${this.props.currentUser.username}/journal_entries/current`}
              >
                Current Entry
              </RouterNavLink>
            {/* </NavTab1> */}
           </NavItem>
          <NavItem componentclass="span1">
            {/* <NavTab1  > */}
              <RouterNavLink
                style={{border: "3px solid rgb(180,135,105)", background:"rgb(180,135,105)", "borderRadius": "5px","textDecoration": "none", color: "black", fontSize:" 2.5rem"}}
                // className={classnames({ active: this.state.activeTab === '2' })}
                to={`/${this.props.currentUser.username}/journal_entries/new`}
                // onClick={() => { this.toggle('2'); }}
              >
                New Entry
              </RouterNavLink>
            {/* </NavTab1> */}
          </NavItem>
          <NavItem componentclass="span">
            {/* <NavTab1  > */}
              <RouterNavLink
                style={{border: "3px solid rgb(180,135,105)", background:"rgb(180,135,105)", "borderRadius": "5px","textDecoration": "none", color: "black", fontSize:" 2.5rem"}}
                to={`/${this.props.currentUser.username}/journal_entries/edit`}
              >
                Edit Entry
              </RouterNavLink>
            {/* </NavTab1> */}
          </NavItem>
        </Nav>
        <div >
          <Switch>

            <Route path={`/${this.props.currentUser.username}/journal_entries/current`} render={() => {
            return (<div className="new-notes-layout">
                <Row>
                  <Col sm="12">
                    {this.props.currentNote === undefined ?
                      (<React.Fragment><h3>Write your Travel Journal Story: </h3> <Button onClick={this.handleClickNew} color="primary">New Story</Button></React.Fragment>)
                      :
                      (<React.Fragment><FullNote currentNote={this.props.currentNote} currentUser={this.props.currentUser} />
                        <Button onClick={this.handleClickEdit} color="primary"> Edit Story </Button> </React.Fragment> ) }

                  </Col>
                </Row>
              </div>)
            }} />
            <Route path={`/${this.props.currentUser.username}/journal_entries/new`} render={()=> {
              return(<div className="create-note-layout">
                <Row>
                  <Col sm="12">
                    <CreateNoteForm currentUser={this.props.currentUser} createNoteApp={this.props.createNoteApp}/>
                  </Col>
                </Row>
              </div>)
            } }/>
            <Route path={`/${this.props.currentUser.username}/journal_entries/edit`} render={()=> {
              // console.log(this.props.currentUser)
              return (

                <div className="edit-note-layout">
                  <Row>
                    <Col sm="12">
                      {this.props.currentNote === undefined ? (<React.Fragment><h3>There are no Travel Writing Journal stories to edit. Write your Travel Journal Story </h3><Button onClick={this.handleClickNew} color="primary">New Story</Button></React.Fragment>):(<EditNoteForm
                        currentUser={this.props.currentUser}
                        currentNote={this.props.currentNote} editNoteApp={this.props.editNoteApp} deleteNoteApp={this.props.deleteNoteApp}/>)}
                    </Col>
                  </Row>
                </div>
              )
            }}/>



          </Switch>
        </div>
      </div>
    );
  }
}
export default withRouter(NotePage);
