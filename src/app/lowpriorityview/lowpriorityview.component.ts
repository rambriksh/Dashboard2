import { Component, OnInit } from '@angular/core';
import { ServiceService } from '../service.service';
import {Lowprioritylist} from "../models/priority.model";
import { NgForm } from '@angular/forms';

@Component({
  selector: 'app-lowpriorityview',
  templateUrl: './lowpriorityview.component.html',
  styleUrls: ['./lowpriorityview.component.css']
})
export class LowpriorityviewComponent implements OnInit {

  lowprioritylist:Lowprioritylist;

// solution = ["under process","complated"];
  constructor(private serviceService:ServiceService) { }

  ngOnInit() {
    this.lowprioritylist=this.serviceService.getter()
  }


  updatePriority(f:NgForm): void {
    this.serviceService.updatePriority(this.lowprioritylist)
    
    
        .subscribe( data => {
          alert("Updated sucessfully.");
         
        });
        f.resetForm();
      };






}
