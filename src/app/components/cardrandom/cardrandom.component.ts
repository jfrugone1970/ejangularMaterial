import { Component, OnInit, Input } from '@angular/core';
import {MatButtonModule} from '@angular/material/button';
import {MatCardModule} from '@angular/material/card';
import { IRandomContact, Results } from 'src/app/models/random.user';
import { RandomUserService } from 'src/app/services/random-user.service';
import { Router } from '@angular/router';

@Component({
  selector: 'app-cardrandom',
  templateUrl: './cardrandom.component.html',
  styleUrls: ['./cardrandom.component.css']
})
export class CardrandomComponent implements OnInit {

  @Input() randomContact: IRandomContact | undefined;

  constructor(private _irandomuserservice: RandomUserService,
              private _irouter: Router) {}

  ngOnInit(): void {

    if(history.state.data){
      console.log(history.state.data);
      this.randomContact = history.state.data;

    }


  }

  regresarAHome() {

    this._irouter.navigate(['home']);


  }




}

