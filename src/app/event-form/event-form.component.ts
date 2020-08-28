import { Component, OnInit } from '@angular/core';
import { SahaayService } from '../sahaay.service';
import { Router } from '@angular/router';

@Component({
  selector: 'app-event-form',
  templateUrl: './event-form.component.html',
  styleUrls: ['./event-form.component.css']
})
export class EventFormComponent implements OnInit {
  event: any;

  constructor(private service: SahaayService, private router: Router) {
    this.event = {eventName:'', info:'', doe:'', openTime:'', closeTime:'',
     volunteer: {volunteerId: '', volunteerName:'', age:'', phone:'', loginId:'', password:'', ngoName:'', isDonor:'', isVolunteer:'', covidAssess:''}};
   }

  ngOnInit(): void {
  }

  postEvents(postEventsForm: any) {
    this.event.volunteer.volunteerId = sessionStorage.getItem("volunteerId");
    console.log(this.event);
    this.service.postEvent(this.event).subscribe((result: any)=>{console.log(result);});

  }

}
