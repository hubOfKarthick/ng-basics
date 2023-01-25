import { Action, createReducer, on } from "@ngrx/store"
import * as featureActions from '../action';

export interface AppReducerState {
    myServiceResponse: null | any
}

export const initialAppState: AppReducerState = {
    myServiceResponse: null
}

const appReducer = createReducer(
    initialAppState,
    on(featureActions.initialAction, (state) => {
        return { ...state, myServiceResponse: null }
    }),
    on(featureActions.successAction, (state, { response }) => {
        return { ...state, myServiceResponse: response };
    }),
    on(featureActions.failureAction, (state, { error }) => {
        return { ...state, myServiceResponse: error }
    })
);

export function AppReducer(state: AppReducerState | undefined, action: Action) {
    return appReducer(state, action);
}