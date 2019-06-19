export default (state='well...', action) => {

    if(action.type === 'ACTIVATE_ACTION') {
        return action.payload;
    } else if (action.type === 'CLOSE_ACTION') {
        return action.payload;
    } else {
        return state;
    }
}