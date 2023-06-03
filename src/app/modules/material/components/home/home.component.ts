import { Component, OnInit } from '@angular/core';
import { IRandomContact, Results } from 'src/app/models/random.user';
import { RandomUserService } from 'src/app/services/random-user.service';
import { NavigationExtras, Router } from '@angular/router';

@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.css']
})
export class HomeComponent implements OnInit {

  public randomContact: IRandomContact[] = [];

  constructor(private _route: Router,
              private _irandomuserservice: RandomUserService) {}

  ngOnInit(): void {

    this._irandomuserservice.obtenerRandomUser().subscribe(
      {
        next: (response: Results) => {
          console.log(response);

          response.results.forEach((randomContact: IRandomContact, index: number) => {
            this.randomContact.push(randomContact);

          })
        },
        error: (error) => console.log(`${error}`),
        complete: () => console.info('Peticion de random constact terminado')
      }
     )

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

  iraCardRandom() {

    let navigationExtras: NavigationExtras = {
      state: {
        data: this.randomContact
      },

    }

    this._route.navigate(['/card-random'], navigationExtras);


  }

}
