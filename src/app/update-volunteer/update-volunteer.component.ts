import { Component, OnInit } from '@angular/core';
import { SahaayService } from '../sahaay.service';
import { analyzeAndValidateNgModules } from '@angular/compiler';

@Component({
  selector: 'app-update-volunteer',
  templateUrl: './update-volunteer.component.html',
  styleUrls: ['./update-volunteer.component.css']
})
export class UpdateVolunteerComponent implements OnInit {
  volunteer: any;
  volId: any;
  constructor(private service: SahaayService) {
    this.volunteer = { volunteerId: '', volunteerName: '', age: '', phone: '', loginId: '', password: '', ngoName: '', isDonor: '', isVolunteer: '', covidAssess: '' };
    this.volId = sessionStorage.getItem("volunteerId");
  }

  ngOnInit(): void {
    this.service.getVolunteer(this.volId).subscribe((result: any) => {console.log(result); this.volunteer=result;});
  }

  updateVolunteer(updateVolunteerForm: any) {
    console.log(this.volunteer);
    this.service.updateVolunteer(this.volunteer).subscribe();
  }
}
