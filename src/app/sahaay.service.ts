import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';

@Injectable({
  providedIn: 'root'
})
export class SahaayService {
  private isUserLogged: any;

  constructor(private httpClient: HttpClient) {
    this.isUserLogged = false;
   }

   setuserLoggedIn(): void {
     this.isUserLogged = true;
   }

   setuserLoggedOut(): void {
    this.isUserLogged = false;
  }

   getUserLogged(): any{
     return this.isUserLogged;
   }

  registerCustomer(customer: any)   {
    return this.httpClient.post('sahaay-api/webapi/myresource/regCustomer' , customer);
   }

   validateCustLoginId(loginId: any)  {
     return this.httpClient.get('sahaay-api/webapi/myresource/validateCustLoginId/' + loginId);
   }

   validateVolLoginId(loginId: any)  {
    return this.httpClient.get('sahaay-api/webapi/myresource/validateVolLoginId/' + loginId);
  }

  validGovId(govId: any)  {
    return this.httpClient.get('sahaay-api/webapi/myresource/validGovId/' + govId);
  }

   registerVolunteer(volunteer: any)   {
    return this.httpClient.post('sahaay-api/webapi/myresource/regVolunteer' , volunteer);
   }

   loginCustomer(loginId: any, password: any)  {
    return this.httpClient.get('sahaay-api/webapi/myresource/loginCustomer/' + loginId +'/'+ password).toPromise();
   }

   loginVolunteer(loginId: any, password: any)  {
    return this.httpClient.get('sahaay-api/webapi/myresource/loginVolunteer/' + loginId +'/'+ password).toPromise();
   }

   postNeeds(need: any)  {
     return this.httpClient.post('sahaay-api/webapi/myresource/regNeed', need);
   }

   postEvent(event: any)  {
    return this.httpClient.post('sahaay-api/webapi/myresource/regEvent', event);
  }

   getAllNeeds() {
     return this.httpClient.get('sahaay-api/webapi/myresource/getAllNeeds');
   }

   getMyNeeds(customerId: any) {
    return this.httpClient.get('sahaay-api/webapi/myresource/getMyNeeds/'+ customerId);
  }

  getMyEvents(volunteerId: any) {
    return this.httpClient.get('sahaay-api/webapi/myresource/getMyEvents/'+ volunteerId);
  }

   getAllEvents() {
    return this.httpClient.get('sahaay-api/webapi/myresource/getAllEvents');
  }

  getCustomer(customerId: any) {
    return this.httpClient.get('sahaay-api/webapi/myresource/getCustomer/' + customerId);
  }

  getVolunteer(volunteerId: any) {
    return this.httpClient.get('sahaay-api/webapi/myresource/getVolunteer/' + volunteerId);
  }

  updateVolunteer(volunteer: any) {
    return this.httpClient.put('sahaay-api/webapi/myresource/updateVolunteer', volunteer);
  }
  
}
