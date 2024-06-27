import { Injectable } from '@angular/core';
import { BehaviorSubject, Observable } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class MenuService {

  private menuStateSubject: BehaviorSubject<boolean> = new BehaviorSubject<boolean>(false);
  public menuState$: Observable<boolean> = this.menuStateSubject.asObservable();

  constructor() {}

  toggleMenu(state?: boolean) {
    if (state !== undefined) {
      this.menuStateSubject.next(state);
    } else {
      this.menuStateSubject.next(!this.menuStateSubject.value);
    }
  }

  setMenuState(state: boolean) {
    this.menuStateSubject.next(state);
  }
}
