import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class ExperienceService {

  postApi = 'http://127.0.0.1:3000/api/v1/exp/';
  constructor(private http: HttpClient) {

  }
  getExperience(): Observable<any> {
    return this.http.get(this.postApi);
  }
}
