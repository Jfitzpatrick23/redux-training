import {SET_VIEW, SET_PEOPLE, SET_SELECTED_PERSON} from "./actions";


const reducer = (state = {}, action) => {
    console.log(action)
    switch (action.type) {
        case SET_VIEW:
            return {
                ...state,
                view: action.view
            }
        case SET_PEOPLE:
            return {
                ...state,
                people: action.people,
                selectedPerson: undefined
            }
        case SET_SELECTED_PERSON:
            return {
                ...state,
                selectedPerson: action.selectedPerson
            }
        default:
            return state
    }
}

export default reducer;