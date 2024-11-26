import { Component, OnInit } from '@angular/core';
import { RawgApiService } from '../../services/rawg-api.service';

@Component({
  selector: 'app-lista-jogos',
  standalone: false,
  templateUrl: './lista-jogos.component.html',
  styleUrl: './lista-jogos.component.css'
})
export class ListaJogosComponent implements OnInit {
  jogos: any[] = [];

  constructor(private rawgApiService: RawgApiService) {}

  ngOnInit(): void {
    this.rawgApiService.getPopularGames().subscribe(
      (data) => {
        this.jogos = data.results;
        console.log(this.jogos);
      },
      (error) => {
        console.error('Erro ao carregar jogos:', error);
      }
    );
  }
}
