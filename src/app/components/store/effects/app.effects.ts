import { Injectable } from "@angular/core";
import { Actions, createEffect, ofType } from '@ngrx/effects';
import {  of } from "rxjs";
import { mergeMap, map, catchError } from 'rxjs/operators';
import { DemoService } from "src/app/services/demo.service";
import * as featureActions from '../action';

@Injectable()
export class AppEffects {

    constructor(private actions$: Actions, private apiService: DemoService) {}

    getServiceDetails$ = createEffect(() => this.actions$.pipe(
        ofType(featureActions.initialAction),
        mergeMap(() => this.apiService.getData().pipe(
            map((response) => featureActions.successAction({response})),
            catchError((error) => of(featureActions.failureAction({error})))
        ))
    ));
}