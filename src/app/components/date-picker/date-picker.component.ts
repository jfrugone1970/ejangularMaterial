import { Component, OnInit } from '@angular/core';
import {FormGroup, FormControl, FormBuilder} from '@angular/forms';




@Component({
  selector: 'app-date-picker',
  templateUrl: './date-picker.component.html',
  styleUrls: ['./date-picker.component.css']
})
export class DatePickerComponent implements OnInit {

  FormularioReserva: FormGroup = new FormGroup({});
  FormularioReserva2: FormGroup = new FormGroup({});

  hoy = new Date();
  month = this.hoy.getMonth();
  year = this.hoy.getFullYear();

  constructor(private _formbuilder: FormBuilder) {
  }



  ngOnInit(): void {

    this.FormularioReserva = this._formbuilder.group({
      desde: new FormControl(new Date(this.year, this.month, 1)),
      hasta: new FormControl(new Date(this.year, this.month, 7))
    })

    this.FormularioReserva2 = this._formbuilder.group({
      desde: new FormControl(new Date(this.year, this.month, 1)),
      hasta: new FormControl(new Date(this.year, this.month, 7))
    })



  }

}
