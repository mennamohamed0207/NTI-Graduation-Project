import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';

@Injectable({
  providedIn: 'root'

})
export class ExperienceService {

  getExperienceUrl = 'http://127.0.0.1:3000/api/v1/exp/';
  getaboutUrl = 'http://127.0.0.1:3000/api/v1/about/';
  getProjectsUrl = 'http://127.0.0.1:3000/api/v1/project/';
  constructor(private http: HttpClient) {

  }
  getExperience(): Observable<any> {
    return this.http.get(this.getExperienceUrl);
  }
  getAbout(): Observable<any> {
    return this.http.get(this.getaboutUrl);
  }
  getProjects(): Observable<any> {
    return this.http.get(this.getProjectsUrl);
  }
}
