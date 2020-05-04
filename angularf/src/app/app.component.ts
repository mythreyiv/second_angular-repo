import { Component } from '@angular/core';
import { HttpClientModule, HttpClient } from '@angular/common/http';


@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
 /* title = 'angularf';
  todaydate = new Date();
  jsonval = {name : 'Mark', age : '25', address : {a1 : 'london', a2 : 'australia'}};
   months = [' jan ' , ' feb ' , ' march ' , ' april ' , ' may ' ,  ' june ' , ' july ' , ' august ' , 
   ' sept ' , ' oct ' , ' nov ' , ' dec '];
   username = 'madame';*/

   //30-03-2020 http methods
   //using promisemethod
title='app';   
   results='';
constructor(private http:HttpClient){}
ngOnInit():void{
 /* this.http.get(`https://swapi.co/api/people/?search=ab`).toPromise()
  .then((data:any) => {
    this.results=data.results;
    console.log(this.results);
     
  });*/

  //using observable method

 /* this.http.get(`https://api.github.com/users/abdullah`).subscribe(data =>{
    console.log(data);
  });*/

//to extract specific data from the api

/*this.http.get<UserR>(`https://api.github.com/users/abdullah`)
.subscribe(data =>{
    console.log(data.bio);
    console.log(data.login);
    console.log(data.company);

  },
  err=>{
    console.log("error");
  }
  );*/
  //http post
  /*const req=this.http.post('http://jsonplaceholder.typicode.com/posts',
  {
  title:'foosdfs',
  body:'bar',
  userid:1
  }
  )

  .subscribe(res =>{
    
      console.log(res);
    },
    err =>{
      console.log("error");
    }
  );
}*/

//http delete

/*const reqq=this.http.delete(`http://dummy.restapiexample.com/api/v1/delete/1`)
.subscribe(res =>{
    
  console.log(res);
},
err =>{
  console.log("error");
}
);
}*/

//http put
/*this.http.put('http://dummy.restapiexample.com/api/v1/update/25',
  {
  "name":"test1",
  "salary":"1234",
  "age":"23"
  }
  )

  .subscribe(res =>{
    
      console.log(res);
    },
    err =>{
      console.log("error");
    }
  );*/
}


}
