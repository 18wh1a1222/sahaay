import { Component, OnInit } from '@angular/core';
import { SahaayService } from '../sahaay.service';
import { Router } from '@angular/router';

@Component({
  selector: 'app-logout',
  templateUrl: './logout.component.html',
  styleUrls: ['./logout.component.css']
})
export class LogoutComponent implements OnInit {

  constructor(private service: SahaayService, private router: Router) { }

  ngOnInit(): void {
    this.service.setuserLoggedOut();
    sessionStorage.removeItem("volunteerId");
    sessionStorage.removeItem("customerId");
    sessionStorage.removeItem("user");
    this.router.navigate(['login']);
  }

}
