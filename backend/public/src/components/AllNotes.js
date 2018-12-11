import React, { Component }from 'react';
import BriefNote from '../components/BriefNote';

class AllNotes extends Component {

  getUserNotes = ()=>  {
    if (this.props.isSearchResults === true) {
      return this.props.displaySearchResults.map( (note) => {
        return<BriefNote key={note.id} note={note} currentNote={this.props.currentNote} handleUpdateCurrentNote={this.props.handleUpdateCurrentNote} handleSearch={this.props.handleSearch} currentUser={this.props.currentUser} displaySearchResults={this.props.displaySearchResults}/>
      })
    } else {
      return this.props.userNotes.map( (note) => {
        return<BriefNote key={note.id} note={note} currentNote={this.props.currentNote} handleUpdateCurrentNote={this.props.handleUpdateCurrentNote} handleSearch={this.props.handleSearch} currentUser={this.props.currentUser} />
      })
    }
  }

  render() {

    // console.log("noteList: ", this.props.currentNote)
    return (
      <div className="All-notes" >
        {this.getUserNotes()}
      </div>

    )
  }
}
export default AllNotes;
