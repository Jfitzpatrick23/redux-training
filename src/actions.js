export const SET_VIEW = 'SET_VIEW'
export const SET_PEOPLE = 'SET_PEOPLE'
export const SET_SELECTED_PERSON = 'SET_SELECTED_PERSON'

export const setView = (view) => {
    return {
        type: SET_VIEW,
        view
    }
}

export const setNewPerson = (people) => {
    return {
        type: SET_PEOPLE,
        people
    }
}

export const setSelectedPerson = (selectedPerson) => {
    return {
        type: SET_SELECTED_PERSON,
        selectedPerson
    }
}