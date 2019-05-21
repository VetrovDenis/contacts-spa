import { UPDATE_CONTACTS } from "../constants/action-types"
import urls from "../constants/urls"
//services
import { httpRequest } from "../services/http";

const initialState = []

export default (state = initialState, action) => {
    switch (action.type) {
        case UPDATE_CONTACTS:
            return action.data
        default:
            return state;
    }
}
export const updateContactsArray = (data) => {
    return {
        type: UPDATE_CONTACTS,
        data
    }
}
export const initializeContactData = () => async dispatch => {
    const promise = httpRequest(
        "GET",
        urls.contacts
    );
    promise.then(
        result => {
            dispatch(updateContactsArray(result.body))
        },
        error => {
            console.log(error)
        }
    );
}

export const changeContactRequest = (data) => async (dispatch, getState) => {
    const body = JSON.stringify(data)
    const promise = httpRequest(
        "PUT",
        urls.contacts,
        body
    );
    promise.then(
        result => {
            console.log(result)
        },
        error => {
            console.log(error)
        }
    );
    let { contacts } = getState();
    let editedContactIndex = contacts.findIndex(x => x.id === data.id)
    contacts[editedContactIndex] = data
    dispatch(updateContactsArray(contacts))
}
export const saveNewContactRequest = (data) => async (dispatch, getState) => {
    const body = JSON.stringify(data)
    const promise = httpRequest(
        "POST",
        urls.contacts,
        body
    );
    promise.then(
        result => {
            console.log(result)
        },
        error => {
            console.log(error)
        }
    );
    let { contacts } = getState();
    data.id = contacts.length + 1;
    contacts.push(data)
    dispatch(updateContactsArray(contacts))
}

export const deleteContactRequest = (id) => async (dispatch, getState) => {
    const body = JSON.stringify(id)
    const promise = httpRequest(
        "DELETE",
        urls.contacts,
        body
    );
    promise.then(
        result => {
            console.log(result)
        },
        error => {
            console.log(error)
        }
    );
    let { contacts } = getState();
    let contactId = contacts.findIndex(x => x.id === id)
    contacts.splice(contactId, 1);
    dispatch(updateContactsArray(contacts))
}