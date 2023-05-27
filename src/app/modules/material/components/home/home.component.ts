import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';

@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.css']
})
export class HomeComponent implements OnInit {

  constructor(private _route: Router) {}

  ngOnInit(): void {

  }

  iraFecha() {

    this._route.navigate(['fecha']);

  }

  iraRegistro() {

    this._route.navigate(['registro']);

  }

  iraMenu() {

     this._route.navigate(['menu']);


  }

  iraTabla() {

     this._route.navigate(['tabla']);


  }

  iraArbol() {

    this._route.navigate(['arbol']);

  }

  iraLista() {

    this._route.navigate(['lista']);


  }

  iraDashboard() {

    this._route.navigate(['dash']);

  }

  iraModal() {

    this._route.navigate(['modal']);

  }

}
