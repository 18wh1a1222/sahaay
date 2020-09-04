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
  constructor(private servie: SahaayService) { }


  ngOnInit(): void {
    this.servie.getMyNeeds(this.custId).subscribe((result: any)=>{console.log(result); this.needs=result;})
    }

}
