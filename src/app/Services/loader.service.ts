import { Injectable, signal } from '@angular/core';
import { BehaviorSubject, Observable } from 'rxjs';

@Injectable({
  providedIn: 'root',
})
export class LoaderService {
  constructor() {}
  public isLoading$: boolean = false;
  show() {
    this.isLoading$ = true;
  }

  hide() {
    this.isLoading$ = false;
  }
}
