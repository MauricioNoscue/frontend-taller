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
    { icon: 'event', label: 'Citas', route: '/appointments/consultorio' },
    { icon: 'person', label: 'Usuarios', route: '/appointments/doctors' },
    { icon: 'settings', label: 'Configuración', route: '/settings' }
  ];

  // 🔹 Puedes manejar el estado del sidenav si lo integras con layout responsive
  isOpen = true;

  toggle() {
    this.isOpen = !this.isOpen;
  }
}
