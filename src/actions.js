


export const UPDATE_MEETINGS = 'UPDATE_MEETINGS'
export const UPDATE_USER = 'UPDATE_USER'

export function updateMeetings(meetings) {
    return { type: UPDATE_MEETINGS, meetings }
}

export function updateUser(user) {
    return { type: UPDATE_USER, user }
}