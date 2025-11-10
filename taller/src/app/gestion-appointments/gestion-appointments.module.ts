import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { GestionAppointmentsRoutingModule } from './gestion-appointments-routing.module';
import { MaterialModule } from '../shared/material.module';
import { SharedModule } from '../shared/shared.module';


@NgModule({
  declarations: [],
  imports: [
    CommonModule,
    GestionAppointmentsRoutingModule,MaterialModule,SharedModule
  ]
})
export class GestionAppointmentsModule { }
