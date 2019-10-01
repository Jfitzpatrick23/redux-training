import React, {Component} from 'react'
import { connect } from 'react-redux'
import {setView} from "./actions";


class PersonList extends Component {

  render() {
    return (
      <div>
        <ul className="PersonList">
          {this.props.people.map((person) =>
            <li key={person.id}
                onClick={() => this.props.goToPersonEdit(person)}>{person.firstName} {person.lastName}</li>)}
        </ul>
        <button className="button-primary" onClick={() => this.props.setView('PersonAdd')}>
          Add a Person
        </button>
      </div>
    )
  }
}

const mapStateToProps = (state) => ({
    people: state.people
})

const mapDispatchToProps = (dispatch) => ({
    setView: view => dispatch(setView(view))
})

export default connect(mapStateToProps, mapDispatchToProps)(PersonList)
