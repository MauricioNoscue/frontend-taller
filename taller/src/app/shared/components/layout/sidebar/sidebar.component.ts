import { Component } from '@angular/core';

@Component({
  selector: 'app-sidebar',
  standalone:false,
  templateUrl: './sidebar.component.html',
  styleUrl: './sidebar.component.css'
})
export class SidebarComponent {

  // 🔹 Menú principal: puedes personalizar fácilmente
  menuItems = [
    { icon: 'dashboard', label: 'Dashboard', route: '/appointments' },
    { icon: 'event', label: 'Consultorios', route: '/appointments/consultorio' },
    { icon: 'person', label: 'personas', route: '/appointments/person' },
    { icon: 'settings', label: 'Especialidades', route: '/appointments/especialidades' },
    { icon: 'settings', label: 'Doctores', route: '/appointments/doctors' },
    { icon: 'settings', label: 'Tipos de citas', route: '/appointments/tCitas' },


  ];

  // 🔹 Puedes manejar el estado del sidenav si lo integras con layout responsive
  isOpen = true;

  toggle() {
    this.isOpen = !this.isOpen;
  }
}
