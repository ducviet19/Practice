import { UserService } from './user.service';
import { CanActivate } from '@angular/router';
import { Injectable } from '@angular/core';
import { map, switchMap } from 'rxjs/operators';
import { AuthService } from './auth.service';
import { Observable } from 'rxjs/internal/Observable';
import { AppUser } from './models/app-user';

@Injectable()
export class AdminAuthGuardService implements CanActivate {

  constructor(private auth: AuthService , private userService: UserService) { }

  canActivate(): Observable<boolean> {
    return this.auth.appUser$.pipe(
       map(appUser => appUser.isAdmin));
 }

}
