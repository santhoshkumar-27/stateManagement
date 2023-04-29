import { createAction, props } from "@ngrx/store";
import { error } from "./shared.interface";

const LOADING_START = '[Shared state] Loading start';
const LOADING_END = '[Shared state] Loading end';
const ERROR_START = '[Shared state] error start';
const ERROR_END = '[Shared state] error end';
export const loadingStartAction = createAction(LOADING_START, props<{ message: string }>());
export const loadingEndAction = createAction(LOADING_END);
export const errorStartAction = createAction(ERROR_START, props<{ error: error }>());
export const errorEndAction = createAction(ERROR_END);
