import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { ContactFormComponent } from './pages/contact-form/contact-form.component';
import { ContactListComponent } from './pages/contact-list/contact-list.component';
import { ContactSummeryComponent } from './pages/contact-summery/contact-summery.component';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { LayoutsModule } from './layouts/layouts.module';
import { AccountModule } from './account/account.module';
import { RouterModule } from '@angular/router';
import { HomeComponent } from './pages/home/home.component';

@NgModule({
  declarations: [
    AppComponent,
    ContactFormComponent,
    ContactListComponent,
    ContactSummeryComponent,
    HomeComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    RouterModule,
    FormsModule,
    ReactiveFormsModule,
    LayoutsModule,
    AccountModule
  ],
  exports:[HomeComponent],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
