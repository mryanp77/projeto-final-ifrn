import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { ListaJogosComponent } from './components/lista-jogos/lista-jogos.component';
import { HomepageComponent } from './components/homepage/homepage.component';

const routes: Routes = [
  { path: '', component: HomepageComponent },
  { path: 'jogos', component: ListaJogosComponent },
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
