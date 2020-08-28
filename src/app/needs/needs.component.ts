import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { SahaayService } from '../sahaay.service';
import { Subscriber } from 'rxjs';

@Component({
  selector: 'app-needs',
  templateUrl: './needs.component.html',
  styleUrls: ['./needs.component.css']
})
export class NeedsComponent implements OnInit {
  needs: any;
  type: any;

  constructor(private router: Router, private service: SahaayService) {
    this.type = "default";
   }

  ngOnInit(): void {
    this.service.getAllNeeds().subscribe((result: any)=>{console.log(result); this.needs=result;})
    }

  eventForm() {
    this.router.navigate(['eventsForm'])
  }

}
