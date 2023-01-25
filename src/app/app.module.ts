import { NgModule } from '@angular/core';
import { FormsModule } from '@angular/forms';
import { BrowserModule } from '@angular/platform-browser';
import { HttpClientModule } from '@angular/common/http';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { CustomDirectiveDirective } from './custom-directive.directive';
import { CustomPipePipe } from './custom-pipe.pipe';
import { Section1Component } from './components/section1/section1.component';
import { Section2Component } from './components/section2/section2.component';
import { HomeComponent } from './components/home/home.component';
import { DashboardComponent } from './components/dashboard/dashboard.component';
import { AboutComponent } from './components/about/about.component';
import { NotFoundComponent } from './components/not-found/not-found.component';
import { ProfileComponent } from './components/profile/profile.component';
import { Section3Component } from './components/section3/section3.component';

import { StoreModule } from '@ngrx/store';
import { EffectsModule } from '@ngrx/effects';
import { appReducers, appEffects } from './store';
import { AppSandbox } from './sandbox/app.sandbox';


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
    ProfileComponent,
    Section3Component
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    FormsModule,
    HttpClientModule,


    StoreModule.forRoot(appReducers),
    EffectsModule.forRoot(appEffects)
  ],
  providers: [
    AppSandbox
  ],
  bootstrap: [AppComponent]
})
export class AppModule { }
