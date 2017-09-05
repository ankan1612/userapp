import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { UserService } from '../users.service';

import { Subscription } from 'rxjs';

@Component({
  templateUrl: './userdetails.component.html',
  styleUrls: ['./userdetails.component.css'],
  providers: [UserService]
})
export class UserDetailComponent implements OnInit{
  user: any = {};
  imgLoaded: boolean; 
  busy: Subscription;
  constructor(private route: ActivatedRoute, private userService: UserService) {
    this.imgLoaded = false;
  }
  
  ngOnInit(){
    this.route.params
                  .subscribe(
                      params => {
                                  this.busy = this.userService.getUsersById(params['id'])
                                    .subscribe(
                                        user => this.user = user,
                                        error => console.log(error)
                                    );
                            });
  }
}
