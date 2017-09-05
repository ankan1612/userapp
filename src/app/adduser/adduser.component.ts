import { Component, ViewChild } from '@angular/core';
import { NgForm } from '@angular/forms';
import { Router } from '@angular/router';
import { NgbModal, NgbModalRef } from '@ng-bootstrap/ng-bootstrap';

import { UserService } from '../users.service';

import * as _ from 'lodash';

@Component({
  templateUrl: './adduser.component.html',
  styleUrls: ['./adduser.component.css'],
  providers: [UserService]
})

export class AddUserComponent {
  @ViewChild('userForm') public userForm: NgForm;
  @ViewChild('content') public content;
  modalRef: NgbModalRef;
  users: any;
  user: User = new User;
  postedurl: any;
  postedid: string;
  constructor(private userService: UserService, private modalService: NgbModal, private router: Router){
      userService.getUsers()
               .subscribe(
                   users => this.users = users,
                   error => console.log(error)
                );
  };
  
  formSubmit(){
      this.userService.addUser(this.user)
              .subscribe(
                  _url => {
                      this.postedurl = _url;
                      let _uri: string[] = _.split(this.postedurl.uri, '/');
                      let _size: number =  _.size(_uri);
                      this.postedid = _uri[_size-1];
                      this.user.id = this.postedid;
                      this.userService.putUser(this.postedurl.uri, this.user)
                          .subscribe(
                              _user => {
                                  this.users = _.concat(this.users, _user);
                                  this.userService.putAllUsers(this.users)
                                      .subscribe(
                                          _users => {
                                            this.userForm.reset();
                                            this.modalRef = this.openModal(this.content);
                                          },
                                          _error => console.log(_error)
                                        );
                                },
                                _error => console.log(_error)
                            );
                  },
                  error => console.log(error)
                );
  }
  
  openModal(content): NgbModalRef{
     return this.modalService.open(content);
  }
  
  redirectTo(){
      this.router.navigateByUrl('users');
      this.modalRef.close();
  }
  
}

class User {
    id: string;
    firstName: string;
    lastName: string;
    email: string;
    address: {
        street: string,
        city: string,
        state: string,
        zip: string,
        country: string
    } = {} as any; 
    company: {
      name: string;
      website: string;
    } = {} as any;
}
