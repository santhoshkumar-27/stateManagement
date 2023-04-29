import { Injectable } from "@angular/core";
import { Actions, createEffect, ofType } from "@ngrx/effects";
import * as Auth from './auth.action';
import { exhaustMap, switchMap, map, catchError, debounceTime } from "rxjs/operators";
import { AuthService } from "src/app/shared/services/auth.service";
import { of } from "rxjs";
import { AppState } from "src/app/state/app.state";
import { Store } from "@ngrx/store";
import { errorEndAction, errorStartAction, loadingEndAction, loadingStartAction } from "src/app/shared/state/shared.action";
@Injectable()
export class AuthEffects {

    constructor(
        private action$: Actions,
        private authService: AuthService,
        private store: Store<AppState>
    ) { }

    loginedUser$ = createEffect(() => this.action$.pipe(
        ofType(Auth.authLoginAction),
        exhaustMap((action) => {
            this.store.dispatch(loadingStartAction({ message: 'Logging in progress' }))
            return this.authService.
                loginUser(action.loginCredentials.userName, action.loginCredentials.password)
                .pipe(
                    debounceTime(1000),
                    map((value) => {
                        this.store.dispatch(loadingEndAction())
                        this.store.dispatch(errorStartAction({
                            error: {
                                message: 'Successfully logged in',
                                type: 'SUCCESS'
                            }
                        }))
                        return Auth.loginSuccessAction()
                    }
                    ),
                    catchError(() => {
                        this.store.dispatch(loadingEndAction())
                        this.store.dispatch(errorStartAction({
                            error: {
                                message: 'Failed to logged in',
                                type: 'FAILURE'
                            }
                        }))
                        return of(Auth.loginFailedAction())
                    })
                )
        })
    ));
}