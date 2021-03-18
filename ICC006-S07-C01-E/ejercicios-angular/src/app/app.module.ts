import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { FormsModule } from '@angular/forms'; // <-- NgModel lives here

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { UserCreateFormComponent } from './ex1/components/user-create-form/user-create-form.component';
import { UserUpdateFormComponent } from './ex2/components/user-update-form/user-update-form.component';

@NgModule({
  declarations: [
    AppComponent,
    UserCreateFormComponent,
    UserUpdateFormComponent
  ],
  imports: [
    BrowserModule,
    FormsModule,
    AppRoutingModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
