import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class UserService {

  constructor() { }

  filterdata: any = [];

  get data(): any{
    return this.filterdata;
  }

  set data(val: any){
    this.filterdata = val;
    console.log(this.filterdata);
  }
  
}
