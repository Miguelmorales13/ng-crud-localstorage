import {Injectable} from '@angular/core';
import {HttpClient} from "@angular/common/http";
import {environment} from "../../environments/environment";

@Injectable({
  providedIn: 'root'
})
export class BanxicoService {

  constructor(private http:HttpClient) { }


  async getPetition(){
    return await this.http.get(`${environment.banxicoUrl}SieAPIRest/service/v1/series/SP74665/datos/2015-01-01/2015-01-08?token=${environment.banxicoToknen}`).toPromise()
  }
}
