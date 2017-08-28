import {Injectable} from '@angular/core';
import { Http } from '@angular/http';
import { Observable } from 'rxjs/Observable';
import 'rxjs/add/operator/catch';
import 'rxjs/add/operator/map';
import 'rxjs/add/observable/throw';

@Injectable()
export class UserService {
    
    constructor(private http: Http){}
    
    getUsers(): Observable<any[]> {
        return this.http.get('https://api.myjson.com/bins/y6f3x')
            .map(response => response.json())
            .catch(error => Observable.throw(error.statusText));
    }
    
    getUsersById(id: string): Observable<any[]> {
        return this.http.get(`https://api.myjson.com/bins/${id}`)
            .map(response => response.json())
            .catch(error => Observable.throw(error.statusText));
    }
    addUser(user: any): Observable<any[]> {
        return this.http.post('http://mocker.egen.io/users', user)
            .map(response => response.json())
            .catch(error => Observable.throw(error.statusText));
    } 
    
    
}