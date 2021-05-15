import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs/internal/Observable';

@Injectable({
  providedIn: 'root'
})
export class CargoRestService {
  private url='http://mda-back.test/api';
  users: Array<{id: number, nombre: string, ap_paterno: string, ap_materno: string, email: string}> = [];
  constructor(private http: HttpClient) { }

  getCargos(): Observable<any> {
    return this.http.get(this.url+'/cargo');
  }
  
  editCargo(id: number): Observable<any> {
    return this.http.get(this.url+'/cargo/'+id);
  }

  updateCargo(form:any,id:any): Observable<any> {
    return this.http.put(this.url +'/cargo/'+ id, form.value);
  }

  storeCargo(form:any): Observable<any> {
    return this.http.post(this.url+'/cargo',form.value);
  }

  deleteCargo(id:any): Observable<any> {
    return this.http.delete(this.url+'/cargo/'+ id);
  }
}
