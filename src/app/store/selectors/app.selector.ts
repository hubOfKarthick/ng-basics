import { createSelector } from '@ngrx/store';
import * as fromAppFeature from '../reducer';

export const appSelectorState = (state: fromAppFeature.AppState) => state.app;

export const getServiceResponse = createSelector(appSelectorState, state => state.myServiceResponse);
