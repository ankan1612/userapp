import {Pipe, PipeTransform} from '@angular/core';
import * as _ from 'lodash';

@Pipe({  name: 'orderBy' })
export class OrderUserPipe implements PipeTransform {

  transform(records: Array<any>, args?: any): any {
    
    return records.sort((a, b) => {
        
            let params: Array<string> = _.split(args.property,'.');
            let key1: string;
            let key2: string;
            if(_.size(params)>1){
                key1 = a[params[0]][params[1]];
                key2 = b[params[0]][params[1]];
            }
            else{
                 key1 = a[params[0]];
                key2 = b[params[0]];
            }
            if(key1 < key2){
                return -1 * args.direction;
            }
            else if( key1 > key2){
                return 1 * args.direction;
            }
            else{
                return 0;
            }
            
        });
    };
}
