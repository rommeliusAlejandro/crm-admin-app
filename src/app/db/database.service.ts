import { Injectable } from '@angular/core';
import {InMemoryDbService} from "angular-in-memory-web-api";

@Injectable({
  providedIn: 'root'
})
export class DatabaseService implements InMemoryDbService {

  constructor() { }

  createDb(): {}  {
    return {
      users: [
        {
          id: '1',
          firstName: 'Rommel',
          lastName: 'Loayza',
          email: 'rommel.lexlara@gmail.com',
          password: 'Password1!'
        }
      ]
    };
  }


}
