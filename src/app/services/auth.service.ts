import { Injectable } from '@angular/core';
import { delay, Observable, of, tap } from 'rxjs';

export interface UserMetaData {
    firstName: string;
    lastName: string;
    email: string;
    password: string;
}
@Injectable({
    providedIn: 'root'
})
export class AuthService {


    public get isAuthenticatedSession(): boolean {
        return this.authenticatedUser !== undefined;
    }
    public returnUrl: string;
    public get username(): string {
        return this.authenticatedUser;
    }
    private authenticatedUser: string;

    public logOut(): void {
        this.authenticatedUser = undefined;
    }

    public signup(userItem: UserMetaData) {
        localStorage.setItem(userItem.email, userItem.password);
    }

    public validateUserSession(userEmail: string, password: string) {
        let isValidLogin = false;
        if (localStorage.getItem(userEmail)) {
            isValidLogin = (password === localStorage.getItem(userEmail));
        }

        return of(isValidLogin).pipe(
            delay(1000),
            tap(() => this.authenticatedUser = userEmail)
        );
    }

}
