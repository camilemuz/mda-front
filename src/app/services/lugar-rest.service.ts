import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs/internal/Observable';

@Injectable({
  providedIn: 'root'
})
export class LugarRestService {
  private url='http://mda-back.test/api';
  municipios: Array<{id: number, cod: string, nombre_municipio: string}> = [];
  sucursales: Array<{id: number, cod: string, nombre_sucursal: number, id_municipio: number}> = [];
  departamentos: Array<{id: number, cod: string, nombre_departamento: string}> = [];
  constructor(private http: HttpClient) { }


  // Municipios
  getMunicipio(): Observable<any> {
    return this.http.get(this.url+'/municipio');
  }
  
  editMunicipio(id: number): Observable<any> {
    return this.http.get(this.url+'/municipio/'+id);
  }

  updateMunicipio(form:any,id:any): Observable<any> {
    return this.http.put(this.url +'/municipio/'+ id, form.value);
  }

  storeMunicipio(form:any): Observable<any> {
    return this.http.post(this.url+'/municipio',form.value);
  }

  deleteMunicipio(id:any): Observable<any> {
    return this.http.delete(this.url+'/municipio/'+ id);
  }


//Sucursales
  getSucursal(): Observable<any> {
    return this.http.get(this.url+'/sucursal');
  }

  editSucursal(id: number): Observable<any> {
    return this.http.get(this.url+'/sucursal/'+id);
  }

  updateSucursal(form:any,id:any): Observable<any> {
    return this.http.put(this.url +'/sucursal/'+ id, form.value);
  }

  storeSucursal(form:any): Observable<any> {
    return this.http.post(this.url+'/sucursal',form.value);
  }

  deleteSucursal(id:any): Observable<any> {
    return this.http.delete(this.url+'/sucursal/'+ id);
  }


//Departamentos
  getDpto(): Observable<any> {
    return this.http.get(this.url+'/dpto');
  }

  editDpto(id: number): Observable<any> {
    return this.http.get(this.url+'/dpto/'+id);
  }

  updateDpto(form:any,id:any): Observable<any> {
    return this.http.put(this.url +'/dpto/'+ id, form.value);
  }

  storeDpto(form:any): Observable<any> {
    return this.http.post(this.url+'/dpto',form.value);
  }

  deleteDpto(id:any): Observable<any> {
    return this.http.delete(this.url+'/dpto/'+ id);
  }

  
}
