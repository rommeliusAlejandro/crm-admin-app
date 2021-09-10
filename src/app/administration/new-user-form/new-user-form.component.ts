import {ChangeDetectionStrategy, Component, EventEmitter, Input, OnInit, Output} from '@angular/core';
import {User} from "../../integration/model/user.types";

@Component({
  selector: 'app-new-user-form',
  templateUrl: './new-user-form.component.html',
  styleUrls: ['./new-user-form.component.css'],
  changeDetection: ChangeDetectionStrategy.OnPush
})
export class NewUserFormComponent implements OnInit {

  @Output()
  onSave: EventEmitter<User> = new EventEmitter();

  user: User = {
    id: '',
    email: '',
    password: '',
    firstName: '',
    lastName: ''
  };

  constructor() {}

  ngOnInit(): void {
  }

  createUser() {
    this.user.id = `${Math.random()}`
    this.onSave.emit(this.user);
  }

}
