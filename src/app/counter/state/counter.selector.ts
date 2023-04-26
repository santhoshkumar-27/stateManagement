import { createFeatureSelector, createSelector } from "@ngrx/store";
import { Counter } from "./counter.interface";

export const COUNTER_STATE_NAME = 'counter';
const getCounterState = createFeatureSelector<Counter>(COUNTER_STATE_NAME);

export const getCounter = createSelector(getCounterState, (state) =>  state.counter);

export const getProjectName = createSelector(getCounterState, (state) => state.projectName)
