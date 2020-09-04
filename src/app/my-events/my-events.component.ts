import { Component, OnInit } from '@angular/core';
import { SahaayService } from '../sahaay.service';

@Component({
  selector: 'app-my-events',
  templateUrl: './my-events.component.html',
  styleUrls: ['./my-events.component.css']
})
export class MyEventsComponent implements OnInit {
  events: any;
  volunteerId = sessionStorage.getItem("volunteerId");
  constructor(private service: SahaayService) { }

  ngOnInit(): void {
    this.service.getMyEvents(this.volunteerId).subscribe((result: any)=>{console.log(result); this.events=result;})
  }

}
