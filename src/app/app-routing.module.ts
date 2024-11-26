import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { HomeComponent } from './components/home/home.component';
import { ListaJogosComponent } from './components/lista-jogos/lista-jogos.component';
import { DetalhesJogosComponent } from './components/detalhes-jogos/detalhes-jogos.component';
import { AddReviewComponent } from './components/add-review/add-review.component';
import { ReviewsComponent } from './components/reviews/reviews.component';

const routes: Routes = [
  {path: '', component: HomeComponent},
  {path: 'jogos', component: ListaJogosComponent},
  {path: 'jogos/:id', component: DetalhesJogosComponent},
  {path: 'add-review', component: AddReviewComponent},
  {path: 'reviews', component: ReviewsComponent}
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
