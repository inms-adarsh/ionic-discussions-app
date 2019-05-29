import { Injectable } from '@angular/core';
import { CanActivate } from '@angular/router';
import { select, Store } from '@ngrx/store';

import { Observable, of } from 'rxjs';
import { switchMap, catchError, tap, take, filter } from 'rxjs/operators';

import { State } from '../app.store';
import { LoadPostsAction } from './discussion.actions';
import { getPosts } from './discussion.selector';

@Injectable()
export class DiscussionsResolveGuard implements CanActivate {
    /**
    * Constructor
    *
    * @param {Store<State>} _store
    */
    constructor(private store: Store<State>) { }

    getFromStoreOrAPI(): Observable<any> {
        return this.store.pipe(
            select(getPosts),
            tap((data: any) => {
                this.store.dispatch(new LoadPostsAction({}));
            }),
            filter((data: any) => data.length),
            take(1)
        );
    }

    /**
    * Can activate
    *
    * @returns {Observable<boolean>}
    */
    canActivate(): Observable<boolean> {
        return this.getFromStoreOrAPI().pipe(
            switchMap(() => of(true)),
            catchError(() => of(false))
        );
    }
}
