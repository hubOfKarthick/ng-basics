import { Injectable } from '@angular/core';
import {
    ActivatedRouteSnapshot,
    CanActivate,
    Router,
    RouterStateSnapshot,
} from '@angular/router';
import { AuthService } from '../services/auth.service';
import { DemoService } from '../services/demo.service';


@Injectable()
export class AuthenticationGuard implements CanActivate {
    constructor(
        private readonly authService: AuthService,
        private readonly router: Router) { }

    public canActivate(_, routerState: RouterStateSnapshot): boolean {
        return this.verifyLogin(routerState.url);
    }

    public verifyLogin(returnUrl: string): boolean {
        if (this.authService.isAuthenticatedSession) {
            return true;
        }

        this.authService.returnUrl = returnUrl;

        this.navigateToLoginPage();

        return false;
    }

    private navigateToLoginPage(): Promise<boolean> {
        return this.router.navigateByUrl('/login');
    }
}
