import { createAction, props } from "@ngrx/store";
import { LoadingInformation } from "./shared.interface";

const LOADING_START = '[Shared state] Loading start';
const LOADING_END = '[Shared state] Loading end';

export const loadingStartAction = createAction(LOADING_START, props<{message: string}>());
export const loadingEndAction = createAction(LOADING_END);