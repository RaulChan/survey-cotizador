import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { HomeComponent } from './components/home/home.component';
import { CompanyComponent } from './components/company/company.component';
import { TipoServicioComponent } from './components/tipo-servicio/tipo-servicio.component';
import { VerticalComponent } from './components/vertical/vertical.component';
import { EnlaceComponent } from './components/enlace/enlace.component';
import { RentaComponent } from './components/renta/renta.component';


const routes: Routes = [
  { path: 'home', component: HomeComponent },
  { path: 'company', component: CompanyComponent },
  { path: 'servicio', component: TipoServicioComponent },
  { path: 'vertical', component: VerticalComponent },
  { path: 'enlace', component: EnlaceComponent },
  { path: 'renta', component: RentaComponent},
  { path: '**', pathMatch: 'full', redirectTo: 'company' },
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
