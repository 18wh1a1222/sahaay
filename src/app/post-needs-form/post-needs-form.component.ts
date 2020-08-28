import { Component, OnInit } from '@angular/core';
import { SahaayService } from '../sahaay.service';
import { Router } from '@angular/router';
import { analyzeAndValidateNgModules } from '@angular/compiler';

@Component({
  selector: 'app-post-needs-form',
  templateUrl: './post-needs-form.component.html',
  styleUrls: ['./post-needs-form.component.css']
})
export class PostNeedsFormComponent implements OnInit {
  need : any;

  constructor(private service: SahaayService,private router: Router) {
    this.need = {type:'', money:'', info:'',don:'',status:'open',
    customer:{customerId:'',age:'',covidAssess:'', customerName:'', gender:'', govId:'', latitude:'', longitude:'', loginId: '', password:'', phone:''}};
    }

  ngOnInit(): void {
  }
  postNeeds(postNeedsForm) {
    this.need.don = new Date();
    this.need.customer.customerId = sessionStorage.getItem("customerId");
    console.log(this.need);
    this.service.postNeeds(this.need).subscribe((result: any) => {console.log(result);});
    this.router.navigate(['events']);
  }

}
