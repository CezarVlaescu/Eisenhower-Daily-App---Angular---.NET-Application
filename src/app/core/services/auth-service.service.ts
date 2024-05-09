import { HttpClient } from "@angular/common/http";
import { Injectable } from "@angular/core";
import { Observable } from "rxjs";

@Injectable({
  providedIn: 'root'
})
export class AuthServiceService {

  constructor(private http: HttpClient) { }

  getTokenAsync() : Observable<any> { // to be implemented -> moved to a separate service 
    return this.http.get("")
  }
}
