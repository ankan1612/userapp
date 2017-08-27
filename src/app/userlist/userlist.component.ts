import { Component } from '@angular/core';

import { UserService } from '../users.service'

@Component({
  templateUrl: './userlist.component.html',
  styleUrls: ['./userlist.component.css'],
  providers: [UserService]
})
export class UserListComponent {
  
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
    userService.getUsers()
               .subscribe(
                   users => this.users = users,
                   error => console.log(error)
                );
  };
  
  sort(property: string){
    this.isDesc = !this.isDesc; 
    this.column = property;
    this.direction = this.isDesc ? 1 : -1;
  };
  
  changeOption(option: string){
    this.selected = option;
    this.toSearch.criteria = this.searchOptions[this.selected];
  };
  
}
