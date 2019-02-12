import { createStore } from 'redux';
import meetingApp from './reducers';

const store = createStore(
    meetingApp, 
    window.__REDUX_DEVTOOLS_EXTENSION__ && window.__REDUX_DEVTOOLS_EXTENSION__());

export default store;