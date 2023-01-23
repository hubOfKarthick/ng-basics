import { Injectable } from '@angular/core';
import { CanActivate, CanActivateChild, ActivatedRouteSnapshot, RouterStateSnapshot } from '@angular/router';
import { Observable, timer } from 'rxjs';
import { map } from 'rxjs/operators';

@Injectable({
    providedIn: 'root'
})
export class AuthGuard implements CanActivate, CanActivateChild {
    canActivate(
        next: ActivatedRouteSnapshot,
        state: RouterStateSnapshot): Observable<boolean> | Promise<boolean> | boolean {
        return false;
    }
    canActivateChild(
        next: ActivatedRouteSnapshot,
        state: RouterStateSnapshot): Observable<boolean> | Promise<boolean> | boolean {
        return timer(2000).pipe(map(v => true));
    }
}
