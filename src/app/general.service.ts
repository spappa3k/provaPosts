import { Injectable } from '@angular/core';
import { HttpClient} from '@angular/common/http';
import { Observable } from 'rxjs';
import { dataModel } from './models/models';

@Injectable({
  providedIn: 'root'
})
export class GeneralService {

  constructor(private http:HttpClient) { }


 /* getData():Observable<dataModel[]>{
return this.http.get<dataModel[]>("http://localhost:3000/posts")

  }*/
}
