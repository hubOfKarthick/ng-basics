import { Injectable } from "@angular/core";
import { select, Store } from "@ngrx/store";

import * as fromStore from '../store'; 

@Injectable()
export class AppSandbox {

    public GetServiceResponse$ = this.store.pipe(select(fromStore.getServiceResponse));

    constructor(private store: Store<fromStore.AppState>){}

    public callService() {
        this.store.dispatch(fromStore.initialAction());
    }
}