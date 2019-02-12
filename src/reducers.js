import { 
    UPDATE_MEETINGS,
    UPDATE_USER 
} from './actions';

const initialState = {
    meetings: [],
    user: {}
}

function meetingApp(state = initialState, action) {

    switch(action.type) {
        case UPDATE_USER:
            return {
                ...state,
                user: action.user
            }
        case UPDATE_MEETINGS:
            return {
                ...state,
                meetings: action.meetings
            }
        default:
            return state
    }
}

export default meetingApp;