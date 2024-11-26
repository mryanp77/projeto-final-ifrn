import { Injectable } from '@angular/core';
import axios from 'axios';

@Injectable({
  providedIn: 'root'
})
export class JogoService {
  private API_URL = 'https:/api.igbd.com/v4';
  private CLIENT_ID = 'u2d3yzuoim79a7wj6cgrmvxo77wmld';
  private ACCESS_TOKEN = '';
  constructor() { }
}
