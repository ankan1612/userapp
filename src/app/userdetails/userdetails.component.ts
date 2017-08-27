import { Component } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { UserService } from '../users.service'

@Component({
  templateUrl: './userdetails.component.html',
  styleUrls: ['./userdetails.component.css'],
  providers: [UserService]
})
export class UserDetailComponent {
  user: any = {};
  constructor(private route: ActivatedRoute, private userService: UserService) {
    this.route.params.subscribe(
                params => {
                      userService.getUsersById(params['id'])
                            .subscribe(
                              user => this.user = user,
                              error => console.log(error)
                            );
                });
  }
}
