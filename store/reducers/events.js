import { GET_ALL_EVENTS, ADD_NEW_EVENT } from "../actions/events";
import { createReducer } from '@reduxjs/toolkit';

const initialState = {
    allEvents: []
};

const eventReducer = createReducer(initialState, {
    [GET_ALL_EVENTS]: state => {
        return {
            ...state
        };
    },
    [ADD_NEW_EVENT]: (state, action) => {
        const {
            eventId,
            eventDate,
            eventTitle,
            eventCountDown
        } = action.payload;

        let eventItem = {
            eventId,
            eventDate,
            eventTitle,
            eventCountDown
        }
        console.log(eventItem);

        return {
            ...state,
            allEvents: [...state.allEvents, eventItem],
        };
    }
})


export default eventReducer;