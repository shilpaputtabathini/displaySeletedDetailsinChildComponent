import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { ShowDataInTableComponent } from './show-data-in-table/show-data-in-table.component';


const routes: Routes = [
  { path: '', component: ShowDataInTableComponent  }
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
