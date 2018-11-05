import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs/Observable';

@Injectable()
export class RestApiProvider {
  private readonly API_URL_BASE: string = "http://localhost:3000/";
  constructor(private http: HttpClient) { }

  obterVeiculos(): Observable<any> {
    return this.http.get(this.API_URL_BASE + "veiculos");
  }

  obterVeiculo(id: number): Observable<any> {
    return this.http.get(this.API_URL_BASE + "veiculos/" + id);
  }

  atualizarVeiculo(id: number, veiculo: any) {
    return this.http.put(this.API_URL_BASE + "veiculos/" + id, veiculo);
  }
}
