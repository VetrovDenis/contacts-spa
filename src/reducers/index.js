import { persistCombineReducers } from 'redux-persist'
import contacts from "./manage-contact"
import storage from 'redux-persist/lib/storage'

const persistConfig = {
    key: 'root',
    storage,
}

export default persistCombineReducers(persistConfig, {
    contacts
})