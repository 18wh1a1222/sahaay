import { Component, OnInit } from '@angular/core';
import { SahaayService } from '../sahaay.service';
import { RouteReuseStrategy, Router } from '@angular/router';

@Component({
  selector: 'app-register',
  templateUrl: './register.component.html',
  styleUrls: ['./register.component.css']
})
export class RegisterComponent implements OnInit {
  customer : any;
  volunteer: any;

  constructor(private service: SahaayService, private router: Router) {
    this.customer = {customerId:'',age:'',covidAssess:'', customerName:'', gender:'', govId:'', latitude:'', longitude:'', loginId: '', password:'', phone:''};
    this.volunteer = {volunteerId: '', volunteerName:'', age:'', phone:'', loginId:'', password:'', ngoName:'', isDonor:'', isVolunteer:'', covidAssess:''};  
 }

  ngOnInit(): void {
  }

  goToLogin() {
    this.router.navigate(['login']);
  }
  registerCustomer(registerCustomerForm: any): void {
    console.log(registerCustomerForm.confirmPassword);
    if (registerCustomerForm.password === registerCustomerForm.confirmPassword) {
      this.customer.age = registerCustomerForm.age;
      this.customer.customerName = registerCustomerForm.customerName;
      this.customer.gender = registerCustomerForm.gender;
      this.customer.govId = registerCustomerForm.govId;
      this.customer.loginId = registerCustomerForm.loginId;
      this.customer.password = registerCustomerForm.password;
      this.customer.phone = registerCustomerForm.phone;
      this.service.registerCustomer(this.customer).subscribe((result: any) => { console.log(result); })
      console.log(this.customer);
      this.router.navigate(['login']);
    }
    else {
      alert("Password not Same");
      this.router.navigate(['register']);
    }
  }

  registerVolunteer(registerVolunteerForm: any): void {
    if (registerVolunteerForm.password == registerVolunteerForm.confirmPassword) {
      this.volunteer.volunteerName = registerVolunteerForm.volunteerName;
      this.volunteer.age = registerVolunteerForm.age;
      this.volunteer.phone = registerVolunteerForm.phone;
      this.volunteer.loginId = registerVolunteerForm.loginId;
      this.volunteer.password = registerVolunteerForm.password;
      this.volunteer.ngoName = registerVolunteerForm.ngoName;
      this.volunteer.isVolunteer = registerVolunteerForm.isVolunteer;
      this.volunteer.isDonor = registerVolunteerForm.isDonor;
      this.service.registerVolunteer(this.volunteer).subscribe((result: any) => { console.log(result); })
      console.log(this.volunteer);
      this.router.navigate(['login']);
    }
    else {
      alert("Password not Same");
      this.router.navigate(['register']);
    }
  }

}
