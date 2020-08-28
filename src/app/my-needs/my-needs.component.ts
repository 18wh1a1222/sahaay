import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { SahaayService } from '../sahaay.service';

@Component({
  selector: 'app-my-needs',
  templateUrl: './my-needs.component.html',
  styleUrls: ['./my-needs.component.css']
})
export class MyNeedsComponent implements OnInit {
  needs: any;
  custId = sessionStorage.getItem("customerId");
  customer : any;
  constructor(private router: Router, private servie: SahaayService) {
    this.customer = {customerId:'',age:'',covidAssess:'', customerName:'', gender:'', govId:'', latitude:'', longitude:'', loginId: '', password:'', phone:''};
  }


  ngOnInit(): void {
    this.servie.getCustomer(this.custId).subscribe((result: any) => {console.log(result); this.customer=result;});
    this.servie.getMyNeeds(this.customer).subscribe((result: any)=>{console.log(result); this.needs=result;})
    }

}
