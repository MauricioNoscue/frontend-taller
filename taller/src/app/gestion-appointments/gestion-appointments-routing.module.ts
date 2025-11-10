import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { MainLayoutComponent } from '../shared/components/layout/main-layout/main-layout.component';
import { ConsultoringComponent } from './pages/consultoring/consultoring.component';
import { DoctorsComponent } from './pages/doctors/doctors.component';

const routes: Routes = [

   {
    path: '',
    component: MainLayoutComponent,
    children: [
      { path: '', component: ConsultoringComponent },
      { path: 'consultorio', component: ConsultoringComponent },
      { path: 'doctors', component: DoctorsComponent }

    ]
  }

];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class GestionAppointmentsRoutingModule { }
