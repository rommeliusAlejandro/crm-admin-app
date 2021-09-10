import { Component, OnInit } from '@angular/core';
import {Router} from "@angular/router";
import {LocalStorageService} from "angular-web-storage";
import {UserService} from "../../integration/user.service";

@Component({
  selector: 'app-login-form',
  templateUrl: './login-form.component.html',
  styleUrls: ['./login-form.component.css']
})
export class LoginFormComponent implements OnInit {

  email!: string;
  password!: string;

  constructor(
    private readonly router: Router,
    private readonly usersService: UserService
  ) { }

  ngOnInit(): void {
  }

  login() {
    this.usersService.authenticate(this.email, this.password)
      .subscribe(session => {
        this.router.navigate(['/home'])
      });
  }

}
