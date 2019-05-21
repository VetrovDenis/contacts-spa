import { CHANGE_CONTACT, LOAD_CONTACTS, ADD_NEW_CONTACT, DELETE_CONTACT } from "../constants/action-types"

const initialState = [
    {
        id: 1,
        name: "Denis",
        surname: "Vetrov",
        phone_number: "+38099999999",
        call_history: [
            {
                date: "20 05 2019",
                phone_number: "+38099999999",
                name: "Ford"
            }
        ]
    },
    {
        id: 2,
        name: "Steve",
        surname: "Jobs",
        phone_number: "+38099999999",
        call_history: []
    },
    {
        id: 3,
        name: "Harrison",
        surname: "Ford",
        phone_number: "+38099999999",
        call_history: []
    }
]
export default (state = initialState, action) => {
    switch (action.type) {
        case LOAD_CONTACTS:
            return action.data
        case CHANGE_CONTACT:
            return action.contacts
        case ADD_NEW_CONTACT:
            return action.contacts
        case DELETE_CONTACT:
            return action.contacts
        default:
            return state;
    }
}

export const changeContact = (data) => async (dispatch, getState) => {
    let { contacts } = getState();
    let editedContactIndex = contacts.findIndex(x => x.id === data.id)
    contacts[editedContactIndex] = data
    return {
        type: CHANGE_CONTACT,
        contacts
    }
}
export const saveNewContact = (data) => async (dispatch, getState) => {
    let { contacts } = getState();
    data.id = contacts.length + 1;
    contacts.push(data)
    return {
        type: ADD_NEW_CONTACT,
        contacts
    }
}

export const deleteContact = (id) => async (dispatch, getState) => {
    let { contacts } = getState();
    let contactId = contacts.findIndex(x => x.id === id)
    contacts.splice(contactId, 1);
    return {
        type: DELETE_CONTACT,
        contacts
    }
}