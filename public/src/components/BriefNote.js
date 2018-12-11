import React, { Component } from 'react';
import {withRouter} from "react-router-dom";
class BriefNote extends Component {
  // constructor(props) {
  //   super(props);
  // }
  handleClickOneNote = e => {
    e.preventDefault()
    const id = this.props.note.id;
    const title = this.props.note.title;
    // const author= this.props.note.user_id
    const location = this.props.note.location;
    const content = this.props.note.content
    this.props.handleUpdateCurrentNote(id, title, location, content);
    // this.props.history.push(`/${this.props.currentUser.username}/journal_entries/current`)
  }
  render() {

 // console.log(this.props.note.content)
    return(
      <div key={this.props.note.id} onClick={this.handleClickOneNote}>
        <h2>{this.props.note.title}</h2>
        <h4>{this.props.note.location}</h4>
        <p>{this.props.note.content.substring(0, 5) + '...' }</p>
        <hr></hr>

    </div>
    )
  }
}
export default withRouter(BriefNote);


//  function truncate(string){
//    if (string.length > 5)
//       return string.substring(0,5)+'...';
//    else
//       return string;
// };
