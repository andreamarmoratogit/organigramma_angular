import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { GestoreOrgComponent } from './component/gestore-org/gestore-org.component';
import { HomeComponent } from './component/home/home.component';
import { GestoreDipComponent } from './component/gestore-dip/gestore-dip.component';
import { ErrorPageComponent } from './component/error-page/error-page.component';


const routes: Routes = [
  { path: '', component: HomeComponent},
  { path: 'organigramma', component: GestoreOrgComponent},
  { path: 'dipendente' , component: GestoreDipComponent},
  { path: '**', component: ErrorPageComponent}
];

@NgModule({
  imports: [RouterModule.forRoot(routes, {onSameUrlNavigation: 'reload'})],
  exports: [RouterModule]
})
export class AppRoutingModule { }
