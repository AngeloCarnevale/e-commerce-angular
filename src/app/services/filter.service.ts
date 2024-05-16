import { HttpClient, HttpHeaders } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { BehaviorSubject } from 'rxjs';

@Injectable({
  providedIn: 'root',
})
export class FilterService {
  private isCheckedSubject = new BehaviorSubject<string>("")
  isChecked$ = this.isCheckedSubject.asObservable()

  setIsChecked(value: string) {
    this.isCheckedSubject.next(value)
  }

}
