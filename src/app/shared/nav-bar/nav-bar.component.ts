import {Component, OnDestroy, OnInit} from '@angular/core';
import {UserService} from "../../integration/user.service";
import {Session} from "../../integration/model/user.types";
import {AsyncSubject, Subject} from "rxjs";
import {LocalStorageService} from "angular-web-storage";

@Component({
  selector: 'app-nav-bar',
  templateUrl: './nav-bar.component.html',
  styleUrls: ['./nav-bar.component.css']
})
export class NavBarComponent implements OnInit, OnDestroy {

  session!: Session;

  sessionSubject: Subject<Session> = new AsyncSubject();

  constructor(
    private readonly userService: UserService,
  ) {

    this.session = this.userService.getSession();
    this.sessionSubject = this.userService.getSessionSubject();
    this.sessionSubject.subscribe(session => this.session = session);

  }

  ngOnDestroy() {
    this.sessionSubject.unsubscribe();
  }

  ngOnInit(): void {
  }

}
