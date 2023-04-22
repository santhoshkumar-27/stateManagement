import { createFeatureSelector, createSelector } from "@ngrx/store";
import { Counter } from "./counter.interface";

const getCounterState = createFeatureSelector<Counter>('counter');

export const getCounter = createSelector(getCounterState, (state) =>  state.counter);

export const getProjectName = createSelector(getCounterState, (state) => state.projectName)
