import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { MainLayoutComponent } from '../shared/components/layout/main-layout/main-layout.component';
import { ConsultoringComponent } from './pages/consultoring/consultoring.component';
import { DoctorsComponent } from './pages/doctors/doctors.component';
import { PersonComponent } from './pages/person/person.component';
import { SpecialtyComponent } from './pages/specialty/specialty.component';
import { TypeCitationComponent } from './pages/type-citation/type-citation.component';

const routes: Routes = [

   {
    path: '',
    component: MainLayoutComponent,
    children: [
      { path: '', component: ConsultoringComponent },
      { path: 'consultorio', component: ConsultoringComponent },
      { path: 'doctors', component: DoctorsComponent },
      { path: 'person', component: PersonComponent },
      { path: 'especialidades', component: SpecialtyComponent },
      { path: 'tCitas', component: TypeCitationComponent },


      


    ]
  }

];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class GestionAppointmentsRoutingModule { }
