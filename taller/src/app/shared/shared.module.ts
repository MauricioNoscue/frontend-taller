import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { GenericTableComponent } from './components/table/generic-table/generic-table.component';
import { MaterialModule } from './material.module';
import { SidebarComponent } from './components/layout/sidebar/sidebar.component';
import { ReactiveFormsModule } from '@angular/forms';
import { RouterModule } from '@angular/router';
import { ToolbarComponent } from './components/layout/toolbar/toolbar.component';
import { MainLayoutComponent } from './components/layout/main-layout/main-layout.component';

const sharedComponents =[

  GenericTableComponent,SidebarComponent,ToolbarComponent,MainLayoutComponent
];

@NgModule({
  declarations: [sharedComponents],
  imports: [
    CommonModule,
    MaterialModule,
    RouterModule,
    ReactiveFormsModule,

  ]
})
export class SharedModule { }
