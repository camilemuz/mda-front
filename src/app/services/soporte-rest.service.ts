import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs/internal/Observable';

@Injectable({
  providedIn: 'root'
})
export class SoporteRestService {
  private url='http://mda-back.test/api';
  // Soportes: Array<{id: number, descro: string, ap_paterno: string, ap_materno: string, email: string}> = [];
  constructor(private http: HttpClient) { }

  getReq(): Observable<any> {
    return this.http.get(this.url+'/req');
  }
  
  editReq(id: number): Observable<any> {
    return this.http.get(this.url+'/req/'+id);
  }

  updateReq(form:any,id:any): Observable<any> {
    return this.http.put(this.url +'/req/'+ id, form.value);
  }

  storeReq(form:any): Observable<any> {
    return this.http.post(this.url+'/usreqer',form.value);
  }

  deleteReq(id:any): Observable<any> {
    return this.http.delete(this.url+'/req/'+ id);
  }
}
