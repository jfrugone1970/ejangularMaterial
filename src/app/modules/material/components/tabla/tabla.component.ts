import { AfterViewInit, Component, ViewChild } from '@angular/core';
import { MatTable } from '@angular/material/table';
import { MatPaginator } from '@angular/material/paginator';
import { MatSort } from '@angular/material/sort';
import { TablaDataSource, TablaItem } from './tabla-datasource';

import { RandomUserService } from 'src/app/services/random-user.service';
import { IRandomContact, Results } from 'src/app/models/random.user';
import { __values } from 'tslib';
import { Observable } from 'rxjs';

@Component({
  selector: 'app-tabla',
  templateUrl: './tabla.component.html',
  styleUrls: ['./tabla.component.css']
})
export class TablaComponent implements AfterViewInit {


  @ViewChild(MatPaginator) paginator!: MatPaginator;
  @ViewChild(MatSort) sort!: MatSort;
  @ViewChild(MatTable) table!: MatTable<TablaItem>;
  dataSource: TablaDataSource;

  randomuserme: IRandomContact[] = [];



  /** Columns displayed in the table. Columns IDs can be added, removed, or reordered. */
  displayedColumns = ['id', 'name'];

  // datos de tabla

  EXAMPLE_DATA: TablaItem[] = [
    {id: 1, name: 'Jose Fernando Frugone Jaramillo'},
    {id: 2, name: 'Pablo Antonio Gavilanes'},
    {id: 3, name: 'Carlos Martinez'},
    {id: 4, name: 'Xavier Fernando Garces'},
    {id: 5, name: 'Paola Ivette Garcia'},
    {id: 6, name: 'Fabiola Lis Andrade'}
  ]

  constructor(private _randomuserservice: RandomUserService) {


    this.dataSource = new TablaDataSource();


  }





  ngAfterViewInit(): void {
    this.dataSource.data = this.EXAMPLE_DATA;
    this.dataSource.sort = this.sort;
    this.dataSource.paginator = this.paginator;
    this.table.dataSource = this.dataSource;
  }
}
