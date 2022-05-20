import { Component, OnInit, Input, Output, EventEmitter } from '@angular/core';
import { Router } from '@angular/router';
import { AuthenticationService } from 'src/app/shared/services/authentication.service';
import { AuthorizationService } from 'src/app/shared/services/authorization.service';

@Component({
  selector: 'app-sidebar',
  templateUrl: './sidebar.component.html',
  styleUrls: ['./sidebar.component.scss']
})
export class SidebarComponent implements OnInit {

  @Input() isExpanded: boolean;
  @Output() name = new EventEmitter();
  nameEmitido = 'Escaner';

  listMenu: Array<any> = [];

  constructor(private router: Router, private authentication: AuthenticationService, private auth: AuthorizationService) { }

  ngOnInit(): void {
    this.getMenu();
  }


  getMenu() {
    switch (this.authentication.getUser().USER_IDROLE) {
      case 0:
        this.listMenu = [{
          icon: 'event_available',
          name: 'Calendario',
          state: 'calendario',
          type: 'link'
        },
        {
          icon: 'table_view',
          name: 'Tabla',
          state: 'tabla',
          type: 'link'
        },
        {
          icon: 'description',
          name: 'Formulario',
          state: 'preguntas',
          type: 'link'
        }];
        this.nameEmitido = 'Calendario';
        break;
    }
    this.name.emit(this.nameEmitido);
  }

  logOut() {
    localStorage.clear();
    this.router.navigate(['/authentication/login']);
  }

  getName(menu) {
    this.nameEmitido = menu.name;
    this.name.emit(this.nameEmitido);
  }

}
