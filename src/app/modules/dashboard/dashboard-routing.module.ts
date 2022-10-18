import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { FormDashboardComponent } from './form-dashboard/form-dashboard.component';
import { HomeComponent } from './home/home.component';

const routes: Routes = [
  {
    path: '', component:  FormDashboardComponent,
    children: [
      { path: 'spring-boot', component: HomeComponent },
      
    ]
  },
]

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class DashboardRoutingModule { }
