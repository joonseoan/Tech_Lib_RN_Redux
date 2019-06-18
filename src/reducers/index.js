import { combineReducers } from 'redux';

import LibraryReducer from './LibraryRecuder';

export default combineReducers({
    libraries: LibraryReducer
});