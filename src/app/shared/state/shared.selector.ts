import { createFeature, createFeatureSelector, createSelector } from "@ngrx/store";
import { SharedState } from "./shared.interface";
import { SHARED_STATE_NAME } from "./shared.state";

const sharedState = createFeatureSelector<SharedState>(SHARED_STATE_NAME);

export const sharedLoadingSelector = createSelector(sharedState, (state) => state.loadingInformation)