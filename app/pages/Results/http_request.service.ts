import {HttpModule, Http} from '@angular/http';
import {Injectable} from '@angular/core';
import 'rxjs/add/operator/map';

@Injectable()


export class HttpRequest {
    private _url = "http://10.1.11.4/automation/api.php/Sizing?transform=1";
 //   private _url = "http://jsonplaceholder.typicode.com/users";
  
    constructor (private _http: Http){
    }

    getRequest(filter?: any, page?: number){
        
        var url = this._url;
        var _page: string;
        var _order: string = "&filter[]=TestStatus,eq,success&order=RunDate,desc";

        if (page)
            _page = "&page=" + page;
        else   
            _page="";        

        if (filter)
            url = this._url + filter;

  console.log (url + _order + _page);
        return this._http.get(url + _order + _page) 
           .map(res => res.json());     
    }


    postRequest(post?: any){
        return this._http.post(this._url, JSON.stringify(post))
            .map(res => res.json());
    }
 
}