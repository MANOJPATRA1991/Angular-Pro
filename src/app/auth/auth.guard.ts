import { Injectable } from '@angular/core';
import { CanActivate, ActivatedRouteSnapshot, RouterStateSnapshot, CanLoad } from '@angular/router';
import { Observable } from 'rxjs';
import { AuthService } from './auth.service';

@Injectable()
export class AuthGuard implements CanLoad, CanActivate {
  constructor(
    private authService: AuthService
  ) {}

  canLoad() {
    return this.authService.checkPermissions();
  }

  canActivate() {
    return this.authService.isLoggedIn();
  }
}
