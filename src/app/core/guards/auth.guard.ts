import { Injectable } from '@angular/core';
import { CanActivate, Router } from '@angular/router';
import { AuthService } from '../services/auth/auth.service';

@Injectable()
export class AuthGuard implements CanActivate {

    constructor(
        private auth: AuthService,
        private router: Router
    ) {}

    canActivate(): boolean | Promise<boolean> {
        const authenticated = this.auth.isAuthenticated();
        if (!authenticated) {
            this.router.navigate(['/login']);
        }
        return authenticated;
    }
}
