import { NgModule } from '@angular/core';
import { FormsModule } from '@angular/forms';
import { BrowserModule } from '@angular/platform-browser';
import { HttpClientModule } from '@angular/common/http';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { CustomDirectiveDirective } from './custom-directive.directive';
import { CustomPipePipe } from './custom-pipe.pipe';
import { Section1Component } from './section1/section1.component';
import { Section2Component } from './section2/section2.component';
import { HomeComponent } from './home/home.component';
import { DashboardComponent } from './dashboard/dashboard.component';
import { AboutComponent } from './about/about.component';
import { NotFoundComponent } from './not-found/not-found.component';
import { ProfileComponent } from './profile/profile.component';

@NgModule({
  declarations: [
    AppComponent,
    CustomDirectiveDirective,
    CustomPipePipe,
    Section1Component,
    Section2Component,
    HomeComponent,
    DashboardComponent,
    AboutComponent,
    NotFoundComponent,
    ProfileComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    FormsModule,
    HttpClientModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
