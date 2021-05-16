import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs/internal/Observable';

@Injectable({
  providedIn: 'root'
})
export class CalificacionRestService {
  private url='http://mda-back.test/api';
  calificacions: Array<{id: number, cod: string, calificacion: string}> = [];
  constructor(private http: HttpClient) { }

  getCargos(): Observable<any> {
    return this.http.get(this.url+'/q');
  }
  
  editCargo(id: number): Observable<any> {
    return this.http.get(this.url+'/q/'+id);
  }

  updateCargo(form:any,id:any): Observable<any> {
    return this.http.put(this.url +'/q/'+ id, form.value);
  }

  storeCargo(form:any): Observable<any> {
    return this.http.post(this.url+'/q',form.value);
  }

  deleteCargo(id:any): Observable<any> {
    return this.http.delete(this.url+'/q/'+ id);
  }
}
