import { ActionReducerMap, createFeatureSelector } from "@ngrx/store"
import * as fromAppReducer from './app.reducer';
export interface AppState {
    app: fromAppReducer.AppReducerState
}

export const appReducers: ActionReducerMap<AppState> = {
    app: fromAppReducer.AppReducer
};

export const selectAppState = createFeatureSelector<AppState>('appReducers');