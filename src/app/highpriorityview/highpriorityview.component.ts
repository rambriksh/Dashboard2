import { Component, OnInit } from '@angular/core';
import { ServiceService } from '../service.service';
import { Highprioritylist } from '../models/priority.model';
import { NgForm } from '@angular/forms';
import {Router} from '@angular/router';

@Component({
  selector: 'app-highpriorityview',
  templateUrl: './highpriorityview.component.html',
  styleUrls: ['./highpriorityview.component.css']
})
export class HighpriorityviewComponent implements OnInit {
  highprioritylist: Highprioritylist = new Highprioritylist();
  constructor(private router: Router,private serviceService:ServiceService) { }

  ngOnInit() {
    this.highprioritylist=this.serviceService.getter()
  }

  updatePriority(f:NgForm): void {
    this.serviceService.updatePriority(this.highprioritylist)
    
    
        .subscribe( data => {
          alert("Updated sucessfully.");
         
        });
        f.resetForm();
      };

      // gotopage()
      // {
      //   this.router.navigate(['/updatehighprioritylist']);
      // }
      

}