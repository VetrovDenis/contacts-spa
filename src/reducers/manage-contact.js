export const CHANGE_CONTACT = './manage-contact/CHANGE_CONTACT';
export const LOAD_CONTACTS = './manage-contact/LOAD_CONTACTS';

const initialState = [
    {
        id: 1,
        name: "Denis",
        surname: "Vetrov",
        phone_number: "+38099999999",
        call_history: []
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