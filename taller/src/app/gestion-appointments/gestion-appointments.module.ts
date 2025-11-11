import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { GestionAppointmentsRoutingModule } from './gestion-appointments-routing.module';
import { MaterialModule } from '../shared/material.module';
import { SharedModule } from '../shared/shared.module';
import { ConsultoringComponent } from './pages/consultoring/consultoring.component';
import { PersonComponent } from './pages/person/person.component';
import { SpecialtyComponent } from './pages/specialty/specialty.component';
import { DoctorsComponent } from './pages/doctors/doctors.component';


@NgModule({
  declarations: [ConsultoringComponent,PersonComponent,SpecialtyComponent,DoctorsComponent],
  imports: [
    CommonModule,
    GestionAppointmentsRoutingModule,MaterialModule,SharedModule
  ]
})
export class GestionAppointmentsModule { }
