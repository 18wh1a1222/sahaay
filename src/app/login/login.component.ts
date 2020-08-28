import { Component, OnInit } from '@angular/core';
import { SahaayService } from '../sahaay.service';
import { Router } from '@angular/router';
import { AuthService } from '../auth.service';

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.css']
})
export class LoginComponent implements OnInit {
  customer: any;
  volunteer: any;
  custId: any;
  volId: any;
  constructor(private service: SahaayService,private router: Router) { }

  ngOnInit(): void {
  }

  async customerLogin(customerLoginForm: any) {
    await this.service.loginCustomer(customerLoginForm.loginId, customerLoginForm.password).then((result: any) => {console.log(result); this.customer=result})
    console.log(customerLoginForm);
    if (this.customer === null) {
      alert("Credentials are wrong.Try again!")
    }
    else {
      sessionStorage.setItem("user", "customer");
      sessionStorage.setItem("customerId",this.customer.customerId);
      this.service.setuserLoggedIn();
      this.router.navigate(['events'])
    }
  }

  async volunteerLogin(volunteerloginForm: any) {
    await this.service.loginVolunteer(volunteerloginForm.loginId, volunteerloginForm.password).then((result: any) => {console.log(result); this.volunteer=result})
    console.log(volunteerloginForm);
    if (this.volunteer === null) {
      alert("Credentials are wrong.Try again!")
    }
    else {
      sessionStorage.setItem("volunteerId",this.volunteer.volunteerId);
      this.service.setuserLoggedIn();
      this.router.navigate(['needs'])
    }
  }

}
