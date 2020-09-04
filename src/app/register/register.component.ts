import { Component, OnInit } from '@angular/core';
import { SahaayService } from '../sahaay.service';
import { RouteReuseStrategy, Router } from '@angular/router';

@Component({
  selector: 'app-register',
  templateUrl: './register.component.html',
  styleUrls: ['./register.component.css']
})
export class RegisterComponent implements OnInit {
  confirmPassword: any;

  constructor(private service: SahaayService, private router: Router) { }

  ngOnInit(): void {
  }

  goToLogin() {
    this.router.navigate(['login']);
  }
  registerCustomer(registerCustomerForm: any): void {
    if (registerCustomerForm.password == this.confirmPassword) {
      this.service.registerCustomer(registerCustomerForm).subscribe((result: any) => { console.log(result); })
      console.log(registerCustomerForm);
      this.router.navigate(['login']);
    }
    else {
      alert("Password not Same");
      this.router.navigate(['register']);
    }
  }

  registerVolunteer(registerVolunteerForm: any): void {
    if (registerVolunteerForm.password == this.confirmPassword) {
      this.service.registerVolunteer(registerVolunteerForm).subscribe((result: any) => { console.log(result); })
      console.log(registerVolunteerForm);
      this.router.navigate(['login']);
    }
    else {
      alert(this.confirmPassword);
      this.router.navigate(['register']);
    }
  }

}
