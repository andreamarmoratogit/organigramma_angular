import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { GestoreOrgComponent } from './component/gestore-org/gestore-org.component';
import { HomeComponent } from './component/home/home.component';


const routes: Routes = [
  { path: '', component: HomeComponent},
  { path: 'organigramma', component: GestoreOrgComponent}
];

@NgModule({
  imports: [RouterModule.forRoot(routes, {onSameUrlNavigation: 'reload'})],
  exports: [RouterModule]
})
export class AppRoutingModule { }
