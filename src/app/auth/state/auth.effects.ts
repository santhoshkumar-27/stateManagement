import { Injectable } from "@angular/core";
import { Actions, createEffect, ofType } from "@ngrx/effects";
import * as Auth from './auth.action';
import { exhaustMap, switchMap, map, catchError, debounceTime, mergeMap } from "rxjs/operators";
import { AuthService } from "src/app/shared/services/auth.service";
import { of } from "rxjs";
import { AppState } from "src/app/state/app.state";
import { Store } from "@ngrx/store";
import { errorEndAction, errorStartAction, loadingEndAction, loadingStartAction } from "src/app/shared/state/shared.action";
import { Router } from "@angular/router";
@Injectable()
export class AuthEffects {

    constructor(
        private action$: Actions,
        private authService: AuthService,
        private store: Store<AppState>,
        private router: Router,
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
                        this.authService.setUserInLocal({
                            userName: action.loginCredentials.userName,
                            password: action.loginCredentials.password
                        })
                        this.store.dispatch(loadingEndAction())
                        this.store.dispatch(errorStartAction({
                            error: {
                                message: 'Successfully logged in',
                                type: 'SUCCESS'
                            }
                        }))
                        return Auth.loginSuccessAction({ redirect: true })
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

    signUpUser$ = createEffect(() => this.action$.pipe(
        ofType(Auth.authSignupAction),
        exhaustMap((action) => {
            this.store.dispatch(loadingStartAction({ message: 'Sign-up in progress' }))
            return this.authService.
                signUpUser(action.userName, action.password)
                .pipe(
                    debounceTime(1000),
                    map((value) => {
                        this.authService.setUserInLocal({
                            userName: action.userName,
                            password: action.password
                        })
                        this.store.dispatch(loadingEndAction())
                        this.store.dispatch(errorStartAction({
                            error: {
                                message: 'Successfully Signed in',
                                type: 'SUCCESS'
                            }
                        }))
                        return Auth.signupSuccessAction({ redirect: true })
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
                        return of(Auth.signupFailedAction())
                    })
                )
        })
    ));

    loginRedirect$ = createEffect(() => {
        return this.action$.pipe(
            ofType(...[Auth.loginSuccessAction, Auth.signupSuccessAction]),
            map((action) => {
                return action.redirect ? this.router.navigate(['home']) : of(null)
            })
        )
    }, { dispatch: false });

    // signUpRedirect$ = createEffect(() => {
    //     return this.action$.pipe(
    //         ofType(Auth.signupSuccessAction),
    //         map((action) => this.router.navigate(['home']))
    //     )
    // }, { dispatch: false });
    autoLogin$ = createEffect(() => {
        return this.action$.pipe(
            ofType(Auth.autoLoginAction),
            map((action) => {
                this.store.dispatch(errorStartAction({
                    error: {
                        message: 'Successfully Signed in',
                        type: 'SUCCESS'
                    }
                }))
                return Auth.loginSuccessAction({redirect: action.redirect})
            })
        )
    })

    autoLogout$ = createEffect(() => {
        return this.action$.pipe(
            ofType(Auth.autoLogoutAction),
            map((action) => {
                this.authService.getUserClear();
                this.store.dispatch(errorStartAction({
                    error: {
                        message: 'Successfully logout',
                        type: 'SUCCESS'
                    }
                }))
                return this.router.navigate(['auth'])
            })
        )
    }, { dispatch: false })
}