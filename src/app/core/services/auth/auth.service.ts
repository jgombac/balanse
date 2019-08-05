import { Injectable } from '@angular/core';
import { ILogin, User } from '../../models/user.model';
import { Observable, of, throwError } from 'rxjs';
import { normalUser } from '../../mocks/user.mock';
import { CookieService } from 'ngx-cookie-service';


@Injectable({
  providedIn: 'root'
})
export class AuthService {

  private userTokenName = 'auth';

  get token(): string { return this.cookies.get(this.userTokenName); }
  set token(value: string) { this.cookies.set(this.userTokenName, value); }

  private testUser = normalUser;

  constructor(
    private cookies: CookieService
  ) { }

  isAuthenticated(): boolean {
    const cookie = this.token;
    return !!cookie;
  }

  login(data: ILogin): Observable<User> {
    if (data.username === this.testUser.username &&
      data.password === this.testUser.password) {
        this.token = this.testUser.token;
        return of(this.testUser);
      }
    return throwError('Invalid username or password');
  }

  logout(): Observable<boolean> {
    this.cookies.delete(this.userTokenName);
    return of(true);
  }

}
