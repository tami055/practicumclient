import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { environment } from 'src/environments/environment';
import Child from 'src/models/Child';


@Injectable({
   providedIn: 'root'
})
export class ChildService {
   baseRouteUrl = `${environment.baseUrl}/Child`;
   constructor(public http: HttpClient) { }
   Mychildren: Child[] = [];
   child: Child = new Child("", new Date(), 0, "")
   addChildren(child: Child) {
      return this.http.post<Child>(`https://localhost:7110/api/Child`, child)

   }
   getAllChild() {
      return this.http.get<Child[]>(`https://localhost:7110/api/Child`)

   }

}












