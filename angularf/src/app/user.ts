export class User {
  id: number;
  email: string;
  password: {
      pwd: string;
      conpwd: string;
  };
  gender:string;
  terms:string;
  constructor(value:Object= {}){
      Object.assign(this,value);
  }
}