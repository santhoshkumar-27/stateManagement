import { Injectable } from "@angular/core";
import { Actions, createEffect, ofType } from "@ngrx/effects";
import * as Auth from './auth.action';
import { exhaustMap, switchMap, map, catchError, debounceTime } from "rxjs/operators";
import { AuthService } from "src/app/shared/services/auth.service";
import { of } from "rxjs";
@Injectable()
export class AuthEffects {

    constructor(
        private action$: Actions,
        private authService: AuthService,
    ) { }

    loginedUser$ = createEffect(() => this.action$.pipe(
        ofType(Auth.authLoginAction),
        exhaustMap((action) =>
            this.authService.
                loginUser(action.loginCredentials.userName, action.loginCredentials.password)
                .pipe(
                    debounceTime(1000),
                    map((value) => Auth.loginSuccessAction()),
                    catchError(() => of(Auth.loginFailedAction()))
                )
        )
    ));
}