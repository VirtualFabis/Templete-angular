import { Component, OnInit } from '@angular/core';
import { IColumns } from 'src/app/shared/interfaces/i-columns';

@Component({
  selector: 'app-qflassignpage',
  templateUrl: './qflassignpage.component.html',
  styleUrls: ['./qflassignpage.component.scss']
})
export class QflassignpageComponent implements OnInit {

  columns: Array<IColumns> = [{
    idHeader: 0,
    columnDef: 'title',
    header: 'Titulo'
  }, {
    idHeader: 1,
    columnDef: 'desc',
    header: 'Descripcion'
  }];

  rows: Array<any> = [{
    title: 'Titulo 1',
    desc: 'Descripcion ejemplo'
  }, {
    title: 'Campo 2',
    desc: 'Ejemplo descripcion 2'
  }, {
    title: 'Prueba 3',
    desc: 'EKE'
  }];

  constructor() { }

  ngOnInit(): void {
  }

}
