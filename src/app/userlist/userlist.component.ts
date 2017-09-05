import { Component, OnInit } from '@angular/core';

import { UserService } from '../users.service';

import { Subscription } from 'rxjs';

@Component({
  templateUrl: './userlist.component.html',
  styleUrls: ['./userlist.component.css'],
  providers: [UserService]
})
export class UserListComponent implements OnInit {
  busy: Subscription;
  imgLoaded: any = {};
  isDesc: boolean = false;
  column: any;
  direction: number;
  users: any = [];
  otherOptions: string[] = ['All','Name','Email','Company','State'];
  searchOptions: any = {
    'All' : 'all',
    'Name' : 'firstName',
    'Email' : 'email',
    'Company' : 'company.name',
    'State' : 'address.state'
  };
  selected: string = this.otherOptions[0];
  toSearch: any = {};
  constructor(private userService: UserService) {
    this.toSearch.criteria = this.searchOptions[this.selected];
    this.toSearch.searchText='';
  };
  
  ngOnInit(){
    this.getUser(); 
  }
  
  getUser(){
    this.busy = this.userService.getUsers()
     .subscribe(
         users => {
           this.users = users;
           this.users.forEach(u => this.imgLoaded[u.id] = false);
         },
         error => console.log(error)
      );
  }
  
  sort(property: string){
    this.isDesc = !this.isDesc; 
    this.column = property;
    this.direction = this.isDesc ? 1 : -1;
  };
  
  changeOption(option: string){
    this.selected = option;
    this.toSearch.criteria = this.searchOptions[this.selected];
  };
  
