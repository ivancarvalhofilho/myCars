import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Veiculo } from '../../model/veiculo';
import { Observable } from 'rxjs/Observable';
import 'rxjs/add/operator/map';

@Injectable()
export class VeiculosApiProvider {

  private readonly API_URL_BASE: string = "http://localhost:3000/";

  constructor(private http: HttpClient) { }

  obterVeiculo(id: number): Observable<Veiculo> {
    return this.http.
      get(this.API_URL_BASE + "veiculos/" + id).
      map(response => {        
        return Veiculo.copia(response);
      });
  }

  obterVeiculos(): Observable<Veiculo[]> {
    return this.http.
      get(this.API_URL_BASE + "veiculos").
      map(veiculos => {        
        return (veiculos as any).map((veiculo) => Veiculo.copia(veiculo));
      });
  }

  atualizarVeiculo(veiculo: Veiculo)  {
    return this.http.put(this.API_URL_BASE + "veiculos/" + veiculo._id, veiculo);
  }
}
