import { HomeComponent } from './home/home.component';
import { ImcComponent } from './imc/imc.component';
import { FlagComponent } from './flag/flag.component';
import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';

const routes: Routes = [
  { path: 'home', component: HomeComponent },
  { path: 'drapeau', component: FlagComponent },
  { path: 'drapeau/:title', component: FlagComponent },
  { path: 'imc', component: ImcComponent },
  { path: '', redirectTo: 'home', pathMatch: 'full' },
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
