import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs/internal/Observable';

@Injectable({
  providedIn: 'root'
})
export class CatalogoRestService {
  private url='http://mda-back.test/api';
  categorias: Array<{id: number, cod: string, categoria: string}> = [];
  tiporequerimientos: Array<{id: number, cod: string, sub_categoria: string, id_categorias: number}> = [];
  
  constructor(private http: HttpClient) { }


  // Categoria
  getCategoria(): Observable<any> {
    return this.http.get(this.url+'/cat');
  }
  
  editCategoria(id: number): Observable<any> {
    return this.http.get(this.url+'/cat/'+id);
  }

  updateCategoria(form:any,id:any): Observable<any> {
    return this.http.put(this.url +'/cat/'+ id, form.value);
  }

  storeCategoria(form:any): Observable<any> {
    return this.http.post(this.url+'/cat',form.value);
  }

  deleteCategoria(id:any): Observable<any> {
    return this.http.delete(this.url+'/cat/'+ id);
  }


//Tipo de Requerimiento
  getTiporeq(): Observable<any> {
    return this.http.get(this.url+'/tipo');
  }

  editTiporeq(id: number): Observable<any> {
    return this.http.get(this.url+'/tipo/'+id);
  }

  updateTiporeq(form:any,id:any): Observable<any> {
    return this.http.put(this.url +'/tipo/'+ id, form.value);
  }

  storeTiporeq(form:any): Observable<any> {
    return this.http.post(this.url+'/tipo',form.value);
  }

  deleteTiporeq(id:any): Observable<any> {
    return this.http.delete(this.url+'/tipo/'+ id);
  }

  
}
