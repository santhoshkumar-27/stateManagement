import { createAction, props } from "@ngrx/store";

export const incrementAction = createAction('[Counter page] Increment');
export const decrementAction = createAction('[Counter page] Decrement');
export const resetAction = createAction('[Counter page] Reset');
export const customIncrementAction = createAction('[Counter page] CustomIncrement', props<{value: number}>());
export const customDecrementAction = createAction('[Counter page] CustomDecrement', props<{value: number}>());
export const changeProjectNameAction = createAction('[Counter page] ProjectName', props<{projectName: string}>());
export const projectNameReset = createAction('[Counter page] ProjecstName Reset');