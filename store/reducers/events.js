import { GET_ALL_EVENTS } from "../actions/events";
import { createReducer } from '@reduxjs/toolkit';

const initialState = {
    allEvents: [
        {
            eventId: '1',
            eventDate: '13 April 2020',
            eventTitle: 'Demo Event Kamu1'
        },
        {
            eventId: '2',
            eventDate: '13 April 2020',
            eventTitle: 'Demo Event Kamu2'
        },
        {
            eventId: '3',
            eventDate: '13 April 2020',
            eventTitle: 'Demo Event Kamu3'
        },

    ]
};

const eventReducer = createReducer(initialState, {
    [GET_ALL_EVENTS]: state => {
        return {
            ...state
        };
    }
})


export default eventReducer;