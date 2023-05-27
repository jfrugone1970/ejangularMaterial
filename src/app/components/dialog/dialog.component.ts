import { Component, OnInit } from '@angular/core';
import {MatDialogModule, MatDialog} from '@angular/material/dialog';
import { MatButtonModule } from '@angular/material/button';
import { NgFor } from '@angular/common';

import { RandomUserService } from 'src/app/services/random-user.service';
import { IRandomContact, Results } from 'src/app/models/random.user';
import { Observable } from 'rxjs';


@Component({
  selector: 'app-dialog',
  templateUrl: './dialog.component.html',
  styleUrls: ['./dialog.component.css'],
  standalone: true,
  imports: [MatButtonModule, MatDialogModule],
})
export class DialogComponent implements OnInit {

  public irandomuser: IRandomContact[] = [];

  constructor(public dialog: MatDialog) { }

  openDialog() {
    const dialogRef = this.dialog.open(DialogDataComponentExampleDialog);

    dialogRef.afterClosed().subscribe(result => {
      console.log(`Dialog result: ${result}`);

    })
  }

  ngOnInit(): void {



  }


}

@Component({
  selector: 'dialog-data-example-dialog',
  templateUrl: 'dialog-data-example-dialog.html',
  standalone: true,
  imports: [MatDialogModule, MatButtonModule, NgFor],

})

export class DialogDataComponentExampleDialog {
  irandomuser: IRandomContact[] = [];

  constructor(private _randomuserservice: RandomUserService) {
    // this.irandomuser;
    this._randomuserservice.obtenerRandomUser().subscribe(
      {
        next: (response: Results) => {
          console.log(response);

          response.results.forEach((randomContact: IRandomContact, index: number) => {
            this.irandomuser.push(randomContact);

          })
        },
        error: (error) => console.log(`${error}`),
        complete: () => console.info('Peticion de random constact terminado')
      }
     )


  }


}

