import { Component, OnInit } from '@angular/core';
import {Mediumprioritylist } from "../models/priority.model";

import { ServiceService } from  '../service.service';
import {Router} from '@angular/router';

@Component({
  selector: 'app-mediumprioritylist',
  templateUrl: './mediumprioritylist.component.html',
  styleUrls: ['./mediumprioritylist.component.css']
})
export class MediumprioritylistComponent implements OnInit {


  

  mediumprioritylist:Mediumprioritylist;

  constructor( private router: Router, private serviceService: ServiceService) { }

  ngOnInit() {

    this.serviceService.getMediumprioritylist()
    .subscribe( data => {
      this.mediumprioritylist = data ; 
      console.log(this.mediumprioritylist);
    })



  }

  getPrioritys(mediumprioritylist)
  {
    this.serviceService.setter(mediumprioritylist);
    this.router.navigate(['/mediumpriorityview']);
  }



//   gotopage()
// {
//   this.router.navigate(['/mediumpriorityview']);
// }

}
