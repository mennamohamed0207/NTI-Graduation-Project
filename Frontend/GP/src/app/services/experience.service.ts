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
  getContactsUrl='http://127.0.0.1:3000/api/v1/contact/';
  getSkillsUrl='http://127.0.0.1:3000/api/v1/skills/';
  getEducationUrl='http://127.0.0.1:3000/api/v1/edu/';
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
  getContacts(): Observable<any> {
    return this.http.get(this.getContactsUrl);
  }
  getSkills(): Observable<any> {
    return this.http.get(this.getSkillsUrl);
  }
  getEducation(): Observable<any> {
    return this.http.get(this.getEducationUrl);
  }

  postExperienceUrl='http://127.0.0.1:3000/api/v1/exp';
  deleteExperienceUrl='http://127.0.0.1:3000/api/v1/exp/';

  addExperience(experienceForm: any): Observable<any> {
    return this.http.post(this.postExperienceUrl, experienceForm.value);
  }
  deleteExperience(id: any): Observable<any> {
    return this.http.delete(this.deleteExperienceUrl + id);
  }
}
