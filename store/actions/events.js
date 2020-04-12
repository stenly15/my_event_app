import { createAction } from '@reduxjs/toolkit';

export const GET_ALL_EVENTS = 'GET_ALL_EVENTS';

export const getAllEvents = createAction(GET_ALL_EVENTS);