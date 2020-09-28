import { Injectable } from '@angular/core';
import { BehaviorSubject, Observable } from 'rxjs';
import { distinctUntilChanged, map } from 'rxjs/operators';

export interface AppState {
  mobileNavMenuIsOpen: boolean;
  lang?: Language;
}

export enum Language {
  'AR' = 'AR',
  'EN' = 'EN',
}

export const initialState: AppState = {
  mobileNavMenuIsOpen: false,
};

@Injectable({ providedIn: 'root' })
export class StateService {
  private state: AppState = initialState;
  private readonly stateSubject = new BehaviorSubject<AppState>(initialState);

  constructor() {
    const defaultLanguage = localStorage.getItem('defaultLang');
    if (defaultLanguage) {
      this.state.lang = defaultLanguage as Language;
      this.stateSubject.next(this.state);
    }

    if (typeof window !== 'undefined') {
      Object.defineProperty(window, 'appState', {
        get: () => this.stateSubject.value,
      });
    }
  }

  setState<T extends keyof AppState>(key: T, value: AppState[T]) {
    this.state[key] = value;
    this.stateSubject.next(this.state);
  }

  select<R>(selector: (state: AppState) => R): Observable<R> {
    return this.stateSubject.pipe(map(selector), distinctUntilChanged());
  }
}
