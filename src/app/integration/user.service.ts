import { Injectable } from '@angular/core';
import {LocalStorageService} from "angular-web-storage";
import {Session, User} from "./model/user.types";
import {AsyncSubject, Observable, of, Subject, throwError} from "rxjs";
import {HttpClient} from "@angular/common/http";
import {map, switchMap} from "rxjs/operators";

@Injectable({
  providedIn: 'root'
})
export class UserService {

  private sessionSubject: Subject<Session> = new AsyncSubject();

  constructor(
    private readonly localStorage: LocalStorageService,
    private readonly httpClient: HttpClient
  ) { }

  getSessionSubject():  Subject<Session>{
    return this.sessionSubject;
  }

  getSession(): Session {
    return this.localStorage.get('session');
  }

  private setSession(session: Session): void {
    this.localStorage.set('session', session);
    this.sessionSubject.next(session);
  }

  authenticate(email: string, password: string): Observable<Session> {
    return this.getUsers().pipe(
      switchMap(users => {
        const user = users.find(us => us.email === email && us.password === password);

        if(user) {
          const  session: Session = {
            user: user,
            token: btoa(`${user.email}:${user.password}`),
            sessionId: user.id
          }
          this.setSession(session);
          return of(session)
        }

        return throwError(`Cant authenticate ${email}:${password}`);
      })
    )
  }

  getUsers(): Observable<User[]> {
    return this.httpClient.get<User[]>('/api/users');
  }

}
