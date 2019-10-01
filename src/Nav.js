import React, {Component} from 'react'

class Nav extends Component {

  render() {
    return (
      <div className="Nav">
        <div className="IconRow">
          <img className="myIcon" src={require("./assets/person.svg")} alt="person icon"/>
          <img className="myIcon" src={require("./assets/person.svg")} alt="person icon"/>
          <img className="myIcon" src={require("./assets/person.svg")} alt="person icon"/>
        </div>
        <h1>Welcome to Person List</h1>
      </div>
    )
  }
}

export default Nav
