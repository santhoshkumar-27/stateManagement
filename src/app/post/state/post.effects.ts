import { Injectable } from "@angular/core";
import { Actions, createEffect, ofType } from "@ngrx/effects";
import * as Post from './post.action';
import { map, catchError, exhaustMap, filter, switchMap } from "rxjs/operators";
import { of } from "rxjs";
import { PostService } from "src/app/shared/services/post.service";
import { PostList } from "./post.interface";
import { AppState } from "src/app/state/app.state";
import { Store } from "@ngrx/store";
import { errorStartAction, loadingEndAction, loadingStartAction } from "src/app/shared/state/shared.action";
import { ROUTER_NAVIGATION, RouterNavigatedAction, RouterNavigationAction } from "@ngrx/router-store";
@Injectable()
export class PostEffects {
    constructor(
        private action$: Actions,
        private postService: PostService,
        private store: Store<AppState>,
    ) { }

    postLoad$ = createEffect(() => {
        return this.action$.pipe(
            ofType(Post.getPostListAction),
            exhaustMap((action) => {
                this.store.dispatch(loadingStartAction({ message: 'Post list in progress' }))
                return this.postService.getPostList().pipe(
                    map((data: PostList[]) => {
                        this.store.dispatch(loadingEndAction())
                        this.store.dispatch(errorStartAction({
                            error: {
                                message: 'Successfully loaded post list',
                                type: 'SUCCESS'
                            }
                        }))
                        return Post.loadPostListAction({ data })
                    }),
                    catchError(() => {
                        this.store.dispatch(loadingEndAction())
                        this.store.dispatch(errorStartAction({
                            error: {
                                message: 'Failed to logged in',
                                type: 'FAILURE'
                            }
                        }))
                        return of(Post.loadPostListFailedAction())
                    })
                )
            })
        )
    });

    getSinglePost$ = createEffect(() => {
        return this.action$.pipe(
            ofType(ROUTER_NAVIGATION),
            filter((r: RouterNavigatedAction) => {
                return r.payload.routerState.url.startsWith('/post/details')
            }),
            map((r: any) => {
                return r.payload.routerState['params']['id']
            }),
            switchMap((id) => {
                this.store.dispatch(loadingStartAction({ message: 'Post list in progress' }))
                return this.postService.getPostById(id).pipe(
                    map((data: PostList[]) => {
                        this.store.dispatch(loadingEndAction())
                        this.store.dispatch(errorStartAction({
                            error: {
                                message: 'Successfully loaded single post list',
                                type: 'SUCCESS'
                            }
                        }))
                        return Post.loadPostListAction({ data })
                    }),
                    catchError(() => {
                        this.store.dispatch(loadingEndAction())
                        this.store.dispatch(errorStartAction({
                            error: {
                                message: 'Failed to logged in',
                                type: 'FAILURE'
                            }
                        }))
                        return of(Post.loadPostListFailedAction())
                    })
                )
            })
        )
    })
}