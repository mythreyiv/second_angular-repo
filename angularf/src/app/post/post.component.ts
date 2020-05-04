import { Component, OnInit } from '@angular/core';
import { SharedService } from '../shared.service';
import { Observable } from 'rxjs';
import { Idata } from '../Idata';
//import { Idata } from './Idata';
@Component({
  selector: 'app-post',
  templateUrl: './post.component.html',
  styleUrls: ['./post.component.css']
})
export class PostComponent implements OnInit {
public response:Observable<Idata[]>
  
constructor(public service: SharedService) {
           this.response=this.service.getPosts();
   }

  ngOnInit(): void {
  }

}
