import { Component, OnInit } from '@angular/core';
import { EmpService } from '../emp.service';
import { Observable } from 'rxjs';
import { Id } from '../Id';

@Component({
  selector: 'app-employee',
  templateUrl: './employee.component.html',
  styleUrls: ['./employee.component.css']
})
export class EmployeeComponent implements OnInit {
public respon:any;
  constructor(public servic:EmpService) {
this.respon=this.servic.getposts().toPromise()
.then((result:any)=>{
this.respon=result.data;
});

   }

  ngOnInit(): void {
  }

}
