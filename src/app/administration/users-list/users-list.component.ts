import {Component, ComponentFactoryResolver, OnInit, ViewChild, ViewContainerRef} from '@angular/core';
import {User} from "../../integration/model/user.types";
import {UserService} from "../../integration/user.service";
import {NewUserFormComponent} from "../new-user-form/new-user-form.component";

@Component({
  selector: 'app-users-list',
  templateUrl: './users-list.component.html',
  styleUrls: ['./users-list.component.css']
})
export class UsersListComponent implements OnInit {

  users: User[] = [];

  @ViewChild('newUserForm', {read: ViewContainerRef})
  private container!: ViewContainerRef;

  constructor(
    private readonly usersService: UserService,
    private readonly componentFactoryResolver: ComponentFactoryResolver
  ) {

    this.usersService.getUsers().subscribe(
      next => this.users = next
    );

  }

  ngOnInit(): void {
  }

  openAddUser() {
    this.container.clear();
    const factory = this.componentFactoryResolver.resolveComponentFactory<NewUserFormComponent>(NewUserFormComponent);
    const component = this.container.createComponent(factory);

    let lastId = this.users.length;
    component.instance.lastId = lastId +1 ;
    component.instance.onSave.subscribe(
      (next: User) => {
        console.log(next);
        if(!next) {
          return;
        }
        this.users.push(next);
        this.container.clear()
      }
    );
  }

}
