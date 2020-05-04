import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs';
import { Id } from './Id';

@Injectable({
  providedIn: 'root'
})
export class EmpService {

  constructor(private httpsc:HttpClient) { }
  public getposts():Observable<Id[]>
  {
    return this.httpsc.get<any[]>
    ('http://dummy.restapiexample.com/api/v1/employees')
    
    
}
  }
  
  