  resetUser(){
    let _users: any[] = [
                          {
                              "id": "qz2ot",
                              "firstName": "Lavonne",
                              "lastName": "Dicki",
                              "email": "Queenie_Will@yahoo.com",
                              "address": {
                                  "street": "506 Skiles Lane",
                                  "city": "South Malcolmland",
                                  "zip": "38078",
                                  "state": "TX",
                                  "country": "USA"
                              },
                              "dateCreated": "2017-08-26T15:46:47.281Z",
                              "company": {
                                  "name": "Ferry Group",
                                  "website": "https://gilberto.net"
                              },
                              "profilePic": "http://lorempixel.com/640/480/sports"
                          },
                          {
                              "id": "671od",
                              "firstName": "Helen",
                              "lastName": "Legros",
                              "email": "Joesph_Emard64@gmail.com",
                              "address": {
                                  "street": "452 Hegmann Unions",
                                  "city": "North Issacborough",
                                  "zip": "44659",
                                  "state": "SD",
                                  "country": "USA"
                              },
                              "dateCreated": "2017-08-27T06:26:17.032Z",
                              "company": {
                                  "name": "Greenfelder - Hudson",
                                  "website": "https://genevieve.com"
                              },
                              "profilePic": "http://lorempixel.com/640/480/animals"
                          },
                          {
                              "id": "qfs8t",
                              "firstName": "Kraig",
                              "lastName": "Leffler",
                              "email": "Lexus.Jerde83@yahoo.com",
                              "address": {
                                  "street": "827 Kautzer Course",
                                  "city": "Tillmanchester",
                                  "zip": "46175-3979",
                                  "state": "SC",
                                  "country": "USA"
                              },
                              "dateCreated": "2017-08-26T12:05:39.616Z",
                              "company": {
                                  "name": "Huel and Sons",
                                  "website": "http://kiana.biz"
                              },
                              "profilePic": "http://lorempixel.com/640/480/business"
                          },
                          {
                              "id": "r17ul",
                              "firstName": "Earline",
                              "lastName": "Balistreri",
                              "email": "Kiley_Mayert@gmail.com",
                              "address": {
                                  "street": "99534 Baumbach Club",
                                  "city": "South Adalberto",
                                  "zip": "26240-6814",
                                  "state": "IN",
                                  "country": "USA"
                              },
                              "dateCreated": "2017-08-26T21:31:20.941Z",
                              "company": {
                                  "name": "Block - Yundt",
                                  "website": "http://brandi.name"
                              },
                              "profilePic": "http://lorempixel.com/640/480/fashion"
                          },
                          {
                              "id": "19o331",
                              "firstName": "Shakira",
                              "lastName": "Zulauf",
                              "email": "Judge76@yahoo.com",
                              "address": {
                                  "street": "64126 Cristobal Street",
                                  "city": "Osbaldoton",
                                  "zip": "81569-3029",
                                  "state": "RI",
                                  "country": "USA"
                              },
                              "dateCreated": "2017-08-27T00:15:11.247Z",
                              "company": {
                                  "name": "Jast - Purdy",
                                  "website": "http://josiane.biz"
                              },
                              "profilePic": "http://lorempixel.com/640/480/nature"
                          },
                          {
                              "id": "14b6n1",
                              "firstName": "Ora",
                              "lastName": "Hoppe",
                              "email": "Keanu_Schiller75@yahoo.com",
                              "address": {
                                  "street": "792 Grant Villages",
                                  "city": "Lauramouth",
                                  "zip": "85246-8624",
                                  "state": "NC",
                                  "country": "USA"
                              },
                              "dateCreated": "2017-08-26T18:31:03.451Z",
                              "company": {
                                  "name": "Thompson - Mertz",
                                  "website": "http://katelin.net"
                              },
                              "profilePic": "http://lorempixel.com/640/480/nightlife"
                          },
                          {
                              "id": "1auyal",
                              "firstName": "Marcelino",
                              "lastName": "Wyman",
                              "email": "Zander.Funk@hotmail.com",
                              "address": {
                                  "street": "248 D'Amore Stream",
                                  "city": "South Veda",
                                  "zip": "18358",
                                  "state": "KY",
                                  "country": "USA"
                              },
                              "dateCreated": "2017-08-27T00:54:52.549Z",
                              "company": {
                                  "name": "Johnston, Beier and Bradtke",
                                  "website": "http://mariano.biz"
                              },
                              "profilePic": "http://lorempixel.com/640/480/food"
                          },
                          {
                              "id": "tldr1",
                              "firstName": "Lucy",
                              "lastName": "Ebert",
                              "email": "Dora_Cartwright21@hotmail.com",
                              "address": {
                                  "street": "883 Welch Trail",
                                  "city": "South Jackson",
                                  "zip": "98576",
                                  "state": "CO",
                                  "country": "USA"
                              },
                              "dateCreated": "2017-08-26T23:08:35.209Z",
                              "company": {
                                  "name": "Homenick Group",
                                  "website": "http://zachery.info"
                              },
                              "profilePic": "http://lorempixel.com/640/480/nightlife"
                          },
                          {
                              "id": "10sq65",
                              "firstName": "Rhett",
                              "lastName": "Cronin",
                              "email": "Jean7@hotmail.com",
                              "address": {
                                  "street": "4063 Bauch Islands",
                                  "city": "Belleland",
                                  "zip": "66951-2719",
                                  "state": "WI",
                                  "country": "USA"
                              },
                              "dateCreated": "2017-08-27T00:08:04.203Z",
                              "company": {
                                  "name": "Bergnaum Inc",
                                  "website": "http://nathen.org"
                              },
                              "profilePic": "http://lorempixel.com/640/480/nature"
                          },
                          {
                              "id": "9escd",
                              "firstName": "Jalon",
                              "lastName": "Schmeler",
                              "email": "Abigayle96@yahoo.com",
                              "address": {
                                  "street": "8468 Armstrong Ramp",
                                  "city": "South Lisa",
                                  "zip": "88331-9840",
                                  "state": "HI",
                                  "country": "USA"
                              },
                              "dateCreated": "2017-08-27T01:18:35.814Z",
                              "company": {
                                  "name": "Gerhold LLC",
                                  "website": "https://cordia.org"
                              },
                              "profilePic": "http://lorempixel.com/640/480/business"
                          }
                        ];
    this.userService.putAllUsers(_users)
      .subscribe(
          _u => {
            this.getUser();
          },
          _error => console.log(_error)
        );
  };
  
}
