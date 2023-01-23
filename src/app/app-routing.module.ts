import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { AboutComponent } from './about/about.component';
import { DashboardComponent } from './dashboard/dashboard.component';
import { HomeComponent } from './home/home.component';
import { NotFoundComponent } from './not-found/not-found.component';
import { ProfileComponent } from './profile/profile.component';

const routes: Routes = [
  {
    path: '',
    redirectTo: 'home',
    pathMatch: 'full'
  },
  {
    path: 'home',
    component: HomeComponent,
    children: [
      {
        path: 'dashboard',
        component: DashboardComponent
      },
    {
      path: 'profile',
      component: ProfileComponent
    }
    ]
  },
  {
    path: 'about',
    component: AboutComponent
  },
  {
    path: '**',
    component: NotFoundComponent
  }
  // {
  //   path: 'p',
  //   component: PComponent,
  //   // canActivateChild:[AuthGuard],
  //   canActivate: [AuthGuard],
  //   children: [
  //     { path: 'c1', component: C1Component },
  //     { path: 'c2', component: C2Component },
  //     // {path:'',redirectTo:'c1',pathMatch:'full'}
  //   ],
  // },
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
