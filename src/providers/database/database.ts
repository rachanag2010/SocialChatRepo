import { Injectable } from '@angular/core';
import { Storage } from '@ionic/storage';

/*
  Generated class for the DatabaseProvider provider.

  See https://angular.io/guide/dependency-injection for more info on providers
  and Angular DI.
*/
@Injectable()
export class DatabaseProvider {


  private database: any;

  constructor(
    public storage: Storage
  ) {
    storage.get('db').then((db) => {
      if (db)
      {
        this.database = this.initDB();
        storage.set('db', this.database);
      }
      else {
        this.database = this.initDB();
        storage.set('db', this.database);
      }
    });
  }

  initDB() {
    return {
      users: [
        {
          name: "test1",
          password: "test1",
          email: "test1@test1.test1"
        },
        {
          name: "test2",
          password: "test2",
          email: "test2@test2.test2"
        },
        {
          name: "test3",
          password: "test3",
          email: "test3@test3.test3"
        },
        {
          name: "test4",
          password: "test4",
          email: "test4@test4.test4"
        },
        {
          name: "test5",
          password: "test5",
          email: "test5@test5.test5"
        }
      ],
      chats: [

      ]
    };
  }

  getAllUsers(){
    return new Promise((resolve) => {
      this.storage.get('db').then((db) => {
        resolve(db.users);
      })
    });
  }

  login( username, password){
    return new Promise((resolve) => {
      this.storage.get('db').then((db) => {        
        db.users.forEach(user => {     
          // console.log(user)
                if( user.name == username && user.password == password ){  
            resolve(user);            
          }
        });
        resolve(false);
      })
    });
  }


  CreateUser(identification: number, name: string, lastname: string) {

  }


  GetAllUsers() {

  }

}