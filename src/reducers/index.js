import { combineReducers } from 'redux';

import LibraryReducer from './LibraryRecuder';
import SelectionReducer from './selectionReducer';
// import ActivateCloase from './activateCloseActions';

export default combineReducers({
    libraries: LibraryReducer,
    selectedLibraryId: SelectionReducer
    // docTest: ActivateCloase
});