import { Component, OnInit } from '@angular/core';
import {Lowprioritylist} from "../models/priority.model";
import { ServiceService } from  '../service.service';
import {Router} from '@angular/router';

@Component({
  selector: 'app-lowprioritylist',
  templateUrl: './lowprioritylist.component.html',
  styleUrls: ['./lowprioritylist.component.css']
})
export class LowprioritylistComponent implements OnInit {


  lowprioritylist:Lowprioritylist;


  constructor(private router: Router,private serviceService: ServiceService) { }

  ngOnInit() {

    this.serviceService.getLowprioritylist()
    .subscribe( data => {
      this.lowprioritylist = data ; 
      console.log(this.lowprioritylist);
    })


  }


  getPrioritys(lowprioritylist)
  {
    this.serviceService.setter(lowprioritylist);
    this.router.navigate(['/lowpriorityview']);
  }
  



  // gotopage()
  // {
  //   this.router.navigate(['/lowpriorityview']);
  // }
  





}
