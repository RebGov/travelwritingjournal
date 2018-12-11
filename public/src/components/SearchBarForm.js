import React, { Component } from "react";

class SearchBarForm extends Component {
  state = {
    searchTerm: ""
  };

  handleInputChange = e => {
    console.log(e.target.value)
    // this.setState({
    //   searchTerm: e.target.value
    // });
    this.props.handleSearch(e.target.value)
  };

  // handleSubmit = e => {
  //   e.preventDefault();
  //   this.props.handleSearch(this.state.searchTerm);
  // };

  render() {


    return (
      <div className="Note-search"  >
        <div className="note-search-bar">
        <h4 >Search Your Travel Writing Stories: <input onChange={this.handleInputChange} placeholder="Search" /></h4>
        {/* <h4>Location: </h4> */}
      </div>

    </div>
    );
  }
}

export default SearchBarForm;
