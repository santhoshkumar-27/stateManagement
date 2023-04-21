import { createAction } from "@ngrx/store";

const INCREMENT = 'INCREMENT';
const DECREMENT = 'DECREMENT';
const RESET = 'RESET';
export const incrementAction = createAction(INCREMENT);
export const decrementAction = createAction(DECREMENT);
export const resetAction = createAction(RESET);