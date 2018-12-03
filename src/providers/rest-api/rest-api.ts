import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs/Observable';

@Injectable()
export class RestApiProvider {
  private readonly API_URL_BASE: string = "https://isteamgames.cleverapps.io/";
  private readonly APILogin_URL_BASE: string = "https://isteam.cleverapps.io/";
  
  constructor(private http: HttpClient) { }

  logar(nome: string, senha: string): Observable<any> {
    return this.http.post(this.APILogin_URL_BASE + "login", {userEmail: nome, userPassword: senha});
  }

  obterJogos(): Observable<any> {
    return this.http.get(this.API_URL_BASE + "games");
  }

  obterJogo(id: string): Observable<any> {
    return this.http.get(this.API_URL_BASE + "games/" + id);
  }
  
  atualizarVeiculo(id: string, veiculo: any) {
    return this.http.put(this.API_URL_BASE + "games/" + id, veiculo);
  }
}
