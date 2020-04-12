import { createAction } from '@reduxjs/toolkit';

export const GET_ALL_EVENTS = 'GET_ALL_EVENTS';
export const ADD_NEW_EVENT = 'ADD_NEW_EVENT'

export const getAllEvents = createAction(GET_ALL_EVENTS);
export const addNewEvent = createAction(ADD_NEW_EVENT);