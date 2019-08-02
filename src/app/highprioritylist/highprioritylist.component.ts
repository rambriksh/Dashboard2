import { Component, OnInit } from '@angular/core';
import { ServiceService } from  '../service.service';
import {Highprioritylist } from "../models/priority.model";
import {Router} from '@angular/router';

@Component({
  selector: 'app-highprioritylist',
  templateUrl: './highprioritylist.component.html',
  styleUrls: ['./highprioritylist.component.css']
})
export class HighprioritylistComponent implements OnInit {
  

  highprioritylist: Highprioritylist;

  constructor(private router: Router, private serviceService: ServiceService) { }

  ngOnInit() {

    this.serviceService.getHighprioritylist()
    .subscribe( data => {
      this.highprioritylist = data ; 
      console.log(this.highprioritylist);
    });
}
getPrioritys(highprioritylist)
{
  this.serviceService.setter(highprioritylist);
  this.router.navigate(['/highpriorityview']);
}


  }


