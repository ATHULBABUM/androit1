import { Injectable } from '@angular/core';
import {HttpClient} from '@angular/common/http';

import { from } from 'rxjs';
@Injectable({
  providedIn: 'root'
})
export class DataService {

  constructor(private http:HttpClient) { }

  addData(details){
    return this.http.post("http://localhost:3000/add-data/add",details);
  }
  getDatas(){
    return this.http.get("http://localhost:3000/add-data/get-data");
    // return [];
  }
}
