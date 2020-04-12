import { GET_ALL_EVENTS, ADD_NEW_EVENT } from "../actions/events";
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
        {
            eventId: '4',
            eventDate: '13 April 2020',
            eventTitle: 'Demo Event Kamu4'
        },
        {
            eventId: '5',
            eventDate: '13 April 2020',
            eventTitle: 'Demo Event Kamu5'
        }
    ]
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
            eventTitle
        } = action.payload;

        let eventItem = {
            eventId,
            eventDate,
            eventTitle
        }

        return {
            ...state,
            allEvents: { ...state.allEvents, eventItem },
        };
    }
})


export default eventReducer;