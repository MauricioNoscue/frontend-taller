import { HttpClient } from '@angular/common/http';
import { Component, OnInit } from '@angular/core';
import { ConsultingRoomListDto, ConsultingRoomCreateDto, ConsultingRoomEditDto } from '../../../shared/models/consulttorio';
import { GenericService } from '../../../shared/services/generic.service';
import { EntityName } from '../../../shared/services/enums/EntityName';
import { ColumnDefinition } from '../../../shared/models/tablemodule';

@Component({
  selector: 'app-consultoring',
  standalone:false, 
  templateUrl: './consultoring.component.html',
  styleUrl: './consultoring.component.css'
})
export class ConsultoringComponent implements OnInit {
  private readonly consultor: GenericService<
    ConsultingRoomListDto,
    ConsultingRoomCreateDto,
    ConsultingRoomEditDto
  >;

  // 🔹 Lista completa
  dataSource: ConsultingRoomListDto[] = [];

  // 🔹 Lista filtrada (se actualiza con el buscador)
  dataSourceFiltered: ConsultingRoomListDto[] = [];

  columnDefs: ColumnDefinition[] = [];

  constructor(private readonly http: HttpClient) {
    this.consultor = new GenericService<
      ConsultingRoomListDto,
      ConsultingRoomCreateDto,
      ConsultingRoomEditDto
    >(this.http, EntityName.Consultorios);
  }

  ngOnInit(): void {
    this.loadData();
    this.initColumns();
  }

  /** 🔹 Carga los datos desde el backend */
  loadData(): void {
    this.consultor.getAll().subscribe({
      next: (data) => {
        this.dataSource = data;
        this.dataSourceFiltered = [...data]; // ✅ inicia con todos los datos
      },
      error: (err) => console.error('Error al cargar consultorios:', err),
    });
  }

  /** 🔹 Define columnas para la tabla */
  initColumns(): void {
    this.columnDefs = [
      { key: 'index', label: '#' },
      { key: 'name', label: 'Nombre' },
      { key: 'roomNumber', label: 'Número de sala' },
      { key: 'floor', label: 'Piso' },
      {
        key: 'image',
        label: 'Imagen',
        type: 'icon',
        icon: 'image',
        tooltip: 'Ver imagen',
      },
      { key: 'actions', label: 'Acciones', type: 'actions' },
    ];
  }

  /** 🔹 Acción del toolbar (botón Agregar) */
  crear(): void {
    alert('Crear nuevo consultorio');
  }

  /** 🔹 Maneja las acciones de la tabla */
  onAction(event: { action: string; element: ConsultingRoomListDto }): void {
    console.log('Acción:', event);
  }

  /** 🔹 Columnas visibles */
  get columns(): string[] {
    return this.columnDefs.map((c) => c.key);
  }
}