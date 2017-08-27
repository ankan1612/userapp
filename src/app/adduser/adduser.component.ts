import { Component, ViewChild } from '@angular/core';
import { NgForm } from '@angular/forms';
import { Router } from '@angular/router';
import { NgbModal, NgbModalRef } from '@ng-bootstrap/ng-bootstrap';

import { UserService } from '../users.service';

@Component({
  templateUrl: './adduser.component.html',
  styleUrls: ['./adduser.component.css'],
  providers: [UserService]
})

export class AddUserComponent {
  @ViewChild('userForm') public userForm: NgForm;
  @ViewChild('content') public content;
  modalRef: NgbModalRef;
  user: User = new User;
  posteduser: any = {};
  constructor(private userService: UserService, private modalService: NgbModal, private router: Router) {
  }
  
  formSubmit(){
      this.userService.addUser(this.user)
              .subscribe(
                  _user => {
                      this.posteduser = _user
                      console.log(this.posteduser);
                      this.user = new User;
                      this.userForm.reset();
                      this.modalRef = this.openModal(this.content);
                  },
                  error => console.log(error)
                );
  }
  
  openModal(content): NgbModalRef{
     return this.modalService.open(content);
  }
  
  redirectTo(){
      this.router.navigateByUrl('/');
      this.modalRef.close();
  }
  
}

class User {
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
