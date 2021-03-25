import React, { Component } from "react";
import Context from "./Context";

class AddFolder extends Component {
  constructor(props) {
    super(props);
    this.state = {
      folderName: "",
    };
  }

  handleSubmit(event) {
    event.preventDefault();

    console.log(event);
  }

  handleChange(event) {
    this.setState({ folderName: event.target.value });
  }

  render() {
    return (
      <div>
        <Context.Consumer>
          {({ addFolder }) => (
            <form onSubmit={(e) => addFolder(e, this.state.folderName)}>
              <h2>Add a folder</h2>
              <input
                value={this.state.folderName}
                type="text"
                name="name"
                id="name"
                placeholder="Your folder name here"
                onChange={this.handleChange.bind(this)}
              />
              <button type="submit">Add folder</button>
            </form>
          )}
        </Context.Consumer>
      </div>
    );
  }
}

export default AddFolder;
