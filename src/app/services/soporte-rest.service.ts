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

  updateReq(form:any,id:number): Observable<any> {
    return this.http.put(this.url +'/req/'+ id, form);
  }

  storeReq(form:any): Observable<any> {
    return this.http.post(this.url+'/req',form.value);
  }

  deleteReq(id:number): Observable<any> {
    return this.http.delete(this.url+'/req/'+ id);
  }

//ticket
getTicket(): Observable<any> {
  return this.http.get(this.url+'/ticket');
}

editTicket(id: number): Observable<any> {
  return this.http.get(this.url+'/ticket/'+id);
}

updateTicket(form:any,id:number): Observable<any> {
  return this.http.put(this.url +'/ticket/'+ id, form.value);
}

storeTicket(form:any): Observable<any> {
  return this.http.post(this.url+'/ticket',form.value);
}

deleteTicket(id:number): Observable<any> {
  return this.http.delete(this.url+'/ticket/'+ id);
}

}
