import { Component, OnInit } from '@angular/core';
import { ServiceService } from '../service.service';
import {Mediumprioritylist } from "../models/priority.model";
import { NgForm } from '@angular/forms';

@Component({
  selector: 'app-mediumpriorityview',
  templateUrl: './mediumpriorityview.component.html',
  styleUrls: ['./mediumpriorityview.component.css']
})
export class MediumpriorityviewComponent implements OnInit {
  // highprioritylist: Highprioritylist;

  mediumprioritylist:Mediumprioritylist;

  constructor(private serviceService:ServiceService){ }

  ngOnInit() {
    this.mediumprioritylist=this.serviceService.getter()

  }


  updatePriority(f:NgForm): void {
    this.serviceService.updatePriority(this.mediumprioritylist)
    
    
        .subscribe( data => {
          alert("Updated sucessfully.");
         
        });
        f.resetForm();
      };



}
