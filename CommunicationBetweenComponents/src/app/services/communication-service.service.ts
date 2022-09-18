import { Injectable } from '@angular/core';
import { Subject } from 'rxjs';
import { Observable } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class CommunicationServiceService {

  private subject = new Subject();

  constructor() { }

  sendIncreaseOrDecreaseEvent(event: string) {
    this.subject.next(event);
  }

  getIncreaseOrDecreaseEvent(): Observable<any> {
    return this.subject.asObservable();
  }

}
