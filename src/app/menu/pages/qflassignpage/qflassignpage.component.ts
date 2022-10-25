import { ThisReceiver } from '@angular/compiler'
import { Component, OnInit } from '@angular/core'
import { FormBuilder, FormGroup, Validators } from '@angular/forms'
import { AuthenticationService } from 'src/app/shared/services/authentication.service'
import Swal from 'sweetalert2'
import { trigger, transition, style, animate } from '@angular/animations';

@Component({
  selector: 'app-qflassignpage',
  templateUrl: './qflassignpage.component.html',
  styleUrls: ['./qflassignpage.component.scss'],
  animations: [
    trigger('miTrigger', [
      transition(':enter', [
        style({opacity: 0, height: 0}),
        animate('0.7s', style({opacity: 1, height: '*'})),
      ]),
      transition(':leave', [
        animate('0.7s', style({opacity: 0, height: 0}))
      ])
    ]),
  ]
})
export class QflassignpageComponent implements OnInit {
  public form: FormGroup
  Toast = Swal.mixin({
    toast: true,
    position: 'top-end',
    showConfirmButton: false,
    timer: 3000,
    timerProgressBar: true,
    didOpen: (toast) => {
      toast.addEventListener('mouseenter', Swal.stopTimer)
      toast.addEventListener('mouseleave', Swal.resumeTimer)
    },
  })
  owo: any
  constructor(
    private fb: FormBuilder,
    private authentication: AuthenticationService,
  ) {}

  ngOnInit(): void {
    this.owo = this.authentication.getUser().id
    this.renderCard()
    this.form = this.fb.group({
      id: [this.owo],
      task: [null, Validators.compose([Validators.required])],
      desc: [null, Validators.compose([Validators.required])],
    })
  }

  send() {
    if (this.form.valid) {
      this.authentication.Task(this.form.value).subscribe((response: any) => {
        if (response === 'Request no inserted') {
          Swal.fire({
            icon: 'error',
            title: 'Oops...',
            text: 'User or password Incorrect',
          })
        } else {
          this.Toast.fire({
            icon: 'success',
            title: 'Tarea Agregada',
          })
          this.renderCard()
        }
      })
    }
  }

  Data: [] = []
  renderCard() {
    this.authentication
      .ListTask({ id: this.owo })
      .subscribe((response: any) => {
        this.Data = response
        console.log(
          '🚀 ~ file: qflassignpage.component.ts ~ line 89 ~ QflassignpageComponent ~ .subscribe ~ response',
          response,
        )
      })
  }
  update(idTask: number, activate: boolean) {
    if (activate) {
      activate = false
      console.log(
        '🚀 ~ file: qflassignpage.component.ts ~ line 94 ~ QflassignpageComponent ~ update ~ activate',
        this.Data,
      )
      this.authentication
        .updateTask({ idTask: idTask, activate: activate })
        .subscribe()
      this.Toast.fire({
        icon: 'info',
        title: 'Tarea Completada :D',
      })
      this.renderCard()
    } else {
      activate = true
      console.log(
        '🚀 ~ file: qflassignpage.component.ts ~ line 99 ~ QflassignpageComponent ~ update ~ activate',
        activate,
      )
      this.authentication
        .updateTask({ idTask: idTask, activate: activate })
        .subscribe()
      this.Toast.fire({
        icon: 'question',
        title: 'Tarea no Completada',
      })
      this.renderCard()
    }
  }
  delete(idTask: number) {
    this.authentication.deleteTask({ idTask: idTask }).subscribe()
    this.Toast.fire({
      icon: 'warning',
      title: 'Tarea Eliminada',
    })
    this.renderCard()
  }
}
