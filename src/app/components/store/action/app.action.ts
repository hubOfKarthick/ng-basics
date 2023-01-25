import { createAction, props } from '@ngrx/store';

export const initialAction = createAction(
    '[App] Get Service Initial'
);
export const successAction = createAction(
    '[App] Get Service Success',
    props<{response: any}>()
);
export const failureAction = createAction(
    '[App] Get Service Failure',
    props<{error: any}>()
);
