import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { HttpModule } from '@angular/http';
import { RouterModule, Routes } from '@angular/router';
import { NgbModule } from '@ng-bootstrap/ng-bootstrap';
import { FormsModule } from '@angular/forms';
import { ActivatedRoute } from '@angular/router';

import { AppComponent } from './app.component';
import { WelcomeComponent } from './welcome/welcome.component';
import { UserListComponent } from './userlist/userlist.component';
import { AddUserComponent } from './adduser/adduser.component';
import { UserDetailComponent } from './userdetails/userdetails.component';
import { PageNotFoundComponent } from './pagenotfound/pagenotfound.component';

import { UserService } from './users.service';
import { OrderUserPipe } from './orderUsers.pipe';
import { FilterUserPipe } from './filterUsers.pipe';

const appRoutes: Routes = [
  { path: '', component: WelcomeComponent },
  { path: 'users', component: UserListComponent },
  { path: 'adduser', component: AddUserComponent },
  { path: 'users/:id', component: UserDetailComponent },
  { path: '', redirectTo: '', pathMatch: 'full' },
  { path: '**', component: PageNotFoundComponent }
];

@NgModule({
  declarations: [AppComponent, WelcomeComponent, PageNotFoundComponent, UserListComponent, AddUserComponent, UserDetailComponent, OrderUserPipe, FilterUserPipe],
  imports: [BrowserModule, NgbModule.forRoot(), HttpModule, FormsModule, RouterModule.forRoot(appRoutes, { useHash: true })],
  providers: [UserService],
  bootstrap: [AppComponent]
})
export class AppModule { }
