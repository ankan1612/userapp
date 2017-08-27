import {Pipe, PipeTransform} from '@angular/core';
import * as _ from 'lodash';
 
@Pipe({
    name: 'filterBy',
    pure: false
})
export class FilterUserPipe implements PipeTransform {
  transform(users: any, toSearch: any): any {
    return users.filter(function(user){
        if(toSearch.criteria==='all'){
            user = JSON.stringify(user);
        }
        else{
            let params: Array<string> = _.split(toSearch.criteria,'.');
            user = _.size(params)>1 ? user[params[0]][params[1]] : user[params[0]];
        }
        return user.toLowerCase().indexOf(toSearch.searchText.toLowerCase()) > -1;
    })
  }
}