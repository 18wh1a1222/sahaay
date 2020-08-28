import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { RouterModule, Routes} from '@angular/router';
import { HttpClientModule} from '@angular/common/http';
import {FormsModule} from '@angular/forms';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { LoginComponent } from './login/login.component';
import { RegisterComponent } from './register/register.component';
import { NeedsComponent } from './needs/needs.component';
import { PostNeedsFormComponent } from './post-needs-form/post-needs-form.component';
import { DurationPipe } from './duration.pipe';
import { EventComponent } from './event/event.component';
import { EventFormComponent } from './event-form/event-form.component';
import { LogoutComponent } from './logout/logout.component';
import { UpdateCustomerComponent } from './update-customer/update-customer.component';
import { UpdateVolunteerComponent } from './update-volunteer/update-volunteer.component';
import { MyNeedsComponent } from './my-needs/my-needs.component';
import { NeedFilterPipe } from './need-filter.pipe';

const appRoot: Routes = [ {path: '', component: LoginComponent},
                          {path: 'login', component: LoginComponent},
                          {path: 'register', component: RegisterComponent},
                          {path: 'needs', component: NeedsComponent},
                          {path: 'needsForm', component: PostNeedsFormComponent},
                          {path: 'myNeeds', component: MyNeedsComponent},
                          {path: 'events', component: EventComponent},
                          {path: 'eventsForm', component: EventFormComponent},
                          {path: 'logout', component: LogoutComponent},
                          {path: 'updateCustomer', component: UpdateCustomerComponent},
                          {path: 'updateVolunteer', component: UpdateVolunteerComponent},
                        ];

@NgModule({
  declarations: [
    AppComponent,
    LoginComponent,
    RegisterComponent,
    NeedsComponent,
    PostNeedsFormComponent,
    DurationPipe,
    EventComponent,
    EventFormComponent,
    LogoutComponent,
    UpdateCustomerComponent,
    UpdateVolunteerComponent,
    MyNeedsComponent,
    NeedFilterPipe
  ],
  imports: [
    BrowserModule,
    FormsModule,
    HttpClientModule,
    RouterModule.forRoot(appRoot),
    AppRoutingModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
