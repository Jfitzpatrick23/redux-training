import React, {Component} from 'react'
import PersonList from './PersonList'
import PersonEdit from './PersonEdit'
import PersonAdd from './PersonAdd'
import Nav from './Nav'
import './styles/App.css'
import './skeleton.css'
import uuid from 'uuid'
import {connect} from 'react-redux'
import {setNewPerson, setSelectedPerson, setView} from "./actions";

class App extends Component {

    goToPersonEdit = (person) => {
        const newState = JSON.parse(JSON.stringify(this.props))
        this.setState(newState)
        this.props.setView('PersonEdit')
        this.props.setSelectedPerson(person)
    }

    goToPersonAdd = () => {
        const newState = JSON.parse(JSON.stringify(this.state))
        newState.view = 'PersonAdd'
        this.setState(newState)
    }

    goHome = () => {
        this.props.setView('PersonList')
    }

    // changeFirstName = (event) => {
    //     const newState = this.props
    //     newState.selectedPerson.firstName = event.target.value // text in the box
    //     this.props.setSelectedPerson(newState.selectedPerson)
    // }
    //
    // changeLastName = (event) => {
    //     const newState = this.props
    //     newState.selectedPerson.lastName = event.target.value // text in the box
    //     this.props.setSelectedPerson(newState.selectedPerson)
    // }

    saveChanges = (updatedPerson) => {
        const newState = JSON.parse(JSON.stringify(this.props))
        newState.people = this.props.people.map((person) => {
            if (person.id === updatedPerson.id) {
                return updatedPerson
            } else return person
        })
        newState.view = 'PersonList'
        newState.selectedPerson = undefined
        this.props.setView('PersonList')
        this.props.setNewPerson(newState.people)
    }

    deletePerson = () => {
        const newState = JSON.parse(JSON.stringify(this.props))
        newState.people = this.props.people.filter(person => person.id !== this.props.selectedPerson.id)
        newState.view = 'PersonList'
        this.props.setNewPerson(newState.people)
        this.props.setView('PersonList')
    }

    saveNewPerson = (newPerson) => {
        const newState = JSON.parse(JSON.stringify(this.props))
        newPerson.id = uuid()
        newState.people.push(newPerson)
        newState.view = 'PersonList'
        this.props.setView('PersonList')
        this.props.setNewPerson(newState.people)
    }

    render() {
        let currentView
        if (this.props.view === 'PersonList') {
            currentView =
                <PersonList people={this.props.people} goToPersonEdit={this.goToPersonEdit}
                            goToPersonAdd={this.goToPersonAdd}/>
        } else if (this.props.view === 'PersonAdd') {
            currentView = <PersonAdd goHome={this.goHome} saveNewPerson={this.saveNewPerson}/>
        } else {
            currentView = <PersonEdit selectedPerson={this.props.selectedPerson}
                                      saveChanges={this.saveChanges}
                                      goHome={this.goHome}
                                      deletePerson={this.deletePerson}/>
        }

        return (
            <div className="main">
                <Nav/>
                {currentView}
            </div>
        )
    }
}

const mapDispatchToProps = (dispatch) => ({
    setView: view => dispatch(setView(view)),
    setNewPerson: people => dispatch(setNewPerson(people)),
    setSelectedPerson: selectedPerson => dispatch(setSelectedPerson(selectedPerson))

})

const MapStateToProps = (state) => ({
    view: state.view,
    people: state.people,
    selectedPerson: state.selectedPerson
})


export default connect(MapStateToProps, mapDispatchToProps)(App)
