import { Component, OnInit } from '@angular/core';
import { SahaayService } from '../sahaay.service';
import { Router } from '@angular/router';

@Component({
  selector: 'app-event',
  templateUrl: './event.component.html',
  styleUrls: ['./event.component.css']
})
export class EventComponent implements OnInit {
  events: any;
  constructor(private service: SahaayService, private router: Router) {

  }

  ngOnInit(): void {
    this.service.getAllEvents().subscribe((result: any) => { console.log(result); this.events = result; })
  }

  needForm() {
    this.router.navigate(['needsForm']);
  }
}
