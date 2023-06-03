import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { DatePickerComponent } from './components/date-picker/date-picker.component';
import { ComponentsComponent } from './modules/material/components/components.component';
import { NavComponent } from './modules/material/nav/nav.component';
import { TablaComponent } from './modules/material/components/tabla/tabla.component';
import { ArbolComponent } from './modules/material/arbol/arbol.component';
import { HomeComponent } from './modules/material/components/home/home.component';
import { DragDropComponent } from './modules/material/components/drag-drop/drag-drop.component';
import { DashboardComponent } from './modules/material/components/dashboard/dashboard.component';
import { DialogComponent } from './components/dialog/dialog.component';
import { CardrandomComponent } from './components/cardrandom/cardrandom.component';


const routes: Routes = [
  {
    path: '',
    pathMatch: 'full',
    redirectTo: 'home'
  },
  {
    path: 'home',
    component: HomeComponent,
    children: [
      {
        path: 'hijo',
        component: HomeComponent
      }
    ],
  },
  {
    path: 'fecha',
    component: DatePickerComponent
  },
  {
    path: 'registro',
    component: ComponentsComponent
  },
  {
    path: 'menu',
    component: NavComponent
  },
  {
    path: 'tabla',
    component: TablaComponent
  },
  {
    path: 'arbol',
    component: ArbolComponent
  },
  {
    path: 'lista',
    component: DragDropComponent
  },
  {
    path: 'dash',
    component: DashboardComponent
  },
  {
    path: 'modal',
    component: DialogComponent
  },
  {
    path: 'card-random',
    component: CardrandomComponent
  }



];


@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
