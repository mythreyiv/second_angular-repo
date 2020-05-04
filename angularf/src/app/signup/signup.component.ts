import { Component, OnInit } from '@angular/core';
import { User } from '../user';

@Component({
  selector: 'app-signup',
  templateUrl: './signup.component.html',
  styleUrls: ['./signup.component.css']
})
export class SignupComponent implements OnInit {

  constructor() { }
//Property of Gender
  gender: string[];
  //property of User
  user:User;
  ngOnInit(): void {
    this.gender=['Male','Female','Others'];
    this.user= new User({
     email:"",password: {pwd:"",conpwd:""},
     gender: this.gender[0],terms: false
    });
  }

}
