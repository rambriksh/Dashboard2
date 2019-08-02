import { Injectable } from '@angular/core';
import { HttpClient, HttpHeaders } from '@angular/common/http';
import {Highprioritylist } from "./models/priority.model";
import {Mediumprioritylist } from "./models/priority.model";
import {Lowprioritylist } from "./models/priority.model";

const httpOptions = {
  headers: new HttpHeaders({ 'Content-Type': 'application/json' })
};


@Injectable()
export class ServiceService {

  constructor(private http:HttpClient) {}
private  highprioritylist: Highprioritylist;
 
  //private customerUrl = 'http://localhost:8002/customerIssue';
  //private userUrl = '/api';

  public getHighprioritylist() {
    return this.http.get<Highprioritylist>('http://localhost:1342/145/prioritys');
  }

  public getMediumprioritylist() {
    return this.http.get<Mediumprioritylist>('http://localhost:1342/145/MediumPriority');
  }


   
  public getLowprioritylist() {
    return this.http.get<Lowprioritylist>('http://localhost:1342/145/LowPriority');
  }


  public getPrioritys(highprioritylist) {
    return this.http.get<Highprioritylist>('http://localhost:1342/145/getPrioritys/'+ highprioritylist.priority_Id);
  }

   


public setter( highprioritylist: Highprioritylist)
{
  this.highprioritylist=highprioritylist;
  
}

public getter()
{
  return this.highprioritylist;
  
}


public updatePriority(highprioritylist) {
  return this.http.put<Highprioritylist>('http://localhost:1342/145/updatePriority', highprioritylist);
}

   

}

